// eslint-disable-next-line import/no-cycle
import { ImageProps } from '@components/atoms';
import { BaseProps } from '@components/types';

export type AvatarClasses<T = string> = {
  [key in 'root' | 'avatar']?: T;
};

export type AvatarProps = BaseProps<ImageProps & {
    gravatarName?: string;
    overrides?: {
      [key in keyof AvatarClasses]?: string;
    };
  }>;
