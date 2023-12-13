type Property<T extends string> =
  T extends `${infer X extends string}_${infer Y extends string}_${infer Z extends string}` ? [X, Y, Z] : never;

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
function generateConfig(data: { [K: string]: any }) {
  if (!data) return null;
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

export default generateConfig;
