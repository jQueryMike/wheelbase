import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ContactFormClasses } from '../ContactForm';
import ContactFormVariant from './ContactFormVariant';

const location = 'ContactForm/variants/1';

let classes: ContactFormClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`space-y-4 @container`,
    '@xl': tw`@xl:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl': tw`@xl:space-y-6`,
  },
  form: {
    default: tw`max-w-[700px] space-y-4 rounded-lg border border-divider p-4`,
    '@xl': tw`@xl:space-y-6 @xl:p-5`,
    '@3xl': tw`@3xl:p-6`,
    '@5xl': tw`@5xl:p-8`,
  },
  formField: {
    default: tw`space-y-2`,
  },
  label: tw`font-semibold text-heading`,
  inputContainer: tw`flex overflow-hidden rounded-lg border border-divider focus-within:border-primary`,
  input: tw`flex-grow px-4 py-2 text-[16px] outline-none`,
};

const contactFormVariant: ContactFormVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default contactFormVariant;
