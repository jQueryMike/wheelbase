import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import EmailAddress from './EmailAddress';
import { EmailAddressProps } from './EmailAddress.types';

const testEmail = {
  email: 'test@example.com',
  icon: {
    icon: 'fa fa-envelope',
    styling: {},
  },
  styling: {},
};

const cases: [string, EmailAddressProps, () => void][] = [
  [
    'render Email Address',
    {
      email: testEmail.email,
      icon: testEmail.icon,
      styling: testEmail.styling,
    },
    async () => {
      expect(await screen.findByTestId('email-address')).toHaveTextContent('test@example.com');
      expect(await screen.findByTestId('email-address-link')).toHaveAttribute('href', 'mailto:test@example.com');
    },
  ],
];

describe('EmailAddress test suite', () => {
  it.each(cases)('%s', (_, properties, assertions) => {
    render(<EmailAddress {...properties} />);
    assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(<EmailAddress email={testEmail.email} icon={testEmail.icon} styling={{}} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
