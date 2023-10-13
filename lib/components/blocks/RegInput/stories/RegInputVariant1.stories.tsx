import type { Meta, StoryObj } from '@storybook/react';

import buttonVariant1 from '../../Button/variants/1';
import RegInput from '../RegInput';
import regInputVariant1 from '../variants/1';

type Story = StoryObj<typeof RegInput>;

const args = {
  classes: regInputVariant1.classes,
  placeholderText: 'ENTER REG...',
  submitButton: {
    classes: buttonVariant1.classes,
    text: 'Get Valuation',
  },
  vrmLookupUrl: 'https://click-motors.click-buy.clickdealer.dev/vrm-lookup',
};

export const Variant1: Story = { args };

const meta: Meta<typeof RegInput> = {
  title: 'Blocks/Reg Input',
  component: RegInput,
  tags: ['autodocs'],
};

export default meta;
