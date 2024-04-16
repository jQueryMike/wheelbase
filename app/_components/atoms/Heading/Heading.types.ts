import { BaseProps } from '@components/types';
import { TextType } from '@types';

export enum HeadingTag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
}

export enum HeadingSize {
  ExtraLarge = 'ExtraLarge',
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
  ExtraSmall = 'ExtraSmall',
}

export type HeadingClasses<T = string> = {
  [key in 'root' | 'heading' | `heading${'ExtraLarge' | 'Large' | 'Medium' | 'Small' | 'ExtraSmall'}`]?: T;
};

export type HeadingProps = BaseProps<{
  text?: string;
  tag?: HeadingTag;
  textType?: TextType;
  overrides?: {
    [key in keyof HeadingClasses]?: string;
  };
  'data-testid'?: string;
}>;
