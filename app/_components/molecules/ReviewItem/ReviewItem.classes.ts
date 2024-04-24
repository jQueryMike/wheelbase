import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { ReviewItemClasses } from './ReviewItem.types';

const location = 'ReviewItem/ReviewItem';

let classes: ReviewItemClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  reviewItem: tw`flex flex-col gap-6 bg-accent bg-opacity-5 p-6 @container @[200px]:p-16`,
  avatar: tw`avatar border-4" h-14 w-14 rounded-full border-accent`,
  captionContainer: tw`flex items-center gap-3`,
  avatarContainer: tw``,
  citeContainer: tw``,
  reviewerName: tw``,
  reviewDate: tw``,
  reviewContentContainer: tw`flex-1 space-y-1`,
  reviewTitle: tw`text-heading font-semibold`,
  reviewContent: tw`text-sm leading-normal text-copy`,
  bottomContainer: tw`flex items-center justify-between`,
  imageLinkContainer: tw``,
  ratingContainer: tw`gap-2" flex items-center`,
  ratingStars: tw`flex items-center gap-[1px]`,
  ratingFigure: tw`rounded-full bg-black p-1 px-2 text-[12px] font-bold text-white`,
  reviewImage: tw`h-8 w-auto`,
};

const reviewItemClasses = new ClassesBuilder({ location, classes }).classes;

export default reviewItemClasses;
