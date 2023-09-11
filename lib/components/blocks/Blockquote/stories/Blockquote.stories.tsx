import type { Meta, StoryObj } from '@storybook/react';

import headingVariant1 from '../../Heading/variants/1';
import textContentVariant1 from '../../TextContent/variants/1';
import Blockquote, { BlockquoteClasses } from '../Blockquote';
import blockquoteVariant1 from '../variants/1';

type Story = StoryObj<typeof Blockquote>;

export const PrimaryBlockquote: Story = {
  args: {
    classes: blockquoteVariant1.classes,
    blockquoteName: 'John Costello',
    blockquoteText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nisi at nisl ultricies molestie. Aenean pulvinar ac elit volutpat ullamcorper. Duis scelerisque, justo id interdum malesuada, urna purus tincidunt lectus, sit amet sodales erat elit in quam.',
    headings: {
      heading: {
        text: 'This is our blockquote',
        classes: headingVariant1.classes,
      },
    },
    contentArea1: [
      {
        id: '0d5103d1-25eb-491d-99b5-e4f67bf6fccc',
        name: 'TextContent',
        //@ts-ignore
        content:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nisi at nisl ultricies molestie. Aenean pulvinar ac elit volutpat ullamcorper. Duis scelerisque, justo id interdum malesuada, urna purus tincidunt lectus, sit amet sodales erat elit in quam.</p>',
        classes: textContentVariant1.classes,
      },
    ],
  },
};

const meta: Meta<typeof Blockquote> = {
  title: 'Blocks/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
};

export default meta;
