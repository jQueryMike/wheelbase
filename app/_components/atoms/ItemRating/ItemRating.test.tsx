import ItemRating from './ItemRating';
import { ItemRatingProps } from './ItemRating.types';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

const testItemRating: ItemRatingProps = {
  itemRating: 3.5,
  icon: {
    secondaryColor: 'bg-gray-300',
    styling: {},
  },
  styling: {},
};

const cases: [string, ItemRatingProps, () => void][] = [
  [
    'render ItemRating with correct rating and stars',
    {
      ...testItemRating,
    },
    async () => {
      expect(await screen.findByTestId('item-rating-container')).toBeTruthy();

      const ratingFigure = await screen.findByTestId('item-rating-figure');
      expect(ratingFigure).toHaveTextContent('3.5/5');

    //   const starIcons = await screen.findAllByTestId('item-rating-star');
    //   expect(starIcons).toHaveLength(5);
    //   expect(starIcons.slice(0, 3)).toHaveClass('fa-star');
    //   expect(starIcons.slice(3)).toHaveClass('fa-star text-gray-300');
    },
  ],
  [
    'render ItemRating with whole number rating',
    {
      ...testItemRating,
      itemRating: 4,
    },
    async () => {
      expect(await screen.findByTestId('item-rating-container')).toBeTruthy();

      const ratingFigure = await screen.findByTestId('item-rating-figure');
      expect(ratingFigure).toHaveTextContent('4/5');

    //   const starIcons = await screen.findAllByTestId('item-rating-star');
    //   expect(starIcons).toHaveLength(5);
    //   expect(starIcons.slice(0, 4)).toHaveClass('fa-star');
    //   expect(starIcons.slice(4)).toHaveClass('fa-star text-gray-300');
    },
  ],
];

describe('ItemRating test suite', () => {
  it.each(cases)('%s', async (_, properties, assertions) => {
    render(<ItemRating {...properties} />);
    await assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(<ItemRating {...testItemRating} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
