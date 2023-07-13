import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('Header Component', () => {
  const mockHeaderProps = {
    classes: {},
    logo: { src: '/logo.jpg', alt: 'Test Logo', width: 100, height: 100 },
    navItems: [
      { key: '1', href: '/home', name: 'Home' },
      { key: '2', href: '/about', name: 'About' },
    ],
    contactItems: [{ icon: <i className="fas fa-envelope" />, label: 'Contact us', href: '/contact' }],
    headerCta: [{ label: 'Sign Up', href: '/signup' }],
  };

  it('renders navigation items correctly', () => {
    render(<Header {...mockHeaderProps} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders logo image correctly', () => {
    render(<Header {...mockHeaderProps} />);

    const logoImg = screen.getByAltText('Test Logo');
    expect(logoImg).toBeInTheDocument();
  });

  it('renders contact items correctly', () => {
    render(<Header {...mockHeaderProps} />);

    expect(screen.getByText('Contact us')).toBeInTheDocument();
  });

  it('renders header CTA correctly', () => {
    render(<Header {...mockHeaderProps} />);

    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
});
