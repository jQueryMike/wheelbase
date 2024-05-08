import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import AccordionItem from './AccordionItem';

describe('AccordionItem test suite', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<AccordionItem title="Test" styling={{}} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
