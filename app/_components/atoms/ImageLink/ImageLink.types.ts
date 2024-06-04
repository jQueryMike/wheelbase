// eslint-disable-next-line import/no-cycle
import { ImageProps } from '@components/atoms';
import { BaseProps } from '@components/types';
import { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';

export type ImageLinkClasses<T = string> = {
  [key in 'root' | 'imageLink']?: T;
};

export type ImageLinkProps = Omit<ImageProps, 'classes' | 'overrides'> &
  LinkProps &
  BaseProps<{
    title?: string;
    target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
    classes?: ImageLinkClasses<string>;
    overrides?: {
      [key in keyof ImageLinkClasses]?: string;
    };
  }>;
