import { Background, Border, Styling } from '@components/types';
import { CSSProperties } from 'react';

import { getSpacing } from './spacing/getSpacing';
import { getFontSize } from './typography/getFontSize';
import { getFontWeight } from './typography/getFontWeight';
import { getGridColumns } from './layout/getGridColumns';
import { getGridGap } from './layout/getGridGap';

const GradientDirectionMap = {
  'Left to Right': 'to-l',
  'Right to Left': 'to-r',
  'Top to Bottom': 'to-b',
  'Bottom to Top': 'to-t',
  'Top Left to Bottom Right': 'to-br',
  'Top Right to Bottom Left': 'to-bl',
  'Bottom Left to Top Right': 'to-tr',
  'Bottom Right to Top Left': 'to-tl',
};

function getBackground(background?: Background): [string, CSSProperties] {
  if (!background) return ['', {}];
  const { backgroundColor, backgroundGradientColor, gradientDirection } = background;
  const classes: Array<string> = [gradientDirection ? `bg-gradient-${GradientDirectionMap[gradientDirection]}` : ''];
  return [
    classes.join(' '),
    {
      [`bg-[${backgroundColor}]`]: backgroundColor,
      [`from-[${backgroundColor}]`]: backgroundColor && backgroundGradientColor,
      [`to-[${backgroundGradientColor}]`]: backgroundGradientColor,
    } as CSSProperties,
  ];
}

function getBorder(border?: Border): [string, CSSProperties] {
  if (!border) return ['', {}];
  const { borderColor, borderRadius, borderWidth, borderStyle } = border;
  const classes: Array<string> = [];
  return [
    classes.join(' '),
    {
      [`border-[${borderColor}]`]: borderColor,
      [`rounded-[${borderRadius}]`]: borderRadius,
      [`border-[${borderWidth}]`]: borderWidth,
      [`border-${borderStyle}`]: borderStyle,
    } as CSSProperties,
  ];
}

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
  const [borderClasses, borderVars] = getBorder(border);
  const classes: Array<string> = [backgroundClasses, borderClasses];
  if(layout) {
    classes.push(getGridGap(layout?.columnGap || 4));
    classes.push(getGridColumns(layout?.columns || 4));
  }  
  if(spacing) {
    classes.push(getSpacing(spacing, atomicType));
  }
  if(typography) {
    classes.push(getFontWeight(typography?.fontWeight || 'Medium'));
    classes.push(getFontSize(typography?.fontSize || 'Medium', options?.textType));
  }

  return [
    classes.join(' '),
    {
      ...backgroundVars,
      ...borderVars,
      // '--tw-gradient-from': backgroundColor?.hex,
      // '--tw-gradient-to': backgroundGradientColor?.hex,
      // '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to, --tw-gradient-from)',
      // '--body-alt': backgroundColor?.hex ? rgbString(hexToRgb(backgroundColor?.hex as `#${string}`)) : undefined,
      // '--tw-bg-opacity': (backgroundColor?.opacity ?? 100) / 100,
    } as CSSProperties,
  ];
}

/**
 * [`bg-gradient-${gradientDirection ? GradientDirectionMap[gradientDirection] : 'none'}`],
        {
          [`bg-[${backgroundColor?.hex}]`]: backgroundColor?.hex && !backgroundGradientColor,
          [`from-[${backgroundColor?.hex}]`]: backgroundColor?.hex && backgroundGradientColor,
          [`to-[${backgroundGradientColor?.hex}]`]: backgroundGradientColor?.hex,
        }
 * 
 * 
 */
