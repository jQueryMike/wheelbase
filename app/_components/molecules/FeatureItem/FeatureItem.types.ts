import { BaseProps } from '@components/types';

export type FeatureItemClasses<T = string> = {
  [key in 'root']?: T;
}

export type FeatureItemProps = BaseProps<{
  title: string;
  classes?: FeatureItemClasses<string>;
}>;