import { TelephoneNumberClasses, TelephoneNumberItemClasses } from '../TelephoneNumber';

interface TelephoneNumberVariant {
  classes?: TelephoneNumberClasses<string>;
  itemClasses?: TelephoneNumberItemClasses<string>;
}

export default TelephoneNumberVariant;
