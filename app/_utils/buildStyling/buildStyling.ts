import { Styling } from '@components/types';
import { CSSProperties } from 'react';

import { getBackground } from './background/getBackground';
import { getBorderColor } from './borders/getBorderColor';
import { getBorderRadius } from './borders/getBorderRadius';
import { getBorderStyle } from './borders/getBorderStyle';
import { getBorderWidth } from './borders/getBorderWidth';
import { getColour } from './colours/getColour';
import { getGridColumns } from './layout/getGridColumns';
import { getGridGap } from './layout/getGridGap';
import { getSpacing } from './spacing/getSpacing';
import { getFontSize } from './typography/getFontSize';
import { getFontWeight } from './typography/getFontWeight';
import { getLetterSpacing } from './typography/getLetterSpacing';
import { getLineHeight } from './typography/getLineHeight';

// function getBorder(border?: Border): [string, CSSProperties] {
//   if (!border) return ['', {}];
//   const { borderColor, borderRadius, borderWidth, borderStyle } = border;
//   const classes: Array<string> = [];
//   return [
//     classes.join(' '),
//     {
//       [`border-[${borderColor}]`]: borderColor,
//       [`rounded-[${borderRadius}]`]: borderRadius,
//       [`border-[${borderWidth}]`]: borderWidth,
//       [`border-${borderStyle}`]: borderStyle,
//     } as CSSProperties,
//   ];
// }

/**
 * @description Build component classes
 * @param component Component name
 * @param variant Variant name
 * @param overrides Component overrides
 * @returns Component classes
 */
export default function buildStyling(
  { spacing, typography, border, background, layout }: Styling = {},
  { atomicType, ...options }: any = {},
): [string, CSSProperties] {
  const [backgroundClasses, backgroundVars] = getBackground(background);
  // const [borderClasses, borderVars] = getBorder(border);
  const classes: Array<string> = [backgroundClasses];
  if (layout) {
    classes.push(getGridGap(layout?.columnGap || 4));
    classes.push(getGridColumns(layout?.columns || 4));
  }
  if (spacing) {
    classes.push(getSpacing(spacing, atomicType));
  }
  if (typography) {
    classes.push(getFontWeight(typography?.fontWeight || 'Medium'));
    classes.push(getFontSize(typography?.fontSize || 'Medium', options?.textType));
    if (typography.fontColor) classes.push(getColour(typography.fontColor, 'text'));
    classes.push(getLineHeight(typography?.lineHeight));
    classes.push(getLetterSpacing(typography?.letterSpacing));
  }
  if (border) {
    classes.push(getBorderStyle(border?.borderStyle || 'none'));
    classes.push(getBorderWidth(border?.borderWidth || 'none'));
    classes.push(getBorderColor(border?.borderColor));
    classes.push(getBorderRadius(border?.borderRadius || 'none'));
  }
  return [
    classes.join(' '),
    {
      ...backgroundVars,
    } as CSSProperties,
  ];
}
