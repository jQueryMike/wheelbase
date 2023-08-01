import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ContactFormClasses } from '../ContactForm';
import ContactFormVariant from './ContactFormVariant';

const location = 'ContactForm/variants/1';

let classes: ContactFormClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`mx-auto space-y-4 @container`,
    '@xl': tw`@xl:space-y-6`,
  },
  form: tw`w-full max-w-md rounded-md p-4 shadow-md`,
  inputContainer: 'mb-4',
  label: 'mb-1 block font-medium',
  inputRequired: 'w-full rounded-md border px-3 py-2 focus:outline-none',
  inputError: 'border-red-500 focus:border-red-500',
  inputSuccess: 'border-gray-300 focus:border-blue-500',
  formError: 'mt-1 text-sm text-red-500',
  input: 'w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none',
};

const contactFormVariant: ContactFormVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default contactFormVariant;
