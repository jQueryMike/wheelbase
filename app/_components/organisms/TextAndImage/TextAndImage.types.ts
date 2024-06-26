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
    | 'textAndImageContentIndex'
    | 'textAndImageContentContainerReverse'
    | 'textAndImageContentContainer'
    | 'imageContainerReverse'
    | 'imageContainer'
    | 'image'
    | 'imageAsBackground'
    | 'tint']?: T;
};

export type TextAndImageProps = BaseProps<{
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
  tint: any;
  overrides?: {
    [key in keyof TextAndImageClasses]?: string;
  };
}>;
