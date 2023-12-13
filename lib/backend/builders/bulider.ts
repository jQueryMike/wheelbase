import { BaseComposition } from 'lib/types';

import BuilderMap, { getName } from './builders';

/**
 *
 * @param name
 * @param block
 * @param subComps
 * @returns
 */
function builder(name: string, block: BaseComposition, subComps?: [string, any][]) {
  const key = getName(name);
  if (!BuilderMap.has(key)) {
    return null;
  }
  return BuilderMap.get(key)?.(block, subComps);
}
export default builder;
