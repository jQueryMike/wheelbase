import { HeadingSize, HeadingTag } from '@components/atoms';
import { render, screen } from '@testing-library/react';
import { Block } from '@types';
import { axe } from 'jest-axe';

import TextAndImage from './TextAndImage';
import { TextAndImageProps } from './TextAndImage.types';

const cases: [string, TextAndImageProps & Block, () => void][] = [
  [
    'render heading if provided',
    { id: 'one', name: 'Text and Image', classes: {}, heading: { text: 'example' } },
    async () => {
      expect(await screen.findByTestId('headings-container')).toBeTruthy();
      expect(await screen.findByTestId('heading')).toBeTruthy();
    },
  ],
  [
    'render subheading if provided',
    { id: 'one', name: 'Text and Image', classes: {}, subheading: { text: 'example' } },
    async () => {
      expect(await screen.findByTestId('headings-container')).toBeTruthy();
      expect(await screen.findByTestId('subheading')).toBeTruthy();
    },
  ],
  [
    'render image if provided',
    {
      id: 'one',
      name: 'Text and Image',
      classes: {},
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
      name: 'Text and Image',
      classes: {},
      contentArea: [
        {
          id: 'two',
          name: 'Text',
          classes: {},
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

describe('Text and Image Organism test suite', () => {
  beforeAll(() => {
    jest.mock('../../atoms/Text/Text', () => ({
      __esModule: true,
      default: () => <div data-testid="text-component" />,
    }));
  });

  test.each(cases)('should %s', async (_, props, assertions) => {
    const ResolvedComponent = await TextAndImage(props);
    render(ResolvedComponent);
    assertions();
  });

  it('should have no accessibility violations', async () => {
    const ResolvedComponent = await TextAndImage({
      id: 'one',
      name: 'Text and Image',
      classes: {},
      heading: { text: 'example', tag: HeadingTag.H1, size: HeadingSize.Large },
      subheading: {
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
          classes: {},
          text: 'Dis parturient montes nascetur ridiculus mus mauris vitae.',
        },
      ],
    });
    const { container } = render(ResolvedComponent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
