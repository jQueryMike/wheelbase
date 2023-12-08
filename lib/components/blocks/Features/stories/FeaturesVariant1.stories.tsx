import type { Meta, StoryObj } from '@storybook/react';

import buttonVariant1 from '../../Button/variants/1';
import { HeadingSize } from '../../Heading';
import headingVariant1 from '../../Heading/variants/1';
import headingsVariant1 from '../../Headings/variants/1';
import subheadingVariant1 from '../../Subheading/variants/1';
import textContentVariant1 from '../../Text/variants/1';
import Features from '../Features';
import featuresVariant1 from '../variants/1';

type Story = StoryObj<typeof Features>;

const args = {
  classes: featuresVariant1.classes,
  headings: {
    classes: headingsVariant1.classes,
    heading: {
      text: 'This is a Features block',
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
      id: '2',
      name: 'Button',
      href: '/test',
      text: 'Lorem ipsum',
      classes: buttonVariant1.classes,
    },
  ],
  items: [
    {
      id: 'feature1',
      classes: featuresVariant1.itemClasses,
      contentArea: [
        {
          id: '1',
          name: 'Heading',
          text: 'Processing',
          classes: headingVariant1.classes,
          size: HeadingSize.Medium,
        },
        {
          id: '2',
          name: 'TextContent',
          content: '<p>Faster processing to help you build your applications quicker and more efficiently.</p>',
          classes: textContentVariant1.classes,
        },
      ],
      icon: 'fa-regular fa-microchip',
    },
    {
      id: 'feature2',
      classes: featuresVariant1.itemClasses,
      contentArea: [
        {
          id: '1',
          name: 'Heading',
          text: 'Configuration',
          classes: headingVariant1.classes,
          size: HeadingSize.Medium,
        },
        {
          id: '2',
          name: 'TextContent',
          content: '<p>Faster processing to help you build your applications quicker and more efficiently.</p>',
          classes: textContentVariant1.classes,
        },
      ],
      icon: 'fa-regular fa-gear',
    },
    {
      id: 'feature3',
      classes: featuresVariant1.itemClasses,
      contentArea: [
        {
          id: '1',
          name: 'Heading',
          text: 'Bundling',
          classes: headingVariant1.classes,
          size: HeadingSize.Medium,
        },
        {
          id: '2',
          name: 'TextContent',
          content: '<p>Bundling functionality to help you build your applications with ease and sustainability.</p>',
          classes: textContentVariant1.classes,
        },
      ],
      icon: 'fa-regular fa-box',
    },
    {
      id: 'feature4',
      classes: featuresVariant1.itemClasses,
      contentArea: [
        {
          id: '1',
          name: 'Heading',
          text: 'Database',
          classes: headingVariant1.classes,
          size: HeadingSize.Medium,
        },
        {
          id: '2',
          name: 'TextContent',
          content: '<p>Take advantage of unlimited storage and data retrieval from our global CDN date centres.</p>',
          classes: textContentVariant1.classes,
        },
      ],
      icon: 'fa-regular fa-database',
    },
    {
      id: 'feature5',
      classes: featuresVariant1.itemClasses,
      contentArea: [
        {
          id: '1',
          name: 'Heading',
          text: 'Integrations',
          classes: headingVariant1.classes,
          size: HeadingSize.Medium,
        },
        {
          id: '2',
          name: 'TextContent',
          content: '<p>Simple, configurable integrations with your favourite apps and services.</p>',
          classes: textContentVariant1.classes,
        },
      ],
      icon: 'fa-regular fa-puzzle-piece',
    },
    {
      id: 'feature6',
      classes: featuresVariant1.itemClasses,
      contentArea: [
        {
          id: '1',
          name: 'Heading',
          text: 'Speed',
          classes: headingVariant1.classes,
          size: HeadingSize.Medium,
        },
        {
          id: '2',
          name: 'TextContent',
          content: '<p>Our tools have been crafted for maximum speed and efficiency.</p>',
          classes: textContentVariant1.classes,
        },
      ],
      icon: 'fa-regular fa-bolt',
    },
  ],
};

export const Variant1: Story = { args };

const meta: Meta<typeof Features> = {
  title: 'Blocks/Features',
  component: Features,
  tags: ['autodocs'],
};

export default meta;
