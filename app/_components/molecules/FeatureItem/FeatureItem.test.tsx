import { render, screen } from '@testing-library/react';
import { Block } from '@types';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import FeatureItem from './FeatureItem';
import { FeatureItemProps } from './FeatureItem.types';

const cases: [string, FeatureItemProps & Block, () => void][] = [
  [
    'render feature item',
    {
      id: 'one-two',
      name: 'FeatureItem',
      styling: {},
      icon: {
        icon: 'fa fa-check',
        styling: {},
      },
      contentArea: [
        {
          id: 'two',
          name: 'Text',
          text: 'Dis parturient montes nascetur ridiculus mus mauris vitae.',
        },
      ],
    },
    async () => {
      expect(await screen.findByTestId('feature-item')).toBeTruthy();
      expect(await screen.findByTestId('icon')).toBeTruthy();
      expect(await screen.findByTestId('content-area')).toBeTruthy();
    },
  ],
  [
    'render feature item with icon',
    {
      id: 'one-two',
      name: 'FeatureItem',
      styling: {},
      icon: {
        icon: 'fa fa-check',
        styling: {},
      },
      contentArea: [],
    },
    async () => {
      expect(await screen.findByTestId('feature-item')).toBeTruthy();
      expect(await screen.findByTestId('icon')).toBeTruthy();
      expect(await screen.findByTestId('content-area')).toBeFalsy();
    },
  ],
  [
    'render no content area',
    {
      id: 'one-two',
      name: 'FeatureItem',
      styling: {},
      contentArea: [],
    },
    async () => {
      expect(await screen.findByTestId('feature-item')).toBeTruthy();
      expect(await screen.findByTestId('icon')).toBeFalsy();
      expect(await screen.findByTestId('content-area')).toBeFalsy();
    },
  ],
];

describe('FeatureItem test suite', () => {
  beforeAll(() => {
    // Mock components within the content area
    jest.mock('../../atoms/Text/Text', () => ({
      __esModule: true,
      default: () => <div data-testid="text-component" />,
    }));
  });

  it.each(cases)('%s', (_, properties, assertions) => {
    render(<FeatureItem {...properties} />);
    assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(
        <FeatureItem
          contentArea={[
            {
              id: 'two',
              name: 'Text',
              text: 'Dis parturient montes nascetur ridiculus mus mauris vitae.',
            },
          ]}
          styling={{}}
        />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
