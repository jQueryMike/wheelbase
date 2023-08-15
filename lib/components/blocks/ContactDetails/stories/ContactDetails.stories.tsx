import { HeadingSize } from '@components/blocks/Heading';
import type { Meta, StoryObj } from '@storybook/react';

import ContactDetails, { ContactDetailsClasses } from '../ContactDetails';

type Story = StoryObj<typeof ContactDetails>;

export const PrimaryContactDetails: Story = {
  args: {
    classes: {
      root: 'w-[100%]',
    },
    headings: {
      id: '9f5c44c6-ea35-4130-8966-3cb0f1b30d44',
      name: 'Headings',
      classes: {
        root: 'space-y-1',
      },
      heading: {
        // @ts-ignore
        id: 'b5ec5d51-7343-499d-bff5-3675f0b1b24d',
        name: 'Heading',
        text: 'Contact Details',
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
      subheading: {
        // @ts-ignore
        id: '2afe7a54-26e0-4d80-9a1d-6cc441b7c7ce',
        name: 'Subheading',
        text: 'This is how to reach us',
        classes: {
          root: '@container',
          subheading: 'text-accent text-[18px] font-semibold lg:text-[20px]',
        },
      },
    },
    contactItems: [
      {
        id: 'c530e3fe-51b1-43d4-b932-3dd9fc6c6280',
        label: '@clickdealer',
        href: '/twitter',
        classes: {
          root: 'inline-flex flex-row items-center gap-2 rounded-xl bg-slate-100 pb-2 pl-2 pr-4 pt-2 text-[var(--primary)] hover:text-[var(--accent)] mx-2',
          icon: 'fill-white text-white',
          label: 'text-lg font-bold not-italic',
        },
        icon: 'fa-brands fa-twitter',
      },
      {
        id: '94423397-51c6-49b1-a0e2-6fa5116b4e93',
        label: '07987333222',
        href: '/phone',
        classes: {
          root: 'inline-flex flex-row items-center gap-2 rounded-xl bg-slate-100 pb-2 pl-2 pr-4 pt-2 text-[var(--primary)] hover:text-[var(--accent)] mx-2',
          icon: 'fill-white text-white',
          label: 'text-lg font-bold not-italic',
        },
        icon: 'fa-solid fa-phone',
      },
      {
        id: 'a79d4ebf-c3ab-4191-8844-e66f6f2b9d6e',
        label: 'Clickdealer LTD',
        href: '/facebook',
        classes: {
          root: 'inline-flex flex-row items-center gap-2 rounded-xl bg-slate-100 pb-2 pl-2 pr-4 pt-2 text-[var(--primary)] hover:text-[var(--accent)] mx-2',
          icon: 'fill-white text-white',
          label: 'text-lg font-bold not-italic',
        },
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
        classes: {
          textContent: 'prose max-w-full',
        },
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
