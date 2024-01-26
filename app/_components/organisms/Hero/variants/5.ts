import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { HeroClasses } from '../Hero.types';
import HeroVariant from './HeroVariant';

const location = 'Hero/variants/5';

let classes: HeroClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`bg-white px-4`,
    md: tw`md:px-6`,
    xl: tw`xl:px-8`,
  },
  container: {
    default: tw`container mx-auto flex w-full max-w-[1400px] flex-col-reverse py-8`,
    sm: tw`sm:py-12`,
    md: tw`md:flex-row md:py-16`,
    xl: tw`xl:py-20`,
  },
  heroContentContainer: {
    default: tw`relative z-10 flex w-full flex-col justify-center space-y-6 text-center`,
    md: tw`md:w-1/2 md:space-y-8 md:text-left`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl': tw`@xl:space-y-6`,
  },
  imageContainer: {
    default: tw`relative w-full`,
    md: tw`md:w-1/2`,
  },
};

const heroVariant: HeroVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default heroVariant;
