import { BaseProps } from '@components/types';

export type ReviewDateClasses<T = string> = {
  [key in 'root']?: T;
};

export type ReviewDateProps = BaseProps<{
  reviewDate: string;
  classes?: ReviewDateClasses<string>;
  overrides?: {
    [key in keyof ReviewDateClasses]?: string;
  };
}>;
