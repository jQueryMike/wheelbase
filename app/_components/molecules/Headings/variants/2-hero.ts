import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { HeadingsClasses } from '../Headings.types';
import HeadingsVariant from './HeadingsVariant';

const location = 'Headings/variants/2-hero';

let classes: HeadingsClasses<ClassesProperty> = {};

classes = {
  root: tw`space-y-2`,
};

const headingsVariant: HeadingsVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default headingsVariant;
