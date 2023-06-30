import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { PageSectionClasses } from '../../PageSection';

const classes = {
  root: tw`p-4`,
  areasContainer: tw`grid`,
} as PageSectionClasses<ClassesProperty>;

const pageSectionClasses = new ClassesBuilder({ location: 'PageSection/themes/1/pageSection', classes }).classes;

export default pageSectionClasses;
