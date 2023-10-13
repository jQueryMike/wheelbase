import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { MapClasses } from '../Map';
import MapVariant from './MapVariant';

const location = 'Map/variants/2';

let classes: MapClasses<ClassesProperty> = {};

classes = {
  root: tw`h-full w-full @container/map`,
  rootInner: {
    default: tw`h-full w-full space-y-4`,
  },

  contentAreaContainer: {
    default: tw`h-full w-full space-y-4`,
  },
  mapContainer: {
    default: tw`h-full w-full space-y-4`,
  },
};

const mapVariant: MapVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default mapVariant;
