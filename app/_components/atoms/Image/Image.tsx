import NextImage from 'next/image';

import { ImageProps } from './Image.types';
import fallbackStyle from './variants/1';

const Image = ({ classes = fallbackStyle.classes, ...rest }: ImageProps) => (
  <div className={classes?.root}>
    <NextImage className={classes?.image} {...rest} />
  </div>
);

export default Image;
