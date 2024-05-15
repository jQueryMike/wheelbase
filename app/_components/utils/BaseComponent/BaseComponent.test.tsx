import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import BaseComponent from './BaseComponent';

describe('BaseComponent test suite', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<BaseComponent styling={{}} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
