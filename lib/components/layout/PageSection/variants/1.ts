import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { PageSectionClasses } from '../PageSection';
import PageSectionVariant from './PageSectionVariant';

const location = 'PageSection/variants/1';

let classes: PageSectionClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`p-8`,
    md: tw`md:p-12`,
    lg: tw`lg:p-16`,
  },
  container: tw`container mx-auto @container`,
  areasContainer: {
    default: tw`grid gap-8`,
    '@xl': tw`@xl:gap-10`,
    '@3xl': tw`@3xl:gap-12`,
    '@5xl': tw`@5xl:gap-16`,
  },
  area: {
    default: tw`space-y-4`,
    '@xl': tw`@xl:space-y-5`,
    '@3xl': tw`@3xl:space-y-6`,
    '@5xl': tw`@5xl:space-y-8`,
  },
};

const pageSectionVariant: PageSectionVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default pageSectionVariant;
