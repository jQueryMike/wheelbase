import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeroClasses } from '../Hero';
import HeroVariant from './HeroVariant';

const location = 'Hero/variants/1';

let classes: HeroClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`relative flex min-h-[400px] w-full items-stretch bg-body-light`,
    '@5xl': tw`@5xl:min-h-[500px]`,
  },
  container: tw`container mx-auto flex items-stretch`,
  heroContentContainer: {
    default: tw`relative z-10 flex flex-col justify-center space-y-4 bg-gradient-to-b from-white/50 to-white p-6`,
    '@xl': tw`@xl:space-y-6 @xl:p-8`,
    '@5xl': tw`@5xl:max-w-[50%] @5xl:p-12`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl': tw`@xl:space-y-6`,
  },
  imageContainer: tw`absolute inset-0 z-0`,
};

const heroVariant: HeroVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default heroVariant;
