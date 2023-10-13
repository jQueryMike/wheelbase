import type { Meta } from '@storybook/react';

import Button, { ButtonStyle } from '../Button';
import buttonVariant1 from '../variants/1';

export const Variant1 = () => (
  <div className="space-y-8">
    <div>
      <Button
        classes={buttonVariant1.classes}
        style={ButtonStyle.Primary}
        text="I'm a primary button"
        leftIcon="fa-solid fa-magnifying-glass"
      />
    </div>
    <div>
      <Button
        classes={buttonVariant1.classes}
        style={ButtonStyle.Secondary}
        text="I'm a secondary button"
        leftIcon="fa-solid fa-magnifying-glass"
      />
    </div>
    <div>
      <Button
        classes={buttonVariant1.classes}
        style={ButtonStyle.Accent}
        text="I'm an accent button"
        leftIcon="fa-solid fa-magnifying-glass"
      />
    </div>
    <div>
      <Button
        classes={buttonVariant1.classes}
        style={ButtonStyle.Plain}
        text="I'm a plain button"
        leftIcon="fa-solid fa-magnifying-glass"
      />
    </div>
  </div>
);

const meta: Meta<typeof Button> = {
  title: 'Blocks/Button',
  component: Variant1,
  tags: ['autodocs'],
};

export default meta;
