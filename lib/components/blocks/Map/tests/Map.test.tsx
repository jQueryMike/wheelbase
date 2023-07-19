import { render, screen } from '@testing-library/react';

import Map, { extractSrcFromGoogleMaps } from '../Map';

describe('Map', () => {
  it('renders without crashing', () => {
    render(<Map classes={{}} googleMapLink="" />);
  });

  it('displays heading and subheading when provided', () => {
    const heading = 'Test Heading';
    const subheading = 'Test Subheading';
    render(<Map classes={{}} googleMapLink="" heading={heading} subheading={subheading} />);
    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByText(subheading)).toBeInTheDocument();
  });

  it('extracts src correctly from google map link', () => {
    const googleMapLink = '<iframe src="https://maps.google.com"></iframe>';
    const extractedSrc = extractSrcFromGoogleMaps(googleMapLink);
    expect(extractedSrc).toEqual('https://maps.google.com');
  });

  it('renders iframe with extracted src', () => {
    const googleMapLink = '<iframe src="https://maps.google.com"></iframe>';
    render(<Map classes={{}} googleMapLink={googleMapLink} />);
    const iframe = screen.getByTestId('iframe');
    expect(iframe).toHaveAttribute('src', 'https://maps.google.com');
  });
});
