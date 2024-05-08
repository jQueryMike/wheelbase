import { BorderRadiusMap, BorderRadiusOptions } from '@types';

/**
 * Grid Columns map
 */
const borderRadiusMappings: BorderRadiusMap = {
  none: 'rounded-none',
  small: 'rounded-sm',
  medium: 'rounded-md',
  large: 'rounded-lg',
  'extra large': 'rounded-xl',
  full: 'rounded-full',
};

/**
 * Return tailwind class for border colour
 * @param {any} borderRadius:BorderRadiusOption
 * @returns {string}
 */

export function getBorderRadius(borderRadius: BorderRadiusOptions = 'none'): string {
  return borderRadiusMappings[borderRadius] || '';
}
