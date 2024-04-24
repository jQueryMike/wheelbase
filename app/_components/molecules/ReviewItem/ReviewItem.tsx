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
  imageLink,
  overrides,
  styling,
}: ReviewItemProps) => {
  console.log({
    avatar,
    reviewerName,
    reviewDate,
    reviewTitle,
    reviewContent,
    itemRating,
    imageLink,
    overrides,
    styling,
  });
  const classes = buildClasses(reviewItemClasses, overrides);
  return (
    <BaseComponent as="div" styling={styling} stylingOptions={{ atomicType: 'molecule' }} className="{itemContainer}">
      <figure className={classes.reviewItem}>
        <figcaption className={classes.captionContainer}>
          <div className={classes.avatarContainer}>{avatar && <Avatar styling={avatar.styling} avatar={avatar} />}</div>
          <div className={classes.citeContainer}>
            <ReviewerName reviewerName={reviewerName.text} styling={reviewerName.styling} />
            {reviewDate && <ReviewDate reviewDate={reviewDate.text} styling={reviewDate.styling} />}
          </div>
        </figcaption>
        <blockquote className={classes.reviewContentContainer}>
          {reviewTitle && <ReviewTitle reviewTitle={reviewTitle.text} styling={reviewTitle.styling} />}
          <ReviewContent reviewContent={reviewContent.text.markup} styling={reviewContent.styling} />
        </blockquote>
        <div className={classes.bottomContainer}>
          {imageLink && <ImageLink styling={imageLink.styling} imageLink={imageLink} />}
          {itemRating && <ItemRating styling={itemRating.styling} itemRating={itemRating} />}
        </div>
      </figure>
    </BaseComponent>
  );
};

export default ReviewItem;
