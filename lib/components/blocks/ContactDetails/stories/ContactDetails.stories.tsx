import { HeadingSize } from '@components/blocks/Heading';
import headingVariant1 from '@components/blocks/Heading/variants/1';
import headingsVariant1 from '@components/blocks/Headings/variants/1';
import subheadingVariant1 from '@components/blocks/Subheading/variants/1';
import textContentVariant1 from '@components/blocks/TextContent/variants/1';
import type { Meta, StoryObj } from '@storybook/react';

import ContactDetails, { ContactDetailsClasses } from '../ContactDetails';
import contactDetailsVariant1 from '../variants/1';

type Story = StoryObj<typeof ContactDetails>;

export const Variant1: Story = {
  args: {
    classes: contactDetailsVariant1.classes,
    headings: {
      id: '9f5c44c6-ea35-4130-8966-3cb0f1b30d44',
      name: 'Headings',
      classes: headingsVariant1.classes,
      heading: {
        // @ts-ignore
        id: 'b5ec5d51-7343-499d-bff5-3675f0b1b24d',
        name: 'Heading',
        text: 'Contact Details',
        classes: headingVariant1.classes,
        size: HeadingSize.Medium,
      },
      subheading: {
        // @ts-ignore
        id: '2afe7a54-26e0-4d80-9a1d-6cc441b7c7ce',
        name: 'Subheading',
        text: 'This is how to reach us',
        classes: subheadingVariant1.classes,
      },
    },
    contactItems: [
      {
        id: 'c530e3fe-51b1-43d4-b932-3dd9fc6c6280',
        label: '@clickdealer',
        href: '/twitter',
        classes: contactDetailsVariant1.itemClasses,
        icon: 'fa-brands fa-twitter',
      },
      {
        id: '94423397-51c6-49b1-a0e2-6fa5116b4e93',
        label: '07987333222',
        href: '/phone',
        classes: contactDetailsVariant1.itemClasses,
        icon: 'fa-solid fa-phone',
      },
      {
        id: 'a79d4ebf-c3ab-4191-8844-e66f6f2b9d6e',
        label: 'Clickdealer LTD',
        href: '/facebook',
        classes: contactDetailsVariant1.itemClasses,
        icon: 'fa-brands fa-facebook',
      },
    ],
    contentArea1: [
      {
        id: 'fd67b3d4-a7e8-4698-897f-495e0a59e05b',
        name: 'TextContent',
        // @ts-ignore
        content:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nisi at nisl ultricies molestie. Aenean pulvinar ac elit volutpat ullamcorper. Duis scelerisque, justo id interdum malesuada, urna purus tincidunt lectus, sit amet sodales erat elit in quam.</p>',
        classes: textContentVariant1.classes,
      },
    ],
  },
};

const meta: Meta<typeof ContactDetails> = {
  title: 'Blocks/Contact Details',
  component: ContactDetails,
  tags: ['autodocs'],
};

export default meta;
