import { FontWeightType } from '@types';

/**
 * @description Get font weight for an specified text type
 * @param fontWeight {FontWeightType} font weight values
 * @returns Tailwind classes for font weight
 * ```
 * @example getFontSize("Bold")
 * // "font-bold"
 * ```
 */
export function getFontWeight(fontWeight: FontWeightType): string {
  return `font-${fontWeight?.toLowerCase()}` || '';
}
