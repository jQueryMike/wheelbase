import type { Meta, StoryObj } from '@storybook/react';

import Features, { FeaturesItem } from '../Features';
import featuresVariant1 from '../variants/1';

type Story = StoryObj<typeof Features>;

const featureItems = [
  {
    id: 'feature1',
    heading: { text: 'Processing' },
    content: { content: '<p>Faster processing to help you build your applications quicker and more efficiently.</p>' },
    icon: 'fa-regular fa-microchip',
  },
  {
    id: 'feature2',
    heading: { text: 'Configuration' },
    content: {
      content: '<p>Easy to understand configuration options to help tailor your applications to suit your needs.</p>',
    },
    icon: 'fa-regular fa-gear',
  },
  {
    id: 'feature3',
    heading: { text: 'Bundling' },
    content: {
      content: '<p>Bundling functionality to help you build your applications with ease and sustainability.</p>',
    },
    icon: 'fa-regular fa-box',
  },
  {
    id: 'feature4',
    heading: { text: 'Database' },
    content: {
      content: '<p>Take advantage of unlimited storage and data retrieval from our global CDN date centres.</p>',
    },
    icon: 'fa-regular fa-database',
  },
  {
    id: 'feature5',
    heading: { text: 'Integrations' },
    content: { content: '<p>Simple, configurable integrations with your favourite apps and services.</p>' },
    icon: 'fa-regular fa-puzzle-piece',
  },
  {
    id: 'feature6',
    heading: { text: 'Speed' },
    content: { content: '<p>Our tools have been crafted for maximum speed and efficiency.</p>' },
    icon: 'fa-regular fa-bolt',
  },
];

const itemClasses1 = [
  'text-pink-600 bg-pink-300/25',
  'text-cyan-600 bg-cyan-300/25',
  'text-amber-600 bg-amber-300/25',
  'text-violet-600 bg-violet-300/25',
  'text-red-600 bg-red-300/25',
  'text-green-600 bg-green-300/25',
];

// const itemClasses2 = [
//   'text-pink-600',
//   'text-cyan-600',
//   'text-amber-600',
//   'text-violet-600',
//   'text-red-600',
//   'text-green-600',
// ];

export const Features1: Story = {
  args: {
    classes: featuresVariant1.classes,
    endContent: [],
    heading: { text: 'Features' },
    items: featureItems.map((item: FeaturesItem, index: number) => ({
      ...item,
      classes: {
        ...featuresVariant1.itemClasses,
        iconContainer: `${featuresVariant1.itemClasses?.iconContainer} ${itemClasses1[index]}`,
      },
    })),
    startContent: [],
  },
};

// export const Features2: Story = {
//   args: {
//     classes: featuresClasses2,
//     endContent: [],
//     heading: { text: 'Features' },
//     items: featureItems.map((item: FeaturesItem, index: number) => ({
//       ...item,
//       classes: {
//         ...featuresItemClasses2,
//         iconContainer: `${featuresItemClasses2.iconContainer} ${itemClasses2[index]}`,
//       },
//     })),
//     startContent: [],
//   },
// };

// export const Features3: Story = {
//   args: {
//     classes: featuresClasses3,
//     endContent: [],
//     items: [
//       {
//         id: 'step1',
//         heading: { text: 'Enter your vehicle registration' },
//         indicator: '1',
//         classes: featuresItemClasses3,
//         image: {
//           src: '/image1.svg',
//           alt: 'Enter your vehicle registration',
//           fill: false,
//           width: 100,
//           height: 100,
//         },
//       },
//       {
//         id: 'step2',
//         heading: { text: 'Appriase your car by sending images to get your guaranteed price' },
//         indicator: '2',
//         classes: featuresItemClasses3,
//         image: {
//           src: '/image2.svg',
//           alt: 'Appriase your car by sending images to get your guaranteed price',
//           fill: false,
//           width: 100,
//           height: 100,
//         },
//       },
//       {
//         id: 'step3',
//         heading: { text: "We can collect nationwide - for free. Or, we'll pay you to drop it off" },
//         indicator: '3',
//         classes: featuresItemClasses3,
//         image: {
//           src: '/image3.svg',
//           alt: "We can collect nationwide - for free. Or, we'll pay you to drop it off",
//           fill: false,
//           width: 100,
//           height: 100,
//         },
//       },
//       {
//         id: 'step4',
//         heading: { text: "Instant payment - we use fast transfer, you'll be paid in seconds" },
//         indicator: '4',
//         classes: featuresItemClasses3,
//         image: {
//           src: '/image4.svg',
//           alt: "Instant payment - we use fast transfer, you'll be paid in seconds",
//           fill: false,
//           width: 100,
//           height: 100,
//         },
//       },
//     ],
//   },
// };

const meta: Meta<typeof Features> = {
  title: 'Blocks/Features',
  component: Features,
  tags: ['autodocs'],
};

export default meta;
