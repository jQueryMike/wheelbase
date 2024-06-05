import { ClassesBuilder, tw } from '@utils';
import { MapClasses } from './Map.types';

const location = 'Map/Map.classes';

const classes: MapClasses = {
  root: tw`col-span-12 lg:col-span-7 xl:col-span-8`,
  rootFullWidth: tw`col-span-12`,
  map: tw`h-full min-h-[420px] w-full border-0`,
};

const mapClasses = new ClassesBuilder({ location, classes }).classes;

export default mapClasses;
