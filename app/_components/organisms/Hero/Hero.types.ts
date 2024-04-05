import { HeadingProps, ImageProps } from '@components/atoms';
import { BaseProps } from '@components/types';
import { Block, Color, Spacing } from '@types';

export type HeroClasses<T = string> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'container'
    | 'container'
    | 'heroContentContainer'
    | 'heroContentContainerReverse'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'imageContainer'
    | 'imageContainerReverse'
    | 'image']?: T;
};

export type HeroProps = BaseProps<{
  variant?: '1' | '2' | '5' | '6' | string;
  heading?: HeadingProps;
  subheading?: HeadingProps;
  contentArea?: Block[];
  image1?: ImageProps;
  image2?: ImageProps;
  reverse?: boolean;
  backgroundColor?: Color;
  backgroundGradientColor?: Color;
  gradientDirection?: 'Left to Right' | 'Right to Left';
  spacing: Spacing;
  overrides?: {
    [key in keyof HeroClasses]?: string;
  };
}>;
