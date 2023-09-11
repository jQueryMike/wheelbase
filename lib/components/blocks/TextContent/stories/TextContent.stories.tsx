import type { Meta, StoryObj } from '@storybook/react';

import TextContent, { TextContentClasses } from '../TextContent';
import textContentVariant1 from '../variants/1';

type Story = StoryObj<typeof TextContent>;

export const PrimaryTextContent: Story = {
  args: {
    classes: textContentVariant1.classes,
    content: '<p>This is an example of <strong>TextContent</strong></p>',
  },
};

const meta: Meta<typeof TextContent> = {
  title: 'Blocks/Text Content',
  component: TextContent,
  tags: ['autodocs'],
};

export default meta;
