import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import ImageLink from './ImageLink';
import { ImageLinkProps } from './ImageLink.types';

const testImageLink = {
  link: {
    href: '/test-link',
    target: '_blank',
  },
  image: {
    src: 'https://fastly.picsum.photos/id/851/200/300.jpg?hmac=AD_d7PsSrqI2zi-ubHY_-urUxCN77Gnev3k5o0P6nlE',
    alt: 'Test ImageLink',
    width: 200,
    height: 150,
    styling: {},
  },
  styling: {},
};

const cases: [string, ImageLinkProps, () => void][] = [
  [
    'render ImageLink with link and image',
    {
      image: testImageLink.image,
      styling: {},
      src: testImageLink.image.src,
      alt: testImageLink.image.alt,
      link: testImageLink.link,
    },
    async () => {
      const linkElement = await screen.findByTestId('image-link');
      expect(linkElement).toHaveAttribute('href', testImageLink.link.href);
      expect(linkElement).toHaveAttribute('target', testImageLink.link.target);
      
      const imageElement = await screen.findByTestId('image-link-image');
      expect(imageElement).toHaveAttribute('src', testImageLink.image.src);
      expect(imageElement).toHaveAttribute('alt', testImageLink.image.alt);
      expect(imageElement).toHaveAttribute('width', `${testImageLink.image.width}`);
      expect(imageElement).toHaveAttribute('height', `${testImageLink.image.height}`);
    },
  ],
  [
    'render ImageLink without link',
    {
      image: testImageLink.image,
      styling: {},
      src: testImageLink.image.src,
      alt: testImageLink.image.alt,
    },
    async () => {
      expect(screen.queryByTestId('image-link')).toBeNull(); 
      
      const imageElement = await screen.findByTestId('image-link-image');
      expect(imageElement).toHaveAttribute('src', testImageLink.image.src);
      expect(imageElement).toHaveAttribute('alt', testImageLink.image.alt);
      expect(imageElement).toHaveAttribute('width', `${testImageLink.image.width}`);
      expect(imageElement).toHaveAttribute('height', `${testImageLink.image.height}`);
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
      const { container } = render(
        <ImageLink
          image={testImageLink.image}
          link={testImageLink.link}
          styling={{}}
          src={testImageLink.image.src}
          alt={testImageLink.image.alt}
        />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
