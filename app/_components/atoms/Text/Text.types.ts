export type TextClasses<T> = {
  [key in 'root' | 'textContent']?: T;
};

export interface TextProps {
  classes?: TextClasses<string>;
  text?: string;
}
