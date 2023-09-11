import type { Meta, StoryObj } from '@storybook/react';

import buttonVariant1 from '../../Button/variants/1';
import headingVariant1 from '../../Heading/variants/1';
import headingsVariant1 from '../../Headings/variants/1';
import textContentVariant1 from '../../TextContent/variants/1';
import Address from '../Address';
import addressVariant1 from '../variants/1';

type Story = StoryObj<typeof Address>;

export const Variant1: Story = {
  args: {
    classes: addressVariant1.classes,
    address: 'Winton House,<br/>Stoke Road,<br/>Stoke-on-Trent<br/>ST4 2RW',
    headings: {
      classes: headingsVariant1.classes,
      heading: {
        text: 'Our Address',
        classes: headingVariant1.classes,
      },
    },
    contentArea1: [
      {
        id: '1',
        name: 'TextContent',
        content: '<p>Some text here</p>',
        classes: textContentVariant1.classes,
      },
    ],
    contentArea2: [
      {
        id: '1',
        name: 'TextContent',
        content: '<p>Some text here</p>',
        classes: textContentVariant1.classes,
      },
      {
        id: '2',
        name: 'Button',
        href: '/test',
        text: 'Test Button',
        classes: buttonVariant1.classes,
      },
    ],
  },
};

const meta: Meta<typeof Address> = {
  title: 'Blocks/Address',
  component: Address,
  tags: ['autodocs'],
};

export default meta;
