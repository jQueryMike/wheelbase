import { buildClasses } from '@utils/buildClasses';
import { buildStyling } from '@utils/buildStyling';
import NextImage from 'next/image';
import cn from 'classnames';
import Block from 'lib/interfaces/Block';
import { AtomicType } from '@types';

import { ImageProps } from './Image.types';

const BLOCK_TYPE: AtomicType = "atom";

const Image = async ({ variant = '1', overrides, spacing, ...rest }: ImageProps & Block) => {
  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);
  return (
    <div className={cn(classes?.root, buildStyling({spacing}, BLOCK_TYPE))}>
      <NextImage className={classes?.image} {...rest} />
    </div>
  );
};

export default Image;
