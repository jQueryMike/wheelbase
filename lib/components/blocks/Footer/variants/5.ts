import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import {
  FooterClasses,
  FooterInfoItemClasses,
  FooterLegalNavigationItemClasses,
  FooterSocialNavigationItemClasses,
} from '../Footer';
import FooterVariant from './FooterVariant';

const location = 'Footer/variants/5';

let classes: FooterClasses<ClassesProperty> = {};
let infoItemClasses: FooterInfoItemClasses<ClassesProperty> = {};
let socialNavigationItemClasses: FooterSocialNavigationItemClasses<ClassesProperty> = {};
let legalNavigationItemClasses: FooterLegalNavigationItemClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`bg-white py-8`,
    md: tw`md:py-12`,
    lg: tw`lg:py-16`,
  },
  container: {
    default: tw`container mx-auto space-y-6`,
  },
  topSectionContainer: { default: tw`space-y-4` },
  infoItemsContainer: {
    default: tw`text-sm text-copy`,
  },
  infoItemsList: {
    default: tw`flex flex-col items-start space-y-2`,
    md: tw`md:flex-row md:items-center md:justify-center md:space-x-8 md:space-y-0`,
  },
  infoItemsListItem: {
    default: tw``,
  },
  contentAreaContainer: {
    default: tw`flex justify-center`,
  },
  socialNavigationList: {
    default: tw`flex items-center space-x-10`,
    md: tw`md:justify-center`,
  },
  legalNavigationContainer: tw`flex justify-center text-sm`,
  legalNavigationList: tw`flex space-x-8`,
  logoContainer: {
    default: tw`hidden`,
  },
  logoLink: tw`inline-block`,
  copyrightContainer: tw`text-sm text-copy`,
};

infoItemClasses = {
  infoItemRoot: tw`space-x-2`,
  infoItemLabel: tw`after:content-[":"]`,
};

socialNavigationItemClasses = {
  socialNavigationItemRoot: tw`flex items-center space-x-2 text-center text-lg`,
  socialNavigationItemLink: {
    default: tw`flex items-center justify-center text-primary transition duration-150`,
    hover: tw`hover:text-accent`,
  },
  socialNavigationItemIcon: tw`text-[16px]`,
  socialNavigationItemLabel: tw`hidden`,
};

legalNavigationItemClasses = {
  legalNavigationItemRoot: tw``,
  legalNavigationItemLink: { default: tw`text-copy`, hover: tw`hover:text-accent` },
};

const footerVariant: FooterVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
  infoItemClasses: new ClassesBuilder({ location, classes: infoItemClasses }).classes,
  socialNavigationItemClasses: new ClassesBuilder({ location, classes: socialNavigationItemClasses }).classes,
  legalNavigationItemClasses: new ClassesBuilder({ location, classes: legalNavigationItemClasses }).classes,
};

export default footerVariant;
