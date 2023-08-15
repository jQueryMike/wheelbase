import { HeadingSize } from '@components/blocks/Heading';
import type { Meta, StoryObj } from '@storybook/react';

import ContactForm, { ContactFormClasses } from '../ContactForm';

type Story = StoryObj<typeof ContactForm>;

export const PrimaryContactForm: Story = {
  args: {
    classes: {
      root: 'space-y-4 @container @xl:space-y-6',
      contentAreaContainer: 'space-y-4 @xl:space-y-6',
      form: 'max-w-[700px] space-y-4 rounded-lg border border-divider p-4 @xl:space-y-6 @xl:p-5 @3xl:p-6 @5xl:p-8',
      formField: 'space-y-2',
      label: 'font-semibold text-heading',
      inputContainer: 'flex overflow-hidden rounded-lg border border-divider focus-within:border-primary',
      input: 'flex-grow px-4 py-2 text-[16px] outline-none',
    },
    headings: {
      id: '0528c8d7-a0eb-4e8d-8f78-c75806fbc026',
      name: 'Headings',
      classes: {
        root: 'space-y-1',
      },
      heading: {
        // @ts-ignore
        id: '967d676c-0fc1-4361-8ef6-4e7599774ad8',
        name: 'Heading',
        text: 'Contact Us',
        classes: {
          heading: 'font-heading font-bold leading-tight text-heading',
          headingExtraLarge: 'text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]',
          headingLarge: 'text-[22px] sm:text-[25px] md:text-[25px] lg:text-[28px] xl:text-[32px]',
          headingMedium: 'text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px]',
          headingSmall: 'text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px]',
          headingExtraSmall: 'text-[14px] sm:text-[16px] lg:text-[18px]',
        },
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
        classes: {
          textContent: 'prose max-w-full',
        },
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
  },
};

const meta: Meta<typeof ContactForm> = {
  title: 'Blocks/Contact Form',
  component: ContactForm,
  tags: ['autodocs'],
};

export default meta;
