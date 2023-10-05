import { HeadingSize } from '@components/blocks/Heading';
import headingVariant1 from '@components/blocks/Heading/variants/1';
import subheadingVariant1 from '@components/blocks/Subheading/variants/1';
import type { Meta, StoryObj } from '@storybook/react';

import Headings, { HeadingsClasses } from '../Headings';

type Story = StoryObj<typeof Headings>;

export const Variant1: Story = {
  args: {
    heading: {
      // @ts-ignore
      id: '967d676c-0fc1-4361-8ef6-4e7599774ad8',
      text: 'This is an example heading',
      classes: headingVariant1.classes,
      size: HeadingSize.Medium,
    },
    subheading: {
      // @ts-ignore
      id: '967d676c-0fc1-4361-8ef6-4e7599774ad9',
      text: 'This is an example heading',
      classes: subheadingVariant1.classes,
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
