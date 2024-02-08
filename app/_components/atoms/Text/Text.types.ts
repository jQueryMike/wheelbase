import { Color } from '@types';

export type TextClasses<T = string> = {
  [key in 'root' | 'textContent']?: T;
};

export interface TextProps {
  variant?: '1' | string;
  text?: string;
  color?: Color;
  overrides?: {
    [key in keyof TextClasses]?: string;
  };
}
