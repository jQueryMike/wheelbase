import { AtomicType, ScreenSizes, Size, SpacingConfig, SpacingMap, SpacingType } from '@types';

/**
 * Spacing map
 */
const SpacingMappings: SpacingMap = {
  atom: {
    none: { sm: '0' },
    xsmall: { sm: '0.5', md: '1' },
    small: { sm: '1', md: '1.5', lg: '2' },
    medium: { sm: '2', md: '3', lg: '4' },
    large: { sm: '4', md: '5', lg: '6' },
    xlarge: { sm: '6', md: '7', lg: '8' },
  },
  molecule: {
    none: { sm: '0' },
    xsmall: { sm: '1', md: '1.5', lg: '2' },
    small: { sm: '2', md: '3', lg: '4' },
    medium: { sm: '3', md: '4', lg: '6' },
    large: { sm: '4', md: '6', lg: '8' },
    xlarge: { sm: '6', md: '10', lg: '16' },
  },
  organism: {
    none: { sm: '0' },
    xsmall: { sm: '2', md: '3', lg: '4' },
    small: { sm: '4', md: '6', lg: '8' },
    medium: { sm: '8', md: '10', lg: '12' },
    large: { sm: '10', md: '12', lg: '16' },
    xlarge: { sm: '12', md: '16', lg: '20' },
  },
};

/**
 * @description Mapping function to map data to tailwind classes
 * @param atomicType {AtomicType} type of component
 * @param spacingType {SpacingType} type of spacing
 * @param size {Size} Size values
 * @returns Array of Tailwind classes
 *
 * @example
 * ```
 * MappingFunction('atom', 'padding', { top: 'sm', bottom: 'md', left: 'lg', right: 'lg' })
 * ['pt-2', 'pb-3', 'px-4']
 * ```
 */

const MappingFunction = (atomicType: AtomicType, spacingType: SpacingType, { top, bottom, left, right }: Size) => {
  const t = spacingType[0];
  const classes: Array<string> = [];

  const classIterator = (items: { [key4 in ScreenSizes]?: string }, prefix: string) => {
    Object.entries(items || {}).map(
      ([key, value]) => (key === 'sm' ? classes.push(`${prefix}-${value}`) : classes.push(`${key}:${prefix}-${value}`)),
      [],
    );
  };

  if (new Set([top, bottom, left, right]).size === 1) {
    classIterator(SpacingMappings[atomicType]?.[top] || {}, t);
  }
  if (top === bottom) {
    classIterator(SpacingMappings[atomicType]?.[top] || {}, `${t}y`);
  } else {
    classIterator(SpacingMappings[atomicType]?.[top] || {}, `${t}t`);
    classIterator(SpacingMappings[atomicType]?.[bottom] || {}, `${t}b`);
  }
  if (left === right) {
    classIterator(SpacingMappings[atomicType]?.[left] || {}, `${t}x`);
  } else {
    classIterator(SpacingMappings[atomicType]?.[left] || {}, `${t}l`);
    classIterator(SpacingMappings[atomicType]?.[right] || {}, `${t}r`);
  }
  return classes;
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
        prev = [...prev, ...MappingFunction(atomicType, key, spacing[key])];
        return prev;
      }, [] as string[])
      .join(' ');
  return output;
}
