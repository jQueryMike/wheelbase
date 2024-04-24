import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ItemRatingClasses } from './ItemRating.types';

const location = 'ItemRating/ItemRating.classes';

let classes: ItemRatingClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  ratingContainer: tw`gap-2" flex items-center`,
  ratingStars: tw`flex items-center gap-[1px]`,
  ratingFigure: tw`rounded-full bg-black p-1 px-2 text-[12px] font-bold text-white`,
};

const itemRatingClasses: ItemRatingClasses = new ClassesBuilder({ location, classes }).classes;

export default itemRatingClasses;
