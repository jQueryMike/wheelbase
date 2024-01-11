export type SubheadingClasses<T> = {
  [key in 'root' | 'subheading']?: T;
};

export interface SubheadingProps {
  classes?: SubheadingClasses<string>;
  text?: string;
}
