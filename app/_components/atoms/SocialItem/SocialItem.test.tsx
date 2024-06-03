import SocialItem from './SocialItem';
import { SocialItemProps } from './SocialItem.types';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

const testSocialItem: SocialItemProps = {
  icon: {
    icon: 'fa-brands fa-facebook-f',
    styling: {},
  },
  link: {
    href: '/',
  },
  styling: {},
};

const cases: [string, SocialItemProps, () => void][] = [
  [
    'render SocialItem with valid icon and link',
    { ...testSocialItem },
    async () => {
      expect(await screen.findByTestId('social-item-link')).toHaveAttribute('href', '');
      expect(await screen.findByTestId('social-item-icon')).toBeTruthy();
    },
  ],
];

describe('SocialItem test suite', () => {
  it.each(cases)('%s', async (_, properties, assertions) => {
    render(<SocialItem {...properties} />);
    await assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(<SocialItem {...testSocialItem} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
