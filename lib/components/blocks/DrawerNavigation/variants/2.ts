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
  l1_list: tw`mx-8 flex flex-col items-stretch justify-center space-y-2 overflow-y-auto border-t border-divider py-2`,
  l1_listItem: tw`border-b border-divider pb-2`,
  l1_linkContainer: {
    default: tw`flex items-stretch justify-between space-x-2 text-accent`,
    hover: tw`hover:text-primary`,
  },
  l1_linkContainerSelected: tw`selected text-primary`,
  l1_link: tw`inline-block flex-grow py-2 font-semibold`,
  l1_toggleButton: {
    default: tw`w-10 transform text-accent`,
    hover: tw`hover:bg-accent-contrast/20`,
  },
  l1_toggleButtonExpanded: tw`rotate-180`,

  // LIST LEVEL 2
  l2_list: tw`mt-2 space-y-2 text-base`,
  l2_listCollapsed: tw`hidden`,
  l2_linkContainer: {
    default: tw`flex items-stretch justify-between space-x-2 text-accent`,
    hover: tw`[&:not(.selected)]:hover:text-primary`,
  },
  l2_linkContainerSelected: tw`selected text-primary`,
  l2_link: tw`inline-block flex-grow px-4 py-2 font-semibold`,
  l2_toggleButton: {
    default: tw`w-10 transform text-accent/80`,
    hover: tw`hover:bg-accent-contrast/50`,
  },
  l2_toggleButtonExpanded: tw`rotate-180`,

  // LIST LEVEL 3
  l3_list: tw`space-y-2`,
  l3_listExpanded: tw`block`,
  l3_listCollapsed: tw`hidden`,
  l3_listItem: tw``,
  l3_link: {
    default: tw`block px-4 py-2 pl-8 font-semibold text-accent/80`,
    hover: tw`[&:not(.selected)]:hover:text-primary`,
  },
  l3_linkSelected: tw`selected text-primary`,
};

const drawerNavigationVariant: DrawerNavigationVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default drawerNavigationVariant;
