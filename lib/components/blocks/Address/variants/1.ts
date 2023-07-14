import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { AddressClasses } from '../Address';
import AddressVariant from './AddressVariant';

const location = 'Address/variants/1';

let classes: AddressClasses<ClassesProperty> = {};

classes = {
  root: tw`flex w-full flex-col gap-x-16 bg-white px-8 py-16 text-black`,
  container: tw`mx-auto flex w-full flex-col gap-x-16 px-8 py-16 `,
  headingContainer: tw`my-2`,
  heading: tw`text-xl font-bold`,
};

const featuresVariant: AddressVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default featuresVariant;
