import { ImageProps } from '@components/atoms';
import { BaseProps } from '@components/types';

export type ImageLinkClasses<T = string> = {
  [key in 'root' | 'imageLink']?: T;
};

export type ImageLinkProps = Omit<ImageProps, 'classes' | 'overrides'> &
  BaseProps<{
    classes?: ImageLinkClasses<string>;
    overrides?: {
      [key in keyof ImageLinkClasses]?: string;
    };
  }>;
