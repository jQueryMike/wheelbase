import type { Meta, StoryObj } from '@storybook/react';

import Heading from '../Heading';
import headingClasses1 from '../themes/1/heading.classes';
import headingClasses2 from '../themes/2/heading.classes';

type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
  args: {
    classes: headingClasses1,
    text: 'This is a header',
  },
};

export const Heading2: Story = {
  args: {
    classes: headingClasses2,
    text: 'This is a header',
  },
};

const meta: Meta<typeof Heading> = {
  title: 'Blocks/Heading',
  component: Heading,
  tags: ['autodocs'],
};

export default meta;
