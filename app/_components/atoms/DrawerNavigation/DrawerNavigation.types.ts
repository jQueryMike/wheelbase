import { BaseProps } from '@components/types';

import { IconProps } from '../Icon';

export type DrawerNavigationClasses<T = string> = {
  [key in
    | 'root'
    | 'hamburger'
    | 'hamburgerWrapper'
    | 'topBun'
    | 'meat'
    | 'bottomBun'
    | 'nav'
    | 'closeButton'
    | 'navLink']?: T;
};

export type DrawerNavigationProps = BaseProps<{
  homeObject?: any;
  icon?: IconProps;
  overrides?: {
    [key in keyof DrawerNavigationClasses]?: string;
  };
}>;
