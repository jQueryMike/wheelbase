import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import reviewDetailClasses from './ReviewDetail.classes';
import { ReviewDetailProps } from './ReviewDetail.types';

const ReviewDetail = ({ reviewDetail, styling, overrides }: ReviewDetailProps) => {
  const classes = buildClasses(reviewDetailClasses, overrides);
  return (
    <BaseComponent as="cite" styling={styling} className={classes.root} stylingOptions={{ atomicType: 'atom' }}>
      {reviewDetail}
    </BaseComponent>
  );
};

export default ReviewDetail;
