import { HeadingProps, IconProps } from '@components/atoms';
import { BaseProps } from '@components/types';
import { Block } from '@types';

export type AccordionItemClasses<T = string> = {
  [key in 'root' | 'accordionHeading']?: T;
};

export type AccordionItemProps = BaseProps<{
  heading: HeadingProps;
  contentArea: Block[];
  icon?: IconProps;
  overrides?: {
    [key in keyof AccordionItemClasses]?: string;
  };
}>;
