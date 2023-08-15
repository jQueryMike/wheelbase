import { HeadingSize } from '@components/blocks/Heading';
import type { Meta, StoryObj } from '@storybook/react';

import Map, { MapClasses } from '../Map';

type Story = StoryObj<typeof Map>;

export const PrimaryMap: Story = {
  args: {
    classes: {
      root: 'space-y-4 @container @xl:space-y-6',
      contentAreaContainer: 'space-y-4 @xl:space-y-6',
      mapContainer: 'aspect-video space-y-4 py-6',
    },
    headings: {
      id: 'c9c6d683-8379-428d-8c74-e81f95713047',
      name: 'Headings',
      classes: {
        root: 'space-y-1',
      },
      heading: {
        // @ts-ignore
        id: '02db6a46-07ca-4aa4-a66c-0b0570a0acfc',
        name: 'Heading',
        text: 'Map',
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
      subheading: {
        // @ts-ignore
        id: 'f44484dd-86c7-4c07-b237-611851fbd835',
        name: 'Subheading',
        text: 'This is our location',
        classes: {
          root: '@container',
          subheading: 'text-accent text-[18px] font-semibold lg:text-[20px]',
        },
      },
    },
    contentArea1: [
      {
        id: 'd82150da-1e06-4ae2-8c30-97be6851bcfb',
        name: 'TextContent',
        // @ts-ignore
        content:
          '<div>\n<div>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam posuere erat in ipsum facilisis elementum. Pellentesque vel consectetur neque, id consectetur ipsum. Quisque lacinia sapien lectus, vitae sagittis orci rhoncus nec. Sed varius iaculis velit ac pellentesque. Nullam in magna sodales, tempus felis in, finibus diam. Nunc id porta sapien</div>\n</div>',
        classes: {
          textContent: 'prose max-w-full',
        },
      },
    ],
    googleMapLink:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13044.686134314501!2d137.0879089!3d35.177277!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600367450203d0b3%3A0x36164b7a69c5128b!2sGhibli%20Park!5e0!3m2!1sen!2suk!4v1692090495336!5m2!1sen!2suk',
  },
};

const meta: Meta<typeof Map> = {
  title: 'Blocks/Map',
  component: Map,
  tags: ['autodocs'],
};

export default meta;
