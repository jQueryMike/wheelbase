import { Grid } from '@components/_layouts/Grid';
import { Heading } from '@components/atoms';
import { ReviewItem, ReviewItemProps } from '@components/molecules/ReviewItem';
import { BaseComponent } from '@components/utils/BaseComponent';
import { Block } from '@types';
import { buildClasses } from '@utils/buildClasses';

import reviewsClasses from './Reviews.classes';
import { ReviewsProps } from './Reviews.types';

const Reviews = ({ heading, subheading, reviewsBlock, items, overrides, styling }: ReviewsProps & Block) => {
  const classes = buildClasses(reviewsClasses, overrides);
  return (
    <BaseComponent styling={styling}>
      <div className={classes.reviews}>
        <div className={classes.container}>
          {(heading || subheading) && (
            <div data-testid="headings-container" className={classes.headingContainer}>
              {heading && <Heading {...heading} />}
              {subheading && <Heading {...subheading} data-testid="subheading" textType="subheading" />}
            </div>
          )}
          <BaseComponent styling={reviewsBlock.styling}>
            <Grid styling={reviewsBlock.styling}>
              {items.map((item: ReviewItemProps) => (
                <ReviewItem
                  styling={item.styling}
                  itemRating={item.itemRating}
                  ratingIcon={item.fixedIcon}
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
      </div>
    </BaseComponent>
  );
};

export default Reviews;
