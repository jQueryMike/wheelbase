import { ClassesBuilder, ClassesProperty, tw } from '@utils';

// eslint-disable-next-line import/no-cycle
import { ImageLinkClasses } from './ImageLink.types';

const location = 'ImageLink/ImageLink.classes';

let classes: ImageLinkClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const imageLinkClasses = new ClassesBuilder({ location, classes }).classes;

export default imageLinkClasses;
