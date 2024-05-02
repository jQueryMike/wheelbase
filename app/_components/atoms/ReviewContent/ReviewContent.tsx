/* eslint-disable react/no-danger */
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import DOMPurify from 'isomorphic-dompurify';

import reviewContentClasses from './ReviewContent.classes';
import { ReviewContentProps } from './ReviewContent.types';

const ReviewContent = ({ reviewContent, styling, overrides }: ReviewContentProps) => {
  const classes = buildClasses(reviewContentClasses, overrides);
  return (
    <BaseComponent as="div" styling={styling} stylingOptions={{ atomicType: 'atom' }} className={classes.root}>
      <div className={classes.reviewContent} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(reviewContent) }} />
    </BaseComponent>
  );
};

export default ReviewContent;
