import type { Meta, StoryObj } from '@storybook/react';

import Text from '../Text';
import textVariant1 from '../variants/1';

type Story = StoryObj<typeof Text>;

export const Variant1: Story = {
  args: {
    classes: textVariant1.classes,
    content: `
    <p>Praesent nonummy mi in odio. Ut id nisl <a>quis enim dignissim</a> sagittis. Nulla porta dolor. In hac habitasse 
    platea dictumst.</p>
    <p>Donec vitae sapien ut <strong>libero venenatis</strong> faucibus. Praesent adipiscing. Nulla consequat massa 
    quis enim. Phasellus ullamcorper ipsum rutrum nunc.</p>
    <ul>
    <li>Vivamus quis mi. Cras sagittis. Phasellus dolor.</li>
    <li>Praesent egestas neque eu enim. Nam pretium turpis et arcu.</li>
    </ul>
    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed 
    ipsum. Ut non enim eleifend felis pretium feugiat. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
    sem. In hac habitasse platea dictumst.</p>`,
  },
};

const meta: Meta<typeof Text> = {
  title: 'Blocks/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
