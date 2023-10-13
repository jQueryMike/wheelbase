import type { Meta } from '@storybook/react';

import DrawerNavigation, { DrawerNavigationProps } from '../DrawerNavigation';
import drawerNavigationVariant2 from '../variants/2';

const args = {
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
};

export const Variant2 = (drawerNavigationProps: DrawerNavigationProps) => (
  <div className="h-[calc(100vh-100px)]">
    <DrawerNavigation {...drawerNavigationProps} />
  </div>
);

const meta: Meta<typeof DrawerNavigation> = {
  title: 'Blocks/Drawer Navigation',
  component: DrawerNavigation,
  tags: ['autodocs'],
  args,
};

export default meta;
