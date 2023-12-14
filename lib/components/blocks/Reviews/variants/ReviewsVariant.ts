import { ReviewsClasses } from '../Reviews.types';
import { ReviewItemClasses } from '../components';

interface ReviewsVariant {
  classes?: ReviewsClasses<string>;
  itemClasses?: ReviewItemClasses<string>;
}

export default ReviewsVariant;
