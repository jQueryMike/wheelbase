import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonStyle } from '../Button';
import buttonVariant1 from '../variants/1';

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    classes: buttonVariant1.classes,
    style: ButtonStyle.Primary,
    text: "I'm a primary button",
    leftIcon: 'fa-solid fa-magnifying-glass',
  },
};

export const SecondaryButton: Story = {
  args: {
    classes: buttonVariant1.classes,
    style: ButtonStyle.Secondary,
    text: "I'm a secondary button",
    leftIcon: 'fa-solid fa-magnifying-glass',
  },
};

export const AccentButton: Story = {
  args: {
    classes: buttonVariant1.classes,
    style: ButtonStyle.Accent,
    text: "I'm an accent button",
    leftIcon: 'fa-solid fa-magnifying-glass',
  },
};

export const PlainButton: Story = {
  args: {
    classes: buttonVariant1.classes,
    style: ButtonStyle.Plain,
    text: "I'm a plain button",
    leftIcon: 'fa-solid fa-magnifying-glass',
  },
};

const meta: Meta<typeof Button> = {
  title: 'Blocks/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
