import type { Meta, StoryObj } from '@storybook/react';

import Heading from '../Heading';
import headingVariant1 from '../variants/1';

type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
  args: {
    classes: headingVariant1.classes,
    text: 'This is a header',
  },
};

const meta: Meta<typeof Heading> = {
  title: 'Blocks/Heading',
  component: Heading,
  tags: ['autodocs'],
};

export default meta;
