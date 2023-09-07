import type { Meta, StoryObj } from '@storybook/react';

import Header, { HeaderClasses } from '../Header';

type Story = StoryObj<typeof Header>;

export const PrimaryHeader: Story = {
  args: {
    classes: {
      root: 'fixed left-0 right-0 top-0 z-50 bg-body px-8 transition duration-150 md:px-12 lg:px-16',
      rootScrolled: 'shadow-xl',
      spacer: 'h-20',
      container: 'container mx-auto flex h-20 items-center justify-between',
      containerScrolled: '',
      drawerNavigationContainer: 'mr-10',
      logoContainer: 'relative h-12 w-72',
      contentAreaContainer: 'flex flex-grow items-center justify-end space-x-10',
    },
    logo: {
      id: '50403e66-7243-4b6c-864d-0f5484765c83',
      classes: {
        root: '',
        image: 'rounded-lg',
      },
      src: 'http://localhost:30590/media/ma5eaucd/shiba.jpg',
      alt: 'Shiba',
      fill: true,
      style: {
        objectFit: 'contain',
        objectPosition: 'left center',
      },
    },
    logoHref: '',
    contentArea: [],
    enableScrollTransition: false,
    scrollTransitionPosition: 0,
    drawerNavigationProps: {
      classes: {
        root: '',
        menuButtonContainer: '',
        menuButton: 'text-[32px] text-primary transition duration-150 hover:text-accent',
        menuButtonIcon: '',
        menuButtonText: 'hidden',
        navContainer: 'fixed top-0 z-50 h-screen w-screen transition-all duration-0',
        navBackdrop: 'absolute inset-0 bg-white/60 transition-all duration-150',
        nav: 'fixed bottom-0 top-0 z-50 w-full min-w-[300px] max-w-[400px] items-center justify-stretch bg-primary py-20 transition-all duration-150',
        navContainerClosed: 'left-full delay-150',
        navBackdropClosed: 'opacity-0',
        navClosed: '-left-[400px]',
        navContainerOpen: 'left-0 delay-0',
        navBackdropOpen: 'opacity-100 delay-0',
        navOpen: 'left-0',
        closeButtonContainer: 'absolute right-5 top-5',
        closeButton:
          'flex h-10 w-10 items-center justify-center rounded-full bg-accent text-[22px] text-accent-contrast transition duration-150 hover:bg-accent-light',
        closeButtonText: 'hidden',
        list1: 'flex h-full flex-col items-stretch justify-center space-y-2 overflow-y-auto px-8 text-lg',
        linkContainer1:
          'flex items-stretch justify-between space-x-2 rounded-lg text-primary-contrast hover:bg-accent hover:text-accent-contrast',
        linkContainer1Selected: 'bg-accent text-accent-contrast',
        link1: 'inline-block flex-grow px-4 py-2 font-semibold',
        toggleButton1: 'w-10 transform rounded-lg text-accent-contrast hover:bg-accent-contrast/20',
        toggleButton1Expanded: 'rotate-180',
        list2: '-mx-8 mt-2 space-y-2 bg-accent-contrast/10 px-8 py-4 text-base',
        list2Collapsed: 'hidden',
        linkContainer2:
          'flex items-stretch justify-between space-x-2 rounded-lg text-primary-contrast [&:not(.selected)]:hover:bg-primary-contrast/10',
        linkContainer2Selected: 'selected bg-accent text-accent-contrast',
        link2: 'inline-block flex-grow px-4 py-2 pl-8 font-semibold',
        toggleButton2: 'w-10 transform rounded-lg text-primary-contrast hover:bg-primary-contrast/10',
        toggleButton2Expanded: 'rotate-180',
        list3: 'mt-2 space-y-2',
        list3Expanded: 'block',
        list3Collapsed: 'hidden',
        listItem3: '',
        link3:
          'block rounded-lg px-3 py-2 pl-12 font-semibold text-primary-contrast/80 [&:not(.selected)]:hover:bg-primary-contrast/10 [&:not(.selected)]:hover:text-primary-contrast',
        link3Selected: 'selected bg-accent text-accent-contrast',
      },
      menuButtonIcon: 'fa-brands fa-twitter',
      menuButtonText: 'fa-brands fa-twitter',
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
  },
};

const meta: Meta<typeof Header> = {
  title: 'Blocks/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
