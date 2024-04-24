import { Icon, Image } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import DOMPurify from 'dompurify';

import reviewItemClasses from './ReviewItem.classes';
import { ReviewItemProps } from './ReviewItem.types';

const ReviewItem = ({
  avatar,
  reviewerName,
  reviewDate,
  reviewTitle,
  reviewContent,
  itemRating,
  reviewImage,
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
          <div className={classes.avatarContainer}>
            {avatar && (
              <Image
                alt={avatar.alt || 'Avatar'}
                loading={avatar.loading || 'lazy'}
                width={avatar.width || '128'}
                height={avatar.height || '128'}
                className={classes?.avatar}
                src={avatar.src}
                id=""
                name=""
              />
            )}
          </div>
          <div className={classes.citeContainer}>
            <cite className={classes.reviewerName}>{reviewerName || 'Anonymous'}</cite>
            {reviewDate && <div className={classes.reviewDate}>{reviewDate}</div>}
          </div>
        </figcaption>
        <blockquote className={classes.reviewContentContainer}>
          {reviewTitle && <div className={classes.reviewTitle}>{reviewTitle}</div>}
          &quot;
          <div
            className={classes.reviewContent}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(reviewContent) }}
          />
          &quot;
        </blockquote>
        <div className={classes.bottomContainer}>
          {reviewImage && (
            <div className={classes.imageLinkContainer}>
              <Image
                alt={reviewImage.alt || 'image accompanying review'}
                loading={reviewImage.loading || 'lazy'}
                width={reviewImage.width || '194'}
                height={reviewImage.height || '64'}
                className={classes?.reviewImage}
                src={reviewImage.src}
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
