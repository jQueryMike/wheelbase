import { BorderWidthOptions } from '@types';
import mappings from '../mappings.json'

/**
 * Return tailwind class for border colour
 * @param {any} borderWidth:BorderWidthOption
 * @returns {string}
 */
export function getBorderWidth(borderWidth: BorderWidthOptions = 'none'): string {
  return mappings.borderWidth[borderWidth] || '';
}
