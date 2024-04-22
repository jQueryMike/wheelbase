import { BorderRadiusOptions, BorderStyleOptions, BorderWidthOptions, Color, FontSizeOptions, FontWeightType, GridColumnOptions, GridGapOptions, SpacingConfig } from '@types';
import { ComponentType } from 'react';

export type Comps<T, U = undefined> = {
  [key in keyof (U extends keyof T ? Omit<T, U> : T)]: ComponentType<any>;
};

export type Typography = {
  fontColor?: Color;
  fontSize?: FontSizeOptions;
  fontWeight?: FontWeightType;
  lineHeight?: string;
  letterSpacing?: string;
};

export type Background = {
  backgroundColor?: Color;
  backgroundGradientColor?: Color;
  gradientDirection?: GradientDirections;
};

export type Border = {
  borderColor?: Color;
  borderRadius?: BorderRadiusOptions;
  borderWidth?: BorderWidthOptions;
  borderStyle?: BorderStyleOptions;
};

export type Layout = {
  columns?: GridColumnOptions;
  columnGap?: GridGapOptions;
}

export type Styling = {
  spacing?: SpacingConfig;
  typography?: Typography;
  background?: Background;
  border?: Border;
  layout?: Layout;
};

export type BaseProps<T = {}> = T & {
  styling: Styling;
};

export type GradientDirections =
  | 'Left to Right'
  | 'Right to Left'
  | 'Top to Bottom'
  | 'Bottom to Top'
  | 'Top Left to Bottom Right'
  | 'Top Right to Bottom Left'
  | 'Bottom Left to Top Right'
  | 'Bottom Right to Top Left';
