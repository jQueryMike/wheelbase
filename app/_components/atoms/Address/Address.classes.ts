import { ClassesBuilder, tw } from '@utils';

import { AddressClasses } from './Address.types';

const location = 'Address/Address.classes';

const classes: AddressClasses = {
  root: tw``,
};

const addressClasses = new ClassesBuilder({ location, classes }).classes;

export default addressClasses;
