import { HeadingProps } from '@components/atoms';
import { BaseProps } from '@components/types';
import { Color, Spacing } from '@types';

export type FeaturesClasses<T = string> = {
  [key in 'root' | 'container' | 'featuresBlock' | 'headingContainer']?: T;
};

export type FeaturesProps = BaseProps<{
  title: string;
  classes?: FeaturesClasses<string>;
  heading?: HeadingProps;
  subheading?: HeadingProps;
  backgroundColor?: Color;
  backgroundGradientColor?: Color;
  gradientDirection?: 'Left to Right' | 'Right to Left';
  spacing: Spacing;
  overrides?: {
    [key in keyof FeaturesClasses]?: string;
  };
}>;
