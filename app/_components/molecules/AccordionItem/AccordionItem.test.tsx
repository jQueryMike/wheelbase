import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import AccordionItem from './AccordionItem';

describe('AccordionItem test suite', () => {
  beforeAll(() => {
    // Mock components within the content area
    jest.mock('@hooks', () => ({
      __esModule: true,
      default: {
        useToggle: () => [false, () => {}],
      },
    }));
  });

  it('should work', () => {
    expect(true).toBe(true);
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(
      <AccordionItem heading={{ text: 'Accordion Item', styling: {} }} styling={{}} contentArea={[]} />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
