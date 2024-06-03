import CompanyInfo from './CompanyInfo';
import { CompanyInfoProps } from './CompanyInfo.types';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

const [testCompanyNumber, testFcaNumber, testVatNumber] = [
  '123456789',
  '012345678',
  '123456780',
];
const cases: [string, CompanyInfoProps, () => void][] = [
  [
    'render company info',
    {
      items: [
        {
          id: 'bb334492-1587-4ac1-876b-795c2d0932b9',
          companyInfo: {
            label: 'Company No. ',
            number: '12345678',
          },
        },
        {
          id: 'fb1b7788-53f8-4342-abc5-0f5227e7fbcf',
          companyInfo: {
            label: 'FCA No. ',
            number: '12345678',
          },
        },
        {
          id: 'e9fb85df-f81b-47f5-b959-37ead7bfd81a',
          companyInfo: {
            label: 'VAT No. ',
            number: '12345678',
          },
        },
      ],
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('company-info')).toBeTruthy();
      expect(
        await screen.findByTestId(
          'company-info-text-bb334492-1587-4ac1-876b-795c2d0932b9'
        )
      ).toBeTruthy();
      expect(
        await screen.findByTestId(
          'company-info-text-fb1b7788-53f8-4342-abc5-0f5227e7fbcf'
        )
      ).toBeTruthy();
      expect(
        await screen.findByTestId(
          'company-info-text-e9fb85df-f81b-47f5-b959-37ead7bfd81a'
        )
      ).toBeTruthy();
    },
  ],
];

describe('CompanyInfo test suite', () => {
  it.each(cases)('%s', async (_, properties, assertions) => {
    render(<CompanyInfo {...properties} />);
    await assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(
        <CompanyInfo
          items={[
            {
              id: 'bb334492-1587-4ac1-876b-795c2d0932b9',
              companyInfo: {
                label: 'Company No. ',
                number: '12345678',
              },
            },
            {
              id: 'fb1b7788-53f8-4342-abc5-0f5227e7fbcf',
              companyInfo: {
                label: 'FCA No. ',
                number: '12345678',
              },
            },
            {
              id: 'e9fb85df-f81b-47f5-b959-37ead7bfd81a',
              companyInfo: {
                label: 'VAT No. ',
                number: '12345678',
              },
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
