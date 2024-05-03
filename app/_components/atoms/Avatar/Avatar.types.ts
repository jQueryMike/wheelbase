// eslint-disable-next-line import/no-cycle
import { ImageProps } from '@components/atoms';
import { BaseProps } from '@components/types';

export type AvatarClasses<T = string> = {
  [key in 'root' | 'avatar']?: T;
};

export type AvatarProps = Omit<ImageProps, 'classes' | 'overrides'> &
  BaseProps<{
    classes?: AvatarClasses<string>;
    overrides?: {
      [key in keyof AvatarClasses]?: string;
    };
  }>;
