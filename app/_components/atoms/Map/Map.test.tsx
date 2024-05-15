import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import Map from './Map';
import { MapProps } from './Map.types';

const testMap: MapProps = {
  src: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12961.468307172101!2d139.6911889!3d35.6925835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b57a2b85795%3A0x8548635f1933c70e!2sHilton%20Tokyo!5e0!3m2!1sen!2suk!4v1715683063080!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  styling: {},
};

const cases: [string, MapProps, () => void][] = [
  [
    'render Map with correct source',
    {
      ...testMap,
    },
    async () => {
      expect(await screen.findByTestId('map-container')).toBeTruthy();
      const iframeElement = await screen.findByTestId('map-iframe');
      expect(iframeElement).toHaveAttribute(
        'src',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6155328087565!2d-73.98731968506318!3d40.74844047932788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1622051897516!5m2!1sen!2sus',
      );
      expect(iframeElement).toHaveAttribute('title', 'google map');
      expect(iframeElement).toHaveAttribute('width', '600');
      expect(iframeElement).toHaveAttribute('height', '450');
      expect(iframeElement).toHaveAttribute('loading', 'lazy');
    },
  ],
  [
    'render Map with missing source',
    {
      src: '',
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('map-container')).toBeTruthy();
      const iframeElement = screen.queryByTestId('map-iframe');
      expect(iframeElement).toBeNull();
    },
  ],
];

describe('Map test suite', () => {
  it.each(cases)('%s', (_, properties, assertions) => {
    render(<Map {...properties} />);
    assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(<Map {...testMap} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
