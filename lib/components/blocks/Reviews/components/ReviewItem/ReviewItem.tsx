import { ReviewItemProps } from './ReviewItem.types';

const ReviewItem = ({ classes, ...item }: ReviewItemProps) => (
  <div>
    <pre>{JSON.stringify(item, null, 2)}</pre>
  </div>
);

export default ReviewItem;
