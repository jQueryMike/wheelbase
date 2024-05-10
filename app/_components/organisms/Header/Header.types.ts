import { ButtonProps } from '@components/atoms';
import { BaseProps } from '@components/types';
import { ImageProps } from 'next/image';
import { LinkProps } from 'next/link';

export type HeaderClasses<T = string> = {
  [key in 'root']?: T;
}

export type HeaderProps = BaseProps<{
  logo: ImageProps;
  navigation: LinkProps[];
  link: any;
  overrides?: {
    [key in keyof HeaderClasses]?: string;
  };
}>;