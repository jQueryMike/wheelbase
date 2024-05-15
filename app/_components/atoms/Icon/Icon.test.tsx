import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import Icon from './Icon';
import { IconProps } from './Icon.types';

const testIcon = { icon: 'fa fa-envelope', styling: {} };

const cases: [string, IconProps, () => void][] = [
  [
    'render Icon with specific icon class',
    {
      icon: testIcon.icon,
      styling: testIcon.styling,
    },
    async () => {
      expect(await screen.findByTestId('icon')).toHaveClass('fa fa-envelope');
    },
  ],
];

describe('Icon test suite', () => {
  it.each(cases)('%s', (_, properties, assertions) => {
    render(<Icon {...properties} />);
    assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(<Icon icon={testIcon.icon} styling={testIcon.styling} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
