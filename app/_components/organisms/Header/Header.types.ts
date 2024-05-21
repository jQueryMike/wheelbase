import { BaseProps } from '@components/types';
import { Block } from '@types';
import { ImageProps } from 'next/image';

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
    | 'headerSlot'
    | 'hamburger'
    | 'hamburgerWrapper'
    | 'topBun'
    | 'meat'
    | 'bottomBun']?: T;
};

export type HeaderProps = BaseProps<{
  logo: ImageProps & Block;
  contentArea: Block[];
  overrides?: {
    [key in keyof HeaderClasses]?: string;
  };
}>;
