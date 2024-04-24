import { Icon, Image } from '@components/atoms';
import Avatar from '@components/atoms/Avatar/Avatar';
import { ReviewDate } from '@components/atoms/ReviewDate';
import { ReviewerName } from '@components/atoms/ReviewerName';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import DOMPurify from 'isomorphic-dompurify';

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
  const classes = buildClasses(reviewItemClasses, overrides);
  const calculateStarRating = (rating: number) => {
    const wholeStars = Math.floor(rating);
    const percentageFilled = (rating - wholeStars) * 100;
    return { wholeStars, percentageFilled };
  };

  const renderStars = (wholeStars: number, percentageFilled: number) => {
    const stars: JSX.Element[] = [];

    for (let i = 0; i < wholeStars; i++) {
      stars.push(<Icon key={i} icon="fa-solid fa-star" styling={{}} />);
    }

    if (percentageFilled > 0) {
      stars.push(<Icon key={wholeStars} icon="fa-solid fa-star-half" styling={{}} />);
    }

    return stars;
  };

  const { wholeStars, percentageFilled } = calculateStarRating(itemRating);
  const stars = renderStars(wholeStars, percentageFilled);

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
          {reviewTitle && <div className={classes.reviewTitle}>{reviewTitle.text}</div>}

          <div className={classes.reviewContent}>
            <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(reviewContent.text.markup) }} />
          </div>
        </blockquote>
        <div className={classes.bottomContainer}>
          {imageLink && (
            <div className={classes.imageLinkContainer}>
              <Image
                alt={imageLink.alt || 'image accompanying review'}
                loading={imageLink.loading || 'lazy'}
                width={imageLink.width || '194'}
                height={imageLink.height || '64'}
                className={classes?.imageLink}
                src={imageLink.src}
                id=""
                name=""
              />
            </div>
          )}
          {itemRating && (
            <div className={classes.ratingContainer}>
              <div className={classes.ratingStars}>{stars}</div>
              <span className={classes.ratingFigure}>{itemRating}/5</span>
            </div>
          )}
        </div>
      </figure>
    </BaseComponent>
  );
};

export default ReviewItem;
