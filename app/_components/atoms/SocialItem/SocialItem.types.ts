import { BaseProps } from '@components/types';
import { LinkProps } from 'next/link';

import { IconProps } from '../Icon';

export type SocialItemClasses<T = string> = {
  [key in 'root']?: T;
};

export type SocialItemProps = BaseProps<{
  icon: IconProps;
  link: LinkProps;
  overrides?: {
    [key in keyof SocialItemClasses]?: string;
  };
}>;
