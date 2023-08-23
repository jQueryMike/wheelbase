import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeadingsClasses } from '../Headings';
import HeadingsVariant from './HeadingsVariant';

const location = 'Headings/variants/1';

let classes: HeadingsClasses<ClassesProperty> = {};

classes = {
  root: tw`space-y-1 @container/headings`,
};

const headingsVariant: HeadingsVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default headingsVariant;
