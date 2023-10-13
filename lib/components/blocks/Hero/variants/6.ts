import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeroClasses } from '../Hero';
import HeroVariant from './HeroVariant';

const location = 'Hero/variants/6';

let classes: HeroClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`bg-white px-4`,
    md: tw`md:px-6`,
    xl: tw`xl:px-8`,
  },
  container: {
    default: tw`container mx-auto flex w-full max-w-[1400px] py-8`,
    sm: tw`sm:py-12`,
    md: tw`md:py-16`,
    xl: tw`xl:py-20`,
  },
  heroContentContainer: {
    default: tw`relative z-10 flex w-full flex-col justify-center space-y-4 text-center`,
  },
};

const heroVariant: HeroVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default heroVariant;
