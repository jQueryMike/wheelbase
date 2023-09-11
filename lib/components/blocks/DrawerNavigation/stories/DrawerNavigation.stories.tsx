import type { Meta, StoryObj } from '@storybook/react';

import DrawerNavigation, { DrawerNavigationClasses } from '../DrawerNavigation';
import drawerNavigationVariant1 from '../variants/1';

type Story = StoryObj<typeof DrawerNavigation>;

export const PrimaryDrawerNavigation: Story = {
  args: {
    classes: drawerNavigationVariant1.classes,
    menuButtonIcon: 'fa-solid fa-bars',
    closeButtonIcon: 'fa-solid fa-xmark',
    toggleButtonIcon: 'fa-brands fa-twitter',
    items: [
      {
        id: '6b57afa5-a42b-4bc3-bc88-d4afddfbd97f',
        href: '/',
        text: 'Home',
        children: [],
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
