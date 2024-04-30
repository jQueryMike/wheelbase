import { BaseProps } from '@components/types';

export type ReviewerNameClasses<T = string> = {
  [key in 'root' | 'reviewerName']?: T;
};

export type ReviewerNameProps = BaseProps<{
  classes?: ReviewerNameClasses<string>;
  reviewerName: string;
  overrides?: {
    [key in keyof ReviewerNameClasses]?: string;
  };
}>;
