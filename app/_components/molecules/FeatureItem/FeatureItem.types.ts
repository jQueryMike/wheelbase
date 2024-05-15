import { IconProps } from '@components/atoms';
import { BaseProps } from '@components/types';
import { Block, Spacing } from '@types';

export type FeatureItemClasses<T = string> = {
  [key in 'root' | 'container']?: T;
};

export type Icon = {
  icon: string;
  border?: any;
  spacing?: Spacing;
};

export type FeatureItemProps = BaseProps<{
  contentArea: Block[];
  classes?: FeatureItemClasses<string>;
  icon?: IconProps;
  overrides?: {
    [key in keyof FeatureItemClasses]?: string;
  };
}>;
