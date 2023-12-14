import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ReviewsClasses, ReviewsItemClasses } from '../Reviews';
import ReviewsVariant from './ReviewsVariant';

const location = 'Reviews/variants/1';

let classes: ReviewsClasses<ClassesProperty> = {};
let itemClasses: ReviewsItemClasses<ClassesProperty> = {};

classes = {
  root: tw``,
  rootInner: tw``,
  // review items grid
  itemsContainer: {
    default: tw`grid gap-4`,
    sm: tw`sm:grid-cols-2`,
    xl: tw`xl:grid-cols-4`,
  },
};

itemClasses = {
  // review item style
  itemRoot: tw`@container @[200px]:p-16 bg-accent bg-opacity-5 p-6 flex flex-col gap-6`,
  // review caption
  captionContainer: tw`flex gap-3 items-center`,
  avatarContainer: tw`h-14 w-14 rounded-full border-4 border-accent`,
  avatarImage: tw`h-14 w-14 rounded-full border-4 border-accent`,
  citeContainer: tw``,
  cite: tw`font-bold text-heading not-italic leading-[1.1]`,
  date: tw`not-italic text-copy`,
  // blockquote
  blockquoteContainer: tw`flex-1 space-y-1`,
  reviewHeading: tw`font-semibold text-heading`,
  reviewContent: tw`text-copy text-sm leading-normal`,
  // bottom
  bottomContainer: tw`flex items-center justify-between`,
  // source logo
  logoContainer: tw``,
  logo: tw`h-8 w-auto`,
  // star rating
  ratingStars: tw`flex items-center gap-2`,
  star: tw`fas fa-star text-accent text-lg`,
  starDisabled: tw`text-black text-opacity-25 text-lg`,
  ratingFigure: tw`rounded-full bg-black p-1 px-2 text-white font-bold text-[12px]`,
};

const reviewsVariant: ReviewsVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default reviewsVariant;
