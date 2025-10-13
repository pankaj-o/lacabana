import React, { useState, useEffect } from 'react';
import theme from '../theme';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Über uns', href: '#about' },
    { label: 'Veranstaltungen', href: '#events' },
    { label: 'Kontakt', href: '#contact' },
    { label: 'Unser Konzept', href: '#concept' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? theme.colors.darkBackground : 'transparent',
      transition: `all ${theme.transitions.default}`,
      padding: `${theme.spacing.md} ${theme.spacing.xl}`,
      boxShadow: isScrolled ? theme.shadows.medium : 'none',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontFamily: theme.fonts.primary,
          fontSize: theme.fontSizes.large,
          fontWeight: '700',
          color: theme.colors.textWhite,
          letterSpacing: '1px',
        }}>
          la CABANA
        </a>

        {/* Desktop Menu */}
        <ul style={{
          display: 'flex',
          gap: theme.spacing.xl,
          alignItems: 'center',
        }} className="desktop-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                style={{
                  fontFamily: theme.fonts.secondary,
                  fontSize: theme.fontSizes.base,
                  color: theme.colors.textWhite,
                  transition: `color ${theme.transitions.default}`,
                  position: 'relative',
                }}
                className="nav-link"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            color: theme.colors.textWhite,
            fontSize: theme.fontSizes.large,
          }}
          className="mobile-menu-btn"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          backgroundColor: theme.colors.darkBackground,
          padding: theme.spacing.xl,
          display: 'none',
        }} className="mobile-menu">
          <ul style={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.lg,
          }}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontFamily: theme.fonts.secondary,
                    fontSize: theme.fontSizes.medium,
                    color: theme.colors.textWhite,
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: ${theme.colors.gold};
          transition: width ${theme.transitions.default};
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link:hover {
          color: ${theme.colors.gold};
        }

        @media (max-width: ${theme.breakpoints.tablet}) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;

