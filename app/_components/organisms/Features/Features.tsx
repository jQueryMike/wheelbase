import { Heading } from '@components/atoms';
import { BaseComponent } from '@components/utils/BaseComponent';
import { Block } from '@types';

import { FeaturesProps } from './Features.types';

const Features = async ({ heading, subheading, overrides, ...rest }: FeaturesProps & Block) => {
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
        // Features Block Grid for Items
      )}
    </BaseComponent>
  );
};

export default Features;
