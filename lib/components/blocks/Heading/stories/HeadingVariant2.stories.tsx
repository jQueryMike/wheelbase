import type { Meta } from '@storybook/react';

import Heading, { HeadingSize } from '../Heading';
import headingVariant2 from '../variants/2';

export const Variant2 = () => (
  <div className="space-y-8">
    <div>
      <Heading size={HeadingSize.ExtraLarge} text="I'm an extra large heading" classes={headingVariant2.classes} />
    </div>
    <div>
      <Heading size={HeadingSize.Large} text="I'm a large heading" classes={headingVariant2.classes} />
    </div>
    <div>
      <Heading size={HeadingSize.Medium} text="I'm a medium heading" classes={headingVariant2.classes} />
    </div>
    <div>
      <Heading size={HeadingSize.Small} text="I'm a small heading" classes={headingVariant2.classes} />
    </div>
    <div>
      <Heading size={HeadingSize.ExtraSmall} text="I'm an extra small heading" classes={headingVariant2.classes} />
    </div>
  </div>
);

const meta: Meta<typeof Heading> = {
  title: 'Blocks/Heading',
  component: Variant2,
  tags: ['autodocs'],
};

export default meta;
