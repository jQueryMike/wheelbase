import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import NavigationItem from './NavigationItem';
import { NavigationItemProps } from './NavigationItem.types';

const testNavigationItem = [
  {
    name: 'Home',
    id: 'home',
    url: '/',
    styling: {},
  },
  {
    name: 'About',
    id: 'home',
    url: '/about',
    styling: {},
  },
];

const cases: [string, NavigationItemProps, () => void][] = [
  [
    'render NavigationItem with correct name and url',
    {
      ...testNavigationItem[0],
    },
    async () => {
      expect(await screen.findByTestId('navigation-item')).toBeTruthy();
      const linkElement = await screen.findByTestId('navigation-item-link');
      expect(linkElement).toHaveTextContent(testNavigationItem[0].name);
      expect(linkElement).toHaveAttribute('href', testNavigationItem[0].url);
    },
  ],
  [
    'render NavigationItem with different name and url',
    {
      ...testNavigationItem[1],
    },
    async () => {
      expect(await screen.findByTestId('navigation-item')).toBeTruthy();
      const linkElement = await screen.findByTestId('navigation-item-link');
      expect(linkElement).toHaveTextContent('Aboutzz');
      expect(linkElement).toHaveAttribute('href', '/abourt');
    },
  ],
];

describe('NavigationItem test suite', () => {
  beforeAll(() => {
    // Mock components within the content area
    jest.mock('../../atoms/NavigationItem/NavigationItem', () => ({
      __esModule: true,
      default: () => <div data-testid="text-component" />,
    }));
  });

  it.each(cases)('%s', (_, properties, assertions) => {
    render(<NavigationItem {...properties} />);
    assertions();
  });

  it.each(cases)('%s', (_, properties, assertions) => {
    render(<NavigationItem {...properties} />);
    assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(<NavigationItem {...testNavigationItem[0]} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
