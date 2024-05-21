import { BaseProps } from '@components/types';
import { Block } from '@types';

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
  detailsBlock: Block;
  overrides?: {
    [key in keyof ContactClasses]?: string;
  };
}>;
