import { Text } from '@components/atoms';
import Avatar from '@components/atoms/Avatar/Avatar';
import { ImageLink } from '@components/atoms/ImageLink';
import { ItemRating } from '@components/atoms/ItemRating';
import { ReviewDetail } from '@components/atoms/ReviewDetail';
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
          {reviewerName && <ReviewDetail reviewDetail={reviewerName.text} styling={reviewerName.styling} />}
          {reviewDate && <ReviewDetail reviewDetail={reviewDate.text} styling={reviewDate.styling} />}
        </div>
      </figcaption>
      <blockquote className={classes.reviewContentContainer}>
        {reviewTitle && <ReviewDetail reviewDetail={reviewTitle.text} styling={reviewTitle.styling} />}
        {reviewContent.text.markup.length > 0 && (
          <Text text={reviewContent.text.markup} styling={reviewContent.styling} />
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
