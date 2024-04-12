import { AtomicType } from '@types';
import { hexToRgb, rgbString } from '@utils';
import { buildClasses } from '@utils/buildClasses';
import { buildStyling } from '@utils/buildStyling';
import cn from 'classnames';
import { CSSProperties } from 'react';

import { BaseComponentProps } from './BaseComponent.types';
import baseComponentClasses from './BaseComponent.classes';

export const GradientDirectionMap = {
  'Left to Right': 'to-l',
  'Right to Left': 'to-r',
  'Top to Bottom': 'to-b',
  'Bottom to Top': 'to-t',
  'Top Left to Bottom Right': 'to-br',
  'Top Right to Bottom Left': 'to-bl',
  'Bottom Left to Top Right': 'to-tr',
  'Bottom Right to Top Left': 'to-tl',
};

const BLOCK_TYPE: AtomicType = 'organism';

const BaseComponent = async ({
  as = 'section',
  backgroundColor,
  backgroundGradientColor,
  gradientDirection,
  overrides,
  spacing,
  containerClasses = {},
  children,
}: BaseComponentProps) => {
  const Component = as;
  const classes = buildClasses(baseComponentClasses, overrides);

  return (
    <Component
      className={cn(
        classes?.root,
        [`bg-gradient-${gradientDirection ? GradientDirectionMap[gradientDirection] : 'none'}`],
        {
          [`bg-[${backgroundColor?.hex}]`]: backgroundColor?.hex && !backgroundGradientColor,
          [`from-[${backgroundColor?.hex}]`]: backgroundColor?.hex && backgroundGradientColor,
          [`to-[${backgroundGradientColor?.hex}]`]: backgroundGradientColor?.hex,
        },
        buildStyling({ spacing }, BLOCK_TYPE),
      )}
      style={
        {
          '--tw-gradient-from': backgroundColor?.hex,
          '--tw-gradient-to': backgroundGradientColor?.hex,
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to, --tw-gradient-from)',
          '--body-alt': backgroundColor?.hex ? rgbString(hexToRgb(backgroundColor?.hex as `#${string}`)) : undefined,
          '--tw-bg-opacity': (backgroundColor?.opacity ?? 100) / 100,
        } as CSSProperties
      }
    >
      <div className={classes?.rootInner}>
        <div className={cn(classes?.container, containerClasses)}>{children}</div>
      </div>
    </Component>
  );
};

export default BaseComponent;
