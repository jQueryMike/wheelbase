import type { Meta, StoryObj } from '@storybook/react';

import { ButtonStyle } from '../../Button/Button';
import buttonVariant1 from '../../Button/variants/1';
import ButtonList from '../ButtonList';
import buttonListVariant1 from '../variants/1';

type Story = StoryObj<typeof ButtonList>;

const args = {
  classes: buttonListVariant1.classes,
  items: [
    {
      id: '1',
      name: 'Button',
      href: '/test',
      text: 'Primary Button',
      classes: buttonVariant1.classes,
    },
    {
      id: '2',
      name: 'Button',
      href: '/test',
      text: 'Secondary Button',
      classes: buttonVariant1.classes,
      style: ButtonStyle.Secondary,
    },
    {
      id: '3',
      name: 'Button',
      href: '/test',
      text: 'Accent Button',
      classes: buttonVariant1.classes,
      style: ButtonStyle.Accent,
    },
    {
      id: '4',
      name: 'Button',
      href: '/test',
      text: 'Plain Button',
      classes: buttonVariant1.classes,
      style: ButtonStyle.Plain,
    },
  ],
};

export const Variant1: Story = { args };

const meta: Meta<typeof ButtonList> = {
  title: 'Blocks/Button List',
  component: ButtonList,
  tags: ['autodocs'],
};

export default meta;
