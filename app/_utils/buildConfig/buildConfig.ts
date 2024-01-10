import { BlockConfig } from '@types';
import { capitalise } from '@utils/capitalise';
import { getKeys } from '@utils/getKeys';
import { getName } from '@utils/getName';

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

function buildConfig({ contentType, id, properties }: any) {
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
  output.content.items = items;
  if (contentArea) {
    output.contentArea = contentArea.content?.content?.items?.map(({ content }: any) => buildConfig(content)) || [];
  }
  return { [key]: output, ...subComps };
}

export default buildConfig;
