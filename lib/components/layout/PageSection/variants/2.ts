import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { PageSectionClasses } from '../PageSection';
import PageSectionVariant from './PageSectionVariant';

const location = 'PageSection/variants/2';

let classes: PageSectionClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`p-6 py-[4rem]`,
    md: tw`md:py-[6rem]`,
    lg: tw`lg:py-[8rem]`,
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
    md: tw`md:space-y-6`,
    lg: tw`lg:space-y-8`,
  },
};

const pageSectionVariant: PageSectionVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default pageSectionVariant;
