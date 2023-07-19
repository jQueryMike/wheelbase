import NextImage, { ImageProps as NextImageProps } from 'next/image';

export type ImageClasses<T> = {
  [key in 'root' | 'image']?: T;
};

export interface ImageProps extends NextImageProps {
  classes?: ImageClasses<string>;
}

const Image = ({ classes = {}, ...rest }: ImageProps) => (
  <div className={classes.root}>
    <NextImage className={classes.image} {...rest} />
  </div>
);

export default Image;
