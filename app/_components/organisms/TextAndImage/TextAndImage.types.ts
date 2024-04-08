import { HeadingProps, ImageProps } from '@components/atoms';
import { BaseProps } from '@components/types';
import { Block, Color, Spacing } from '@types';

export type TextAndImageClasses<T = string> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'container'
    | 'contentContainer'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'textAndImageContentContainerReverse'
    | 'textAndImageContentContainer'
    | 'imageContainerReverse'
    | 'imageContainer'
    | 'image']?: T;
};

export type TextAndImageProps = BaseProps<{
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
    [key in keyof TextAndImageClasses]?: string;
  };
}>;
