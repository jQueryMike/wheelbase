import { BaseProps } from '@components/types';
import { Block } from '@types';
import { ImageProps } from 'next/image';
import { LinkProps } from 'next/link';

export type HeaderClasses<T = string> = {
  [key in
    | 'root'
    | 'headerContainer'
    | 'component'
    | 'logoContainer'
    | 'headerLogo'
    | 'navContainer'
    | 'nav'
    | 'menuIconWrapper'
    | 'headerSlot']?: T;
};

export type HeaderProps = BaseProps<{
  logo: ImageProps & Block;
  navigation: LinkProps[];
  link: any;
  overrides?: {
    [key in keyof HeaderClasses]?: string;
  };
}>;
