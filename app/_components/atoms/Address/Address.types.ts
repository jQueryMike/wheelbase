import { BaseProps } from '@components/types';

export type AddressClasses<T = string> = {
  [key in 'root']?: T;
}

export type AddressProps = BaseProps<{
  companyName: string;
  addressOne: string;
  addressTwo: string;
  city: string;
  county: string;
  postcode: string;
  showCountry: Boolean;
  displayType: string
  country?: string;
  overrides?: {
    [key in keyof AddressClasses]?: string;
  };
}>;