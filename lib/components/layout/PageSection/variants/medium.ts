import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { PageSectionClasses } from '../PageSection';
import PageSectionVariant from './PageSectionVariant';

const location = 'PageSection/variants/medium';

let classes: PageSectionClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`p-6 py-[3rem]`,
    md: tw`md:py-[4rem]`,
    lg: tw`lg:py-[6rem]`,
  },
  container: tw`container mx-auto`,
  areasContainer: {
    default: tw`{areasContainer} grid gap-8`,
    md: tw`md:gap-10`,
    lg: tw`lg:gap-14`,
    xl: tw`xl:gap-20`,
  },
  area: {
    default: tw`space-y-4`,
  },
};

const pageSectionVariant: PageSectionVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default pageSectionVariant;
