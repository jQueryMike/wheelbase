import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import DrawerNavigation from './DrawerNavigation';
import { DrawerNavigationProps } from './DrawerNavigation.types';

const homeObject = {
  children: [
    { id: '1', name: 'Home', url: '/' },
    { id: '2', name: 'About Us', url: '/about' },
    { id: '3', name: 'Contact Us', url: '/contact' },
  ],
  styling: {},
};

const cases: [string, DrawerNavigationProps, () => void][] = [
  [
    'render drawer navigation',
    { ...homeObject },
    async () => {
      expect(await screen.findByTestId('open-navigation')).toBeTruthy();
      expect(screen.queryByTestId('close-navigation')).toBeFalsy();
      expect(screen.queryByTestId('nav-link-home')).toBeFalsy();
      expect(screen.queryByTestId('nav-link-about-us')).toBeFalsy();
      expect(screen.queryByTestId('nav-link-contact-us')).toBeFalsy();
    },
  ],
  [
    'open drawer navigation',
    { ...homeObject },
    async () => {
      fireEvent.click(await screen.findByTestId('open-navigation'));
      expect(await screen.findByTestId('close-navigation')).toBeTruthy();
      expect(await screen.findByTestId('nav-link-home')).toBeTruthy();
      expect(await screen.findByTestId('nav-link-about-us')).toBeTruthy();
      expect(await screen.findByTestId('nav-link-contact-us')).toBeTruthy();
    },
  ],
  [
    'close drawer navigation',
    { ...homeObject },
    async () => {
      fireEvent.click(await screen.findByTestId('open-navigation'));
      fireEvent.click(await screen.findByTestId('close-navigation'));
      expect(screen.queryByTestId('close-navigation')).toBeFalsy();
      expect(screen.queryByTestId('nav-link-home')).toBeFalsy();
      expect(screen.queryByTestId('nav-link-about-us')).toBeFalsy();
      expect(screen.queryByTestId('nav-link-contact-us')).toBeFalsy();
    },
  ],
];

describe('DrawerNavigation test suite', () => {
  it.each(cases)('%s', async (_, properties, assertions) => {
    render(<DrawerNavigation {...properties} />);
    await assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(<DrawerNavigation {...homeObject} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
