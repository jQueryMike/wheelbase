import { HeadingsProps } from '@components/blocks/Headings';
import { HeroProps } from '@components/blocks/Hero/Hero.types';
import Block from '@interfaces/Block';
import { UmbracoBlockGridItem } from '@interfaces/Umbraco';
import { BaseComposition, HeadingComposition, SubheadingComposition } from 'lib/types';

import { capitalise } from '@utilities';

import buildBlockClasses from './buildBlockClasses';

const BuilderMap = new Map<string, (...args: any) => unknown>();

type Property<T extends string> =
  T extends `${infer X extends string}_${infer Y extends string}_${infer Z extends string}` ? [X, Y, Z] : never;

type HeadingsComposition = {
  heading: HeadingComposition;
  subheading: SubheadingComposition;
};

/**
 * Get subkeys from long form key
 * @example getKeys('tabName_blockName_property') => ['tabName','blockName','property']
 * @param key Long form key
 * @returns A tuple of nested keys
 */
function getKeys<T extends string>(key: T): Property<T> {
  return key.split('_') as Property<T>;
}

/**
 * Generate configuration object for a content block from api response
 * @param data Raw api response json
 * @returns Standardised config object
 */
function generateConfiguration(data: { [K: string]: any }) {
  const output = Object.entries(data)
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
  return output;
}

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

function buildImage(config: BaseImageComposition) {
  // console.log('ImageBuilder', config);
  return null;
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
    if (BuilderMap.has(name)) {
      hero[name] = BuilderMap.get(name)?.(comp);
    }
  });
  console.log(hero);
  return hero;
}

BuilderMap.set('hero', buildHero);

function buildContentArea(config: BaseComposition) {
  // console.log('ContentAreaBuilder', config);
  return null;
}

BuilderMap.set('contentArea', buildContentArea);

/**
 * Sanitise name of block
 * @param name Possibly incorrectly formatted name
 * @returns lowercase name without trailing numbers
 */
function getName(name: string) {
  return name.replace(/\d+$/, '').toLowerCase();
}

/**
 *
 * @param name
 * @param block
 * @param subComps
 * @returns
 */
function builder(name: string, block: BaseComposition, subComps?: [string, any][]) {
  const key = getName(name);
  if (!BuilderMap.has(key)) {
    return null;
  }
  return BuilderMap.get(key)?.(block, subComps);
}

/**
 * Build content block from api data
 * @param contentType Type of content block
 * @param config content block composition config
 * @param globalTheme Global theme object
 * @param globalConfig Global config object
 * @returns
 */
async function buildContent(contentType: string, id: string, config: any, globalTheme: any, globalConfig: any) {
  /**
   * Get the global theme object for a given block type
   * @param contentType Type of the content block
   * @returns global theme object
   */
  function getGlobalBlockTheme() {
    switch (contentType) {
      case 'hero1':
        return globalTheme.heroTheme;
      case 'openingTimes':
        return globalTheme.openingTimesTheme;
      default:
        return null;
    }
  }

  // console.log('buildContent', contentType, JSON.stringify(config));
  const classes = buildBlockClasses({
    name: capitalise(getName(contentType)),
    location: 'blocks',
    globalBlockTheme: getGlobalBlockTheme(),
    instanceVariant: '1',
    instanceSettings: {},
  });

  // console.log(JSON.stringify(Object.entries(config)));
  const { block, heading, subheading, ...subComps } = config;
  return builder(contentType, block, [['headings', { heading, subheading }], ...Object.entries(subComps)]);

  return null;
}

const buildPageContent = async (items: UmbracoBlockGridItem[], globalTheme: any, globalConfig: any) => {
  if (!items || items.length < 1) return [];

  const pageContent: any[] = items.map(({ content: { contentType, id, properties } }) =>
    buildContent(contentType, id, generateConfiguration(properties), globalTheme, globalConfig),
  );

  const output = await Promise.all(pageContent);
  return output;
};

export default buildPageContent;
