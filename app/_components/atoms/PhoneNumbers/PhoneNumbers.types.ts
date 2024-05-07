import { BaseProps } from '@components/types';

import { IconProps } from '../Icon';

export type PhoneNumbersClasses<T = string> = {
  [key in 'root']?: T;
};

export type PhoneNumbersProps = BaseProps<{
  icon: IconProps;
  number: string;
  overrides?: {
    [key in keyof PhoneNumbersClasses]?: string;
  };
}>;
