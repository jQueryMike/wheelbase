import { GridGapOptions } from '@types';
import mappings from '../mappings.json'

/**
 * @description Get grid gap classes for a specified column gap
 * @param columns {GridGapOptions} grid gap values
 * @returns Tailwind classes for a grid gap value
 * ```
 * @example getGridGap(2)
 * // "gap-2"
 * ```
 */
export function getGridGap(gap: GridGapOptions = 4): string {
  return Object.entries(mappings.gridGap[gap] || {})
    .map(([key, value]) => (key === 'sm' ? `${value}` : `${key}:${value}`), [])
    .join(' ');
}
