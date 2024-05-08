import { BaseProps } from '@components/types';

export type GridClasses<T = string> = {
  [key in 'root']?: T;
};

export type GridProps = BaseProps<{
  classes?: GridClasses<string>;
  overrides?: any;
  styling?: any;
  children: React.ReactNode;
}>;
