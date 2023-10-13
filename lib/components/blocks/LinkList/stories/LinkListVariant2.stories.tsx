import type { Meta, StoryObj } from '@storybook/react';

import LinkList from '../LinkList';
import linkListVariant2 from '../variants/2';

type Story = StoryObj<typeof LinkList>;

const args = {
  classes: linkListVariant2.classes,
  items: [
    {
      id: '1',
      name: 'Link',
      href: '/test',
      text: 'Link 1',
    },
    {
      id: '2',
      name: 'Link',
      href: '/',
      text: 'Selected Link',
    },
    {
      id: '3',
      name: 'Link',
      href: '/test',
      text: 'Link 3',
    },
    {
      id: '4',
      name: 'Link',
      href: '/test',
      text: 'Link 4',
    },
  ],
};

export const Variant2: Story = { args };

const meta: Meta<typeof LinkList> = {
  title: 'Blocks/Link List',
  component: LinkList,
  tags: ['autodocs'],
};

export default meta;
