import type { Meta, StoryObj } from '@storybook/react';

import buttonVariant1 from '../../Button/variants/1';
import headingVariant1 from '../../../../../app/_components/atoms/Heading/variants/1';
import headingsVariant1 from '../../Headings/variants/1';
import subheadingVariant1 from '../../../../../app/_components/atoms/Subheading/variants/1';
import textContentVariant1 from '../../../../../app/_components/atoms/Text/variants/1';
import Map from '../Map';
import mapVariant1 from '../variants/1';

type Story = StoryObj<typeof Map>;

const args = {
  classes: mapVariant1.classes,
  headings: {
    classes: headingsVariant1.classes,
    heading: {
      text: 'This is a Map block',
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
      id: '3',
      name: 'Button',
      href: '/test',
      text: 'Lorem ipsum',
      classes: buttonVariant1.classes,
    },
  ],
  googleMapLink:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9602.137808042271!2d-2.1839248!3d53.0107548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a6836a6dbdc67%3A0x221ce2abd2bb1b75!2sClick%20Dealer%20Ltd!5e0!3m2!1sen!2suk!4v1694424769178!5m2!1sen!2suk',
};

export const Variant1: Story = { args };

const meta: Meta<typeof Map> = {
  title: 'Blocks/Map',
  component: Map,
  tags: ['autodocs'],
};

export default meta;
