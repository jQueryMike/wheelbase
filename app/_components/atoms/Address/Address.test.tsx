import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import Address from './Address';
import { AddressProps } from './Address.types';

const [
  companyNameTest,
  addressLineOneTest,
  addressLineTwoTest,
  cityTest,
  countyTest,
  countryTest,
  postcodeTest,
  showCountryTest,
  displayTypeTest,
] = [
  'Clickdealer',
  'Winton House',
  'Stoke Rd',
  'Stoke-on-Trent',
  'Staffordshire',
  'United Kingdom',
  'ST42RW',
  true,
  ['no comma', 'comma', 'inline', 'inline comma'],
];

const cases: [string, AddressProps, () => void][] = [
  [
    'render address with all fields',
    {
      companyName: companyNameTest,
      addressLineOne: addressLineOneTest,
      addressLineTwo: addressLineTwoTest,
      city: cityTest,
      county: countyTest,
      country: countryTest,
      postcode: postcodeTest,
      showCountry: showCountryTest,
      displayType: displayTypeTest[0],
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('address')).toBeTruthy();
      expect(await screen.findByTestId('company-name')).toHaveTextContent(companyNameTest);
      expect(await screen.findByTestId('address-line-one')).toHaveTextContent(addressLineOneTest);
      expect(await screen.findByTestId('address-line-two')).toHaveTextContent(addressLineTwoTest);
      expect(await screen.findByTestId('city')).toHaveTextContent(cityTest);
      expect(await screen.findByTestId('county')).toHaveTextContent(countyTest);
      expect(await screen.findByTestId('country')).toHaveTextContent(countryTest);
      expect(await screen.findByTestId('postcode')).toHaveTextContent(postcodeTest);
    },
  ],
  [
    'render address with only required fields',
    {
      addressLineOne: addressLineOneTest,
      city: cityTest,
      postcode: postcodeTest,
      showCountry: false,
      displayType: displayTypeTest[0],
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('address')).toBeTruthy();
      expect(screen.queryByTestId('company-name')).toBeFalsy();
      expect(await screen.findByTestId('address-line-one')).toHaveTextContent(addressLineOneTest);
      expect(screen.queryByTestId('address-line-two')).toBeFalsy();
      expect(await screen.findByTestId('city')).toHaveTextContent(cityTest);
      expect(screen.queryByTestId('county')).toBeFalsy();
      expect(screen.queryByTestId('country')).toBeFalsy();
      expect(await screen.findByTestId('postcode')).toHaveTextContent(postcodeTest);
    },
  ],
  [
    'render address with no fields',
    {
      showCountry: false,
      displayType: displayTypeTest[0],
      styling: {},
    },
    async () => {
      expect(await screen.findByTestId('address')).toBeTruthy();
      expect(screen.queryByTestId('company-name')).toBeFalsy();
      expect(screen.queryByTestId('address-line-one')).toBeFalsy();
      expect(screen.queryByTestId('address-line-two')).toBeFalsy();
      expect(screen.queryByTestId('city')).toBeFalsy();
      expect(screen.queryByTestId('county')).toBeFalsy();
      expect(screen.queryByTestId('country')).toBeFalsy();
      expect(screen.queryByTestId('postcode')).toBeFalsy();
    },
  ],
  [
    'render address with comma delimiter',
    {
      companyName: companyNameTest,
      addressLineOne: addressLineOneTest,
      addressLineTwo: addressLineTwoTest,
      city: cityTest,
      county: countyTest,
      country: countryTest,
      postcode: postcodeTest,
      showCountry: showCountryTest,
      displayType: 'comma',
      styling: {},
    },
    async () => {
      const addressFields = await screen.findAllByText(/,/);
      expect(addressFields).toHaveLength(6);
    },
  ],
  [
    'render address without comma delimiter',
    {
      companyName: companyNameTest,
      addressLineOne: addressLineOneTest,
      addressLineTwo: addressLineTwoTest,
      city: cityTest,
      county: countyTest,
      country: countryTest,
      postcode: postcodeTest,
      showCountry: showCountryTest,
      displayType: 'no comma',
      styling: {},
    },
    async () => {
      const addressFields = await screen.queryAllByText(/,/);
      expect(addressFields).toHaveLength(0);
    },
  ],
  [
    'render address with inline layout',
    {
      companyName: companyNameTest,
      addressLineOne: addressLineOneTest,
      addressLineTwo: addressLineTwoTest,
      city: cityTest,
      county: countyTest,
      country: countryTest,
      postcode: postcodeTest,
      showCountry: showCountryTest,
      displayType: 'inline',
      styling: {},
    },
    async () => {
      const addressElement = await screen.findByTestId('address');
      expect(addressElement).toHaveClass('flex-row');
      expect(addressElement).toHaveClass('flex-nowrap');
    },
  ],
  [
    'render address with no comma layout',
    {
      companyName: companyNameTest,
      addressLineOne: addressLineOneTest,
      addressLineTwo: addressLineTwoTest,
      city: cityTest,
      county: countyTest,
      country: countryTest,
      postcode: postcodeTest,
      showCountry: showCountryTest,
      displayType: 'no comma',
      styling: {},
    },
    async () => {
      const addressElement = await screen.findByTestId('address');
      expect(addressElement).toHaveClass('flex');
      expect(addressElement).toHaveClass('flex-col');
    },
  ],
];

describe('Address test suite', () => {
  it.each(cases)('%s', (_, properties, assertions) => {
    render(<Address {...properties} />);
    assertions();
  });

  it('should have no accessibility violations', async () => {
    await act(async () => {
      const { container } = render(
        <Address
          companyName={companyNameTest}
          addressLineOne={addressLineOneTest}
          addressLineTwo={addressLineTwoTest}
          city={cityTest}
          county={countyTest}
          country={countryTest}
          postcode={postcodeTest}
          showCountry={showCountryTest}
          displayType="inline comma"
          styling={{}}
        />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
