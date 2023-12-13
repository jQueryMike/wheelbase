import type { ReviewsProps } from './Reviews.types';

const Reviews = (props: ReviewsProps) => (
  <div>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);

export default Reviews;
