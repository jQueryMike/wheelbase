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
  inputContainer: tw`mb-4`,
  label: tw`mb-1 block font-medium`,
  inputRequired: tw`w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none`,
  inputError: tw`border-red-500 focus:border-red-500`,
  inputSuccess: tw`border-gray-300 focus:border-blue-500`,
  formError: tw`mt-1 text-sm text-red-500`,
  input: tw`w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none`,
  buttonContainer: tw`mt-2 flex rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700`,
  submitting: tw`opacity-75`,
};

const contactFormVariant: ContactFormVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default contactFormVariant;
