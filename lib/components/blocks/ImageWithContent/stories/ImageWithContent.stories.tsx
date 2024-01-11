import type { Meta, StoryObj } from '@storybook/react';

import buttonVariant1 from '../../Button/variants/1';
import headingVariant1 from '../../../../../app/_components/atoms/Heading/variants/1';
import headingsVariant1 from '../../Headings/variants/1';
import subheadingVariant1 from '../../../../../app/_components/atoms/Subheading/variants/1';
import textContentVariant1 from '../../../../../app/_components/atoms/Text/variants/1';
import ImageWithContent from '../ImageWithContent';
import imageWithContentVariant1 from '../variants/1';

type Story = StoryObj<typeof ImageWithContent>;

const args = {
  classes: imageWithContentVariant1.classes,
  headings: {
    classes: headingsVariant1.classes,
    heading: {
      text: 'This is an Image with Content block',
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

const meta: Meta<typeof ImageWithContent> = {
  title: 'Blocks/Image With Content',
  component: ImageWithContent,
  tags: ['autodocs'],
};

export default meta;
