import { Grid } from '@components/_layouts/Grid';
import { Heading } from '@components/atoms';
import { ReviewItem, ReviewItemProps } from '@components/molecules/ReviewItem';
import { BaseComponent } from '@components/utils/BaseComponent';
import { Block } from '@types';
import { buildClasses } from '@utils/buildClasses';

import reviewsClasses from './Reviews.classes';
import { ReviewsProps } from './Reviews.types';

const Reviews = async ({ heading, subheading, reviewsBlock, items, overrides, styling }: ReviewsProps & Block) => {
  const classes = buildClasses(reviewsClasses, overrides);
  const resolvedHeading = heading ? await Heading(heading) : undefined;
  const resolvedSubheading = subheading
    ? await Heading({ ...subheading, 'data-testid': 'subheading', textType: 'subheading' })
    : undefined;
  return (
    <div className={classes.reviews}>
      <BaseComponent styling={styling}>
        {(heading || subheading) && (
          <div data-testid="headings-container" className={classes.headingContainer}>
            {resolvedHeading}
            {resolvedSubheading}
          </div>
        )}
        <Grid styling={reviewsBlock.styling}>
          {items.map((item: ReviewItemProps) => (
            <ReviewItem
              styling={item.styling}
              itemRating={item.itemRating}
              avatar={item.avatar}
              imageLink={item.imageLink}
              reviewerName={item.reviewerName}
              reviewDate={item.reviewDate}
              reviewTitle={item.reviewTitle}
              reviewContent={item.reviewContent}
            />
          ))}
        </Grid>
      </BaseComponent>
    </div>
  );
};

export default Reviews;
