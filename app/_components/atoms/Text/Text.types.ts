import { BaseProps } from '@components/types';

export type TextClasses<T = string> = {
  [key in 'root' | 'textContent']?: T;
};

export type TextProps = BaseProps<{
  text?: string;
  overrides?: {
    [key in keyof TextClasses]?: string;
  };
}>;
