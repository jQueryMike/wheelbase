import { ImageProps } from '@components/atoms';
import { BaseProps } from '@components/types';

export type AvatarClasses<T = string> = {
  [key in 'root' | 'avatar']?: T;
};

export type AvatarProps = BaseProps<{
  classes?: AvatarClasses<string>;
  avatar: ImageProps;
  overrides?: {
    [key in keyof AvatarClasses]?: string;
  };
}>;
