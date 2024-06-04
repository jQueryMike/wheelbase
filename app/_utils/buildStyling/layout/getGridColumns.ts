import { GridColumnOptions } from '@types';
import mappings from '../mappings.json';

/**
 * @description Get grid cols classes for a specified column number
 * @param columns {GridColumnOptions} grid column values
 * @returns Tailwind classes for all text types
 * ```
 * @example getGridColumns(2)
 *  "grid-cols-1 md:grid-cols-2"
 * ```
 */
export function getGridColumns(columns: GridColumnOptions = 4): string {
  return Object.entries(mappings.gridColumn[columns] || {})
    .map(([key, value]) => (key === 'sm' ? `${value}` : `${key}:${value}`), [])
    .join(' ');
}
