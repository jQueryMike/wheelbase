import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { SubheadingClasses } from '../Subheading';
import SubheadingVariant from './SubheadingVariant';

const location = 'Subheading/variants/2';

let classes: SubheadingClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  subheading: {
    default: tw`bg-accent rounded--full text-accent-contrast inline-block p-2 text-sm font-bold`,
    md: tw`md:text-base`,
    lg: tw`lg:text-lg`,
  },
};

const subheadingVariant: SubheadingVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default subheadingVariant;
