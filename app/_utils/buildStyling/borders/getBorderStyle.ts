import { BorderStyleMap, BorderStyleOptions } from '@types';

/**
 * Grid Columns map
 */
const borderStyleMappings: BorderStyleMap = {
  none: 'border-none',
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
  double: 'border-double',
};

/**
 * Return tailwind class for border Style
 * @param {any} borderStyle:BorderStyleOption
 * @returns {string}
 */

export function getBorderStyle(borderStyle: BorderStyleOptions = 'none'): string {
  return borderStyleMappings[borderStyle] || '';
}
