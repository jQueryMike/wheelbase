import { ClassesBuilder, tw } from '@utils';

import { PhoneNumbersClasses } from './PhoneNumbers.types';

const location = 'PhoneNumbers/PhoneNumbers.classes';

const classes: PhoneNumbersClasses = {
  root: tw``,
};

const phoneNumbersClasses = new ClassesBuilder({ location, classes }).classes;

export default phoneNumbersClasses;
