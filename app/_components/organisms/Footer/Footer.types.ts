import { BaseProps } from '@components/types';

export type FooterClasses<T = string> = {
  [key in
    | 'root'
    | 'footerContainer'
    | 'component'
    | 'footerSlotOne'
    | 'footerSlotTwo'
    | 'contentContainer'
    | 'content'
    | 'socialContainer'
    | 'socialItems'
    | 'socialItem'
    | 'legalContainer'
    | 'navContainer'
    | 'navItem'
    | 'imageContainer'
    | 'image']?: T;
};

export type FooterProps = BaseProps<{
  companyInfo: any;
  footerText: any;
  socials: any;
  overrides?: {
    [key in keyof FooterClasses]?: string;
  };
}>;
