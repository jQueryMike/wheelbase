import { AtomicType, Size, SpacingConfig, SpacingMap, SpacingType } from '@types';

/**
 * Example spacing map
 */
const SpacingMappings: SpacingMap = {
  atom: {
    padding: {
      none: '0',
      xsmall: '1',
      small: '2',
      medium: '3',
      large: '4',
      xlarge: '5',
    },
    margin: {
      none: '0',
      xsmall: '1',
      small: '2',
      medium: '3',
      large: '4',
      xlarge: '5',
    },
  },
  molecule: {
    padding: {
      none: '0',
      xsmall: '2',
      small: '3',
      medium: '4',
      large: '5',
      xlarge: '6',
    },
    margin: {
      none: '0',
      xsmall: '2',
      small: '3',
      medium: '4',
      large: '5',
      xlarge: '6',
    },
  },
  organism: {
    padding: {
      none: '0',
      xsmall: '3',
      small: '4',
      medium: '5',
      large: '6',
      xlarge: '7',
    },
    margin: {
      none: '0',
      xsmall: '3',
      small: '4',
      medium: '5',
      large: '6',
      xlarge: '7',
    },
  },
};

/**
 * @description Mapping function to map data to tailwind classes
 * @param atomicType {AtomicType} type of component
 * @param spacingType {SpacingType} type of spacing
 * @param size {Size} Size values
 * @returns Tailwind classes
 *
 * @example
 * ```
 * MappingFunction('atom', 'padding', { top: 'sm', bottom: 'md', left: 'lg', right: 'lg' })
 * // "pt-2 pb-3 px-4"
 * ```
 */
const MappingFunction = (atomicType: AtomicType, spacingType: SpacingType, { top, bottom, left, right }: Size) => {
  const t = spacingType[0];
  if (new Set([top, bottom, left, right]).size === 1) return `${t}-${SpacingMappings[atomicType].margin?.[top]}`;
  let output = ' ';
  if (top === bottom) {
    output += `${t}y-${SpacingMappings[atomicType].margin?.[top]} `;
  } else {
    output += `${t}t-${SpacingMappings[atomicType].margin?.[top]} ${t}b-${SpacingMappings[atomicType].margin?.[bottom]} `;
  }
  if (left === right) {
    output += `${t}x-${SpacingMappings[atomicType].margin?.[left]} `;
  } else {
    output += `${t}l-${SpacingMappings[atomicType].margin?.[left]} ${t}r-${SpacingMappings[atomicType].margin?.[right]} `;
  }
  return output.trim();
};

/**
 * @description Get spacing for an specified type
 * @param spacing {Spacing} spacing values
 * @param atomicType {AtomicType} type of component
 * @returns Tailwind classes for all spacing types
 * ```
 * @example getSpacing({ margin: { top: 'sm', bottom: 'md', left: 'lg', right: 'lg' }, padding: { top: 'sm', bottom: 'md', left: 'lg', right: 'lg' }}, 'atom')
 * // "mt-2 mb-3 mx-4 pt-2 pb-3 px-4"
 * ```
 */
export function getSpacing(spacing?: SpacingConfig, atomicType?: AtomicType): string {
  if (!spacing || !atomicType) return '';
  let output = '';
  output =
    spacing &&
    Object.keys(spacing)
      .reduce((prev, curr) => {
        const key = curr as SpacingType;
        prev.push(MappingFunction(atomicType, key, spacing[key]));
        return prev;
      }, [] as string[])
      .join(' ');
  return output;
}
