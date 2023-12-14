import generateConfig from '@backend/generateConfig';
import { UmbracoBlockGridItem } from '@interfaces/Umbraco';
import { HeadingsComposition } from 'lib/types';
import { v4 as uuidv4 } from 'uuid';

import { capitalise } from '@utilities';

import buildClasses from './buildClasses';
import BuilderMap, { getName } from './builders';

async function buildItems(items: any[], globalTheme: any, globalConfig: any): Promise<any[] | null> {
  if (!items || items.length < 1) return null;
  return [];
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
  const name = getName(contentType);
  const key = capitalise(name);
  const { block: baseBlock, [name]: b, heading, subheading, contentArea, ...subComps } = config;
  const { content, appearance, settings, overrides } = b ?? {
    content: {},
    appearance: {},
    settings: {},
    overrides: {},
  };

  let items;
  if (content?.items?.items && content?.items?.items.length > 0) {
    items =
      (await Promise.all(
        content?.items?.items?.map(({ content: { contentType: iCT, id: iId, properties } }: any) =>
          buildContent(iCT, iId, generateConfig(properties), globalTheme, globalConfig),
        ),
      )) ?? [];
    delete content.items;
  }
  const block = {
    id,
    name: key,
    content: {
      ...baseBlock?.content,
      ...content,
    },
    appearance: {
      ...baseBlock?.appearance,
      ...appearance,
    },
    settings: {
      ...baseBlock?.settings,
      ...settings,
    },
    overrides: {
      ...baseBlock?.overrides,
      ...overrides,
    },
  };
  if (items && items?.length > 0) block.content.items = items;

  const root = BuilderMap.get(key)?.(block, id, globalTheme[`${name}Theme`]) ?? {
    id,
    name: key,
    classes: buildClasses(
      key,
      'blocks',
      '1',
      block.appearance,
      block.overrides,
      globalTheme[`${name}Theme`],
      [],
      'classes',
      ['ReviewItem', 'FeatureItem'].includes(name) ? true : undefined,
    ),
    ...(block.content ?? {}),
    ...(block.settings ?? {}),
  };

  const children = Object.entries(subComps);
  if (heading || subheading) children.push(['Headings', { heading, subheading }] as [string, HeadingsComposition]);
  children.forEach(([n, comp]) => {
    const k = getName(n);
    const mapKey = capitalise(k);
    const builder = BuilderMap.get(mapKey);
    if (!BuilderMap.has(mapKey) || !builder) {
      console.warn(`No builder for you: ${k}`);
      return;
    }
    root[n] = builder(comp, uuidv4(), globalTheme[`${k}Theme`], globalConfig);
  });

  if (contentArea) {
    // TODO: root.contentArea = await builsdContent();
    const contentItems = await Promise.all(
      contentArea.content?.content?.items?.map(({ content: { contentType: ct, id: cId, properties } }: any) => {
        const { [ct]: bb, ...rest } = generateConfig(properties);
        return buildContent(ct, cId, { block: bb, ...rest }, globalTheme, globalConfig);
      }) || [],
    );
    root.contentArea = contentItems;
  }
  return root;
}

/**
 *
 * @param items
 * @param globalTheme
 * @param globalConfig
 * @returns
 */
const buildPageContent = async (items: UmbracoBlockGridItem[], globalTheme: any, globalConfig: any) => {
  // console.log('buildPageContent', { items });
  if (!items || items.length < 1) return [];

  const pageContent: any[] = items.map(({ content: { contentType, id, properties } }) =>
    buildContent(contentType, id, generateConfig(properties), globalTheme, globalConfig),
  );

  const output = await Promise.all(pageContent);
  return output;
};

export default buildPageContent;
