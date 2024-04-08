import { CSSProperties } from 'react';
import cn from 'classnames';
import { buildClasses } from '@utils/buildClasses';
import { buildStyling } from '@utils/buildStyling';
import { hexToRgb, rgbString } from '@utils';

import { AtomicType } from '@types';
import { BaseOrganismProps } from './BaseOrganism.types';

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

const BaseOrganism = async ({
  variant = '1',
  backgroundColor,
  backgroundGradientColor,
  gradientDirection,
  overrides,
  spacing,
  containerClasses = {},
  children
}: BaseOrganismProps) => {
  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);

  return (
    <section
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
        } as CSSProperties
      }
    >
      <div className={classes?.rootInner}>
        <div className={cn(classes?.container, containerClasses)}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default BaseOrganism;
