import { HeadingProps, ImageProps } from '@components/atoms';
import { Block, Color } from '@types';

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

export interface HeroProps {
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
    [key in keyof HeroClasses]?: string;
  };
}
