import { HeadingSize } from '@components/blocks/Heading';
import type { Meta, StoryObj } from '@storybook/react';

import OpeningTimes, { OpeningTimesClasses } from '../OpeningTimes';

type Story = StoryObj<typeof OpeningTimes>;

export const PrimaryOpeningTimes: Story = {
  args: {
    classes: {
      root: 'space-y-4 @container @xl:space-y-6',
      contentAreaContainer: 'space-y-4 @xl:space-y-6',
      itemsContainer: 'space-y-2 py-6',
    },
    items: [
      {
        id: 'ed053ae1-bb9c-4623-b81b-3ab6ffe0fc49',
        label: 'Weekdays',
        value: '09:00 - 18:00',
        closed: false,
        icon: 'fa-solid fa-calendar',
        classes: {
          itemRoot: 'text-primary flex items-center justify-between space-x-2 rounded px-3 py-2',
          itemLabel: 'grow',
          itemIcon: 'text-accent',
          itemValue: 'text-right',
          itemClosed: 'opacity-50',
          itemHighlight: 'bg-body-light',
        },
      },
      {
        id: 'f9bca332-2b0e-4317-a70f-c90cc69ae064',
        label: 'Weekend',
        value: 'Closed',
        closed: true,
        icon: 'fa-solid fa-calendar',
        classes: {
          itemRoot: 'text-primary flex items-center justify-between space-x-2 rounded px-3 py-2',
          itemLabel: 'grow',
          itemIcon: 'text-accent',
          itemValue: 'text-right',
          itemClosed: 'opacity-50',
          itemHighlight: 'bg-body-light',
        },
      },
    ],
    headings: {
      id: '32d7594f-c552-4d66-af59-76989301dc22',
      name: 'Headings',
      classes: {
        root: 'space-y-1',
      },
      heading: {
        // @ts-ignore
        id: 'ff2f69cd-da97-45f7-858f-1e5ab8fe704d',
        name: 'Heading',
        text: 'These are our opening times',
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
        //@ts-ignore
        id: '3c523bfe-e3e7-4c07-b8fb-a8fc407fa5d4',
        name: 'Subheading',
        text: 'Please take notice of the closed dates',
        classes: {
          root: '@container',
          subheading: 'text-accent text-[18px] font-semibold lg:text-[20px]',
        },
      },
    },
    contentArea1: [
      {
        id: '30983646-139f-437e-b165-548f1b95beb5',
        name: 'TextContent',
        //@ts-ignore
        content:
          '<p><span>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam posuere erat in ipsum facilisis elementum. Pellentesque vel consectetur neque, id consectetur ipsum. Quisque lacinia sapien lectus, vitae sagittis orci rhoncus nec. Sed varius iaculis velit ac pellentesque. Nullam in magna sodales, tempus felis in, finibus diam. Nunc id porta sapien.</span></p>',
        classes: {
          textContent: 'prose max-w-full',
        },
      },
    ],
  },
};

const meta: Meta<typeof OpeningTimes> = {
  title: 'Blocks/Opening Times',
  component: OpeningTimes,
  tags: ['autodocs'],
};

export default meta;
