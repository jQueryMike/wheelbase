import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { PageSectionClasses } from '../PageSection';
import PageSectionVariant from './PageSectionVariant';

const location = 'PageSection/variants/1';

let classes: PageSectionClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`p-8`,
    md: tw`md:p-12`,
  },
  areasContainer: tw`container mx-auto grid`,
  area: tw`space-y-4`,
};

const pageSectionVariant: PageSectionVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default pageSectionVariant;
