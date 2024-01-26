import { ImageProps as NextImageProps } from 'next/image';

export type ImageClasses<T = string> = {
  [key in 'root' | 'image']?: T;
};

export interface ImageProps extends NextImageProps {
  variant?: '1' | '2' | string;
  overrides?: {
    [key in keyof ImageClasses]?: string;
  };
}
