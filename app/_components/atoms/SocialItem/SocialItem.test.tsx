import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import SocialItem from "./SocialItem";

describe('SocialItem test suite', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<SocialItem title="Test" styling={{}}/>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});