import { ImageProps as NextImageProps } from 'next/image';

export type ImageClasses<T> = {
  [key in 'root' | 'image']?: T;
};

export interface ImageProps extends NextImageProps {
  classes?: ImageClasses<string>;
}
