import { BorderStyleMap, BorderStyleOptions } from '@types';

/**
 * Grid Columns map
 */
const borderStyleMappings: BorderStyleMap = {
  none: 'rounded-none',
  solid: 'rounded-sm',
  dashed: 'rounded-md',
  dotted: 'rounded-lg',
  double: 'rounded-xl',
};

/**
 * Return tailwind class for border colour
 * @param {any} borderStyle:BorderRadiusOption
 * @returns {string}
 */

export function getBorderStyle(borderStyle: BorderStyleOptions = 'none'): string {
  return borderStyleMappings[borderStyle] || '';
}
