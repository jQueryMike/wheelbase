import type { Meta } from '@storybook/react';

import { HeadingSize } from '../../Heading';
import headingVariant1 from '../../Heading/variants/1';
import subheadingVariant1 from '../../Subheading/variants/1';
import Headings from '../Headings';
import headingsVariant1 from '../variants/1';

export const Variant1 = () => (
  <div className="space-y-8">
    <div>
      <Headings
        classes={headingsVariant1.classes}
        heading={{ size: HeadingSize.ExtraLarge, text: "I'm an extra large heading", classes: headingVariant1.classes }}
        subheading={{ text: "I'm a subheading", classes: subheadingVariant1.classes }}
      />
    </div>
    <div>
      <Headings
        classes={headingsVariant1.classes}
        heading={{ size: HeadingSize.Large, text: "I'm a large heading", classes: headingVariant1.classes }}
        subheading={{ text: "I'm a subheading", classes: subheadingVariant1.classes }}
      />
    </div>
    <div>
      <Headings
        classes={headingsVariant1.classes}
        heading={{ size: HeadingSize.Medium, text: "I'm a medium heading", classes: headingVariant1.classes }}
        subheading={{ text: "I'm a subheading", classes: subheadingVariant1.classes }}
      />
    </div>
    <div>
      <Headings
        classes={headingsVariant1.classes}
        heading={{ size: HeadingSize.Small, text: "I'm a small heading", classes: headingVariant1.classes }}
        subheading={{ text: "I'm a subheading", classes: subheadingVariant1.classes }}
      />
    </div>
    <div>
      <Headings
        classes={headingsVariant1.classes}
        heading={{ size: HeadingSize.ExtraSmall, text: "I'm an extra small heading", classes: headingVariant1.classes }}
        subheading={{ text: "I'm a subheading", classes: subheadingVariant1.classes }}
      />
    </div>
  </div>
);

const meta: Meta<typeof Headings> = {
  title: 'Blocks/Headings',
  component: Variant1,
  tags: ['autodocs'],
};

export default meta;
