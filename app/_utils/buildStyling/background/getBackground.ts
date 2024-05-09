import { Background } from '@components/types';
import { CSSProperties } from 'react';

import { GradientDirection } from '../../constants';
import { getColour } from '../colours/getColour';

/**
 * @description Get background classes and styles
 * @param background {Background} Background styling
 * @returns Aplicable background classes and styles
 */
export function getBackground(background?: Background): [string, CSSProperties] {
  const { backgroundColor, backgroundGradientColor, gradientDirection } = background ?? {};
  if (backgroundColor) {
    if (backgroundGradientColor && gradientDirection) {
      return [
        `bg-gradient-${GradientDirection[gradientDirection]}`,
        {
          '--tw-gradient-from': backgroundColor.hex,
          '--tw-gradient-to': backgroundGradientColor.hex,
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        } as CSSProperties,
      ];
    }
    return [getColour(backgroundColor, 'bg'), {
      '--tw-bg-opacity': backgroundColor.opacity / 100,
    } as CSSProperties];
  }
  return ['', {}];
}
