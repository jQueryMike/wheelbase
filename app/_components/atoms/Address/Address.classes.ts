import { ClassesBuilder, tw } from '@utils';

import { AddressClasses } from './Address.types';

const location = 'Address/Address.classes';

const classes: AddressClasses = {
  root: tw``,
  address: tw`text-sm font-normal not-italic [&>*:first-child]:font-bold`,
};

const addressClasses = new ClassesBuilder({ location, classes }).classes;

export default addressClasses;
