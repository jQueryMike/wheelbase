import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { BaseOrganismClasses } from '../BaseOrganism.types';
import BaseOrganismVariant from './BaseOrganismVariant';

const location = 'BaseOrganism/variants/1';

let classes: BaseOrganismClasses<ClassesProperty> = {};

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

const baseOrganismVariant: BaseOrganismVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default baseOrganismVariant;
