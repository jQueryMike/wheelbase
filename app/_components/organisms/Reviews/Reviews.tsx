import { Heading } from '@components/atoms';
import { ReviewItem, ReviewItemProps } from '@components/molecules/ReviewItem';
import { BaseComponent } from '@components/utils/BaseComponent';
import { Block } from '@types';

import { ReviewsProps } from './Reviews.types';

const Reviews = async ({ heading, subheading, reviewsBlock, items, overrides, ...rest }: ReviewsProps & Block) => {
  const resolvedHeading = heading ? await Heading(heading) : undefined;
  const resolvedSubheading = subheading
    ? await Heading({ ...subheading, 'data-testid': 'subheading', textType: 'subheading' })
    : undefined;
  return (
    <BaseComponent {...rest}>
      {(heading || subheading) && (
        <div data-testid="headings-container">
          {resolvedHeading}
          {resolvedSubheading}
        </div>
      )}
      {items.map((item: ReviewItemProps) => (
        <ReviewItem {...item} />
      ))}
    </BaseComponent>
  );
};

export default Reviews;
