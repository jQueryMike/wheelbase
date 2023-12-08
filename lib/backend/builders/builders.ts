import { HeadingsProps } from '@components/blocks/Headings';
import { HeroProps } from '@components/blocks/Hero/Hero.types';
import { ImageProps } from '@components/blocks/Image/Image.types';
import { TextProps } from '@components/blocks/Text/Text';
import Block from '@interfaces/Block';
import { BaseComposition, HeadingsComposition, ImageComposition } from 'lib/types';

import buildBlockClasses from './buildBlockClasses';

/**
 * Sanitise name of block
 * @param name Possibly incorrectly formatted name
 * @returns lowercase name without trailing numbers
 */
export function getName(name: string) {
  return name.replace(/\d+$/, '').toLowerCase();
}

/**
 * Map of builders for each block type
 */
const BuilderMap = new Map<string, (...args: any) => unknown>();

/**
 * Headings builder
 * @param param0 Headings composition as a union of heading and subheading compositions
 * @param headingTheme Heading theme from the global theme
 * @param globalConfig Global config object (unused)
 * @returns Headings block
 */
function buildHeadings({ heading, subheading }: HeadingsComposition, headingTheme: any, globalConfig: any) {
  const headings: Block & HeadingsProps = {
    id: 'headings',
    name: 'Headings',
    classes: buildBlockClasses({
      name: 'Headings',
      location: 'blocks',
      globalBlockTheme: headingTheme,
      instanceVariant: '1',
      instanceSettings: {},
    }),
    // TODO: Build classes with theme < variant < appearance < overrides
    heading: {
      ...heading.content,
      // ...heading.appearance,
      ...heading.settings,
      // ...heading.overrides,
    },
    subheading: {
      ...subheading.content,
      // ...subheading.appearance,
      // ...subheading.overrides,
    },
  };
  return headings;
}

BuilderMap.set('headings', buildHeadings);

/**
 * Image builder
 * @param config Image composition
 * @param imageTheme Image theme from the global theme
 * @param globalConfig Global config object (unused)
 * @returns Image block
 */
function buildImage(config: ImageComposition, imageTheme: any, globalConfig: any) {
  const {
    content: { image: imageData, altText },
    settings,
  } = config;
  const { id, name, url, alternativeText, width, height } = imageData[0];
  const image: Block & ImageProps = {
    id,
    name: 'Image',
    classes: buildBlockClasses({
      name: 'Image',
      location: 'blocks',
      globalBlockTheme: imageTheme,
      instanceVariant: '1',
      instanceSettings: {},
    }),
    ...settings,
    src: `${process.env.MEDIA_URL}${url}`,
    alt: altText || alternativeText || name,
    width,
    height,
  };
  return image;
}

BuilderMap.set('image', buildImage);

/**
 * Hero builder
 * @param config Hero composition
 * @param heroTheme Hero theme from the global theme
 * @param globalConfig Global config object (unused)
 * @returns Hero block
 */
function buildHero(config: BaseComposition, heroTheme: any, globalConfig: any) {
  const hero: Block & HeroProps = {
    id: 'hero',
    name: 'Hero',
    // TODO: Build classes with theme < variant < appearance < overrides
    classes: buildBlockClasses({
      name: 'Hero',
      location: 'blocks',
      globalBlockTheme: heroTheme,
      instanceVariant: '1',
      instanceSettings: {},
    }),
    ...(config.content ?? {}),
    ...(config.settings ?? {}),
  };
  return hero;
}

BuilderMap.set('hero', buildHero);

/**
 * Text builder
 * @param config Text composition
 * @param textTheme Text theme from the global theme
 * @param globalConfig Global config object (unused)
 * @returns Text block
 */
function buildText(config: BaseComposition, textTheme: any, globalConfig: any) {
  const text: Block & TextProps = {
    id: 'text',
    name: 'Text',
    classes: buildBlockClasses({
      name: 'Text',
      location: 'blocks',
      globalBlockTheme: textTheme,
      instanceVariant: '1',
      instanceSettings: {},
    }),
    text: config.content?.text.markup,
    ...config.settings,
  };
  return text;
}

BuilderMap.set('text', buildText);

export default BuilderMap;
