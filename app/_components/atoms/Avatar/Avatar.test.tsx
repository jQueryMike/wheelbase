import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import Avatar from './Avatar';
import { AvatarProps } from './Avatar.types';

const [imageSrcTest, imageAltTest, imageWidthTest, imageHeightTest] = [
  'https://fastly.picsum.photos/id/851/200/300.jpg?hmac=AD_d7PsSrqI2zi-ubHY_-urUxCN77Gnev3k5o0P6nlE',
  'User Avatar',
  64,
  64,
];

const cases: [string, AvatarProps, () => void][] = [
  [
    'render Avatar with image',
    {
      src: imageSrcTest,
      alt: imageAltTest,
      width: imageWidthTest,
      height: imageHeightTest,
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('avatar-image')).toBeTruthy();
      expect(await screen.findByTestId('avatar-image')).toHaveAttribute('src', imageSrcTest);
      expect(await screen.findByTestId('avatar-image')).toHaveAttribute('alt', imageAltTest);
      expect(await screen.findByTestId('avatar-image')).toHaveAttribute('width', imageWidthTest);
      expect(await screen.findByTestId('avatar-image')).toHaveAttribute('height', imageHeightTest);
    },
  ],
  [
    'render Avatar with default image values',
    {
      src: imageSrcTest,
      styling: {},
      alt: imageAltTest,
    },
    async () => {
      expect(await screen.findByTestId('avatar-image')).toBeTruthy();
      expect(await screen.findByTestId('avatar-image')).toHaveAttribute('src', imageSrcTest);
      expect(await screen.findByTestId('avatar-image')).toHaveAttribute('alt', 'Avatar');
      expect(await screen.findByTestId('avatar-image')).toHaveAttribute('width', '128');
      expect(await screen.findByTestId('avatar-image')).toHaveAttribute('height', '128');
      expect(await screen.findByTestId('avatar-image')).toHaveAttribute('loading', 'lazy');
    },
  ],
];

describe('Avatar test suite', () => {
  it.each(cases)('%s', (_, properties, assertions) => {
    render(<Avatar {...properties} />);
    assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(
        <Avatar src={imageSrcTest} alt={imageAltTest} width={imageWidthTest} height={imageHeightTest} styling={{}} />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
