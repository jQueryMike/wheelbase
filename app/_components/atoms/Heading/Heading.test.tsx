import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import Heading from './Heading';
import { HeadingProps, HeadingTag } from './Heading.types';

const cases: [string, HeadingProps, () => void][] = [
  [
    'render Heading with text',
    {
      text: 'Main Heading',
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('heading')).toHaveTextContent('Main Heading');
    },
  ],
  [
    'render Heading with specific tag',
    {
      text: 'Subheading',
      tag: HeadingTag.H3,
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('heading')).toHaveTextContent('Subheading');
      expect(await screen.findByRole('heading', { level: 3 })).toBeTruthy();
    },
  ],
];

describe('Heading test suite', () => {
  it.each(cases)('%s', async (_, properties, assertions) => {
    render(<Heading {...properties} />);
    await assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(<Heading text="Heading" tag={HeadingTag.H2} styling={{}} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
