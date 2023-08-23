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
  container: tw`container mx-auto`,
  areasContainer: {
    default: tw`grid gap-8`,
    xs: tw`xs:gap-10`,
    md: tw`md:gap-12`,
    lg: tw`lg:gap-16`,
  },
  area: {
    default: tw`space-y-4`,
    xs: tw`xs:space-y-5`,
    md: tw`md:space-y-6`,
    lg: tw`lg:space-y-8`,
  },
};

const pageSectionVariant: PageSectionVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default pageSectionVariant;
