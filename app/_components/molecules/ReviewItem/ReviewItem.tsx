import Avatar from '@components/atoms/Avatar/Avatar';
import { ImageLink } from '@components/atoms/ImageLink';
import { ItemRating } from '@components/atoms/ItemRating';
import { ReviewContent } from '@components/atoms/ReviewContent';
import { ReviewDate } from '@components/atoms/ReviewDate';
import { ReviewTitle } from '@components/atoms/ReviewTitle';
import { ReviewerName } from '@components/atoms/ReviewerName';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import reviewItemClasses from './ReviewItem.classes';
import { ReviewItemProps } from './ReviewItem.types';

const ReviewItem = ({
  avatar,
  reviewerName,
  reviewDate,
  reviewTitle,
  reviewContent,
  itemRating,
  ratingIcon,
  imageLink,
  overrides,
  styling,
}: ReviewItemProps) => {
  const classes = buildClasses(reviewItemClasses, overrides);
  return (
    <BaseComponent
      as="figure"
      styling={styling}
      stylingOptions={{ atomicType: 'molecule' }}
      className={classes.reviewItem}
    >
      <figcaption className={classes.captionContainer}>
        <div className={classes.avatarContainer}>
          <Avatar {...avatar} />
        </div>
        <div className={classes.citeContainer}>
          <ReviewerName reviewerName={reviewerName.text} styling={reviewerName.styling} />
          {reviewDate && <ReviewDate reviewDate={reviewDate.text} styling={reviewDate.styling} />}
        </div>
      </figcaption>
      <blockquote className={classes.reviewContentContainer}>
        {reviewTitle && <ReviewTitle reviewTitle={reviewTitle.text} styling={reviewTitle.styling} />}
        {reviewContent.text.markup.length > 0 && (
          <ReviewContent reviewContent={reviewContent.text.markup} styling={reviewContent.styling} />
        )}
      </blockquote>
      <div className={classes.bottomContainer}>
        <ImageLink image={imageLink} link={imageLink.link[0]} styling={imageLink.styling} {...imageLink} />
        {itemRating && <ItemRating {...itemRating} icon={ratingIcon} />}
      </div>
    </BaseComponent>
  );
};

export default ReviewItem;
