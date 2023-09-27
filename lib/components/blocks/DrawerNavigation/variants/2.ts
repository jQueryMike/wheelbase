import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { DrawerNavigationClasses } from '../DrawerNavigation';
import DrawerNavigationVariant from './DrawerNavigationVariant';

const location = 'DrawerNavigation/variants/2';

let classes: DrawerNavigationClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  menuButtonContainer: tw``,
  menuButton: {
    default: tw`text-[32px] text-accent transition duration-150`,
    hover: tw`hover:text-primary`,
  },
  menuButtonIcon: tw``,
  menuButtonText: tw`hidden`,

  navContainer: tw`fixed top-0 z-50 h-screen w-screen transition-all duration-0`,
  navBackdrop: tw`absolute inset-0 bg-white/60 transition-all duration-150`,
  nav: tw`fixed bottom-0 top-0 z-50 w-full min-w-[320px] max-w-[400px] items-center justify-stretch bg-body py-20 transition-all duration-150`,

  navContainerClosed: tw`right-full shadow-none delay-150`,
  navBackdropClosed: tw` opacity-0`,
  navClosed: tw`-right-[400px]`,

  navContainerOpen: tw`right-0 delay-0`,
  navBackdropOpen: tw`opacity-100 delay-0`,
  navOpen: tw`right-0 shadow-xl`,

  closeButtonContainer: tw`absolute right-5 top-5`,
  closeButton: {
    default: tw`flex h-8 w-8 items-center justify-center text-[32px] text-accent transition duration-150`,
    hover: tw`hover:text-primary`,
  },
  closeButtonIcon: tw``,
  closeButtonText: tw`hidden`,

  // LIST LEVEL !
  list1: tw`mx-8 flex flex-col items-stretch justify-center space-y-2 overflow-y-auto border-t border-divider`,
  listItem1: tw`border-b border-divider`,
  linkContainer1: {
    default: tw`flex items-stretch justify-between space-x-2 text-accent`,
    hover: tw`hover:text-primary`,
  },
  linkContainer1Selected: tw`text-primary`,
  link1: tw`inline-block flex-grow py-2 font-semibold`,
  toggleButton1: {
    default: tw`w-10 transform rounded-lg text-accent-contrast`,
    hover: tw`hover:bg-accent-contrast/20`,
  },
  toggleButton1Expanded: tw`rotate-180`,

  // LIST LEVEL 2
  list2: tw`-mx-8 mt-2 space-y-2 bg-accent-contrast/10 px-8 py-4 text-base`,
  list2Collapsed: tw`hidden`,
  linkContainer2: {
    default: tw`flex items-stretch justify-between space-x-2 rounded-lg text-primary-contrast`,
    hover: tw`[&:not(.selected)]:hover:bg-primary-contrast/10`,
  },
  linkContainer2Selected: tw`selected bg-accent text-accent-contrast`,
  link2: tw`inline-block flex-grow px-4 py-2 pl-8 font-semibold`,
  toggleButton2: {
    default: tw`w-10 transform rounded-lg text-primary-contrast`,
    hover: tw`hover:bg-primary-contrast/10`,
  },
  toggleButton2Expanded: tw`rotate-180`,

  // LIST LEVEL 3
  list3: tw`mt-2 space-y-2`,
  list3Expanded: tw`block`,
  list3Collapsed: tw`hidden`,
  listItem3: tw``,
  link3: {
    default: tw`block rounded-lg px-3 py-2 pl-12 font-semibold text-primary-contrast/80`,
    hover: tw`[&:not(.selected)]:hover:bg-primary-contrast/10 [&:not(.selected)]:hover:text-primary-contrast`,
  },
  link3Selected: tw`selected bg-accent text-accent-contrast`,
};

const drawerNavigationVariant: DrawerNavigationVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default drawerNavigationVariant;
