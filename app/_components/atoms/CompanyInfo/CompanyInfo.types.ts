import { BaseProps } from '@components/types';

export type CompanyInfoClasses<T = string> = {
  [key in 'root' | 'infoItem']?: T;
};

type CompanyInfoItemProps = {
  label: string;
  number: string;
};

export type CompanyInfoProps = BaseProps<{
  items: CompanyInfoItemProps[];
  overrides?: {
    [key in keyof CompanyInfoClasses]?: string;
  };
}>;
