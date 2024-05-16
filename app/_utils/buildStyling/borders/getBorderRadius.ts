import { BorderRadiusOptions } from '@types';
import mappings from '../mappings.json'

/**
 * Return tailwind class for border colour
 * @param {any} borderRadius:BorderRadiusOption
 * @returns {string}
 */
export function getBorderRadius(borderRadius: BorderRadiusOptions = 'none'): string {
  return mappings.borderRadius[borderRadius] || '';
}
