import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeadingsClasses } from '../Headings';
import HeadingsVariant from './HeadingsVariant';

const location = 'Headings/variants/1';

let classes: HeadingsClasses<ClassesProperty> = {};

classes = {
  rootInner: tw`space-y-2`,
};

const headingsVariant: HeadingsVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default headingsVariant;
