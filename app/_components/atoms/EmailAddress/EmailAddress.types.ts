import { BaseProps } from '@components/types';

import { IconProps } from '../Icon';

export type EmailAddressClasses<T = string> = {
  [key in 'root']?: T;
};

export type EmailAddressProps = BaseProps<{
  icon: IconProps;
  email: string;
  overrides?: {
    [key in keyof EmailAddressClasses]?: string;
  };
}>;
