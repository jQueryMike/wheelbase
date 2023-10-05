import type { Meta, StoryObj } from '@storybook/react';

import buttonVariant1 from '../../Button/variants/1';
import headingVariant1 from '../../Heading/variants/1';
import headingsVariant1 from '../../Headings/variants/1';
import subheadingVariant1 from '../../Subheading/variants/1';
import textContentVariant1 from '../../TextContent/variants/1';
import ContactForm from '../ContactForm';
import contactFormVariant1 from '../variants/1';

type Story = StoryObj<typeof ContactForm>;

export const Variant1: Story = {
  args: {
    classes: contactFormVariant1.classes,
    headings: {
      classes: headingsVariant1.classes,
      heading: {
        text: 'This is a Contact Form block',
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
    formContentArea: [
      {
        id: '1',
        name: 'Heading',
        text: 'Complete the form...',
        classes: headingVariant1.classes,
      },
      {
        id: '2',
        name: 'TextContent',
        content: '<p>Please complete the form. This text is customisable.</p>',
        classes: textContentVariant1.classes,
      },
    ],
    thankYouContentArea: [
      {
        id: '1',
        name: 'Heading',
        text: 'Thanks!',
        classes: headingVariant1.classes,
      },
      {
        id: '2',
        name: 'TextContent',
        content: '<p>We appreciate your enquiry. This text is customisable.</p>',
        classes: textContentVariant1.classes,
      },
    ],
    submitButton: {
      classes: buttonVariant1.classes,
      text: 'Send message',
    },
  },
};

const meta: Meta<typeof ContactForm> = {
  title: 'Blocks/Contact Form',
  component: ContactForm,
  tags: ['autodocs'],
};

export default meta;
