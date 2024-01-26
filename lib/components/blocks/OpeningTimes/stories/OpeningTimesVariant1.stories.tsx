import type { Meta, StoryObj } from '@storybook/react';

import buttonVariant1 from '../../Button/variants/1';
import headingVariant1 from '../../../../../app/_components/atoms/Heading/variants/1';
import headingsVariant1 from '../../Headings/variants/1';
import subheadingVariant1 from '../../../../../app/_components/atoms/Subheading/variants/1';
import textContentVariant1 from '../../../../../app/_components/atoms/Text/variants/1';
import OpeningTimes from '../OpeningTimes';
import openingTimesVariant1 from '../variants/1';

type Story = StoryObj<typeof OpeningTimes>;

export const Variant1: Story = {
  args: {
    classes: openingTimesVariant1.classes,
    headings: {
      classes: headingsVariant1.classes,
      heading: {
        text: 'This is a Map block',
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
        id: '3',
        name: 'Button',
        href: '/test',
        text: 'Lorem ipsum',
        classes: buttonVariant1.classes,
      },
    ],
    items: [
      {
        id: '1',
        label: 'Monday',
        value: '09:00 - 18:00',
        closed: false,
        icon: 'fa-solid fa-calendar-alt',
        classes: openingTimesVariant1.itemClasses,
      },
      {
        id: '2',
        label: 'Tuesday',
        value: '09:00 - 18:00',
        closed: false,
        icon: 'fa-solid fa-calendar-alt',
        classes: openingTimesVariant1.itemClasses,
      },
      {
        id: '3',
        label: 'Wednesday',
        value: '09:00 - 18:00',
        closed: false,
        icon: 'fa-solid fa-calendar-alt',
        classes: openingTimesVariant1.itemClasses,
      },
      {
        id: '4',
        label: 'Thursday',
        value: '09:00 - 18:00',
        closed: false,
        icon: 'fa-solid fa-calendar-alt',
        classes: openingTimesVariant1.itemClasses,
      },
      {
        id: '5',
        label: 'Friday',
        value: 'Closed',
        closed: true,
        icon: 'fa-solid fa-calendar-alt',
        classes: openingTimesVariant1.itemClasses,
      },
      {
        id: '6',
        label: 'Saturday',
        value: 'Closed',
        closed: true,
        icon: 'fa-solid fa-calendar-alt',
        classes: openingTimesVariant1.itemClasses,
      },
      {
        id: '7',
        label: 'Sunday',
        value: 'By appointment only',
        closed: false,
        icon: 'fa-solid fa-calendar-alt',
        classes: openingTimesVariant1.itemClasses,
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
