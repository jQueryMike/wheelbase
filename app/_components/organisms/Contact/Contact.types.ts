import { BaseProps } from '@components/types';

export type ContactClasses<T = string> = {
  [key in 'root']?: T;
}

export type ContactProps = BaseProps<{
  title: string;
  overrides?: {
    [key in keyof ContactClasses]?: string;
  };
}>;