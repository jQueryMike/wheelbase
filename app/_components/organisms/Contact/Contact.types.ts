import { BaseProps } from '@components/types';

export type ContactClasses<T = string> = {
  [key in
    | 'root'
    | 'container'
    | 'contactWrapper'
    | 'contact'
    | 'contactInfoContainer'
    | 'contactInfo'
    | 'socialsContainer'
    | 'socials']?: T;
};

export type ContactProps = BaseProps<{
  address: any;
  telephoneNumbers: any;
  email: any;
  map: any;
  socials: any;
  overrides?: {
    [key in keyof ContactClasses]?: string;
  };
}>;
