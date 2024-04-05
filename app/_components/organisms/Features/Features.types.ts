import { BaseProps } from '@components/types';

export type FeaturesClasses<T = string> = {
  [key in 'root']?: T;
}

export type FeaturesProps = BaseProps<{
  title: string;
  classes?: FeaturesClasses<string>;
}>;