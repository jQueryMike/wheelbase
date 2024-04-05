import { Heading } from '@components/atoms';
import { Block } from '@types';
import { BaseOrganism } from '../BaseOrganism';

import { ReviewsProps } from './Reviews.types';

const Reviews = async ({
  heading,
  subheading,
  overrides,
  ...rest
}: ReviewsProps & Block) => {
  const resolvedHeading = heading ? await Heading(heading) : undefined;
  const resolvedSubheading = subheading
    ? await Heading({ ...subheading, 'data-testid': 'subheading', textType: 'subheading' })
    : undefined;
  return (
    <BaseOrganism {...rest}>
      {(heading || subheading) && (
        <div data-testid="headings-container">
          {resolvedHeading}
          {resolvedSubheading}
        </div>

      )}</BaseOrganism>
  )
};

export default Reviews;
