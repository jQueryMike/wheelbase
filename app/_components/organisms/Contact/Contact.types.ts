import { AddressProps } from '@components/atoms';
import { BaseProps } from '@components/types';

export type ContactClasses<T = string> = {
  [key in 'root']?: T;
}

export type ContactProps = BaseProps<{
  address: any;
  telephoneNumbers: any;
  email: any;
  map: any;
  overrides?: {
    [key in keyof ContactClasses]?: string;
  };
}>;