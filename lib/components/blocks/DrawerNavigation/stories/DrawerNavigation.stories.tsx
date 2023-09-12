import type { Meta, StoryObj } from '@storybook/react';

import DrawerNavigation, { DrawerNavigationClasses } from '../DrawerNavigation';
import drawerNavigationVariant1 from '../variants/1';

type Story = StoryObj<typeof DrawerNavigation>;

export const Variant1: Story = {
  args: {
    classes: drawerNavigationVariant1.classes,
    menuButtonIcon: 'fa-solid fa-bars',
    closeButtonIcon: 'fa-solid fa-xmark',
    toggleButtonIcon: 'fa-solid fa-arrow-down',
    items: [
      {
        id: '6b57afa5-a42b-4bc3-bc88-d4afddfbd97f',
        href: '/',
        text: 'Home',
        children: [
          {
            id: '5b52ara5-a43a-43c3-ba38-f46sgrnhj597p',
            href: '/contact-us',
            text: 'Contact Us',
            children: [],
          },
        ],
      },
    ],
  },
};

const meta: Meta<typeof DrawerNavigation> = {
  title: 'Blocks/Drawer Navigation',
  component: DrawerNavigation,
  tags: ['autodocs'],
};

export default meta;
