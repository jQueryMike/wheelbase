import { HEX, hexToRgb, rgbString } from '@utils';
import { buildClasses } from '@utils/buildClasses';
import { buildStyling } from '@utils/buildStyling';
import cn from 'classnames';
import { CSSProperties } from 'react';
import { AtomicType } from '@types';

import { HeadingProps, HeadingTag } from './Heading.types';

const BLOCK_TYPE: AtomicType = 'atom';

const Heading = async ({
  variant = '1',
  text,
  tag,
  size,
  color,
  textType = 'heading',
  fontWeight,
  spacing,
  overrides,
  'data-testid': dataTestId = 'heading',
}: HeadingProps) => {
  const HeadingElement = tag || HeadingTag.H2;
  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);
  const styling = {
    spacing,
    fontSize: size,
    textType,
    fontWeight: fontWeight || (textType === 'heading' ? 'Bold' : 'Medium'),
  };
  return (
    <div
      className={cn(classes?.root, buildStyling(styling, BLOCK_TYPE))}
      style={
        {
          '--heading-default': rgbString(hexToRgb(color?.hex as HEX)),
          '--tw-text-opacity': color?.opacity,
        } as CSSProperties
      }
    >
      <HeadingElement className={cn(classes?.heading)} data-testid={dataTestId}>
        {text}
      </HeadingElement>
    </div>
  );
};

export default Heading;
