import { BaseProps } from '@components/types';

export type GravatarClasses<T = string> = {
  [key in 'root' | 'gravatar']?: T;
};

export type GravatarProps = BaseProps<{
  reviewerName: string;
  classes?: GravatarClasses<string>;
}>;
