import NextImage from 'next/image';

import { ImageProps } from './Image.types';

const Image = ({ classes = {}, ...rest }: ImageProps) => (
  <div className={classes.root}>
    <NextImage className={classes.image} {...rest} />
  </div>
);

export default Image;
