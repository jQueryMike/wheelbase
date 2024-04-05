import { BaseProps } from '@components/types';
import { Color, Spacing } from '@types';
import { ReactNode } from 'react';

export type BaseOrganismClasses<T = string> = {
  [key in 'root' | 'rootInner' | 'container' ]?: T;
}

export type BaseOrganismProps = BaseProps<{
  variant?: '1' | string;
  backgroundColor?: Color;
  backgroundGradientColor?: Color;
  gradientDirection?: 'Left to Right' | 'Right to Left';
  spacing: Spacing;
  overrides?: {
    [key in keyof BaseOrganismClasses]?: string;
  };
  classes?: BaseOrganismClasses<string>;
  containerClasses?: object;
  children?: ReactNode | Array<ReactNode>
}>;