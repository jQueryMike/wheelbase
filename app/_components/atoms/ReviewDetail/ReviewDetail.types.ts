import { BaseProps } from '@components/types';

export type ReviewDetailClasses<T = string> = {
  [key in 'root']?: T;
};

export type ReviewDetailProps = BaseProps<{
  reviewDetail?: string;
  overrides?: {
    [key in keyof ReviewDetailClasses]?: string;
  };
}>;
