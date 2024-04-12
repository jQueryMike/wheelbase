import { BaseProps } from '@components/types';
import { Color } from '@types';
import { ReactNode } from 'react';

export type BaseComponentClasses<T = string> = {
  [key in 'root' | 'rootInner' | 'container' ]?: T;
}

export type BaseComponentProps = BaseProps<{
  backgroundColor?: Color;
  backgroundGradientColor?: Color;
  gradientDirection?: 'Left to Right' | 'Right to Left';
  overrides?: {
    [key in keyof BaseComponentClasses]?: string;
  };
  classes?: BaseComponentClasses<string>;
  containerClasses?: object;
  children?: ReactNode | Array<ReactNode>
}> & {
  as?: 'section' | 'header' | 'footer' | 'div';
};