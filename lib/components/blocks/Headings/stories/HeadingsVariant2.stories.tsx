import type { Meta } from '@storybook/react';

import { HeadingSize } from '../../Heading';
import headingVariant2 from '../../Heading/variants/2';
import subheadingVariant2 from '../../Subheading/variants/2';
import Headings from '../Headings';
import headingsVariant2 from '../variants/2';

export const Variant2 = () => (
  <div className="space-y-8">
    <div>
      <Headings
        classes={headingsVariant2.classes}
        heading={{ size: HeadingSize.ExtraLarge, text: "I'm an extra large heading", classes: headingVariant2.classes }}
        subheading={{ text: "I'm a subheading", classes: subheadingVariant2.classes }}
      />
    </div>
    <div>
      <Headings
        classes={headingsVariant2.classes}
        heading={{ size: HeadingSize.Large, text: "I'm a large heading", classes: headingVariant2.classes }}
        subheading={{ text: "I'm a subheading", classes: subheadingVariant2.classes }}
      />
    </div>
    <div>
      <Headings
        classes={headingsVariant2.classes}
        heading={{ size: HeadingSize.Medium, text: "I'm a medium heading", classes: headingVariant2.classes }}
        subheading={{ text: "I'm a subheading", classes: subheadingVariant2.classes }}
      />
    </div>
    <div>
      <Headings
        classes={headingsVariant2.classes}
        heading={{ size: HeadingSize.Small, text: "I'm a small heading", classes: headingVariant2.classes }}
        subheading={{ text: "I'm a subheading", classes: subheadingVariant2.classes }}
      />
    </div>
    <div>
      <Headings
        classes={headingsVariant2.classes}
        heading={{ size: HeadingSize.ExtraSmall, text: "I'm an extra small heading", classes: headingVariant2.classes }}
        subheading={{ text: "I'm a subheading", classes: subheadingVariant2.classes }}
      />
    </div>
  </div>
);

const meta: Meta<typeof Headings> = {
  title: 'Blocks/Headings',
  component: Variant2,
  tags: ['autodocs'],
};

export default meta;
