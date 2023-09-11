import { HeadingSize } from '@components/blocks/Heading';
import headingVariant1 from '@components/blocks/Heading/variants/1';
import headingsVariant1 from '@components/blocks/Headings/variants/1';
import subheadingVariant1 from '@components/blocks/Subheading/variants/1';
import textContentVariant1 from '@components/blocks/TextContent/variants/1';
import type { Meta, StoryObj } from '@storybook/react';

import Map, { MapClasses } from '../Map';
import mapVariant1 from '../variants/1';

type Story = StoryObj<typeof Map>;

export const PrimaryMap: Story = {
  args: {
    classes: mapVariant1.classes,
    headings: {
      id: 'c9c6d683-8379-428d-8c74-e81f95713047',
      name: 'Headings',
      classes: headingsVariant1.classes,
      heading: {
        // @ts-ignore
        id: '02db6a46-07ca-4aa4-a66c-0b0570a0acfc',
        name: 'Heading',
        text: 'Map',
        classes: headingVariant1.classes,
        size: HeadingSize.Medium,
      },
      subheading: {
        // @ts-ignore
        id: 'f44484dd-86c7-4c07-b237-611851fbd835',
        name: 'Subheading',
        text: 'This is our location',
        classes: subheadingVariant1.classes,
      },
    },
    contentArea1: [
      {
        id: 'd82150da-1e06-4ae2-8c30-97be6851bcfb',
        name: 'TextContent',
        // @ts-ignore
        content:
          '<div>\n<div>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam posuere erat in ipsum facilisis elementum. Pellentesque vel consectetur neque, id consectetur ipsum. Quisque lacinia sapien lectus, vitae sagittis orci rhoncus nec. Sed varius iaculis velit ac pellentesque. Nullam in magna sodales, tempus felis in, finibus diam. Nunc id porta sapien</div>\n</div>',
        classes: textContentVariant1.classes,
      },
    ],
    googleMapLink:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9602.137808042271!2d-2.1839248!3d53.0107548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a6836a6dbdc67%3A0x221ce2abd2bb1b75!2sClick%20Dealer%20Ltd!5e0!3m2!1sen!2suk!4v1694424769178!5m2!1sen!2suk',
  },
};

const meta: Meta<typeof Map> = {
  title: 'Blocks/Map',
  component: Map,
  tags: ['autodocs'],
};

export default meta;
