import { Headings } from '../Headings';
import type { ReviewsProps } from './Reviews.types';
import { ReviewItem } from './components';

const Reviews = ({ classes, headings, items, ...props }: ReviewsProps) => (
  <div className={classes.root}>
    {headings && (
      <div className={classes.headingsContainer}>
        <Headings {...headings} />
      </div>
    )}
    {/* TODO: ContentArea1 */}
    <div className={classes.itemsContainer}>
      {items?.map(({ id, ...item }: any) => (
        <ReviewItem key={id} {...item} />
      ))}
    </div>
    <pre>{JSON.stringify(props, null, 2)}</pre>
    {/* TODO: ContentArea2 */}
  </div>
);

export default Reviews;
