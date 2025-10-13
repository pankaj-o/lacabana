import React from 'react';
import theme from '../theme';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const quicklinks = [
    { label: 'Über uns', href: '#about' },
    { label: 'Veranstaltungen', href: '#events' },
    { label: 'Services', href: '#services' },
    { label: 'Unser Konzept', href: '#concept' },
    { label: 'Bytheglass Weinkarte', href: '#wine' },
    { label: 'Kontakt', href: '#contact' },
  ];

  const legal = [
    { label: 'Impressum', href: '#impressum' },
    { label: 'Datenschutz', href: '#datenschutz' },
    { label: 'Privatsphäre-Einstellungen', href: '#privacy' },
  ];

  return (
    <footer style={{
      backgroundColor: theme.colors.darkBackground,
      color: theme.colors.textWhite,
      padding: `${theme.spacing.xxl} ${theme.spacing.xl}`,
      borderTop: `3px solid ${theme.colors.secondary}`,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: theme.spacing.xxl,
          marginBottom: theme.spacing.xxl,
        }} className="footer-grid">
          {/* Brand Section */}
          <div>
            <h3 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.xlarge,
              marginBottom: theme.spacing.md,
              color: theme.colors.gold,
            }}>
              la CABANA
            </h3>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.base,
              lineHeight: '1.8',
              color: theme.colors.textLight,
              marginBottom: theme.spacing.lg,
            }}>
              Authentische spanische Küche in gemütlicher Atmosphäre. Wo Tradition auf moderne Gastronomie trifft.
            </p>
            <div style={{
              display: 'flex',
              gap: theme.spacing.md,
            }}>
              <a href="#instagram" className="social-icon" style={{
                fontSize: theme.fontSizes.large,
                color: theme.colors.textWhite,
                transition: `color ${theme.transitions.default}`,
              }}>
                <FaInstagram />
              </a>
              <a href="#facebook" className="social-icon" style={{
                fontSize: theme.fontSizes.large,
                color: theme.colors.textWhite,
                transition: `color ${theme.transitions.default}`,
              }}>
                <FaFacebook />
              </a>
              <a href="#twitter" className="social-icon" style={{
                fontSize: theme.fontSizes.large,
                color: theme.colors.textWhite,
                transition: `color ${theme.transitions.default}`,
              }}>
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quicklinks */}
          <div>
            <h4 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.large,
              marginBottom: theme.spacing.md,
            }}>
              Quicklinks
            </h4>
            <ul>
              {quicklinks.map((link, index) => (
                <li key={index} style={{
                  marginBottom: theme.spacing.sm,
                }}>
                  <a href={link.href} className="footer-link" style={{
                    fontFamily: theme.fonts.secondary,
                    fontSize: theme.fontSizes.base,
                    color: theme.colors.textLight,
                    transition: `color ${theme.transitions.default}`,
                  }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.large,
              marginBottom: theme.spacing.md,
            }}>
              Rechtliches
            </h4>
            <ul>
              {legal.map((link, index) => (
                <li key={index} style={{
                  marginBottom: theme.spacing.sm,
                }}>
                  <a href={link.href} className="footer-link" style={{
                    fontFamily: theme.fonts.secondary,
                    fontSize: theme.fontSizes.base,
                    color: theme.colors.textLight,
                    transition: `color ${theme.transitions.default}`,
                  }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: `1px solid ${theme.colors.textLight}`,
          paddingTop: theme.spacing.lg,
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: theme.fonts.secondary,
            fontSize: theme.fontSizes.small,
            color: theme.colors.textLight,
          }}>
            Copyright © 2023 la CABANA | All rights reserved
          </p>
          <p style={{
            fontFamily: theme.fonts.secondary,
            fontSize: theme.fontSizes.small,
            color: theme.colors.textLight,
            marginTop: theme.spacing.sm,
          }}>
            Fotos — Copyright © giorgiagraphy
          </p>
        </div>
      </div>

      <style>{`
        .social-icon:hover {
          color: ${theme.colors.gold};
        }
        .footer-link:hover {
          color: ${theme.colors.gold};
        }

        @media (max-width: ${theme.breakpoints.tablet}) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

