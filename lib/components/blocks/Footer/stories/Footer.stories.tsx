import type { Meta, StoryObj } from '@storybook/react';

import Footer from '../Footer';
import footerClasses001 from '../themes/1/Footer.classes';
import footerClasses002 from '../themes/2/Footer.classes';
import infoItems from './InfoItems';
import navItems from './NavItems';
import socialItems from './SocialItems';

type Story = StoryObj<typeof Footer>;

export const Footer001: Story = {
  args: {
    classes: footerClasses001,
    infoItems,
    content: `<p>Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Vivamus euismod mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Fusce neque. Etiam ut purus mattis mauris sodales aliquam.</p>`,
    socialItems,
    navItems,
    copyright: '© 2023',
    image: {
      src: '/click-dealer-logo-white.svg',
      alt: 'Click Dealer',
      fill: false,
      width: 385.53,
      height: 81.37,
    },
  },
};

export const Footer002: Story = {
  args: {
    classes: footerClasses002,
    navItems,
    copyright: '© 2023',
    image: {
      src: '/click-dealer-logo-white.svg',
      alt: 'Click Dealer',
      fill: false,
      width: 385.53,
      height: 81.37,
    },
  },
};

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;
