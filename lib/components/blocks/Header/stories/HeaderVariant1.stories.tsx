import type { Meta } from '@storybook/react';
import { twMerge } from 'tailwind-merge';

import drawerNavigationVariant1 from '../../DrawerNavigation/variants/1';
import linkListVariant1 from '../../LinkList/variants/1';
import Header, { HeaderProps } from '../Header';
import headerVariant1 from '../variants/1';

const args = {
  classes: {
    ...headerVariant1.classes,
    container: twMerge(`${headerVariant1.classes?.container} lg:justify-between`),
    contentAreaContainer: twMerge(`${headerVariant1.classes?.contentAreaContainer} hidden lg:flex`),
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
      classes: linkListVariant1.classes,
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
    classes: drawerNavigationVariant1.classes,
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

export const Variant1 = (headerProps: HeaderProps) => (
  <div className="h-[calc(100vh-100px)]">
    <Header {...headerProps} />
  </div>
);

const meta: Meta<typeof Header> = {
  title: 'Blocks/Header',
  component: Variant1,
  tags: ['autodocs'],
  args,
};

export default meta;
