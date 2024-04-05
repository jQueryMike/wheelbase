import { BaseProps } from '@components/types';

export type ReviewsClasses<T = string> = {
  [key in 'root']?: T;
}

export type ReviewsProps = BaseProps<{
  title: string;
  classes?: ReviewsClasses<string>;
}>;