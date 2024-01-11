import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { HeadingsClasses } from '../Headings.types';
import HeadingsVariant from './HeadingsVariant';

const location = 'Headings/variants/2';

let classes: HeadingsClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/headings`,
  rootInner: tw`space-y-4`,
};

const headingsVariant: HeadingsVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default headingsVariant;
