import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { FooterClasses } from '../../Footer';

const buildFooterClasses = () => {
  const classes = {
    root: tw`bg-primary p-6`,
    container: tw``,
    component: tw`space-y-6`,
    slot1: tw`space-y-6`,
    contentContainer: tw`text-center`,
    content: tw`space-y-4 text-white text-opacity-60`,
    socialContainer: tw`space-x-2`,
    socialItem: tw`hover:text-accent inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-blue-500 transition`,
    slot2: {
      default: tw`flex w-full flex-col items-center gap-6 border-t border-white border-opacity-20 pt-6`,
      md: tw`md:flex-row md:items-start md:justify-between`,
    },
    legalContainer: {
      default: tw`flex flex-col items-center gap-6`,
      md: tw`md:items-start md:gap-3`,
    },
    navContainer: tw`flex flex-wrap justify-center gap-y-3 divide-x divide-white divide-opacity-20`,
    navItem: tw`text-accent px-4 font-medium leading-none transition first-of-type:pl-0 last-of-type:pr-0 hover:text-white`,
    copyright: tw`text-white text-opacity-60`,
    imageContainer: tw`inline-flex`,
    image: {
      default: tw`h-8 w-auto`,
      md: tw`md:h-10`,
    },
  } as FooterClasses<ClassesProperty>;

  return classes;
};

const footerClasses = new ClassesBuilder({
  location: 'Footer/themes/1/Footer',
  classes: buildFooterClasses(),
}).classes;

export default footerClasses;
