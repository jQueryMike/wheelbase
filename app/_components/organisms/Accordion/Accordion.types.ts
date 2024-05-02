import { HeadingProps } from '@components/atoms';
import { BaseProps } from '@components/types';

export type AccordionClasses<T = string> = {
  [key in 'root' | 'headingContainer' | 'container']?: T;
};

export type AccordionProps = BaseProps<{
  title: string;
  heading?: HeadingProps;
  subheading?: HeadingProps;
  overrides?: {
    [key in keyof AccordionClasses]?: string;
  };
}>;
