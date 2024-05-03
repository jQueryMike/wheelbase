import { FontSizeMap, FontSizeOptions, TextType } from '@types';

/**
 * Font size map
 */
const fontSizeMappings: FontSizeMap = {
  heading: {
    'Extra Small': {
      md: 'text-base',
      lg: 'text-lg',
    },
    Small: {
      md: 'text-xl',
      lg: 'text-[22px]',
      xl: 'text-2xl',
    },
    Medium: {
      md: 'text-3xl',
      lg: 'text-[34px]',
      xl: 'text-4xl',
    },
    Large: {
      md: 'text-4xl',
      lg: 'text-[40px]',
      xl: 'text-[44px]',
    },
    'Extra Large': {
      md: 'text-[40px]',
      lg: 'text-[46px]',
      xl: 'text-[56px]',
    },
  },
  subheading: {
    'Extra Small': {
      md: 'text-sm',
      lg: 'text-base',
    },
    Small: {
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    Medium: {
      md: 'text-base',
      lg: 'text-xl',
      xl: 'text-2xl',
    },
    Large: {
      md: 'text-3xl',
      lg: 'text-[34px]',
      xl: 'text-4xl',
    },
    'Extra Large': {
      md: 'text-4xl',
      lg: 'text-[40px]',
      xl: 'text-[44px]',
    },
  },
  text: {
    'Extra Small': {
      md: 'text-sm',
      lg: 'text-base',
    },
    Small: {
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    Medium: {
      md: 'text-base',
      lg: 'text-xl',
      xl: 'text-2xl',
    },
    Large: {
      md: 'text-3xl',
      lg: 'text-[34px]',
      xl: 'text-4xl',
    },
    'Extra Large': {
      md: 'text-4xl',
      lg: 'text-[40px]',
      xl: 'text-[44px]',
    },
  },
};

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
  return Object.entries(fontSizeMappings[textType]?.[size] || {})
    .map(([key, value]) => `${key}:${value}`, [])
    .join(' ');
}
