import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeroClasses } from '../Hero';
import HeroVariant from './HeroVariant';

const location = 'Hero/variants/2';

let classes: HeroClasses<ClassesProperty> = {};

classes = {
  root: tw`w-full bg-gradient-to-b from-secondary-light to-secondary-dark px-8 pt-8 @container/hero`,
  rootInner: {
    default: tw`relative flex h-full min-h-[400px] items-stretch`,
    '@5xl/hero': tw`@5xl/hero:min-h-[800px]`,
  },
  container: {
    default: tw`container mx-auto grid items-stretch gap-8`,
    '@3xl/hero': tw`@3xl/hero:grid-cols-2`,
  },
  heroContentContainer: {
    default: tw`z-10 flex w-full flex-col items-stretch justify-center space-y-8`,
    '@xl/hero': tw`@xl/hero:space-y-12 @xl/hero:p-8`,
    '@5xl/hero': tw`@5xl/hero:space-y-16 @5xl/hero:p-12`,
  },
  contentAreaContainer: tw`space-y-4`,
  imageContainer: {
    default: tw`flex max-h-[400px] items-end`,
    '@md/hero': tw`@md/hero:max-h-[500px]`,
    '@xl/hero': tw`@xl/hero:max-h-[600px]`,
    '@3xl/hero': tw`@3xl/hero:max-h-none`,
  },
  image: {
    default: tw`mx-auto h-full w-full object-contain object-bottom`,
    '@3xl/hero': tw`@3xl/hero:w-[unset]`,
  },
};

const heroVariant: HeroVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default heroVariant;
