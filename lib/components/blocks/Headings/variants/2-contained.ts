import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeadingsClasses } from '../Headings';
import HeadingsVariant from './HeadingsVariant';

const location = 'Headings/variants/2-contained';

let classes: HeadingsClasses<ClassesProperty> = {};

classes = {
  root: tw`{root}`,
  rootInner: {
    default: tw`{rootInner} mx-auto space-y-4 text-center`,
    md: tw`md:max-w-2xl`,
    lg: tw`lg:max-w-4xl`,
  },
  headingContainer: tw`{headingContainer}`,
  subheadingContainer: tw`{subHeadingContainer}`,
};

const headingsVariant: HeadingsVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default headingsVariant;
