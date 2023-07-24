import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { AddressClasses } from '../Address';
import AddressVariant from './AddressVariant';

const location = 'Address/variants/1';

let classes: AddressClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`space-y-4 @container`,
    '@xl': tw`@xl:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl': tw`@xl:space-y-6`,
  },
  addressContainer: {
    default: tw`space-y-2 py-6`,
  },
  address: {
    default: tw`text-primary text-[16px] font-semibold`,
    sm: tw`sm:text-[16px]`,
    md: tw`md:text-[18px]`,
    lg: tw`lg:text-[20px]`,
  },
};

const addressVariant: AddressVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default addressVariant;
