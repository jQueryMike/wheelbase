import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { PrimaryNavigationClasses } from '../PrimaryNavigation';
import PrimaryNavigationVariant from './PrimaryNavigationVariant';

const location = 'PrimaryNavigation/variants/1';

let classes: PrimaryNavigationClasses<ClassesProperty> = {};

classes = {
  root: 'text-black',
  toggleButtonContainer: tw`block`,
  burgerIcon: tw`h-12 w-12`,
  navContainer: {
    default: tw`fixed bottom-0 top-0 flex w-[300px] items-center justify-center overflow-hidden bg-blue-950 p-4 transition duration-[400]`,
    md: tw`float-right md:relative md:w-auto md:overflow-auto`,
  },
  navContainerClosed: { default: tw`-left-[300px]`, md: tw`md:left-auto` },
  navContainerOpen: tw`left-0`,
  menuItem: tw`relative transition delay-150 ease-in-out`,
  menuContainer: { md: tw`md:flex` },
  nav: { default: tw`block grow`, md: tw`md:flex` },
  li: tw`mb-2`,
  liCurrent: tw`pl-2`,
  link: tw`block px-4 py-2 text-white hover:bg-blue-800`,
  linkCurrent: tw`bg-green-600`,
  subrouteMenu: tw`block w-auto px-4 py-2 text-white hover:bg-blue-800`,
  subMenuIconOpen: tw`float-right ml-2`,
  subMenuIconClosed: tw`float-right ml-2 rotate-180`,
  subMenuContainer: tw`block w-auto bg-blue-950`,
  subMenuItemContainer: tw`px-4 py-2 hover:bg-gray-400`,
  subMenuItem: tw`ml-2 text-white`,
  closeMenuContainer: tw`bottom-0 justify-center self-end text-xl text-white`,
};

const primaryNavigationVariant: PrimaryNavigationVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default primaryNavigationVariant;
