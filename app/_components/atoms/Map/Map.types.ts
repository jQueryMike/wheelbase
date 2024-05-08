import { BaseProps } from '@components/types';

export type MapClasses<T = string> = {
  [key in 'root' | 'mapContainer' | 'map']?: T;
};

export type MapProps = BaseProps<{
  src: string;
  overrides?: {
    [key in keyof MapClasses]?: string;
  };
}>;
