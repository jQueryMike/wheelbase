import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import Gravatar from './Gravatar';

describe('Gravatar test suite', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<Gravatar reviewerName="John Doe" styling={{}} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
