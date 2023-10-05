import type { Meta, StoryObj } from '@storybook/react';

import Subheading from '../Subheading';
import subheadingVariant1 from '../variants/1';

type Story = StoryObj<typeof Subheading>;

export const Variant1: Story = {
  args: {
    classes: subheadingVariant1.classes,
    text: 'This is a subheading',
  },
};

const meta: Meta<typeof Subheading> = {
  title: 'Blocks/Subheading',
  component: Subheading,
  tags: ['autodocs'],
};

export default meta;
