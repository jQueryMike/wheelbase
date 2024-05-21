import { BaseProps } from '@components/types';

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
  overrides?: {
    [key in keyof DrawerNavigationClasses]?: string;
  };
}>;
