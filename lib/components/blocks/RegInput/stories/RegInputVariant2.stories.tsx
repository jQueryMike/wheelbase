import type { Meta, StoryObj } from '@storybook/react';

import buttonVariant2 from '../../Button/variants/2';
import RegInput from '../RegInput';
import regInputVariant2 from '../variants/2';

type Story = StoryObj<typeof RegInput>;

const args = {
  classes: regInputVariant2.classes,
  placeholderText: 'ENTER REG...',
  submitButton: {
    classes: buttonVariant2.classes,
    text: 'Get Valuation',
  },
  vrmLookupUrl: 'https://click-motors.click-buy.clickdealer.dev/vrm-lookup',
};

export const Variant2: Story = { args };

const meta: Meta<typeof RegInput> = {
  title: 'Blocks/Reg Input',
  component: RegInput,
  tags: ['autodocs'],
};

export default meta;
