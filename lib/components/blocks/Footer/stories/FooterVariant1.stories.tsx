import type { Meta, StoryObj } from '@storybook/react';
import { twMerge } from 'tailwind-merge';

import textContentVariant1 from '../../TextContent/variants/1';
import Footer from '../Footer';
import footerVariant1 from '../variants/1';

type Story = StoryObj<typeof Footer>;

const args = {
  classes: footerVariant1.classes,
  infoItems: [
    {
      id: '1',
      classes: footerVariant1.infoItemClasses,
      label: 'Company No',
      value: '123456789',
    },
    {
      id: '1',
      classes: footerVariant1.infoItemClasses,
      label: 'FCA No',
      value: '123456789',
    },
    {
      id: '1',
      classes: footerVariant1.infoItemClasses,
      label: 'VAT No',
      value: '123456789',
    },
  ],
  contentArea: [
    {
      id: '1',
      name: 'TextContent',
      classes: {
        ...textContentVariant1.classes,
        textContent: twMerge(
          `${textContentVariant1.classes?.textContent} prose-primary-contrast md:text-center prose-sm max-w-[800px] mx-auto`,
        ),
      },
      content:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nisi. Aenean pulvinar ac elit volutpat ullamcorper. Duis scelerisque, justo id interdum malesuada, urna purus tincidunt lectus, sit amet sodales erat elit in quam.</p>',
    },
  ],
  socialNavigationItems: [
    {
      id: '1',
      classes: footerVariant1.socialNavigationItemClasses,
      icon: 'fa-brands fa-facebook',
      href: '/test',
      label: 'Facebook',
    },
    {
      id: '2',
      classes: footerVariant1.socialNavigationItemClasses,
      icon: 'fa-brands fa-twitter',
      href: '/test',
      label: 'Twitter',
    },
    {
      id: '3',
      classes: footerVariant1.socialNavigationItemClasses,
      icon: 'fa-brands fa-instagram',
      href: '/test',
      label: 'Instagram',
    },
  ],
  legalNavigationItems: [
    {
      id: '1',
      classes: footerVariant1.legalNavigationItemClasses,
      href: '/test',
      label: 'Legal Link 1',
    },
    {
      id: '2',
      classes: footerVariant1.legalNavigationItemClasses,
      href: '/test',
      label: 'Legal Link 2',
    },
  ],
  logo: {
    src: '/click-dealer-logo-white.svg',
    alt: 'Click Motors',
    fill: true,
  },
  logoHref: '/test',
};

export const Variant1: Story = { args };

const meta: Meta<typeof Footer> = {
  title: 'Blocks/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;
