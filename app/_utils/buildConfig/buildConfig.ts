/* eslint-disable no-nested-ternary */
import { capitalise } from '@utils/capitalise';
import { getKeys } from '@utils/getKeys';
import { getName } from '@utils/getName';

import { BuilderMap, builder } from './builders';

/**
 * @description Build properties object
 * @param data Page data
 * @returns Properties object
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
 * @description Build configuration object
 * @param param0 Block properties
 * @returns Block config
 */
function buildConfig({ contentType, id, properties }: any) {
  const props = buildProperties(properties);
  const name = getName(contentType);
  const key = capitalise(name);
  const { block, [name]: b, contentArea, ...subComps } = props ?? {};
  let items;
  if (b?.content?.items?.items) {
    items = b?.content?.items?.items.map((item: any) => buildConfig(item.content));
    delete b?.content?.items;
  }
  const config: any = {
    id,
    name: key,
    content: {
      ...block?.content,
      ...b?.content,
    },
    appearance: {
      ...block?.appearance,
      ...b?.appearance,
    },
    settings: { ...block?.settings, ...b?.settings },
  };
  const output: any = BuilderMap.has(name) ? BuilderMap.get(name)?.(config) : builder(config);
  /**
   * TODO: This will probably need to be refactored to support separate headings
   */
  // if (heading || heading1) {
  //   output.headings = buildHeadings({ heading, subheading: heading1 }, uuidv4());
  // }

  output.items = items;
  /**
   * If the content area exists, build all of the content area items
   */
  if (contentArea) {
    output.contentArea = contentArea.content?.content?.items?.map(({ content }: any) => buildConfig(content)) || [];
  }

  /**
   * Run subcomponents through the builder
   */
  const scs = subComps
    ? Object.fromEntries(
        Object.entries(subComps).map(([k, value]) => [
          k,
          BuilderMap.has(getName(k)) ? BuilderMap.get(getName(k))?.(value) : builder(value),
        ]),
      )
    : {};

  return {
    ...output,
    ...scs,
  };
}

export default buildConfig;
