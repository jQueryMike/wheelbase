import { ComponentType } from 'react';

export type Comps<T, U = undefined> = {
  [key in keyof (U extends keyof T ? Omit<T, U> : T)]: ComponentType<any>;
};

export type Spacing = {
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  marginTop: string;
  marginBottom: string;
  marginLeft: string;
  marginRight: string;
};

export type BaseProps<T = {}> = T & {
  spacing?: Spacing;
  fontSize?: string;
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
