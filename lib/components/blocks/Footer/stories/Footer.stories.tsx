import imageVariant1 from '@components/blocks/Image/variants/1';
import textContentVariant1 from '@components/blocks/TextContent/variants/1';
import type { Meta, StoryObj } from '@storybook/react';

import Footer, { FooterClasses } from '../Footer';
import footerVariant1 from '../variants/1';

type Story = StoryObj<typeof Footer>;

export const PrimaryFooter: Story = {
  args: {
    classes: footerVariant1.classes,
    infoItems: [
      {
        id: '154214d9-0cbf-4614-b2f7-966c23106d6d',
        classes: footerVariant1.infoItemClasses,
        label: 'Company No',
        value: '127381276',
      },
      {
        id: '85ca09c8-ca4c-48b7-82d5-b175f1a21f9c',
        classes: footerVariant1.infoItemClasses,
        label: 'FCA No',
        value: '142352523',
      },
      {
        id: '3be26853-4948-48cc-95d6-3c68e9c1f43c',
        classes: footerVariant1.infoItemClasses,
        label: 'VAT No',
        value: '342432342',
      },
    ],
    contentArea: [
      {
        id: 'a0e98aad-34b8-446c-a3b2-2a2e2130c136',
        name: 'TextContent',
        classes: textContentVariant1.classes,
        content:
          '<p>Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Vivamus euismod mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Fusce neque. Etiam ut purus mattis mauris sodales aliquam.</p>',
      },
    ],
    socialNavigationItems: [
      {
        id: '03ddacf2-22b3-4aaa-80d9-7b29b8d235f7',
        classes: footerVariant1.socialNavigationItemClasses,
        icon: 'fa-brands fa-facebook',
        href: '/facebook',
        label: 'Facebook',
      },
      {
        id: '38536bfd-0fe7-4e6a-b7ac-16662018da68',
        classes: footerVariant1.socialNavigationItemClasses,
        icon: 'fa-brands fa-twitter',
        href: '/twitter',
        label: 'Twitter',
      },
      {
        id: '90b96cad-d679-4543-97f8-59baba6081d6',
        classes: footerVariant1.socialNavigationItemClasses,
        icon: 'fa-brands fa-instagram',
        href: '/instagram',
        label: 'Instagram',
      },
    ],
    legalNavigationItems: [
      {
        id: 'f064d482-ad4d-4874-a88a-0231abcbf424',
        classes: footerVariant1.legalNavigationItemClasses,
        href: '/terms',
        label: 'T&Cs',
      },
      {
        id: 'aaa6bd61-c872-4636-ad94-51c4034b0cdd',
        classes: footerVariant1.legalNavigationItemClasses,
        href: '/terms2',
        label: 'Terms of Use',
      },
    ],
    logo: {
      id: '78971cf5-d3fb-464c-a996-081c62bc8121',
      classes: imageVariant1.classes,
      src: 'http://localhost:30590/media/4mojo4h1/1580721197179.jpg',
      alt: '1580721197179',
      fill: true,
      style: {
        objectFit: 'contain',
      },
    },
    logoHref: '',
  },
};

const meta: Meta<typeof Footer> = {
  title: 'Blocks/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;
