import { HeadingSize } from '@components/blocks/Heading';
import headingVariant1 from '@components/blocks/Heading/variants/1';
import headingsVariant1 from '@components/blocks/Headings/variants/1';
import subheadingVariant1 from '@components/blocks/Subheading/variants/1';
import textContentVariant1 from '@components/blocks/TextContent/variants/1';
import type { Meta, StoryObj } from '@storybook/react';

import OpeningTimes, { OpeningTimesClasses } from '../OpeningTimes';
import openingTimesVariant1 from '../variants/1';

type Story = StoryObj<typeof OpeningTimes>;

export const PrimaryOpeningTimes: Story = {
  args: {
    classes: openingTimesVariant1.classes,
    items: [
      {
        id: 'ed053ae1-bb9c-4623-b81b-3ab6ffe0fc49',
        label: 'Weekdays',
        value: '09:00 - 18:00',
        closed: false,
        icon: 'fa-solid fa-calendar',
        classes: openingTimesVariant1.itemClasses,
      },
      {
        id: 'f9bca332-2b0e-4317-a70f-c90cc69ae064',
        label: 'Weekend',
        value: 'Closed',
        closed: true,
        icon: 'fa-solid fa-calendar',
        classes: openingTimesVariant1.itemClasses,
      },
    ],
    headings: {
      id: '32d7594f-c552-4d66-af59-76989301dc22',
      name: 'Headings',
      classes: headingsVariant1.classes,
      heading: {
        // @ts-ignore
        id: 'ff2f69cd-da97-45f7-858f-1e5ab8fe704d',
        name: 'Heading',
        text: 'These are our opening times',
        classes: headingVariant1.classes,
        size: HeadingSize.Medium,
      },
      subheading: {
        //@ts-ignore
        id: '3c523bfe-e3e7-4c07-b8fb-a8fc407fa5d4',
        name: 'Subheading',
        text: 'Please take notice of the closed dates',
        classes: subheadingVariant1.classes,
      },
    },
    contentArea1: [
      {
        id: '30983646-139f-437e-b165-548f1b95beb5',
        name: 'TextContent',
        //@ts-ignore
        content:
          '<p><span>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam posuere erat in ipsum facilisis elementum. Pellentesque vel consectetur neque, id consectetur ipsum. Quisque lacinia sapien lectus, vitae sagittis orci rhoncus nec. Sed varius iaculis velit ac pellentesque. Nullam in magna sodales, tempus felis in, finibus diam. Nunc id porta sapien.</span></p>',
        classes: textContentVariant1.classes,
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
