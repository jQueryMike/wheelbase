import { Block } from '@types';
import NextImage from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import { ImageProps } from './Image.types';

const Image = ({ classes = {}, ...rest }: ImageProps) => (
  <div className={classes.root}>
    <NextImage className={classes.image} {...rest} />
  </div>
);

/**
 * Fallback image props
 */
export const DefaultImage: Block & ImageProps = {
  id: uuidv4(),
  name: 'Image',
  url: '/media/vprlmnok/placeholder_view_vector.svg', // remote url, can't get public folder in build
  src: '/media/vprlmnok/placeholder_view_vector.svg', // remote url, can't get public folder in build
  alt: 'Placholder Image',
  alternativeText: 'Placholder Image',
  width: '300',
  height: '200',
};

export default Image;
