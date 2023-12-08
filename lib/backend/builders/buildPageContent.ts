import generateConfig from '@backend/generateConfig';
import { HeadingsProps } from '@components/blocks/Headings';
import Block from '@interfaces/Block';
import { UmbracoBlockGridItem } from '@interfaces/Umbraco';
import { HeadingsComposition } from 'lib/types';
import { v4 as uuidv4 } from 'uuid';

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
  // /**
  //  * Get the global theme object for a given block type
  //  * @param contentType Type of the content block
  //  * @returns global theme object
  //  */
  // function getGlobalBlockTheme() {
  //   switch (contentType) {
  //     case 'hero1':
  //       return globalTheme.heroTheme;
  //     case 'openingTimes':
  //       return globalTheme.openingTimesTheme;
  //     default:
  //       return null;
  //   }
  // }

  // console.log(JSON.stringify(Object.entries(config)));
  const name = capitalise(getName(contentType));
  const { block, heading, subheading, contentArea, ...subComps } = config;
  
  const root = {
    id,
    name,
    classes: buildBlockClasses({
      name,
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
    const key = getName(n);
    const builder = BuilderMap.get(key);
    if (!BuilderMap.has(key) || !builder) {
      console.warn(`No builder for you: ${key}`);
      return;
    }
    root[key] = builder(comp);
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
