import { BaseProps } from '@components/types';

export type ReviewItemClasses<T = string> = {
  [key in 'root']?: T;
}

export type ReviewItemProps = BaseProps<{
  title: string;
  classes?: ReviewItemClasses<string>;
}>;