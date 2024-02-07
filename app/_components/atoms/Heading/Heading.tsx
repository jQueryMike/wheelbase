import { HEX, hexToRgb, rgbString } from '@utils';
import { buildClasses } from '@utils/buildClasses';
import cn from 'classnames';
import { CSSProperties } from 'react';

import { HeadingProps, HeadingSize, HeadingTag } from './Heading.types';

const Heading = async ({ variant = '1', text, tag, size = HeadingSize.Large, color, overrides }: HeadingProps) => {
  const HeadingElement = tag || HeadingTag.H2;
  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);
  return (
    <div
      className={classes?.root}
      style={
        {
          '--heading-default': rgbString(hexToRgb(color?.hex as HEX)),
          '--tw-text-opacity': color?.opacity,
        } as CSSProperties
      }
    >
      <HeadingElement
        className={cn(classes?.heading, classes?.[`heading${size?.replaceAll(' ', '')}`])}
        data-testid="heading"
      >
        {text}
      </HeadingElement>
    </div>
  );
};

export default Heading;
