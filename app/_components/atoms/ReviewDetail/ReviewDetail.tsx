import reviewDetailClasses from './ReviewDetail.classes';
import { ReviewDetailProps } from './ReviewDetail.types';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

const ReviewDetail = ({
  reviewDetail,
  styling,
  overrides,
}: ReviewDetailProps) => {
  const classes = buildClasses(reviewDetailClasses, overrides);
  return (
    <BaseComponent
      as="cite"
      styling={styling}
      className={classes.root}
      stylingOptions={{ atomicType: 'atom' }}
      data-testid="review-detail"
    >
      {reviewDetail}
    </BaseComponent>
  );
};

export default ReviewDetail;
