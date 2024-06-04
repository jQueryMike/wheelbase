import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import Contact from './Contact';

describe('Contact test suite', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<Contact title="Test" styling={{}} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
