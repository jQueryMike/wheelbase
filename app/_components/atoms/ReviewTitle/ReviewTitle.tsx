import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import reviewTitleClasses from './ReviewTitle.classes';
import { ReviewTitleProps } from './ReviewTitle.types';

const ReviewTitle = ({ styling, reviewTitle, overrides }: ReviewTitleProps) => {
  const classes = buildClasses(reviewTitleClasses, overrides);
  return (
    <BaseComponent as="div" styling={styling} stylingOptions={{ atomicType: 'atom' }} className={classes.root}>
      {reviewTitle}
    </BaseComponent>
  );
};

export default ReviewTitle;
