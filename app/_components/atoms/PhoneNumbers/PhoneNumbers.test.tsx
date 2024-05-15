import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import PhoneNumbers from './PhoneNumbers';
import { PhoneNumbersProps } from './PhoneNumbers.types';

const testPhoneNumbers = [
  {
    icon: {
      icon: 'fas fa-phone',
      styling: {},
    },
    number: '07931645868',
    styling: {},
  },
  {
    icon: {
      icon: 'fas fa-phone',
      styling: {},
    },
    number: '+447654333222',
    styling: {},
  },
];

const cases: [string, PhoneNumbersProps, () => void][] = [
  [
    'render PhoneNumbers with correct number and icon',
    {
      ...testPhoneNumbers[0],
    },
    async () => {
      expect(await screen.findByTestId('phone-numbers')).toBeTruthy();
      const linkElement = await screen.findByTestId('phone-numbers-link');
      expect(linkElement).toHaveAttribute('href', `tel:${testPhoneNumbers[0].number}`);
      const numberElement = await screen.findByTestId('phone-numbers-number');
      expect(numberElement).toHaveTextContent(testPhoneNumbers[0].number);
      expect(await screen.findByTestId('phone-numbers-icon')).toBeTruthy();
    },
  ],
  [
    'render PhoneNumbers with country code',
    {
      ...testPhoneNumbers[1],
    },
    async () => {
      expect(await screen.findByTestId('phone-numbers')).toBeTruthy();
      const linkElement = await screen.findByTestId('phone-numbers-link');
      expect(linkElement).toHaveAttribute('href', `tel:${testPhoneNumbers[1].number}`);
      const numberElement = await screen.findByTestId('phone-numbers-number');
      expect(numberElement).toHaveTextContent(testPhoneNumbers[1].number);
      expect(await screen.findByTestId('phone-numbers-icon')).toBeTruthy();
    },
  ],
];

describe('PhoneNumbers test suite', () => {
  it.each(cases)('%s', (_, properties, assertions) => {
    render(<PhoneNumbers {...properties} />);
    assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(<PhoneNumbers {...testPhoneNumbers[1]} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
