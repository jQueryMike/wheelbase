import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { MapClasses } from '../Map';
import MapVariant from './MapVariant';

const location = 'Features/variants/1';

let classes: MapClasses<ClassesProperty> = {};

classes = {
  root: tw`w-1/2`,
  headingContainer: tw``,
  heading: tw`text-2xl`,
  subheading: tw`text-xl`,
  mapContainer: tw`aspect-video`,
};

const mapVariant: MapVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default mapVariant;
