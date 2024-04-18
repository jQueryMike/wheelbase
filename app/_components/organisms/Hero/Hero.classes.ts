import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { HeroClasses } from './Hero.types';

const location = 'Hero/Hero.classes';

let classes: HeroClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  rootInner: {
    default: tw``,
  },
  container: {
    default: tw`container mx-auto grid h-full gap-6`,
    md: tw`md:grid-cols-2 md:gap-12`,
    lg: tw`lg:gap-16`,
    xl: tw`xl:gap-20`,
  },
  heroContentContainer: {
    default: tw`my-8 flex flex-col justify-center space-y-8`,
    md: tw`md:my-16 md:space-y-10`,
    lg: tw`lg:my-20 lg:space-y-12`,
    xl: tw`xl:my-14 xl:space-y-14`,
  },
  heroContentContainerReverse: {
    default: tw`order-2 my-8 flex flex-col justify-center space-y-8`,
    md: tw`md:my-16 md:space-y-10`,
    lg: tw`lg:my-20 lg:space-y-12`,
    xl: tw`xl:my-14 xl:space-y-14`,
  },
  headingsContainer: {
    default: tw`space-y-2`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/hero': tw`@xl/hero:space-y-6`,
  },
  imageContainer: {
    default: tw`relative`,
  },
  imageContainerReverse: {
    default: tw`relative order-1`,
  },
};

const heroClasses = new ClassesBuilder({ location, classes }).classes;

export default heroClasses;
