import { AtomicType } from '@types';
import { getSpacing } from './spacing/getSpacing';
import { getFontSize } from './typography/getFontSize';
import { getFontWeight } from './typography/getFontWeight';

/**
 * @description Build component classes
 * @param component Component name
 * @param variant Variant name
 * @param overrides Component overrides
 * @returns Component classes
 */
export default function buildStyling({ spacing, fontSize, textType, fontWeight }: any, atomicType: AtomicType) {
  const classes: Array<string> = [];
  classes.push(getSpacing(spacing, atomicType));
  classes.push(getFontWeight(fontWeight));
  classes.push(getFontSize(fontSize, textType));
  return classes.join(' ');
}
