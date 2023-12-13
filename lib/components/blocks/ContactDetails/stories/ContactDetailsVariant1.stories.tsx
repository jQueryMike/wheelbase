import type { Meta, StoryObj } from '@storybook/react';

import buttonVariant1 from '../../Button/variants/1';
import headingVariant1 from '../../Heading/variants/1';
import headingsVariant1 from '../../Headings/variants/1';
import subheadingVariant1 from '../../Subheading/variants/1';
import textContentVariant1 from '../../Text/variants/1';
import ContactDetails from '../ContactDetails';
import contactDetailsVariant1 from '../variants/1';

type Story = StoryObj<typeof ContactDetails>;

const args = {
  classes: contactDetailsVariant1.classes,
  headings: {
    classes: headingsVariant1.classes,
    heading: {
      text: 'This is a Contact Details block',
      classes: headingVariant1.classes,
    },
    subheading: {
      text: 'Lorem ipsum dolor sit amet',
      classes: subheadingVariant1.classes,
    },
  },
  contentArea1: [
    {
      id: '1',
      name: 'TextContent',
      content:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nisi at nisl ultricies molestie. Aenean pulvinar ac elit volutpat ullamcorper. Duis scelerisque, justo id interdum malesuada, urna purus tincidunt lectus, sit amet sodales erat elit in quam.</p>',
      classes: textContentVariant1.classes,
    },
  ],
  contentArea2: [
    {
      id: '1',
      name: 'TextContent',
      content:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nisi at nisl ultricies molestie. Aenean pulvinar ac elit volutpat ullamcorper. Duis scelerisque, justo id interdum malesuada, urna purus tincidunt lectus, sit amet sodales erat elit in quam.</p>',
      classes: textContentVariant1.classes,
    },
    {
      id: '2',
      name: 'Button',
      href: '/test',
      text: 'Lorem ipsum',
      classes: buttonVariant1.classes,
    },
  ],
  contactItems: [
    {
      id: '1',
      label: '@clickdealer',
      href: '/twitter',
      classes: contactDetailsVariant1.itemClasses,
      icon: 'fa-brands fa-twitter',
    },
    {
      id: '2',
      label: '01782478220',
      href: '/phone',
      classes: contactDetailsVariant1.itemClasses,
      icon: 'fa-solid fa-phone',
    },
    {
      id: '3',
      label: 'Clickdealer',
      href: '/facebook',
      classes: contactDetailsVariant1.itemClasses,
      icon: 'fa-brands fa-facebook',
    },
  ],
};

export const Variant1: Story = { args };

const meta: Meta<typeof ContactDetails> = {
  title: 'Blocks/Contact Details',
  component: ContactDetails,
  tags: ['autodocs'],
};

export default meta;
