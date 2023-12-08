import generateConfig from '@backend/generateConfig';
import { UmbracoBlockGridItem } from '@interfaces/Umbraco';
import { HeadingsComposition } from 'lib/types';

import { capitalise } from '@utilities';

import buildBlockClasses from './buildBlockClasses';
import BuilderMap, { getName } from './builders';

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
  const { block, heading, subheading, contentArea, ...subComps } = config;

  const root = BuilderMap.get(name)?.(block, globalTheme[`${name}Theme`]) ?? {
    id,
    name: key,
    classes: buildBlockClasses({
      name: key,
      location: 'blocks',
      globalBlockTheme: null,
      instanceVariant: '1',
      instanceSettings: {},
    }),
    ...(block.content ?? {}),
    ...(block.settings ?? {}),
  };

  const children = Object.entries(subComps);
  if (heading || subheading) children.push(['headings', { heading, subheading }] as [string, HeadingsComposition]);
  children.forEach(([n, comp]) => {
    const k = getName(n);
    const builder = BuilderMap.get(k);
    if (!BuilderMap.has(k) || !builder) {
      console.warn(`No builder for you: ${k}`);
      return;
    }
    root[k] = builder(comp, globalTheme[`${k}Theme`], globalConfig);
  });

  // console.log(root);
  if (contentArea) {
    // TODO: root.contentArea = await builsdContent();
    const items = await Promise.all(
      contentArea.content.content.items.map(({ content: { contentType: ct, id: cId, properties } }: any) => {
        const { [ct]: b, ...rest } = generateConfig(properties);
        return buildContent(ct, cId, { block: b, ...rest }, globalTheme, globalConfig);
      }),
    );
    root.contentArea = items;
  }

  if (contentType === 'hero1') console.log('Built block', root);
  return root;
}

const buildPageContent = async (items: UmbracoBlockGridItem[], globalTheme: any, globalConfig: any) => {
  if (!items || items.length < 1) return [];

  const pageContent: any[] = items.map(({ content: { contentType, id, properties } }) =>
    buildContent(contentType, id, generateConfig(properties), globalTheme, globalConfig),
  );

  const output = await Promise.all(pageContent);
  return output;
};

export default buildPageContent;
