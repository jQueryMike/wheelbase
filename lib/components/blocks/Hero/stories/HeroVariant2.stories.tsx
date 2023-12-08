import type { Meta, StoryObj } from '@storybook/react';
import { twMerge } from 'tailwind-merge';

import buttonVariant2 from '../../Button/variants/2';
import { HeadingSize } from '../../Heading';
import headingVariant2 from '../../Heading/variants/2';
import headingsVariant2 from '../../Headings/variants/2';
import subheadingVariant2 from '../../Subheading/variants/2';
import textContentVariant1 from '../../Text/variants/1';
import Hero from '../Hero';
import heroVariant2 from '../variants/2';

type Story = StoryObj<typeof Hero>;

const args = {
  classes: heroVariant2.classes,
  headings: {
    classes: headingsVariant2.classes,
    heading: {
      size: HeadingSize.ExtraLarge,
      text: 'This is a Hero block',
      classes: {
        ...headingVariant2.classes,
        heading: twMerge(`${headingVariant2.classes?.heading} text-secondary-contrast`),
      },
    },
    subheading: {
      text: 'Lorem ipsum dolor sit amet',
      classes: {
        ...subheadingVariant2.classes,
        subheading: twMerge(`${subheadingVariant2.classes?.subheading} text-secondary-contrast/80`),
      },
    },
  },
  contentArea: [
    {
      id: '1',
      name: 'TextContent',
      content:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nisi at nisl ultricies molestie. Aenean pulvinar ac elit volutpat ullamcorper. Duis scelerisque, justo id interdum malesuada, urna purus tincidunt lectus, sit amet sodales erat elit in quam.</p>',
      classes: {
        ...textContentVariant1.classes,
        textContent: twMerge(`${textContentVariant1.classes?.textContent} prose-secondary-contrast`),
      },
    },
    {
      id: '3',
      name: 'Button',
      href: '/test',
      text: 'Lorem ipsum',
      classes: buttonVariant2.classes,
    },
  ],

  image: {
    src: 'woman-on-mobile.webp',
    alt: 'Woman on phone',
    width: 514,
    height: 800,
  },
};

export const Variant2: Story = { args };

const meta: Meta<typeof Hero> = {
  title: 'Blocks/Heros',
  component: Hero,
  tags: ['autodocs'],
};

export default meta;
