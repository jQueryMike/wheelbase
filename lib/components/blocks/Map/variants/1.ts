import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { MapClasses } from '../Map';
import MapVariant from './MapVariant';

const location = 'Map/variants/1';

let classes: MapClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`space-y-4 @container`,
    '@xl': tw`@xl:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl': tw`@xl:space-y-6`,
  },
  mapContainer: {
    default: tw`aspect-[4/3] space-y-4 py-6`,
  },
};

const mapVariant: MapVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default mapVariant;
