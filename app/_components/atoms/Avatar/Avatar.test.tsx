import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import Avatar from './Avatar';
import { AvatarProps } from './Avatar.types';

const testAvatar = {
  src: 'https://fastly.picsum.photos/id/851/200/300.jpg?hmac=AD_d7PsSrqI2zi-ubHY_-urUxCN77Gnev3k5o0P6nlE',
  alt: 'User Avatar',
  width: 64,
  height: 64,
  styling: {},
};

const cases: [string, AvatarProps, () => void][] = [
  [
    'render Avatar with image',
    {
      ...testAvatar,
    },
    async () => {
      expect(await screen.findByTestId('avatar')).toBeTruthy();
      const avatarElement = await screen.findByTestId('avatar-image');
      expect(avatarElement).toHaveAttribute('src', testAvatar.src);
      expect(avatarElement).toHaveAttribute('alt', testAvatar.alt);
      expect(avatarElement).toHaveAttribute('width', `${testAvatar.width}`);
      expect(avatarElement).toHaveAttribute('height', `${testAvatar.height}`);
    },
  ],
  [
    'render Avatar with default image values',
    {
      src: testAvatar.src,
      alt: testAvatar.alt,
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('avatar')).toBeTruthy();
      const avatarElement = await screen.findByTestId('avatar-image');
      expect(avatarElement).toHaveAttribute('src', testAvatar.src);
      expect(avatarElement).toHaveAttribute('alt', 'Avatar');
      expect(avatarElement).toHaveAttribute('width', '128');
      expect(avatarElement).toHaveAttribute('height', '128');
      expect(avatarElement).toHaveAttribute('loading', 'lazy');
    },
  ],
];

describe('Avatar test suite', () => {
  it.each(cases)('%s', async (_, properties, assertions) => {
    render(<Avatar {...properties} />);
    await assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(<Avatar {...testAvatar} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
