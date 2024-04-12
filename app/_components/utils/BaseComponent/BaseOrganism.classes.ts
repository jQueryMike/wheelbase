import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { BaseComponentClasses } from './BaseComponent.types';

const location = 'BaseComponent/variants/1';

let classes: BaseComponentClasses<ClassesProperty> = {};

classes = {
  root: tw`bg-body-alt`,
  rootInner: {
    default: tw``,
  },
  container: {
    default: tw`container mx-auto grid h-full gap-6`,
    md: tw`md:grid-cols-2 md:gap-12`,
    lg: tw`lg:gap-16`,
    xl: tw`xl:gap-20`,
  },
};

const baseOrganismClasses = new ClassesBuilder({ location, classes }).classes;

export default baseOrganismClasses;
