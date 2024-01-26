import { render, screen } from '@testing-library/react';
import { Block } from '@types';
import { axe } from 'jest-axe';

import Hero from './Hero';
import { HeroProps } from './Hero.types';

const cases: [string, HeroProps & Block, () => void][] = [
  [
    'render heading if provided',
    { id: 'one', name: 'Hero', classes: {}, heading: { classes: {}, text: 'example' } },
    () => {
      expect(screen.getByTestId('headings-container')).toBeTruthy();
      expect(screen.getByTestId('heading')).toBeTruthy();
    },
  ],
  [
    'render subheading if provided',
    { id: 'one', name: 'Hero', classes: {}, subheading: { classes: {}, text: 'example' } },
    () => {
      expect(screen.getByTestId('headings-container')).toBeTruthy();
      expect(screen.getByTestId('subheading')).toBeTruthy();
    },
  ],
  [
    'render image if provided',
    {
      id: 'one',
      name: 'Hero',
      classes: {},
      image1: {
        alt: 'example',
        src: 'https://via.placeholder.com/150',
        width: 150,
        height: 150,
      },
    },
    () => {
      expect(screen.getByTestId('image-container')).toBeTruthy();
      expect(screen.getByTestId('image')).toBeTruthy();
    },
  ],
  [
    'render content area',
    {
      id: 'one',
      name: 'Hero',
      classes: {},
      contentArea: [
        {
          id: 'two',
          name: 'Text',
          classes: {},
          text: 'Dis parturient montes nascetur ridiculus mus mauris vitae.',
          'data-testid': 'text-component',
        },
      ],
    },
    () => {
      expect(screen.getByTestId('content-area')).toBeTruthy();
      //   expect(screen.getByTestId('text-component')).toBeTruthy();
      //   expect(screen.getByText('Dis parturient montes nascetur ridiculus mus mauris vitae.')).toBeTruthy();
    },
  ],
];

describe('Hero Organism test suite', () => {
  test.each(cases)('should %s', async (_, props, assertions) => {
    const ResolvedComponent = await Hero(props);
    render(ResolvedComponent);
    assertions();
  });

  it('should have no accessibility violations', async () => {
    const ResolvedComponent = await Hero({
      id: 'one',
      name: 'Hero',
      classes: {},
      heading: { classes: {}, text: 'example' },
    });
    const { container } = render(ResolvedComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
