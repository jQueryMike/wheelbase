import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import Reviews from './Reviews';

describe('Reviews test suite', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Reviews
        title="Reviews"
        spacing={{
          marginBottom: '0',
          marginTop: '0',
          marginLeft: '0',
          marginRight: '0',
          paddingBottom: '0',
          paddingTop: '0',
          paddingLeft: '0',
          paddingRight: '0',
        }}
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
