import { BaseProps } from '@components/types';

export type NavigationItemClasses<T = string> = {
  [key in 'root' | 'link']?: T;
};

export type NavigationItemProps = BaseProps<{
  name: string;
  url: string;
  id: string;
  overrides?: {
    [key in keyof NavigationItemClasses]?: string;
  };
}>;
