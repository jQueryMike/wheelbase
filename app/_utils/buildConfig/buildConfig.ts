/* eslint-disable no-nested-ternary */
import { capitalise } from '@utils/capitalise';
import { getKeys } from '@utils/getKeys';
import { getName } from '@utils/getName';

import { BuilderMap, builder } from './builders';
import { DefaultsMap } from './defaults';

/**
 * @description Override undefined or null data from umbraco with component defaults
 * @param data Data from umbraco api
 * @param defaultData Data from defaults map
 * @returns
 */
function handleDefaults<T extends Record<string, any> = {}>(data: T, defaultData?: Partial<T>): T {
  if (!defaultData) return data;
  return Object.fromEntries(
    Object.entries(data).map(([key, value]: [string, any]) => {
      const defaultVal = defaultData[key];
      if (value instanceof Object) {
        if (defaultVal) {
          return [key, handleDefaults(value, defaultVal)];
        }
        return [key, value];
      }
      return [key, value || defaultVal];
    }),
  ) as T;
}

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

function buildStyling(appearance: any) {
  if (!appearance) return {};
  return {
    background: {
      backgroundColor: appearance?.backgroundColor,
      backgroundGradientColor: appearance?.backgroundGradientColor,
      gradientDirection: appearance?.gradientDirection,
    },
    spacing: appearance.spacing,
    typography: {
      fontColor: appearance?.color,
      fontSize: appearance?.size,
      fontWeight: appearance?.fontWeight,
      lineHeight: appearance?.lineHeight,
      letterSpacing: appearance?.letterSpacing,
    },
    border: {
      ...(appearance?.border || {}),
    },
    layout: {
      columns: appearance?.columns,
      columnGap: appearance?.columnGap,
    },
  };
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

  const content = {
    ...block?.content,
    ...b?.content,
  };
  const defaultConfig = DefaultsMap.get([name].join(':'));
  const appearance = handleDefaults(
    {
      ...block?.appearance,
      ...b?.appearance,
    },
    defaultConfig?.appearance,
  );
  const settings = handleDefaults(
    {
      ...block?.settings,
      ...b?.settings,
    },
    defaultConfig?.settings,
  );
  const config: any = {
    id,
    name: key,
    content,
    appearance,
    settings,
    styling: buildStyling(appearance),
  };

  const output: any = BuilderMap.has(name) ? BuilderMap.get(name)?.(config) : builder(config);

  output.items = items;
  /**
   * If the content area exists, build all of the content area items
   */
  if (contentArea) {
    output.contentArea = contentArea.content?.content?.items?.map(({ content: c }: any) => buildConfig(c)) || [];
  }

  /**
   * Run subcomponents through the builder
   */
  const scs = subComps
    ? Object.fromEntries(
        Object.entries(subComps).map(([k, value]: any) => {
          value.styling = buildStyling(value?.appearance);
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
