import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { PageSectionClasses } from '../PageSection';
import PageSectionVariant from './PageSectionVariant';

const location = 'PageSection/variants/5';

let classes: PageSectionClasses<ClassesProperty> = {};

classes = {
  container: tw``,
};

const pageSectionVariant: PageSectionVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default pageSectionVariant;
