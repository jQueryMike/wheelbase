import { ClassesBuilder, tw } from '@utils';

import { PhoneNumbersClasses } from './PhoneNumbers.types';

const location = 'PhoneNumbers/PhoneNumbers.classes';

const classes: PhoneNumbersClasses = {
  root: tw``,
  phoneNumbersWrapper: tw`flex items-center gap-2`,
  phoneNumbersLink: tw``,
  phoneNumbers: tw``,
};

const phoneNumbersClasses = new ClassesBuilder({ location, classes }).classes;

export default phoneNumbersClasses;
