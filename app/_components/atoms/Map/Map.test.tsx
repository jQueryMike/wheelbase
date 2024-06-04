import Map from './Map';
import { MapProps } from './Map.types';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

const mapSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2400.534453557178!2d-2.186499722799641!3d53.010754772193884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a6836a6dbdc67%3A0x221ce2abd2bb1b75!2sClick%20Dealer%20Ltd!5e0!3m2!1sen!2suk!4v1717484787089!5m2!1sen!2suk';
const mapIframe = `<iframe src="${mapSrc}"></iframe>`;

const testMap: MapProps = {
  src: mapIframe,
  fullWidth: false,
  styling: {},
};

const cases: [string, MapProps, () => void][] = [
  [
    'render Map with correct source',
    {
      ...testMap,
    },
    async () => {
      const mapContainer = await screen.findByTestId('map-container');
      expect(mapContainer).toBeTruthy();
      expect(mapContainer).toHaveClass('col-span-12 lg:col-span-7 xl:col-span-8');

      const iframeElement = await screen.findByTestId('map-iframe');
      expect(iframeElement).toHaveAttribute('src', mapSrc);
      expect(iframeElement).toHaveAttribute('title', 'google map');
      expect(iframeElement).toHaveAttribute('loading', 'lazy');
    },
  ],
  [
    'render Map with missing source',
    {
      src: '',
      fullWidth: false,
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('map-container')).toBeTruthy();

      const iframeElement = screen.queryByTestId('map-iframe');
      expect(iframeElement).toBeNull();
    },
  ],
  [
    'render Map with fullscreen enabled',
    {
      ...testMap,
      fullWidth: true,
      styling: {},
    },
    async () => {
      const mapContainer = await screen.findByTestId('map-container');
      expect(mapContainer).toHaveClass('col-span-12');

      const iframeElement = await screen.findByTestId('map-iframe');
      expect(iframeElement).toHaveAttribute('src', mapSrc);
      expect(iframeElement).toHaveAttribute('title', 'google map');
      expect(iframeElement).toHaveAttribute('loading', 'lazy');
    },
  ],
];

describe('Map test suite', () => {
  it.each(cases)('%s', async (_, properties, assertions) => {
    render(<Map {...properties} />);
    await assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(<Map {...testMap} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
