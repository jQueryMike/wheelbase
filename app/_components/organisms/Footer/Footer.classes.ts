import { ClassesBuilder, tw } from '@utils';

import { FooterClasses } from './Footer.types';

const location = 'Footer/Footer.classes';

const classes: FooterClasses = {
  root: tw`blockPadding bg-primary`,
  footerContainer: tw`container mx-auto`,
  component: tw`space-y-6`,
  footerSlotOne: tw`space-y-6`,
  footerSlotTwo: tw`flex w-full flex-col items-center gap-6 border-t border-white border-opacity-20 pt-6 md:flex-row md:items-start md:justify-between`,
  contentContainer: tw`text-center`,
  content: tw`mx-auto max-w-4xl space-y-4 text-white text-opacity-60`,
  socialContainer: tw`flex justify-center`,
  socialItems: tw`flex gap-1.5`,
  socialItem: tw`inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-blue-500 transition hover:text-accent`,
  legalContainer: tw`flex flex-col items-center gap-6 md:items-start md:gap-3`,
  navContainer: tw`flex flex-wrap justify-center gap-y-3 divide-x divide-white divide-opacity-20`,
  navItem: tw`px-4 font-medium leading-none text-white transition first-of-type:pl-0 last-of-type:pr-0 hover:text-opacity-60`,
  imageContainer: tw`inline-flex`,
  image: tw`h-8 w-auto md:h-10`,
};

const footerClasses = new ClassesBuilder({ location, classes }).classes;

export default footerClasses;
