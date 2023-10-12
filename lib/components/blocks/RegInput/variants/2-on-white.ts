import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { RegInputClasses } from '../RegInput';
import RegInputVariant from './RegInputVariant';

const location = 'RegInput/variants/2-on-white';

let classes: RegInputClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  rootInner: tw`flex flex-col items-center`,
  formContainer: tw`mt-8 w-full max-w-[460px] @container/regInput`,
  form: {
    default: tw`flex flex-col gap-4 @md:flex-row`,
  },
  inputContainer: tw`f-full`,
  input: {
    default: tw`h-14 w-full appearance-none rounded-md border-2 border-black border-opacity-10 bg-yellow-500 p-4 text-center text-[32px] font-extrabold uppercase text-black ring-0 placeholder:text-[32px] placeholder:leading-none placeholder:tracking-tight placeholder:text-black @md:h-16`,
  },
  // buttonContainer: {
  //   default: tw`{buttonContainer} [&>*]:h-full [&>*]:w-full`,
  // },
  buttonContainer: tw``,
  manualLookupLink: {
    default: tw`mt-2 block text-center font-semibold text-copy`,
    hover: tw`hover:text-accent`,
  },
  errorMessageContainer: tw`pt-2`,
  errorMessage: tw`text-center text-sm text-error`,
};

const regInputVariant: RegInputVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default regInputVariant;
