import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import Text from './Text';
import { TextProps } from './Text.types';

const testText: TextProps = {
  text: '<p>This is a <strong>sample</strong> text.</p>',
  styling: {},
};

const cases: [string, TextProps, () => void][] = [
  [
    'render Text with sanitized HTML',
    {
      ...testText,
    },
    async () => {
      expect(await screen.findByTestId('text-content')).toBeTruthy();
      const textContentElement = await screen.findByTestId('text-content-text');
      expect(textContentElement).toHaveTextContent('This is a sample text.');
      expect(textContentElement).toContainHTML('<p>This is a <strong>sample</strong> text.</p>');
    },
  ],
  [
    'render Text with empty content',
    {
      text: '',
      styling: {},
    },
    async () => {
      expect(screen.queryByTestId('text-content')).toBeNull();
    },
  ],
  [
    'render Text with potentially dangerous HTML',
    {
      text: '<script>alert("Dangerous script!");</script><p>This is a text.</p>',
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('text-content')).toBeTruthy();
      const textContentElement = await screen.findByTestId('text-content-text');
      expect(textContentElement).toHaveTextContent('This is a text.');
      expect(textContentElement).toContainHTML('<p>This is a text.</p>');
      expect(textContentElement).not.toContainHTML('<script>alert("Dangerous script!");</script>');
    },
  ],
];

describe('Text test suite', () => {
  it.each(cases)('%s', async (_, properties, assertions) => {
    render(<Text {...properties} />);
    await assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(<Text {...testText} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
