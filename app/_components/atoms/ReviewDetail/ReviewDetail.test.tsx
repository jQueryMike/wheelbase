import ReviewDetail from './ReviewDetail';
import { ReviewDetailProps } from './ReviewDetail.types';
import { render, screen, within } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

const reviewDetail = 'Sample test text!';

const cases: [string, ReviewDetailProps, () => void][] = [
  [
    'Render Review Detail with Text',
    {
      reviewDetail: reviewDetail,
      styling: {},
    },
    async () => {
      const { getByText } = within(await screen.findByTestId('review-detail'));
      expect(getByText(reviewDetail)).toBeInTheDocument();
    },
  ],
];

describe('ReviewDetail test suite', () => {
  it.each(cases)('%s', async (_, properties, assertions) => {
    render(<ReviewDetail {...properties} />);
    await assertions();
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<ReviewDetail reviewDetail={reviewDetail} styling={{}} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
