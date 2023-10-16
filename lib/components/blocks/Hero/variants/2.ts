import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeroClasses } from '../Hero';
import HeroVariant from './HeroVariant';

const location = 'Hero/variants/2';

let classes: HeroClasses<ClassesProperty> = {};

classes = {
  root: tw`w-full bg-gradient-to-b from-secondary to-secondary-dark p-6 py-0`,
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
  headingsContainer: {
    default: tw`space-y-2`,
  },
  contentAreaContainer: {
    default: tw``,
  },
  imageContainer: {
    default: tw`relative`,
  },
};

const heroVariant: HeroVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default heroVariant;
