import drawerNavigationVariant1 from '@components/blocks/DrawerNavigation/variants/1';
import imageVariant1 from '@components/blocks/Image/variants/1';
import linkListVariant1 from '@components/blocks/LinkList/variants/1';
import type { Meta, StoryObj } from '@storybook/react';

import Header, { HeaderClasses } from '../Header';
import headerVariant1 from '../variants/1';

type Story = StoryObj<typeof Header>;

export const PrimaryHeader: Story = {
  args: {
    classes: headerVariant1.classes,
    logo: {
      id: '78971cf5-d3fb-464c-a996-081c62bc8121',
      classes: imageVariant1.classes,
      src: 'http://localhost:30590/media/4mojo4h1/1580721197179.jpg',
      alt: '1580721197179',
      fill: true,
      style: {
        objectFit: 'contain',
        objectPosition: 'left center',
      },
    },
    logoHref: '/click',
    contentArea: [
      {
        id: '2919ec68-1eb6-478a-ab4a-2e4ecad61ffb',
        name: 'LinkList',
        classes: linkListVariant1.classes,
        items: [
          {
            id: 'a5af4e15-8cc5-4806-8f13-0c0d8aac7b09',
            target: '_self',
            href: '',
            text: 'Home',
          },
          {
            id: 'ccd5b8b6-7662-4f48-b782-5415f3e5b63b',
            target: '_self',
            href: '/contact-us',
            text: 'Contact Us',
          },
          {
            id: '20a9c18f-3062-4b85-86be-2aef238f6371',
            target: '_self',
            href: '/about-us',
            text: 'About Us',
          },
        ],
      },
    ],
    enableScrollTransition: true,
    scrollTransitionPosition: 0,
    drawerNavigationProps: {
      classes: drawerNavigationVariant1.classes,
      menuButtonIcon: 'fa-solid fa-bars',
      toggleButtonIcon: 'fa-solid fa-arrow-up',
      items: [
        {
          id: '6b57afa5-a42b-4bc3-bc88-d4afddfbd97f',
          href: '/',
          text: 'Home',
          children: [],
        },
      ],
    },
  },
};

const meta: Meta<typeof Header> = {
  title: 'Blocks/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
