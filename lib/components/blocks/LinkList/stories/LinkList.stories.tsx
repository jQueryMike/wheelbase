import type { Meta, StoryObj } from '@storybook/react';

import LinkList, { LinkListClasses } from '../LinkList';
import linkListVariant1 from '../variants/1';

type Story = StoryObj<typeof LinkList>;

export const PrimaryLinkList: Story = {
  args: {
    classes: linkListVariant1.classes,
    items: [
      {
        id: 'dc312773-2aea-4aaa-b3ad-597ced8523cb',
        target: '_self',
        text: 'Home',
      },
      {
        id: '6731f118-8e80-4d41-8910-c3b6de7869f7',
        target: '_self',
        href: '/about-us',
        text: 'About Us',
      },
      {
        id: '7ea87490-71d9-4c06-8879-eb830c2e60e8',
        target: '_self',
        href: '/contact-us',
        text: 'Contact Us',
      },
      {
        id: '89f257f9-fc2f-40de-8e8d-26945efbcaf2',
        target: '_self',
        href: '/gallery',
        text: 'Gallery',
      },
    ],
  },
};

const meta: Meta<typeof LinkList> = {
  title: 'Blocks/Link List',
  component: LinkList,
  tags: ['autodocs'],
};

export default meta;
