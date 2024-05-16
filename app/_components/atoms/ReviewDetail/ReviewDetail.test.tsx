import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import ReviewDetail from "./ReviewDetail";

describe('ReviewDetail test suite', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<ReviewDetail title="Test" styling={{}}/>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});