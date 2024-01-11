import { HeadingProps, SubheadingProps } from '@components/atoms';

export type HeadingsClasses<T> = {
  [key in 'root' | 'rootInner' | 'headingContainer' | 'subheadingContainer']?: T;
};

export interface HeadingsProps {
  classes?: HeadingsClasses<string>;
  heading?: HeadingProps;
  subheading?: SubheadingProps;
}
