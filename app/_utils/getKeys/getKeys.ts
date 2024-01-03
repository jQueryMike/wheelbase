import { Property } from "@types";

/**
 * Get subkeys from long form key
 * @example getKeys('tabName_blockName_property') => ['tabName','blockName','property']
 * @param key Long form key
 * @returns A tuple of nested keys
 */
function getKeys<T extends string>(key: T): Property<T> {
  return key.split("_").filter((x) => x) as Property<T>;
}

export default getKeys;
