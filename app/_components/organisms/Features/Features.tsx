import { Heading } from '@components/atoms';
import { Block } from '@types';
import { BaseOrganism } from '../BaseOrganism';

import { FeaturesProps } from './Features.types';

const Features = async ({
  heading,
  subheading,
  overrides,
  ...rest
}: FeaturesProps & Block) => {
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
        // Features Block Grid for Items
      )}</BaseOrganism>
  )
};

export default Features;
