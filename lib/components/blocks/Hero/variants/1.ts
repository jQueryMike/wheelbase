import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeroClasses } from '../Hero.types';
import HeroVariant from './HeroVariant';

const location = 'Hero/variants/1';

let classes: HeroClasses<ClassesProperty> = {};

classes = {
  root: tw`bg-body-alt w-full @container/hero`,
  rootInner: {
    default: tw`relative flex min-h-[400px] items-stretch`,
    '@5xl/hero': tw`@5xl/hero:min-h-[500px]`,
  },
  container: tw`container mx-auto flex items-stretch`,
  heroContentContainer: {
    default: tw`relative z-10 flex w-full flex-col justify-center space-y-4 bg-gradient-to-b from-white/50 to-white p-6`,
    '@xl/hero': tw`@xl/hero:space-y-6 @xl/hero:p-8`,
    '@5xl/hero': tw`@5xl/hero:max-w-[40%] @5xl/hero:p-12`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/hero': tw`@xl/hero:space-y-6`,
  },
  imageContainer: tw`absolute inset-0 z-0`,
  image: tw`object-cover`,
};

const heroVariant: HeroVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default heroVariant;
