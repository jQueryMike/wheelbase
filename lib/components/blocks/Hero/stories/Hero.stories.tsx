import { HeadingSize, HeadingTag } from '@components/blocks/Heading';
import type { Meta, StoryObj } from '@storybook/react';

import Heros, { HeroClasses } from '../Hero';

type Story = StoryObj<typeof Heros>;

export const PrimaryHeros: Story = {
  args: {
    classes: {
      root: 'relative flex min-h-[400px] w-full items-stretch bg-body-light @5xl:min-h-[500px]',
      container: 'container mx-auto flex items-stretch',
      heroContentContainer:
        'relative z-10 flex flex-col justify-center space-y-4 bg-gradient-to-b from-white/50 to-white p-6 @xl:space-y-6 @xl:p-8 @5xl:max-w-[50%] @5xl:p-12',
      contentAreaContainer: 'space-y-4 @xl:space-y-6',
      imageContainer: 'absolute inset-0 z-0',
    },
    headings: {
      id: '5a1ba3ef-e1f0-4646-a716-d8c83ed64cdc',
      name: 'Headings',
      classes: {
        root: 'space-y-1',
      },
      heading: {
        // @ts-ignore
        id: 'eff3db22-8daa-4153-ac78-0099918f7f46',
        name: 'Heading',
        text: 'This is a hero component',
        classes: {
          heading: 'font-heading font-bold leading-tight text-heading',
          headingExtraLarge: 'text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]',
          headingLarge: 'text-[22px] sm:text-[25px] md:text-[25px] lg:text-[28px] xl:text-[32px]',
          headingMedium: 'text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px]',
          headingSmall: 'text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px]',
          headingExtraSmall: 'text-[14px] sm:text-[16px] lg:text-[18px]',
        },
        tag: HeadingTag.H1,
        size: HeadingSize.Medium,
      },
      subheading: {
        // @ts-ignore
        id: 'b3426446-699a-45b9-a0d4-122e674ff886',
        name: 'Subheading',
        text: 'This is a subheading',
        classes: {
          root: '@container',
          subheading: 'text-accent text-[18px] font-semibold lg:text-[20px]',
        },
      },
    },
    image: {
      id: 'cf8dec67-e931-4b7c-9f76-67d4f98266ac',
      src: 'http://localhost:30590/media/mhwi1tzr/cat-dog-_.jpg',
      alt: 'Cat DOG',
      fill: true,
      style: {
        objectFit: 'cover',
      },
      classes: {
        image: 'rounded-lg',
      },
    },
    contentArea: [
      {
        id: 'da16056b-ae12-4255-bfb5-d8539b970139',
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

const meta: Meta<typeof Heros> = {
  title: 'Blocks/Heros',
  component: Heros,
  tags: ['autodocs'],
};

export default meta;
