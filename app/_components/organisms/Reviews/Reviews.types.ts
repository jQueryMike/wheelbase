import { HeadingProps } from '@components/atoms';
import { BaseProps } from '@components/types';
import { Color, Spacing } from '@types';

export type ReviewsClasses<T = string> = {
  [key in 'root' | 'container' | 'reviewsBlock' | 'headingContainer']?: T;
};

export type ReviewsProps = BaseProps<{
  title: string;
  classes?: ReviewsClasses<string>;
  heading?: HeadingProps;
  subheading?: HeadingProps;
  backgroundColor?: Color;
  backgroundGradientColor?: Color;
  gradientDirection?: 'Left to Right' | 'Right to Left';
  spacing: Spacing;
  overrides?: {
    [key in keyof ReviewsClasses]?: string;
  };
}>;
