import { buildClasses } from '@utils/buildClasses';
import NextImage from 'next/image';

import { ImageProps } from './Image.types';

const Image = async ({ variant = '1', overrides, ...rest }: ImageProps) => {
  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);
  return (
    <div className={classes?.root}>
      <NextImage className={classes?.image} {...rest} />
    </div>
  );
};

export default Image;
