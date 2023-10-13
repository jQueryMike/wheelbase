import type { Meta, StoryObj } from '@storybook/react';

import buttonVariant1 from '../../Button/variants/1';
import headingVariant1 from '../../Heading/variants/1';
import headingsVariant1 from '../../Headings/variants/1';
import subheadingVariant1 from '../../Subheading/variants/1';
import textContentVariant1 from '../../TextContent/variants/1';
import Hero from '../Hero';
import heroVariant1 from '../variants/1';

type Story = StoryObj<typeof Hero>;

const args = {
  classes: heroVariant1.classes,
  headings: {
    classes: headingsVariant1.classes,
    heading: {
      text: 'This is a Hero block',
      classes: headingVariant1.classes,
    },
    subheading: {
      text: 'Lorem ipsum dolor sit amet',
      classes: subheadingVariant1.classes,
    },
  },
  contentArea: [
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
  image: {
    src: 'audi-rs-q3.jpg',
    alt: 'Audi RS Q3',
    fill: true,
  },
};

export const Variant1: Story = { args };

const meta: Meta<typeof Hero> = {
  title: 'Blocks/Heros',
  component: Hero,
  tags: ['autodocs'],
};

export default meta;
