import { BorderWidthMap, BorderWidthOptions } from '@types';

/**
 * Grid Columns map
 */
const borderWidthMappings: BorderWidthMap = {
  none: 'border-0',
  thin: 'border-1',
  regular: 'border-2',
  bold: 'border-4',
};

/**
 * Return tailwind class for border colour
 * @param {any} borderWidth:BorderWidthOption
 * @returns {string}
 */

export function getBorderWidth(borderWidth: BorderWidthOptions = 'none'): string {
  return borderWidthMappings[borderWidth] || '';
}
