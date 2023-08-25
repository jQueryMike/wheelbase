import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import {
  FooterClasses,
  FooterInfoItemClasses,
  FooterLegalNavigationItemClasses,
  FooterSocialNavigationItemClasses,
} from '../Footer';
import FooterVariant from './FooterVariant';

const location = 'Footer/variants/1';

let classes: FooterClasses<ClassesProperty> = {};
let infoItemClasses: FooterInfoItemClasses<ClassesProperty> = {};
let socialNavigationItemClasses: FooterSocialNavigationItemClasses<ClassesProperty> = {};
let legalNavigationItemClasses: FooterLegalNavigationItemClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`bg-primary p-8 pt-0`,
    md: tw`md:p-12 md:pt-0`,
    lg: tw`lg:p-16 lg:pt-0`,
  },
  container: {
    default: tw`container mx-auto space-y-8 border-t border-primary-light pt-8`,
    md: tw`md:space-y-12 md:py-12`,
    lg: tw`lg:space-y-16 lg:py-16`,
  },
  topSectionContainer: { default: tw`space-y-4` },
  infoItemsContainer: {
    default: tw`text-sm text-primary-contrast`,
  },
  infoItemsList: {
    default: tw`flex flex-col items-start space-y-2`,
    md: tw`md:flex-row md:items-center md:justify-center md:space-x-8 md:space-y-0`,
  },
  infoItemsListItem: {
    default: tw``,
  },
  socialNavigationList: {
    default: tw`flex items-center space-x-10`,
    md: tw`md:justify-center`,
  },
  bottomSectionContainer: tw`relative space-y-4 border-t border-primary-light pt-8`,
  legalNavigationContainer: tw`text-sm`,
  legalNavigationList: tw`flex space-x-8`,
  logoContainer: {
    default: tw`relative h-12 w-72`,
    md: tw`md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2`,
  },
  logoLink: tw`inline-block`,
  copyrightContainer: tw`text-sm text-primary-contrast/70`,
};

infoItemClasses = {
  infoItemRoot: tw`space-x-2`,
  infoItemLabel: tw`after:content-[":"]`,
};

socialNavigationItemClasses = {
  socialNavigationItemRoot: tw`flex items-center space-x-2 text-lg`,
  socialNavigationItemLink: {
    default: tw`text-primary-contrast transition duration-150`,
    hover: tw`hover:text-accent`,
  },
  socialNavigationItemIcon: tw`text-[30px]`,
  socialNavigationItemLabel: tw`hidden`,
};

legalNavigationItemClasses = {
  legalNavigationItemRoot: tw``,
  legalNavigationItemLink: { default: tw`text-primary-contrast`, hover: tw`hover:text-accent` },
};

const footerVariant: FooterVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  infoItemClasses: new ClassesBuilder({ location, classes: infoItemClasses }).classes,
  socialNavigationItemClasses: new ClassesBuilder({ location, classes: socialNavigationItemClasses }).classes,
  legalNavigationItemClasses: new ClassesBuilder({ location, classes: legalNavigationItemClasses }).classes,
};

export default footerVariant;
