import type { Meta } from '@storybook/react';
import { twMerge } from 'tailwind-merge';

import drawerNavigationVariant2 from '../../DrawerNavigation/variants/2';
import linkListVariant2 from '../../LinkList/variants/2';
import Header, { HeaderProps } from '../Header';
import headerVariant2 from '../variants/2';

const args = {
  classes: {
    ...headerVariant2.classes,
    container: twMerge(`${headerVariant2.classes?.container} lg:justify-between`),
    contentAreaContainer: twMerge(`${headerVariant2.classes?.contentAreaContainer} hidden lg:flex`),
  },
  logo: {
    src: '/logo.svg',
    alt: 'Click Dealer',
    fill: true,
  },
  logoHref: '/test',
  contentArea: [
    {
      id: '1',
      name: 'LinkList',
      classes: linkListVariant2.classes,
      items: [
        {
          id: '1',
          href: '/',
          text: 'Home',
        },
        {
          id: '2',
          href: '/test',
          text: 'About Us',
        },
        {
          id: '3',
          href: '/test',
          text: 'Contact Us',
        },
      ],
    },
  ],
  enableScrollTransition: true,
  scrollTransitionPosition: 50,
  drawerNavigationProps: {
    classes: drawerNavigationVariant2.classes,
    menuButtonIcon: 'fa-regular fa-bars',
    closeButtonIcon: 'fa-regular fa-xmark',
    toggleButtonIcon: 'fa-regular fa-chevron-down',
    items: [
      {
        id: '1',
        href: '/',
        text: 'Home',
      },
      {
        id: '2',
        href: '/test',
        text: 'Sell your Car',
      },
      {
        id: '3',
        href: '/test',
        text: 'How it Works',
      },
      {
        id: '4',
        href: '/test',
        text: 'Freqently Asked Questions',
      },
      {
        id: '5',
        href: '/test',
        text: 'About Us',
        children: [
          {
            id: '1',
            href: '/test',
            text: 'Our History',
          },
          {
            id: '2',
            href: '/test',
            text: 'Careers',
            children: [
              {
                id: '1',
                href: '/test',
                text: 'Working with us',
              },
              {
                id: '2',
                href: '/test',
                text: 'Current Vacancies',
              },
            ],
          },
        ],
      },
      {
        id: '6',
        href: '/test',
        text: 'Contact Us',
      },
    ],
  },
};

export const Variant2 = (headerProps: HeaderProps) => (
  <div className="h-[calc(100vh-100px)]">
    <Header {...headerProps} />
  </div>
);

const meta: Meta<typeof Header> = {
  title: 'Blocks/Header',
  component: Variant2,
  tags: ['autodocs'],
  args,
};

export default meta;
