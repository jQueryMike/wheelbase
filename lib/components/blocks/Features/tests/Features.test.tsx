import { render, screen } from '@testing-library/react';

import Features from '../Features';

describe('Features', () => {
  it('renders without crashing', () => {
    render(<Features />);
  });

  it('renders heading when provided', () => {
    const heading = 'Test Heading';
    render(<Features heading={heading} />);
    expect(screen.getByText(heading)).toBeInTheDocument();
  });

  it('renders start and end content when provided', () => {
    const startContent = [
      {
        id: '920e9b93-604e-48d1-bba5-c1107a6f52dc',
        name: 'RichText',
        content: '<p>This is the start content</p>',
      },
    ];

    const endContent = [
      {
        id: '920e9b93-604e-48d1-bba5-c1107a6f52dc',
        name: 'RichText',
        content: '<p>This is the end content</p>',
      },
    ];
    render(<Features startContent={startContent} endContent={endContent} />);
    expect(screen.getByText('This is the start content')).toBeInTheDocument();
    expect(screen.getByText('This is the end content')).toBeInTheDocument();
  });

  it('renders features items correctly', () => {
    const items = [
      {
        id: '1',
        heading: 'Feature Heading 1',
        content: 'Feature Content 1',
      },
      {
        id: '2',
        heading: 'Feature Heading 2',
        content: 'Feature Content 2',
        indicator: 'fa-regular fa-microchip',
      },
    ];

    render(<Features items={items} />);

    items.forEach((item) => {
      expect(screen.getByText(item.heading)).toBeInTheDocument();
      expect(screen.getByText(item.content)).toBeInTheDocument();

      if (item.indicator) {
        expect(screen.getByText(item.indicator)).toBeInTheDocument();
      }
    });
  });
});
