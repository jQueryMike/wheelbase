import { BaseProps } from '@components/types';
import { Color } from '@types';

export type TextClasses<T = string> = {
  [key in 'root' | 'textContent']?: T;
};

export type TextProps = BaseProps<{
  variant?: '1' | string;
  text?: string;
  color?: Color;
  overrides?: {
    [key in keyof TextClasses]?: string;
  };
}>
