import { HeadingSize } from '@components/blocks/Heading';
import type { Meta, StoryObj } from '@storybook/react';

import buttonVariant1 from '../../Button/variants/1';
import headingVariant1 from '../../Heading/variants/1';
import headingsVariant1 from '../../Headings/variants/1';
import subheadingVariant1 from '../../Subheading/variants/1';
import textContentVariant1 from '../../TextContent/variants/1';
import Accordion from '../Accordion';
import accordionVariant1 from '../variants/1';

type Story = StoryObj<typeof Accordion>;

const args = {
  classes: accordionVariant1.classes,
  items: [
    {
      id: '1',
      classes: accordionVariant1.itemClasses,
      heading: {
        id: '1',
        name: 'Heading',
        text: 'Suspendisse non nisl sit',
        classes: headingVariant1.classes,
        size: HeadingSize.Medium,
      },
      contentArea: [
        {
          id: '1',
          name: 'TextContent',
          content:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nisi at nisl ultricies molestie. Aenean pulvinar ac elit volutpat ullamcorper. Duis scelerisque, justo id interdum malesuada, urna purus tincidunt lectus, sit amet sodales erat elit in quam.</p>',
          classes: textContentVariant1.classes,
        },
      ],
    },
    {
      id: '2',
      classes: accordionVariant1.itemClasses,
      heading: {
        id: '2',
        name: 'Heading',
        text: 'Aenean vulputate eleifend tellus',
        classes: headingVariant1.classes,
        size: HeadingSize.Medium,
      },
      contentArea: [
        {
          id: '2',
          name: 'TextContent',
          content:
            '<p>Maecenas nec odio et ante tincidunt tempus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Suspendisse potenti. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Nulla consequat massa quis enim.</p>',
          classes: textContentVariant1.classes,
        },
      ],
    },
    {
      id: '3',
      classes: accordionVariant1.itemClasses,
      heading: {
        id: '2',
        name: 'Heading',
        text: 'Curabitur a felis in',
        classes: headingVariant1.classes,
        size: HeadingSize.Medium,
      },
      contentArea: [
        {
          id: '2',
          name: 'TextContent',
          content:
            '<p>Curabitur turpis. Aenean imperdiet. Praesent blandit laoreet nibh. Morbi mollis tellus ac sapien. Vivamus laoreet. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.</p>',
          classes: textContentVariant1.classes,
        },
      ],
    },
  ],
  headings: {
    classes: headingsVariant1.classes,
    heading: {
      text: 'This is an Accordion block',
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
      name: 'Button',
      href: '/test',
      text: 'Lorem ipsum',
      classes: buttonVariant1.classes,
    },
  ],
};

export const Variant1: Story = { args };

const meta: Meta<typeof Accordion> = {
  title: 'Blocks/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
