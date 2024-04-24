import { BaseProps } from '@components/types';

export type ReviewContentClasses<T = string> = {
  [key in 'root']?: T;
};

export type ReviewContentProps = BaseProps<{
  reviewContent: string;
  classes?: ReviewContentClasses<string>;
  overrides?: {
    [key in keyof ReviewContentClasses]?: string;
  };
}>;
