import { HeadingSize } from '@components/blocks/Heading';
import type { Meta, StoryObj } from '@storybook/react';

import ImageWithContent, { ImageWithContentClasses } from '../ImageWithContent';

type Story = StoryObj<typeof ImageWithContent>;

export const PrimaryImageWithContent: Story = {
  args: {
    classes: {
      root: 'flex flex-col items-center space-y-8 @container @xl:space-y-10 @3xl:space-y-12 @5xl:flex-row @5xl:space-x-16 @5xl:space-y-0',
      contentContainer: 'space-y-4 @xl:space-y-6 @5xl:w-[60%]',
      contentAreaContainer: 'space-y-4 @xl:space-y-6',
      imageContainer: 'relative aspect-[4/3] w-full @5xl:w-[40%]',
    },
    image: {
      id: 'cf8dec67-e931-4b7c-9f76-67d4f98266ac',
      src: 'http://localhost:30590/media/mhwi1tzr/cat-dog-_.jpg',
      alt: 'Cat DOG',
      fill: true,
      style: {
        objectFit: 'contain',
        objectPosition: 'right center',
      },
      classes: {
        image: 'rounded-lg',
      },
    },
    headings: {
      id: '69350c74-10d4-4d3e-ba6c-f6c6eb786dbd',
      name: 'Headings',
      classes: {
        root: 'space-y-1',
      },
      heading: {
        //@ts-ignore
        id: '8bf3e144-33ef-46ae-9453-c1cad34718d5',
        name: 'Heading',
        text: 'Image with Content',
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
    },
    contentArea: [
      {
        id: '65b4f71a-930a-46f3-afa5-6c31717c6a3f',
        name: 'TextContent',
        //@ts-ignore
        content:
          '<p><span> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam posuere erat in ipsum facilisis elementum. Pellentesque vel consectetur neque, id consectetur ipsum. Quisque lacinia sapien lectus, vitae sagittis orci rhoncus nec. Sed varius iaculis velit ac pellentesque. Nullam in magna sodales, tempus felis in, finibus diam. Nunc id porta sapien.</span></p>',
        classes: {
          textContent: 'prose max-w-full',
        },
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
