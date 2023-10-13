import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { AddressClasses } from '../Address';
import AddressVariant from './AddressVariant';

const location = 'Address/variants/2';

let classes: AddressClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/address`,
  rootInner: {
    default: tw`space-y-4`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
  },
  addressContainer: {
    default: tw`space-y-2`,
  },
  address: {
    default: tw`text-[16px] font-semibold not-italic text-white`,
    '@xl/address': tw`@xl/address:text-[16px]`,
    '@3xl/address': tw`@3xl/address:text-[18px]`,
    '@5xl/address': tw`@5xl/address:text-[20px]`,
  },
};

const addressVariant: AddressVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default addressVariant;
