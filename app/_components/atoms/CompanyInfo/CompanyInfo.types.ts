import { BaseProps } from '@components/types';

export type CompanyInfoClasses<T = string> = {
  [key in 'root' | 'infoItem']?: T;
};

export type CompanyInfoProps = BaseProps<{
  companyNumber: string;
  fcaNumber: string;
  vatNumber: string;
  overrides?: {
    [key in keyof CompanyInfoClasses]?: string;
  };
}>;
