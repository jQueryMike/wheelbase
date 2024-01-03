import { capitalise, getKeys, getName } from "@utils";

function normaliseConfig(config: any, id: string, key: string) {
  const { block: baseBlock, [key]: b, ...rest } = config;
  let items;
  if (b?.content?.items?.items) {
    items = b?.content?.items?.items.map(
      ({ content: { contentType, id: iId, properties } }: any) =>
        normaliseConfig(buildConfig(properties), iId, getName(contentType))
    );
    delete b?.content?.items;
  }
  const block = {
    id,
    name: capitalise(key),
    content: {
      ...baseBlock?.content,
      ...b?.content,
    },
    appearance: {
      ...baseBlock?.appearance,
      ...b?.appearance,
    },
    settings: {
      ...baseBlock?.settings,
      ...b?.settings,
    },
    overrides: {
      ...baseBlock?.overrides,
      ...b?.overrides,
    },
  };
  block.content.items = items;
  return { [key]: block, ...rest };
}

function buildProperties(data?: { [key: string]: any }) {
  if (!data || Object.keys(data).length < 1) return null;
  Object.entries(data)
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
}

function buildConfig(data?: { [key: string]: any }) {
  const properties = buildProperties(data);
}

export default buildConfig;
