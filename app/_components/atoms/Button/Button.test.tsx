import Button from './Button';
import { ButtonProps } from './Button.types';
import { cleanup, render, screen } from '@testing-library/react';
import { ButtonSize, ButtonStyle } from '@utils/constants';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

const testButton: ButtonProps = {
  style: ButtonStyle.Accent,
  size: ButtonSize.Small,
  text: 'Get a valuations',
  href: undefined,
  target: '_self',
  leftIcon: undefined,
  rightIcon: undefined,
  loading: false,
  overrides: undefined,
  styling: {},
};

const cases: [string, ButtonProps, () => void][] = [
  [
    'render Button with text',
    {
      ...testButton,
    },
    async () => {
      expect(await screen.findByTestId('button-text')).toHaveTextContent('Get a valuations');
      expect(await screen.findByTestId('button-root')).toHaveClass('bg-accent');
      expect(await screen.findByTestId('button-root')).toHaveClass('text-[12px]');
      expect(await screen.findByTestId('button-link')).toHaveAttribute('target', '_self');
    },
  ],
  [
    'render Button with left icon',
    {
      ...testButton,
      leftIcon: 'fa fa-arrow-left',
    },
    async () => {
      expect(await screen.findByTestId('button-left-icon')).toBeTruthy();
      expect(await screen.findByTestId('button-root')).toHaveClass('bg-accent');
      expect(await screen.findByTestId('button-root')).toHaveClass('text-[12px]');
      expect(await screen.findByTestId('button-link')).toHaveAttribute('target', '_self');
    },
  ],
  [
    'render Button with right icon',
    {
      ...testButton,
      rightIcon: 'fa fa-arrow-right',
    },
    async () => {
      expect(await screen.findByTestId('button-right-icon')).toBeTruthy();
      expect(await screen.findByTestId('button-root')).toHaveClass('bg-accent');
      expect(await screen.findByTestId('button-root')).toHaveClass('text-[12px]');
      expect(await screen.findByTestId('button-link')).toHaveAttribute('target', '_self');
    },
  ],
  [
    'render Button with link',
    {
      ...testButton,
      href: '/link-blank',
      target: '_blank',
    },
    async () => {
      expect(await screen.findByTestId('button-link')).toHaveAttribute('href', '/link-blank');
      expect(await screen.findByTestId('button-link')).toHaveAttribute('target', '_blank');
      expect(await screen.findByTestId('button-root')).toHaveClass('bg-accent');
      expect(await screen.findByTestId('button-root')).toHaveClass('text-[12px]');
    },
  ],
  [
    'render Button with loading state',
    {
      ...testButton,
      loading: true,
    },
    async () => {
      expect(await screen.findByTestId('button-content')).toHaveClass('opacity-0');
      expect(await screen.findByTestId('button-root')).toHaveClass('bg-accent');
      expect(await screen.findByTestId('button-root')).toHaveClass('text-[12px]');
      expect(await screen.findByTestId('button-link')).toHaveAttribute('target', '_self');
    },
  ],
];

describe('Button test suite', () => {
  it.each(cases)('%s', async (_, properties, assertions) => {
    render(<Button {...properties} />);
    await assertions();
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
