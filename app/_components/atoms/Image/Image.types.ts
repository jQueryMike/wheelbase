import { BaseProps } from '@components/types';
import { ImageProps as NextImageProps } from 'next/image';

export type ImageClasses<T = string> = {
  [key in 'root' | 'image']?: T;
};

export type ImageProps = BaseProps<NextImageProps & { overrides?: { [key in keyof ImageClasses]?: string }, imageAsBackground: boolean }>;
