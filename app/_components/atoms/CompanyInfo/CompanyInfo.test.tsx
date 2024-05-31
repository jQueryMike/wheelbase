import CompanyInfo from './CompanyInfo';
import { CompanyInfoProps } from './CompanyInfo.types';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

const [testCompanyNumber, testFcaNumber, testVatNumber] = [
  '12345678',
  '12345678',
  '12345678',
];
const cases: [string, CompanyInfoProps, () => void][] = [
  [
    'render company info',
    {
      items: [
        {
          label: 'companyNumber',
          number: testCompanyNumber,
        },
        {
          label: 'fcaNumber',
          number: testFcaNumber,
        },
        {
          label: 'vatNumber',
          number: testVatNumber,
        },
      ],
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('company-info')).toBeTruthy();
      expect(await screen.findByTestId('company-number')).toHaveTextContent(
        'Company No.12345'
      );
      expect(await screen.findByTestId('fca-number')).toHaveTextContent(
        'FCA No.67890'
      );
      expect(await screen.findByTestId('vat-number')).toHaveTextContent(
        'VAT No.GB123456789'
      );
    },
  ],
  [
    'render company info with only company number',
    {
      items: [
        {
          label: 'companyNumber',
          number: testCompanyNumber,
        },
      ],
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('company-info')).toBeTruthy();
      expect(await screen.findByTestId('company-number')).toHaveTextContent(
        'Company No.12345'
      );
      expect(screen.queryByTestId('fca-number')).toBeFalsy();
      expect(screen.queryByTestId('vat-number')).toBeFalsy();
    },
  ],
  [
    'render company info with only FCA number',
    {
      items: [
        {
          label: 'fcaNumber',
          number: testCompanyNumber,
        },
      ],
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('company-info')).toBeTruthy();
      expect(screen.queryByTestId('company-number')).toBeFalsy();
      expect(await screen.findByTestId('fca-number')).toHaveTextContent(
        'FCA No.67890'
      );
      expect(screen.queryByTestId('vat-number')).toBeFalsy();
    },
  ],
  [
    'render company info with only VAT number',
    {
      items: [
        {
          label: 'vatNumber',
          number: testCompanyNumber,
        },
      ],
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('company-info')).toBeTruthy();
      expect(screen.queryByTestId('company-number')).toBeFalsy();
      expect(screen.queryByTestId('fca-number')).toBeFalsy();
      expect(await screen.findByTestId('vat-number')).toHaveTextContent(
        'VAT No.GB123456789'
      );
    },
  ],
];

describe('CompanyInfo test suite', () => {
  it.each(cases)('%s', (_, properties, assertions) => {
    render(<CompanyInfo {...properties} />);
    assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(
        <CompanyInfo
          items={[
            {
              label: 'companyNumber',
              number: testCompanyNumber,
            },
            {
              label: 'fcaNumber',
              number: testFcaNumber,
            },
            {
              label: 'vatNumber',
              number: testVatNumber,
            },
          ]}
          styling={{}}
        />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
