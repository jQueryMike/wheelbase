import { BlockConfig } from '@types';
import { capitalise } from '@utils/capitalise';
import { getKeys } from '@utils/getKeys';
import { getName } from '@utils/getName';
import Block from 'lib/interfaces/Block';
import { v4 as uuidv4 } from 'uuid';

import { DefaultImage, ImageProps } from '@components';

/**
 *
 * @param data
 * @returns
 */
function buildProperties(data?: { [key: string]: any }) {
  if (!data || Object.keys(data).length < 1) return null;
  const properties = Object.entries(data)
    .map(([key, value]) => [getKeys(key), value])
    .reduce((prev, [[tab, comp, prop], value]) => {
      if (!prev[comp]) {
        prev[comp] = {
          [tab]: {
            [prop]: value,
          },
        };
      }
      if (!prev[comp]?.[tab]) {
        prev[comp][tab] = {
          [prop]: value,
        };
      }
      if (!prev[comp]?.[tab]?.[prop]) {
        prev[comp][tab][prop] = value;
      }
      return prev;
    }, {} as any);
  return properties;
}

/**
 * Headings builder
 * @param param0 Headings composition as a union of heading and subheading compositions
 * @param headingTheme Heading theme from the global theme
 * @returns Headings block
 */
function buildHeadings({ heading, subheading }: any, id: string) {
  const headings: Block = {
    id,
    name: 'Headings',
    heading: {
      ...heading?.content,
      ...heading?.appearance,
      ...heading?.settings,
    },
    subheading: {
      ...subheading?.content,
      ...subheading?.appearance,
    },
  };
  return headings;
}

/**
 * Image builder
 * @param config Image composition
 * @param imageTheme Image theme from the global theme
 * @param globalConfig Global config object (unused)
 * @returns Image block
 */
function buildImage(config: any) {
  const {
    content: { image: imageData, altText },
    appearance,
    settings,
  } = config;
  const { id, name, url, alternativeText, width, height } = imageData?.[0] || DefaultImage;
  const image: Block & ImageProps = {
    id,
    name: 'Image',
    ...(settings.loading ? settings : { ...settings, loading: 'lazy' }),
    src: `${process.env.MEDIA_URL}${url}`,
    alt: altText || alternativeText || name,
    width,
    height,
    fill: appearance.fill || !width || !height,
  };
  return image;
}

/**
 * Build configuration object
 * @param param0 Block properties
 * @returns Block config
 */
function buildConfig({ contentType, id, properties }: any) {
  console.log(contentType);
  const props = buildProperties(properties);
  const name = getName(contentType);
  const key = capitalise(name);
  const { block, [name]: b, heading, subheading, contentArea, ...subComps } = props ?? {};
  let items;
  if (b?.content?.items?.items) {
    items = b?.content?.items?.items.map((item: any) => buildConfig(item.content));
    delete b?.content?.items;
  }
  const output: BlockConfig = {
    id,
    name: capitalise(key),
    content: {
      ...block?.content,
      ...b?.content,
    },
    appearance: {
      ...block?.appearance,
      ...b?.appearance,
    },
    settings: {
      ...block?.settings,
      ...b?.settings,
    },
    overrides: {
      ...block?.overrides,
      ...b?.overrides,
    },
  };
  if (heading || subheading) {
    output.headings = buildHeadings({ heading, subheading }, uuidv4());
  }

  output.content.items = items;
  if (contentArea) {
    output.contentArea = contentArea.content?.content?.items?.map(({ content }: any) => buildConfig(content)) || [];
  }
  return {
    ...output,
    ...subComps,
  };
}

export default buildConfig;
