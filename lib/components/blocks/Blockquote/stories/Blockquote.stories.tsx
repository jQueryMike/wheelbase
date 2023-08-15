import type { Meta, StoryObj } from '@storybook/react';

import Blockquote, { BlockquoteClasses } from '../Blockquote';

type Story = StoryObj<typeof Blockquote>;

export const PrimaryBlockquote: Story = {
  args: {
    classes: {
      root: 'space-y-4 @container @xl:space-y-6',
      contentAreaContainer: 'space-y-4 @xl:space-y-6',
      blockquoteContainer: 'space-y-4 py-6 @container',
      blockquote:
        'bg-body-light prose relative max-w-full rounded-lg p-4 after:bg-body-light after:absolute after:-bottom-2 after:left-12 after:h-4 after:w-4 after:-translate-x-1/2 after:rotate-45 after:transform @xl:p-5 @3xl:p-6 @5xl:p-8',
      blockquoteName: 'text-heading text-[16px] font-bold sm:text-[16px] md:text-[18px] lg:text-[20px]',
    },
    blockquoteName: 'John Costello',
    blockquoteText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nisi at nisl ultricies molestie. Aenean pulvinar ac elit volutpat ullamcorper. Duis scelerisque, justo id interdum malesuada, urna purus tincidunt lectus, sit amet sodales erat elit in quam.',
    headings: {
      heading: {
        text: 'This is our blockquote',
        classes: {
          heading:
            'font-heading font-bold leading-tight text-heading text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px]',
        },
      },
    },
    contentArea1: [
      {
        id: '0d5103d1-25eb-491d-99b5-e4f67bf6fccc',
        name: 'TextContent',
        //@ts-ignore
        content:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nisi at nisl ultricies molestie. Aenean pulvinar ac elit volutpat ullamcorper. Duis scelerisque, justo id interdum malesuada, urna purus tincidunt lectus, sit amet sodales erat elit in quam.</p>',
        classes: {
          textContent: 'prose max-w-full',
        },
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
