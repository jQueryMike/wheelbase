import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { RegInputClasses } from '../RegInput';
import RegInputVariant from './RegInputVariant';

const location = 'RegInput/variants/5';

let classes: RegInputClasses<ClassesProperty> = {};

classes = {
  root: tw`max-w-[500px] @container/regInput`,
  rootInner: {},
  formContainer: tw`inline-flex bg-gradient-to-r from-[#EC008C] to-[#FC6767] p-[1px]`,
  form: {
    default: tw`flex flex-col items-stretch justify-between gap-2 border bg-white p-3`,
    '@md/regInput': tw`@md/regInput:flex-row @md/regInput:items-center @md/regInput:justify-between @md/regInput:space-y-0`,
  },
  inputContainer: tw`flex-grow`,
  input: {
    default: tw`text-md w-full text-center text-primary placeholder-[#555555] outline-none md:w-[220px]`,
    md: tw`md:text-xl`,
  },
  errorMessageContainer: tw`pt-2`,
  errorMessage: tw`text-center text-sm text-error`,
};

const regInputVariant: RegInputVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default regInputVariant;
