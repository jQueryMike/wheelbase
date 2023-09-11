import buttonVariant1 from '@components/blocks/Button/variants/1';
import { HeadingSize } from '@components/blocks/Heading';
import headingVariant1 from '@components/blocks/Heading/variants/1';
import headingsVariant1 from '@components/blocks/Headings/variants/1';
import textContentVariant1 from '@components/blocks/TextContent/variants/1';
import type { Meta, StoryObj } from '@storybook/react';

import ContactForm, { ContactFormClasses } from '../ContactForm';
import contactFormVariant1 from '../variants/1';

type Story = StoryObj<typeof ContactForm>;

export const Variant1: Story = {
  args: {
    classes: contactFormVariant1.classes,
    headings: {
      id: '0528c8d7-a0eb-4e8d-8f78-c75806fbc026',
      name: 'Headings',
      classes: headingsVariant1.classes,
      heading: {
        // @ts-ignore
        id: '967d676c-0fc1-4361-8ef6-4e7599774ad8',
        name: 'Heading',
        text: 'Contact Us',
        classes: headingVariant1.classes,
        size: HeadingSize.Medium,
      },
    },
    contentArea1: [
      {
        id: '66eaccb7-6b68-41b9-8181-99aca5a81528',
        name: 'TextContent',
        //@ts-ignore
        content:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nisi at nisl ultricies molestie. Aenean pulvinar ac elit volutpat ullamcorper. Duis scelerisque, justo id interdum malesuada, urna purus tincidunt lectus, sit amet sodales erat elit in quam.</p>',
        classes: textContentVariant1.classes,
      },
    ],
    contentArea2: [],
    formContentArea: [],
    thankYouContentArea: [],
    nameLabel: 'Your name',
    telephoneLabel: 'Your phone number',
    emailLabel: 'Your email address',
    messageLabel: 'Your message',
    buttonText: 'Submit',
    recipients: [],
    submitButton: {
      target: '_self',
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
