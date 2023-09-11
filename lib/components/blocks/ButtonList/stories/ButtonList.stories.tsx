import type { Meta, StoryObj } from '@storybook/react';

import buttonVariant1 from '../../Button/variants/1';
import ButtonList from '../ButtonList';
import buttonListVariant1 from '../variants/1';

type Story = StoryObj<typeof ButtonList>;

export const PrimaryButtonList: Story = {
  args: {
    classes: buttonListVariant1.classes,
    items: [
      {
        id: '1',
        name: 'Button',
        href: '/test',
        text: 'Test Button',
        classes: buttonVariant1.classes,
      },
      {
        id: '2',
        name: 'Button',
        href: '/test',
        text: '2nd Test Button',
        classes: buttonVariant1.classes,
        style: 'accent',
      },
      {
        id: '3',
        name: 'Button',
        href: '/test',
        text: '3rd Test Button',
        classes: buttonVariant1.classes,
        style: 'plain',
      },
    ],
  },
};

const meta: Meta<typeof ButtonList> = {
  title: 'Blocks/Button List',
  component: ButtonList,
  tags: ['autodocs'],
};

export default meta;
