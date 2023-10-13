import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { DrawerNavigationClasses } from '../DrawerNavigation';
import DrawerNavigationVariant from './DrawerNavigationVariant';

const location = 'DrawerNavigation/variants/1';

let classes: DrawerNavigationClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  menuButtonContainer: tw``,
  menuButton: {
    default: tw`text-[32px] text-primary transition duration-150`,
    hover: tw`hover:text-accent`,
  },
  menuButtonIcon: tw``,
  menuButtonText: tw`hidden`,

  navContainer: tw`fixed top-0 z-50 h-screen w-screen transition-all duration-0`,
  navBackdrop: tw` absolute inset-0 bg-white/60 transition-all duration-150`,
  nav: tw`fixed bottom-0 top-0 z-50 w-full min-w-[300px] max-w-[400px] items-center justify-stretch bg-primary py-20 transition-all duration-150`,

  navContainerClosed: tw`left-full delay-150`,
  navBackdropClosed: tw` opacity-0`,
  navClosed: tw`-left-[400px]`,

  navContainerOpen: tw`left-0 delay-0`,
  navBackdropOpen: tw`opacity-100 delay-0`,
  navOpen: tw`left-0`,

  closeButtonContainer: tw`absolute right-5 top-5`,
  closeButton: {
    default: tw`flex h-10 w-10 items-center justify-center rounded-full bg-accent text-[22px] text-accent-contrast transition duration-150`,
    hover: tw`hover:bg-accent-light`,
  },
  closeButtonIcon: tw``,
  closeButtonText: tw`hidden`,

  // LIST LEVEL !
  l1_list: tw`flex h-full flex-col items-stretch justify-center space-y-2 overflow-y-auto px-8 text-lg`,
  l1_linkContainer: {
    default: tw`flex items-stretch justify-between space-x-2 rounded-lg text-primary-contrast`,
    hover: tw`hover:bg-accent hover:text-accent-contrast`,
  },
  l1_linkContainerSelected: tw`bg-accent text-accent-contrast`,
  l1_link: tw`inline-block flex-grow px-4 py-2 font-semibold`,
  l1_toggleButton: {
    default: tw`w-10 transform rounded-lg text-accent-contrast`,
    hover: tw`hover:bg-accent-contrast/20`,
  },
  l1_toggleButtonExpanded: tw`rotate-180`,

  // LIST LEVEL 2
  l2_list: tw`-mx-8 mt-2 space-y-2 bg-accent-contrast/10 px-8 py-4 text-base`,
  l2_listCollapsed: tw`hidden`,
  l2_linkContainer: {
    default: tw`flex items-stretch justify-between space-x-2 rounded-lg text-primary-contrast`,
    hover: tw`[&:not(.selected)]:hover:bg-primary-contrast/10`,
  },
  l2_linkContainerSelected: tw`selected bg-accent text-accent-contrast`,
  l2_link: tw`inline-block flex-grow px-4 py-2 pl-8 font-semibold`,
  l2_toggleButton: {
    default: tw`w-10 transform rounded-lg text-primary-contrast`,
    hover: tw`hover:bg-primary-contrast/10`,
  },
  l2_toggleButtonExpanded: tw`rotate-180`,

  // LIST LEVEL 3
  l3_list: tw`mt-2 space-y-2`,
  l3_listExpanded: tw`block`,
  l3_listCollapsed: tw`hidden`,
  l3_listItem: tw``,
  l3_link: {
    default: tw`text-primary-contrast/80 block rounded-lg px-3 py-2 pl-12 font-semibold`,
    hover: tw`[&:not(.selected)]:hover:bg-primary-contrast/10 [&:not(.selected)]:hover:text-primary-contrast`,
  },
  l3_linkSelected: tw`selected bg-accent text-accent-contrast`,
};

const drawerNavigationVariant: DrawerNavigationVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default drawerNavigationVariant;
