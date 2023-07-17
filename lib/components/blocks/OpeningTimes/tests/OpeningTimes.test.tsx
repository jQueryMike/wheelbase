import { render, screen } from '@testing-library/react';

import OpeningTimes, { isCurrentDay } from '../OpeningTimes';

describe('OpeningTimes', () => {
  it('renders without crashing', () => {
    render(<OpeningTimes classes={{}} times={[]} />);
  });

  it('displays heading and subheading when provided', () => {
    const heading = 'Test Heading';
    const subheading = 'Test Subheading';
    render(<OpeningTimes classes={{}} times={[]} heading={heading} subheading={subheading} />);
    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByText(subheading)).toBeInTheDocument();
  });

  it('displays optional message when provided', () => {
    const optionalMessage = 'Test Optional Message';
    render(<OpeningTimes classes={{}} times={[]} optionalMessage={optionalMessage} />);
    expect(screen.getByText(optionalMessage)).toBeInTheDocument();
  });

  it('displays times correctly', () => {
    const times = [
      { day: 'Monday', openingTime: '8:00 AM', closingTime: '5:00 PM' },
      { day: 'Tuesday', openingTime: '9:00 AM', closingTime: '6:00 PM', closed: true },
    ];
    render(<OpeningTimes classes={{ highlight: 'text-yellow-950' }} times={times} />);

    const mondayElement = screen.getByText('Monday');
    const tuesdayElement = screen.getByText('Tuesday');

    // Ensure that times are displayed
    expect(screen.getByText('8:00 AM - 5:00 PM')).toBeInTheDocument();
    expect(screen.getByText('Closed')).toBeInTheDocument();

    // Check if current day is highlighted
    if (isCurrentDay('Monday')) {
      expect(mondayElement).toHaveClass('text-yellow-950');
      expect(tuesdayElement).not.toHaveClass('text-yellow-950');
    } else if (isCurrentDay('Tuesday')) {
      expect(tuesdayElement).toHaveClass('text-yellow-950');
      expect(mondayElement).not.toHaveClass('text-yellow-950');
    }
  });
});
