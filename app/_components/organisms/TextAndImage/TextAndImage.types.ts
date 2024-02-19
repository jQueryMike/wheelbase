import { HeadingProps, ImageProps } from '@components/atoms';
import { Block, Color } from '@types';

export type TextAndImageClasses<T = string> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'container'
    | 'contentContainer'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'imageContainer'
    | 'image']?: T;
};

export interface TextAndImageProps {
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
  overrides?: {
    [key in keyof TextAndImageClasses]?: string;
  };
}
