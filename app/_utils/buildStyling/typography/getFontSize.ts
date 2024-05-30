import { FontSizeOptions, TextType } from '@types';
import mappings from '../mappings.json';

/**
 * @description Get font sizes for an specified text type
 * @param size {FontSizeOptions} text size values
 * @param textType {TextType} type of text component
 * @returns Tailwind classes for all text types
 * ```
 * @example getFontSize("Extra Large", 'header')
 * // "md:text-[40px] lg:text-[46px] xl:text-[56px]"
 * ```
 */
export function getFontSize(size: FontSizeOptions = 'Medium', textType: TextType = 'text'): string {
  return Object.entries(mappings.fontSize[textType]?.[size] || {})
    .map(([key, value]) => `${key}:${value}`, [])
    .join(' ');
}
