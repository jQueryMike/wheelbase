import { render, screen } from '@testing-library/react';
import { ButtonSize, ButtonStyle } from '@utils/constants';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import Button from './Button';
import { ButtonProps } from './Button.types';

const testButton = {
  style: ButtonStyle.Accent,
  size: ButtonSize.Small,
  text: 'Get a valuations',
  href: null,
  target: '_self',
  leftIcon: null,
  rightIcon: null,
  loading: false,
  overrides: undefined,
  styling: {},
};

const cases: [string, ButtonProps, () => void][] = [
  [
    'render Button with text',
    {
      text: testButton.text,
      style: testButton.style,
      size: testButton.size,
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('button-text')).toHaveTextContent('Get a valuations');
      expect(await screen.findByTestId('button-root')).toHaveClass('bg-accent');
      expect(await screen.findByTestId('button-root')).toHaveClass('text-[12px]');
    },
  ],
  [
    'render Button with left icon',
    {
      text: testButton.text,
      style: testButton.style,
      size: testButton.size,
      leftIcon: 'fa fa-arrow-left',
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('button-left-icon')).toBeTruthy();
      expect(await screen.findByTestId('button-root')).toHaveClass('bg-accent');
      expect(await screen.findByTestId('button-root')).toHaveClass('text-[12px]');
    },
  ],
  [
    'render Button with right icon',
    {
      text: testButton.text,
      style: testButton.style,
      size: testButton.size,
      leftIcon: 'fa fa-arrow-right',
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('button-right-icon')).toBeTruthy();
      expect(await screen.findByTestId('button-root')).toHaveClass('bg-accent');
      expect(await screen.findByTestId('button-root')).toHaveClass('text-[12px]');
    },
  ],
  [
    'render Button with link',
    {
      text: testButton.text,
      href: '/link',
      target: '_blank',
      style: testButton.style,
      size: testButton.size,
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('button-link')).toHaveAttribute('href', '/link');
      expect(await screen.findByTestId('button-link')).toHaveAttribute('target', '_blank');
      expect(await screen.findByTestId('button-root')).toHaveClass('bg-accent');
      expect(await screen.findByTestId('button-root')).toHaveClass('text-[12px]');
    },
  ],
  [
    'render Button with loading state',
    {
      text: testButton.text,
      loading: true,
      style: testButton.style,
      size: testButton.size,
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('button-content')).toHaveClass('opacity-0');
      expect(await screen.findByTestId('button-root')).toHaveClass('bg-accent');
      expect(await screen.findByTestId('button-root')).toHaveClass('text-[12px]');
    },
  ],
];

describe('Button test suite', () => {
  it.each(cases)('%s', (_, properties, assertions) => {
    render(<Button {...properties} />);
    assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(
        <Button text={testButton.text} style={testButton.style} size={testButton.size} styling={{}} />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
