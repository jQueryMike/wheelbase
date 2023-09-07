import type { Meta, StoryObj } from '@storybook/react';

import RegInput, { RegInputClasses } from '../RegInput';

type Story = StoryObj<typeof RegInput>;

export const PrimaryRegInput: Story = {
  args: {
    classes: {
      root: 'max-w-[500px] @container/regInput',
      form: 'flex flex-col items-stretch justify-between space-y-3 rounded-xl border border-primary bg-body p-3 @md/regInput:flex-row @md/regInput:items-center @md/regInput:justify-between @md/regInput:space-y-0',
      inputContainer: 'flex-grow',
      input: 'h-8 w-full bg-transparent text-center text-xl font-bold uppercase text-heading outline-none',
      errorMessageContainer: 'pt-2',
      errorMessage: 'text-center text-sm text-error',
    },
    placeholderText: 'REGISTRATION',
    submitButton: {
      target: '_self',
      classes: {
        root: 'inline-block',
        button: 'relative inline-flex items-center justify-center rounded-lg font-button font-semibold transition-all',
        buttonLoading: 'pointer-events-none',
        buttonContent: 'inline-flex items-center justify-center',
        buttonContentLoading: 'opacity-0',
        loadingIconContainer: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform',
        loadingIcon: 'fa-duotone fa-spinner-third fa-spin',
        primaryButton: 'bg-primary text-primary-contrast hover:bg-primary/80',
        accentButton: 'bg-accent text-accent-contrast hover:bg-accent/80',
        plainButton: 'border border-divider text-primary hover:border-primary/50',
        smallButton: 'h-8 text-[16px]',
        mediumButton: 'h-10 text-[18px]',
        largeButton: 'h-12 text-[20px]',
        smallButtonContent: 'space-x-2 px-3',
        mediumButtonContent: 'space-x-3 px-4',
        largeButtonContent: 'space-x-4 px-5',
      },
      text: 'submit',
    },
    clickBuyUrl: 'https://click-motors.click-buy.clickdealer.dev/vrm-lookup',
  },
};

const meta: Meta<typeof RegInput> = {
  title: 'Blocks/Reg Input',
  component: RegInput,
  tags: ['autodocs'],
};

export default meta;
