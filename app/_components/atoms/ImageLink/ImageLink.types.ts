import { ImageProps } from '@components/atoms';
import { BaseProps } from '@components/types';

export type ImageLinkClasses<T = string> = {
  [key in 'root']?: T;
};

export type ImageLinkProps = BaseProps<{
  imageLink: ImageProps;
  classes?: ImageLinkClasses<string>;
  overrides?: {
    [key in keyof ImageLinkClasses]?: string;
  };
}>;
