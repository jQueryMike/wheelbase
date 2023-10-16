import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { PageSectionClasses } from '../PageSection';
import PageSectionVariant from './PageSectionVariant';

const location = 'PageSection/variants/2-contact';

let classes: PageSectionClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`p-6 py-[4rem]`,
    md: tw`md:py-[6rem]`,
    lg: tw`lg:py-[8rem]`,
  },
  container: tw`container mx-auto`,
  areasContainer: {
    default: tw`grid`,
  },
  area: {
    default: tw`space-y-4`,
  },
};

const pageSectionVariant: PageSectionVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default pageSectionVariant;
