import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import Image from './Image';
import { ImageProps } from './Image.types';

const testImage = {
  src: 'https://fastly.picsum.photos/id/851/200/300.jpg?hmac=AD_d7PsSrqI2zi-ubHY_-urUxCN77Gnev3k5o0P6nlE',
  alt: 'test image',
  width: 200,
  height: 150,
  styling: {},
};

const cases: [string, ImageProps, () => void][] = [
  [
    'render Image with src and alt',
    {
      ...testImage,
    },
    async () => {
      expect(await screen.findByTestId('image')).toBeTruthy();
      const imageElement = await screen.findByTestId('image-element');
      expect(imageElement).toHaveAttribute('src', testImage.src);
      expect(imageElement).toHaveAttribute('alt', testImage.alt);
      expect(imageElement).toHaveAttribute('width', `${testImage.width}`);
      expect(imageElement).toHaveAttribute('height', `${testImage.height}`);
    },
  ],
];

describe('Image test suite', () => {
  it.each(cases)('%s', (_, properties, assertions) => {
    render(<Image {...properties} />);
    assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(<Image {...testImage} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
