import buttonVariant1 from '@components/blocks/Button/variants/1';
import type { Meta, StoryObj } from '@storybook/react';

import RegInput from '../RegInput';
import regInputVariant1 from '../variants/1';

type Story = StoryObj<typeof RegInput>;

export const Variant1: Story = {
  args: {
    classes: regInputVariant1.classes,
    placeholderText: 'REGISTRATION',
    submitButton: {
      target: '_self',
      classes: buttonVariant1.classes,
      text: 'submit',
    },
    vrmLookupUrl: 'https://click-motors.click-buy.clickdealer.dev/vrm-lookup',
  },
};

const meta: Meta<typeof RegInput> = {
  title: 'Blocks/Reg Input',
  component: RegInput,
  tags: ['autodocs'],
};

export default meta;
