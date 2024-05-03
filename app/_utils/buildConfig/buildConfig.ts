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
    // deepcode ignore DeleteOfNonProperty: <please specify a reason of ignoring this>
    delete b?.content?.items;
  }
  // TODO: Replace this with a better solution
  const styling = {
    background: {
      backgroundColor: b?.appearance?.backgroundColor || block?.appearance?.backgroundColor,
      backgroundGradientColor: b?.appearance?.backgroundGradientColor || block?.appearance?.backgroundGradientColor,
      gradientDirection: b?.appearance?.gradientDirection || block?.appearance?.gradientDirection,
    },
    spacing: {
      ...block?.appearance?.spacing,
      ...b?.appearance?.spacing,
    },
    typography: {
      fontColor: b?.appearance?.color,
      fontSize: b?.appearance?.size,
      fontWeight: b?.appearance?.fontWeight,
      lineHeight: b?.appearance?.lineHeight,
      letterSpacing: b?.appearance?.letterSpacing,
    },
    border: {
      ...(b?.appearance?.border || block?.appearance?.border || {}),
    },
    layout: {
      columns: b?.appearance?.columns,
      columnGap: b?.appearance?.columnGap,
    },
  };
  const config: any = {
    id,
    name: key,
    content: {
      ...block?.content,
      ...b?.content,
    },
    // TODO: Review whether we will still need this after all the styling utility work
    appearance: {
      ...block?.appearance,
      ...b?.appearance,
    },
    styling,
    settings: { ...block?.settings, ...b?.settings },
  };
  const output: any = BuilderMap.has(name) ? BuilderMap.get(name)?.(config) : builder(config);

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
        Object.entries(subComps).map(([k, value]: any) => {
          const s = {
            background: {
              backgroundColor: value?.appearance?.backgroundColor,
              backgroundGradientColor: value?.appearance?.backgroundGradientColor,
              gradientDirection: value?.appearance?.gradientDirection,
            },
            spacing: {
              ...value?.appearance?.spacing,
            },
            typography: {
              fontColor: value?.appearance?.color,
              fontSize: value?.appearance?.size,
              fontWeight: value?.appearance?.fontWeight,
              lineHeight: value?.appearance?.lineHeight,
              letterSpacing: value?.appearance?.letterSpacing,
            },
            border: {
              ...(value?.appearance?.border || {}),
            },
            layout: {
              columns: value?.appearance?.columns,
              columnGap: value?.appearance?.columnGap,
            },
          };
          value.styling = s;
          return [k, BuilderMap.has(getName(k)) ? BuilderMap.get(getName(k))?.(value) : builder(value)];
        }),
      )
    : {};

  return {
    ...output,
    ...scs,
  };
}

export default buildConfig;
