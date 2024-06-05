import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';
import { ImageLinkProps } from './ImageLink.types';
import ImageLink from './ImageLink';

const testImageLink = {
  href: '/test-link',
  target: '_blank',
  src: 'https://fastly.picsum.photos/id/851/200/300.jpg?hmac=AD_d7PsSrqI2zi-ubHY_-urUxCN77Gnev3k5o0P6nlE',
  alt: 'Test ImageLink',
  width: 200,
  height: 150,
  styling: {},
  priority: true,
  overrides: {},
  imageAsBackground: false,
  maxHeight: "100%"
};

const cases: [string, ImageLinkProps, () => void][] = [
  [
    'render ImageLink with link and image',
    testImageLink,
    async () => {
      const linkElement = await screen.findByTestId('image-link');
      expect(linkElement).toHaveAttribute('href', testImageLink.href);
      expect(linkElement).toHaveAttribute('target', testImageLink.target);

      const imageElement = await screen.findByTestId('image-link-image');
      expect(imageElement.getAttribute('src')).toContain(encodeURIComponent(testImageLink.src));
      expect(imageElement).toHaveAttribute('alt', testImageLink.alt);
      expect(imageElement).toHaveAttribute('width', `${testImageLink.width}`);
      expect(imageElement).toHaveAttribute('height', `${testImageLink.height}`);
    },
  ],
  [
    'render ImageLink without link',
    {
      href: '',
      target: '_blank',
      src: 'https://fastly.picsum.photos/id/851/200/300.jpg?hmac=AD_d7PsSrqI2zi-ubHY_-urUxCN77Gnev3k5o0P6nlE',
      alt: 'Test ImageLink',
      width: 200,
      height: 150,
      styling: {},
      overrides: {},
      imageAsBackground: false,
      maxHeight: "100%"
    },
    async () => {
      expect(screen.queryByTestId('image-link')).toBeNull();

      const imageElement = await screen.findByTestId('image-link-image');
      expect(imageElement.getAttribute('src')).toContain(encodeURIComponent(testImageLink.src));
      expect(imageElement).toHaveAttribute('alt', testImageLink.alt);
      expect(imageElement).toHaveAttribute('width', `${testImageLink.width}`);
      expect(imageElement).toHaveAttribute('height', `${testImageLink.height}`);
    },
  ],
];

describe('ImageLink test suite', () => {
  it.each(cases)('%s', async (_, properties, assertions) => {
    render(<ImageLink {...properties} />);
    await assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(<ImageLink {...testImageLink} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
