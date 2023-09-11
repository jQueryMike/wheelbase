import { HeadingSize, HeadingTag } from '@components/blocks/Heading';
import headingVariant1 from '@components/blocks/Heading/variants/1';
import headingsVariant1 from '@components/blocks/Headings/variants/1';
import imageVariant1 from '@components/blocks/Image/variants/1';
import subheadingVariant1 from '@components/blocks/Subheading/variants/1';
import textContentVariant1 from '@components/blocks/TextContent/variants/1';
import type { Meta, StoryObj } from '@storybook/react';

import Heros, { HeroClasses } from '../Hero';
import heroVariant1 from '../variants/1';

type Story = StoryObj<typeof Heros>;

export const PrimaryHeros: Story = {
  args: {
    classes: heroVariant1.classes,
    headings: {
      id: '5a1ba3ef-e1f0-4646-a716-d8c83ed64cdc',
      name: 'Headings',
      classes: headingsVariant1.classes,
      heading: {
        // @ts-ignore
        id: 'eff3db22-8daa-4153-ac78-0099918f7f46',
        name: 'Heading',
        text: 'This is a hero component',
        classes: headingVariant1.classes,
        tag: HeadingTag.H1,
        size: HeadingSize.Medium,
      },
      subheading: {
        // @ts-ignore
        id: 'b3426446-699a-45b9-a0d4-122e674ff886',
        name: 'Subheading',
        text: 'This is a subheading',
        classes: subheadingVariant1.classes,
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
      classes: imageVariant1.classes,
    },
    contentArea: [
      {
        id: 'da16056b-ae12-4255-bfb5-d8539b970139',
        name: 'TextContent',
        //@ts-ignore
        content:
          '<p><span> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam posuere erat in ipsum facilisis elementum. Pellentesque vel consectetur neque, id consectetur ipsum. Quisque lacinia sapien lectus, vitae sagittis orci rhoncus nec. Sed varius iaculis velit ac pellentesque. Nullam in magna sodales, tempus felis in, finibus diam. Nunc id porta sapien.</span></p>',
        classes: textContentVariant1.classes,
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
