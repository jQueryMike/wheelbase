import { HeadingProps } from '@components/atoms';
import { TextProps } from '@components/atoms/Text/Text.types';
import { BaseProps } from '@components/types';

export type FeaturesListItemClasses<T = string> = {
  [key in 'root' | 'indicatorContainer' | 'featureListItem']?: T;
};

export type FeaturesListItemProps = BaseProps<{
  heading: HeadingProps;
  text: TextProps;
  indicator: { value: string; styling: any };
  overrides?: {
    [key in keyof FeaturesListItemClasses]?: string;
  };
}>;
