import type { Meta, StoryObj } from '@storybook/react';

import buttonVariant1 from '../../Button/variants/1';
import headingVariant1 from '../../Heading/variants/1';
import headingsVariant1 from '../../Headings/variants/1';
import subheadingVariant1 from '../../Subheading/variants/1';
import textContentVariant1 from '../../TextContent/variants/1';
import Accordion from '../Accordion';
import accordionVariant1 from '../variants/1';
import items from './items';

type Story = StoryObj<typeof Accordion>;

export const Variant1: Story = {
  args: {
    classes: accordionVariant1.classes,
    items,
    headings: {
      classes: headingsVariant1.classes,
      heading: {
        text: 'Accordion',
        classes: headingVariant1.classes,
      },
      subheading: {
        text: 'Please check our selection',
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
        text: 'Find out more',
        classes: buttonVariant1.classes,
      },
    ],
  },
};

const meta: Meta<typeof Accordion> = {
  title: 'Blocks/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
