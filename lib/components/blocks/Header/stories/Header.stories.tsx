import type { Meta, StoryObj } from '@storybook/react';

import Header from '../Header';
import headerClasses1 from '../themes/1/Header.classes';
import headerClasses2 from '../themes/2/Header.classes';
import './Header.scss';
import { contactItems, headerCta, navItems } from './HeaderItems';

type Story = StoryObj<typeof Header>;

export const Header1: Story = {
  args: {
    classes: headerClasses1,
    logo: {
      src: '/motor-moolah-logo.svg',
      alt: 'Motor Moolah',
      fill: false,
      width: 1,
      height: 1,
    },
    headerCta,
    menuIcon: {},
  },
};

export const Header2: Story = {
  args: {
    classes: headerClasses2,
    logo: {
      src: '/logo.svg',
      alt: 'Click Dealer',
      fill: false,
      width: 1,
      height: 1,
    },
    navItems,
    contactItems,
    menuIcon: {},
  },
};

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
