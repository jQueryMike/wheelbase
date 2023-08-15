import type { Meta, StoryObj } from '@storybook/react';

import Address, { AddressClasses } from '../Address';

type Story = StoryObj<typeof Address>;

export const PrimaryAddress: Story = {
  args: {
    classes: {
      root: 'space-y-4 @container @xl:space-y-6',
      headingsContainer:
        'font-heading font-bold leading-tight text-heading text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px]',
      contentAreaContainer: 'space-y-4 @xl:space-y-6',
      addressContainer: 'space-y-2 py-6',
      address: 'text-primary text-[16px] font-semibold sm:text-[16px] md:text-[18px] lg:text-[20px]',
    },
    address: 'Winton House, Stoke Rd, Stoke-on-Trent ST4 2RW',
    headings: {
      heading: {
        text: 'Our Address',
      },
    },
  },
};

const meta: Meta<typeof Address> = {
  title: 'Blocks/Address',
  component: Address,
  tags: ['autodocs'],
};

export default meta;
