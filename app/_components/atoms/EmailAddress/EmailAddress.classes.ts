import { ClassesBuilder, tw } from '@utils';

import { EmailAddressClasses } from './EmailAddress.types';

const location = 'EmailAddress/EmailAddress.classes';

const classes: EmailAddressClasses = {
  root: tw``,
  emailAddressWrapper: tw`flex items-center gap-2`,
  emailAddressLink: tw``,
  emailAddress: tw``,
};

const emailAddressClasses = new ClassesBuilder({ location, classes }).classes;

export default emailAddressClasses;
