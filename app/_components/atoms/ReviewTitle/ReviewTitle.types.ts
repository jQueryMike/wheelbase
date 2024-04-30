import { BaseProps } from '@components/types';

export type ReviewTitleClasses<T = string> = {
  [key in 'root']?: T;
};

export type ReviewTitleProps = BaseProps<{
  reviewTitle: string;
  classes?: ReviewTitleClasses<string>;
  overrides?: {
    [key in keyof ReviewTitleClasses]?: string;
  };
}>;
