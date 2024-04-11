import { BaseProps } from '@components/types';

export type HeaderClasses<T = string> = {
  [key in 'root']?: T;
}

export type HeaderProps = BaseProps<{
  classes?: HeaderClasses<string>;
}>;