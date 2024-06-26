import { BaseProps } from '@components/types';
import { Sizes } from '@utils/constants';

export type ButtonListClasses<T = string> = {
  [key in 'root' | 'list' | 'listItem']?: T;
};

export type ButtonListProps = BaseProps<{
  gap?: Sizes;
  items: any[];
  overrides?: {
    [key in keyof ButtonListClasses]?: string;
  };
}>;
