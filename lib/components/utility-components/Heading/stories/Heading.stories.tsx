import type { Meta, StoryObj } from '@storybook/react';

import Heading from '../Heading';

type Story = StoryObj<typeof Heading>;

export const HeadingUtility: Story = {
  args: {
    className: 'bg-gray-100 p-8 rounded-lg',
    children: 'This is a header',
  },
};

const meta: Meta<typeof Heading> = {
  title: 'Utility Components/Heading',
  component: Heading,
  tags: ['autodocs'],
};

export default meta;
