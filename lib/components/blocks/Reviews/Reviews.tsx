import { Headings } from '../Headings';
import type { ReviewsProps } from './Reviews.types';
import { ReviewItem } from './components';

const Reviews = ({ classes, headings, items, ...props }: ReviewsProps) => (
  <div className="p-4 py-10 md:p-6 md:py-16 lg:py-20 xl:py-24">
    <div className="container mx-auto">
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
    </div>
  </div>
);

export default Reviews;
