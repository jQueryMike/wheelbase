import type { Meta, StoryObj } from '@storybook/react';

import RichText from '../RichText';

type Story = StoryObj<typeof RichText>;

export const ContentUtility: Story = {
  args: {
    className: 'bg-gray-100 p-8 rounded-lg',
    content: `<h3 class="text-lg text-black mb-3">This is <strong>HTML</strong> content.</h3>
              <p class="text-sm text-gray-700">
                Aenean vulputate eleifend tellus. <em>Vestibulum</em> ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; Fusce id purus. Curabitur ullamcorper ultricies nisi.
              </p>`,
  },
};

const meta: Meta<typeof RichText> = {
  title: 'Components/Rich Text',
  component: RichText,
  tags: ['autodocs'],
};

export default meta;
