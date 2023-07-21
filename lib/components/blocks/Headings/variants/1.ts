import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { HeadingsClasses } from '../Headings';
import HeadingsVariant from './HeadingsVariant';

const location = 'Headings/variants/1';

let classes: HeadingsClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`space-y-1 @container`,
    '@2xl': tw`@2xl:space-y-2`,
  },
};

const headingsVariant: HeadingsVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default headingsVariant;
