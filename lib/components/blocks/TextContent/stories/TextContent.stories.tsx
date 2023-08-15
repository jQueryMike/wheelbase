import type { Meta, StoryObj } from '@storybook/react';

import TextContent, { TextContentClasses } from '../TextContent';

type Story = StoryObj<typeof TextContent>;

export const PrimaryTextContent: Story = {
  args: {
    classes: {
      textContent: 'prose max-w-full',
    },
    content: '<p>This is an example of <strong>TextContent</strong></p>',
  },
};

const meta: Meta<typeof TextContent> = {
  title: 'Blocks/Text Content',
  component: TextContent,
  tags: ['autodocs'],
};

export default meta;
