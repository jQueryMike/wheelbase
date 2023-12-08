import { HeadingsProps } from '@components/blocks/Headings';
import { HeroProps } from '@components/blocks/Hero/Hero.types';
import { ImageProps } from '@components/blocks/Image/Image.types';
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

const BuilderMap = new Map<string, (...args: any) => unknown>();

function buildHeadings({ heading, subheading }: HeadingsComposition) {
  const headings: Block & HeadingsProps = {
    id: 'headings',
    name: 'Headings',
    classes: buildBlockClasses({
      name: 'Headings',
      location: 'blocks',
      globalBlockTheme: null,
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
  // console.log(headings);
  return headings;
}

BuilderMap.set('headings', buildHeadings);

function buildImage(config: ImageComposition) {
  // console.log('ImageBuilder', config);
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
      globalBlockTheme: null,
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

function buildHero(config: BaseComposition, subComps?: [string, BaseComposition][]) {
  // console.log('HeroBuilder', config, subComps);
  const hero: Block & HeroProps = {
    id: 'hero',
    name: 'Hero',
    // TODO: Build classes with theme < variant < appearance < overrides
    classes: buildBlockClasses({
      name: 'Hero',
      location: 'blocks',
      globalBlockTheme: null,
      instanceVariant: '1',
      instanceSettings: {},
    }),
  };
  subComps?.forEach(([name, comp]) => {
    const key = getName(name);
    if (BuilderMap.has(key)) {
      hero[key] = BuilderMap.get(key)?.(comp);
    }
  });
  return hero;
}

BuilderMap.set('hero', buildHero);

function buildText(config: BaseComposition) {
  console.log('textBuilder', config);
  config.content?.content?.items.forEach((item: any, index: number) => {
    console.log(`${index} - ${item.contentType}`, item);
  });
  return null;
}

BuilderMap.set('text', buildText);

export default BuilderMap;
