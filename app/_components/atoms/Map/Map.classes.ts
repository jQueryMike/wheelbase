import { ClassesBuilder, tw } from '@utils';

import { MapClasses } from './Map.types';

const location = 'Map/Map.classes';

const classes: MapClasses = {
  root: tw``,
};

const mapClasses = new ClassesBuilder({ location, classes }).classes;

export default mapClasses;
