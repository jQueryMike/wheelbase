import { HeadingSize } from '@components/blocks/Heading';
import headingVariant1 from '@components/blocks/Heading/variants/1';
import headingsVariant1 from '@components/blocks/Headings/variants/1';
import textContentVariant1 from '@components/blocks/TextContent/variants/1';
import type { Meta, StoryObj } from '@storybook/react';

import imageVariant1 from '../../Image/variants/1';
import ImageWithContent, { ImageWithContentClasses } from '../ImageWithContent';
import imageWithContentVariant1 from '../variants/1';

type Story = StoryObj<typeof ImageWithContent>;

export const Variant1: Story = {
  args: {
    classes: imageWithContentVariant1.classes,
    image: {
      id: 'c0001a0e-e242-46e9-a2cd-d046f08550e8',
      classes: imageVariant1.classes,
      src: 'http://localhost:30590/media/banabqcc/two-people-reaching-an-agreement-about-a-car-sale-royalty-free-image-1665671206.jpg',
      alt: 'Two People Reaching An Agreement About A Car Sale Royalty Free Image 1665671206',
      fill: true,
      style: {
        objectFit: 'contain',
        objectPosition: 'right center',
      },
    },
    headings: {
      classes: headingsVariant1.classes,
      heading: {
        text: "Get in gear with Click Motors - where every purchase comes with a 'click' of satisfaction!",
        classes: headingVariant1.classes,
        size: HeadingSize.Medium,
      },
    },
    contentArea: [
      {
        id: 'deef57b8-b6f7-4f42-a8f4-0a2e5cd22a49',
        name: 'TextContent',
        classes: textContentVariant1.classes,
        content:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget vestibulum sem. Suspendisse condimentum nibh diam, in blandit ipsum placerat et. Quisque fringilla nisl ac lacus pharetra sollicitudin. Suspendisse quis porta ex. Aliquam consequat urna et justo rhoncus semper. Curabitur posuere libero vitae pellentesque porttitor. Donec sit amet felis a ipsum placerat fermentum.</p>',
      },
    ],
  },
};

const meta: Meta<typeof ImageWithContent> = {
  title: 'Blocks/Image With Content',
  component: ImageWithContent,
  tags: ['autodocs'],
};

export default meta;
