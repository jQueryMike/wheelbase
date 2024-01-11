export enum HeadingTag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  DIV = 'div',
  SPAN = 'span',
  P = 'p',
}

export enum HeadingSize {
  ExtraLarge = 'ExtraLarge',
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
  ExtraSmall = 'ExtraSmall',
}

export type HeadingClasses<T> = {
  [key in 'root' | 'heading' | `heading${'ExtraLarge' | 'Large' | 'Medium' | 'Small' | 'ExtraSmall'}`]?: T;
};

export interface HeadingProps {
  classes?: HeadingClasses<string>;
  text?: string;
  tag?: HeadingTag;
  size?: HeadingSize;
}