import type { Meta, StoryObj } from '@storybook/react';

import Accordion, { AccordionClasses } from '../Accordion';
import { items } from './items';

type Story = StoryObj<typeof Accordion>;

export const PrimaryAccordion: Story = {
  args: {
    classes: {
      root: 'space-y-4 @container @xl:space-y-6',
      contentAreaContainer: 'space-y-4 @xl:space-y-6',
      itemsContainer: 'space-y-4 py-6',
      headingsContainer: '',
      itemContainer: '',
      contentArea1Container: '',
      contentArea2Container: '',
    },
    items: items,
    headings: {
      heading: {
        text: 'Accordion',
        classes: {
          heading:
            'font-heading font-bold leading-tight text-heading text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px]',
        },
      },
      subheading: {
        text: 'Please check our selection',
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
          root: '',
          textContent: 'prose max-w-full',
        },
      },
    ],
  },
};

const meta: Meta<typeof Accordion> = {
  title: 'Blocks/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
