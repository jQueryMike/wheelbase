import { render, screen } from '@testing-library/react';

import Address from '../Address';

describe('Address', () => {
  it('renders without crashing', () => {
    render(<Address classes={{}} />);
  });

  it('displays company name when provided', () => {
    const companyName = 'Test Company';
    render(<Address classes={{}} companyName={companyName} />);
    expect(screen.getByText(companyName)).toBeInTheDocument();
  });

  it('formats and displays address correctly', () => {
    const line1 = '123 Test St.';
    const town = 'Testville';
    const postcode = '12345';

    render(<Address classes={{}} line1={line1} town={town} postcode={postcode} />);
    const formattedAddress = screen.getByText(`${line1}, ${town}, ${postcode}`);
    expect(formattedAddress).toBeInTheDocument();
  });

  it('formats and displays address correctly with alternate separator', () => {
    const line1 = '123 Test St.';
    const town = 'Testville';
    const postcode = '12345';
    const separator = '. ';

    render(<Address classes={{}} line1={line1} town={town} postcode={postcode} separator={separator} />);
    const formattedAddress = screen.getByText(`${line1}. ${town}. ${postcode}`);
    expect(formattedAddress).toBeInTheDocument();
  });

  it('displays heading and subheading when provided', () => {
    const heading = 'Test Heading';
    const subheading = 'Test Subheading';

    render(<Address classes={{}} heading={heading} subheading={subheading} />);
    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByText(subheading)).toBeInTheDocument();
  });
});
