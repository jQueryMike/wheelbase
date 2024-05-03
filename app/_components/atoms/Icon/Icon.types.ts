import { BaseProps } from '@components/types';

export type IconClasses<T = string> = {
  [key in 'root']?: T;
};

export type IconProps = BaseProps<{
  icon?: string;
  className?: string;
  overrides?: {
    [key in keyof IconClasses]?: string;
  };
}>;
