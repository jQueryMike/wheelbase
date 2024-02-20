import { HeadingSize, HeadingTag } from '@components/atoms';
import { render, screen } from '@testing-library/react';
import { Block } from '@types';
import { axe } from 'jest-axe';

import Hero from './Hero';
import { HeroProps } from './Hero.types';

const cases: [string, HeroProps & Block, () => void][] = [
  [
    'render heading if provided',
    {
      id: 'one',
      name: 'Hero',
      variant: '1',
      heading: { variant: '1', text: 'example', tag: HeadingTag.H1, size: HeadingSize.Large },
      contentArea: [],
    },
    async () => {
      expect(await screen.findByTestId('headings-container')).toBeTruthy();
      expect(await screen.findByTestId('heading')).toBeTruthy();
    },
  ],
  [
    'render subheading if provided',
    {
      id: 'one',
      name: 'Hero',
      variant: '1',
      subheading: {
        variant: '1',
        text: 'example',
        tag: HeadingTag.H2,
        size: HeadingSize.Medium,
      },
      contentArea: [],
    },
    async () => {
      expect(await screen.findByTestId('headings-container')).toBeTruthy();
      expect(await screen.findByTestId('subheading')).toBeTruthy();
    },
  ],
  [
    'render image if provided',
    {
      id: 'one',
      name: 'Hero',
      variant: '1',
      image1: {
        alt: 'example',
        src: 'https://via.placeholder.com/150',
        width: 150,
        height: 150,
      },
    },
    async () => {
      expect(await screen.findByTestId('image-container')).toBeTruthy();
      expect(await screen.findByTestId('image')).toBeTruthy();
    },
  ],
  [
    'render content area',
    {
      id: 'one',
      name: 'Hero',
      variant: '1',
      contentArea: [
        {
          id: 'two',
          name: 'Text',
          variant: '1',
          text: 'Dis parturient montes nascetur ridiculus mus mauris vitae.',
        },
      ],
    },
    async () => {
      expect(await screen.findByTestId('content-area')).toBeTruthy();
      expect(await screen.findByTestId('text-component')).toBeTruthy();
    },
  ],
];

describe('Hero Organism test suite', () => {
  beforeAll(() => {
    // Mock components within the content area
    jest.mock('../../atoms/Text/Text', () => ({
      __esModule: true,
      default: () => <div data-testid="text-component" />,
    }));
  });

  test.each(cases)('should %s', async (_, props, assertions) => {
    const ResolvedComponent = await Hero(props);
    render(ResolvedComponent);
    assertions();
  });

  it('should have no accessibility violations', async () => {
    const ResolvedComponent = await Hero({
      id: 'one',
      name: 'Hero',
      variant: '1',
      heading: { variant: '1', text: 'example', tag: HeadingTag.H1, size: HeadingSize.Large },
      subheading: {
        variant: '1',
        text: 'example',
        tag: HeadingTag.H2,
        size: HeadingSize.Medium,
      },
      image1: {
        alt: 'example',
        src: 'https://via.placeholder.com/150',
        width: 150,
        height: 150,
      },
      contentArea: [
        {
          id: 'two',
          name: 'Text',
          variant: '1',
          text: 'Dis parturient montes nascetur ridiculus mus mauris vitae.',
        },
      ],
    });
    const { container } = render(ResolvedComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
