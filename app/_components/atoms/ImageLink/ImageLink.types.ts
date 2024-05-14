// eslint-disable-next-line import/no-cycle
import { ImageProps } from '@components/atoms';
import { BaseProps } from '@components/types';
import { LinkProps } from 'next/link';

export type ImageLinkClasses<T = string> = {
  [key in 'root' | 'imageLink']?: T;
};

// type LinkProps = {
//   children: Element;
//   title?: string; 
//   target?: string;
//   href?: Url;
//   text?: string;
// };

export type ImageLinkProps = Omit<ImageProps, 'classes' | 'overrides'> &
  BaseProps<{
    classes?: ImageLinkClasses<string>;
    overrides?: {
      [key in keyof ImageLinkClasses]?: string;
    };
    link?: LinkProps;
    image?: ImageProps;
  }>;
