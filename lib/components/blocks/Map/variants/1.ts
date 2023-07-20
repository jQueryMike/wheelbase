import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { MapClasses } from '../Map';
import MapVariant from './MapVariant';

const location = 'Map/variants/1';

let classes: MapClasses<ClassesProperty> = {};

classes = {
  root: tw`w-1/2 space-y-4`,
  mapContainer: tw`aspect-video`,
};

const mapVariant: MapVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default mapVariant;
