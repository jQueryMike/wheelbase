import { BaseProps } from '@components/types';

export type MapClasses<T = string> = {
  [key in 'root' | 'rootFullWidth' | 'map']?: T;
};

export type MapProps = BaseProps<{
  src: string;
  fullWidth: boolean;
  overrides?: {
    [key in keyof MapClasses]?: string;
  };
}>;
