import { GridColumnMap, GridColumnOptions } from '@types';

/**
 * Grid Columns map
 */
const gridColumnMappings: GridColumnMap = {
  1: {
    sm: 'grid-cols-1',
  },
  2: {
    sm: 'grid-cols-1',
    md: 'grid-cols-2',
  },
  3: {
    sm: 'grid-cols-1',
    md: 'grid-cols-2',
    lg: 'grid-cols-3',
  },
  4: {
    sm: 'grid-cols-1',
    md: 'grid-cols-2',
    lg: 'grid-cols-4',
  },
  5: {
    sm: 'grid-cols-1',
    md: 'grid-cols-3',
    lg: 'grid-cols-5',
  },
  6: {
    sm: 'grid-cols-1',
    md: 'grid-cols-3',
    lg: 'grid-cols-6',
  },
};

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
  return Object.entries(gridColumnMappings[columns] || {})
    .map(([key, value]) => (key === 'sm' ? `${value}` : `${key}:${value}`), [])
    .join(' ');
}
