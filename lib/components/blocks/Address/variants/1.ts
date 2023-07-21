import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { AddressClasses } from '../Address';
import AddressVariant from './AddressVariant';

const location = 'Address/variants/1';

let classes: AddressClasses<ClassesProperty> = {};

classes = {
  root: tw`space-y-4`,
};

const addressVariant: AddressVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default addressVariant;
