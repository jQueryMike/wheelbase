import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import reviewerNameClasses from './ReviewerName.classes';
import { ReviewerNameProps } from './ReviewerName.types';

const ReviewerName = ({ reviewerName, overrides, styling }: ReviewerNameProps) => {
  const classes = buildClasses(reviewerNameClasses, overrides);
  return (
    <BaseComponent as="cite" styling={styling} className={classes.root} stylingOptions={{ atomicType: 'atom' }}>
      {reviewerName || 'Anonymous'}
    </BaseComponent>
  );
};

export default ReviewerName;
