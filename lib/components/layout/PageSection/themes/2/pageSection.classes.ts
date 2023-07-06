import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { PageSectionClasses } from '../../PageSection';

const classes = {
  root: tw``,
  areasContainer: tw`container mx-auto grid`,
} as PageSectionClasses<ClassesProperty>;

const pageSectionClasses = new ClassesBuilder({ location: 'PageSection/themes/2/pageSection', classes }).classes;

export default pageSectionClasses;
