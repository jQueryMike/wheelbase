import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import reviewDateClasses from './ReviewDate.classes';
import { ReviewDateProps } from './ReviewDate.types';

const ReviewDate = ({ styling, reviewDate, overrides }: ReviewDateProps) => {
  const classes = buildClasses(reviewDateClasses, overrides);
  return (
    <BaseComponent as="div" styling={styling} className={classes.root} stylingOptions={{ atomicType: 'atom' }}>
      {reviewDate}
    </BaseComponent>
  );
};

export default ReviewDate;
