import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ReviewItemClasses } from '../ReviewItem.types';
import ReviewItemVariant from './ReviewItemVariant';

const location = 'ReviewItem/variants/1';

let classes: ReviewItemClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const reviewItemVariant: ReviewItemVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default reviewItemVariant;
