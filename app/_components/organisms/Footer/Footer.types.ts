import { BaseProps } from '@components/types';

export type FooterClasses<T = string> = {
  [key in 'root']?: T;
};

export type FooterProps = BaseProps<{
  classes?: FooterClasses<string>;
}>;
