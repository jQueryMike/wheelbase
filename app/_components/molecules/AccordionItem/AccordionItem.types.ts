import { HeadingProps } from '@components/atoms';
import { BaseProps } from '@components/types';
import { Block } from '@types';

export type AccordionItemClasses<T = string> = {
  [key in 'root']?: T;
};

export type AccordionItemProps = BaseProps<{
  heading: HeadingProps;
  contentArea: Block[];
  isOpen: any;
  onClick: any;
  icon: any;
  overrides?: {
    [key in keyof AccordionItemClasses]?: string;
  };
}>;
