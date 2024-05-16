import { BorderStyleOptions } from '@types';
import mappings from '../mappings.json'

/**
 * Return tailwind class for border Style
 * @param {any} borderStyle:BorderStyleOption
 * @returns {string}
 */
export function getBorderStyle(borderStyle: BorderStyleOptions = 'none'): string {
  return mappings.borderStyle[borderStyle] || '';
}
