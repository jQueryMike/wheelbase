import { AtomicType, ScreenSizes, Size, SpacingConfig, SpacingType } from '@types';
import mappings from '../mappings.json'

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
    classIterator(mappings.spacing[atomicType]?.[top] || {}, t);
  }
  if (top === bottom) {
    classIterator(mappings.spacing[atomicType]?.[top] || {}, `${t}y`);
  } else {
    classIterator(mappings.spacing[atomicType]?.[top] || {}, `${t}t`);
    classIterator(mappings.spacing[atomicType]?.[bottom] || {}, `${t}b`);
  }
  if (left === right) {
    classIterator(mappings.spacing[atomicType]?.[left] || {}, `${t}x`);
  } else {
    classIterator(mappings.spacing[atomicType]?.[left] || {}, `${t}l`);
    classIterator(mappings.spacing[atomicType]?.[right] || {}, `${t}r`);
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
