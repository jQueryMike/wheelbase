import { HeadingSize } from '@components/blocks/Heading';
import type { Meta, StoryObj } from '@storybook/react';

import Headings, { HeadingsClasses } from '../Headings';

type Story = StoryObj<typeof Headings>;

export const PrimaryHeadings: Story = {
  args: {
    heading: {
      // @ts-ignore
      id: '967d676c-0fc1-4361-8ef6-4e7599774ad8',
      text: 'This is an example heading',
      classes: {
        heading: 'font-heading font-bold leading-tight text-heading',
        headingExtraLarge: 'text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]',
        headingLarge: 'text-[22px] sm:text-[25px] md:text-[25px] lg:text-[28px] xl:text-[32px]',
        headingMedium: 'text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px]',
        headingSmall: 'text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px]',
        headingExtraSmall: 'text-[14px] sm:text-[16px] lg:text-[18px]',
      },
      size: HeadingSize.Medium,
    },
    subheading: {
      // @ts-ignore
      id: '967d676c-0fc1-4361-8ef6-4e7599774ad9',
      text: 'This is an example heading',
      classes: {
        subheading: 'text-accent text-[18px] font-semibold lg:text-[20px]',
      },
      size: HeadingSize.Medium,
    },
  },
};

const meta: Meta<typeof Headings> = {
  title: 'Blocks/Headings',
  component: Headings,
  tags: ['autodocs'],
};

export default meta;
