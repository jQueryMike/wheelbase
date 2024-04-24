import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ReviewContentClasses } from './ReviewContent.types';

const location = 'ReviewContent/ReviewContent.classes';

let classes: ReviewContentClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const reviewContentClasses: ReviewContentClasses = new ClassesBuilder({ location, classes }).classes;

export default reviewContentClasses;
