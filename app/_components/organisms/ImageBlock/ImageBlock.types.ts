import { BaseProps } from '@components/types';
import { ImageProps } from '@components/atoms';

export type ImageBlockClasses<T = string> = {
  [key in 'imageContainer' | 'image' | 'root']?: T;
}

export type ImageBlockProps = BaseProps<{
  imageBlock: ImageProps;
  overrides?: {
    [key in keyof ImageBlockClasses]?: string;
  };
}>;