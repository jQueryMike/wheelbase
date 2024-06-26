import { Color } from '@types';

import { getColour } from '../colours/getColour';

/**
 * Return tailwind class for border colour
 * @param {any} color:Color
 * @returns {any}
 */

export function getBorderColor(color?: Color): string {
  if (!color) return '';
  return getColour(color, 'border');
}
