import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ImageLinkClasses } from './ImageLink.types';

const location = 'ImageLink/ImageLink.classes';

let classes: ImageLinkClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const imageLinkClasses = new ClassesBuilder({ location, classes }).classes;

export default imageLinkClasses;
