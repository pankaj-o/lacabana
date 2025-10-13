import React from 'react';
import theme from '../theme';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: `linear-gradient(${theme.colors.overlay}, ${theme.colors.overlay}), url('/images/hero-background.svg') center/cover`,
      color: theme.colors.textWhite,
      textAlign: 'center',
      padding: theme.spacing.xl,
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '900px',
        animation: 'fadeInUp 1s ease-out',
      }}>
        <h1 style={{
          fontFamily: theme.fonts.primary,
          fontSize: theme.fontSizes.huge,
          marginBottom: theme.spacing.md,
          fontWeight: '700',
          letterSpacing: '3px',
        }}>
          la CABANA
        </h1>
        <h4 style={{
          fontFamily: theme.fonts.accent,
          fontSize: theme.fontSizes.large,
          fontWeight: '300',
          marginBottom: theme.spacing.xxl,
          color: theme.colors.secondary,
          letterSpacing: '5px',
          textTransform: 'uppercase',
        }}>
          Tapasbar & Restaurant
        </h4>
        <p style={{
          fontFamily: theme.fonts.secondary,
          fontSize: theme.fontSizes.medium,
          lineHeight: '1.8',
          marginBottom: theme.spacing.xl,
          maxWidth: '700px',
          margin: '0 auto',
          marginBottom: theme.spacing.xl,
        }}>
          Authentische spanische Küche in gemütlicher Atmosphäre.<br />
          Wo Tradition auf moderne Gastronomie trifft.
        </p>

        {/* Contact Information */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.md,
          marginBottom: theme.spacing.xxl,
          alignItems: 'center',
        }}>
          <a href="mailto:info@lacabana.de" style={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.sm,
            fontFamily: theme.fonts.secondary,
            fontSize: theme.fontSizes.base,
            color: theme.colors.gold,
            textDecoration: 'none',
            transition: `all ${theme.transitions.default}`,
          }} className="hero-contact-link">
            <FaEnvelope />
            <span>info@lacabana.de</span>
          </a>
          <a href="tel:+4912345678900" style={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.sm,
            fontFamily: theme.fonts.secondary,
            fontSize: theme.fontSizes.base,
            color: theme.colors.gold,
            textDecoration: 'none',
            transition: `all ${theme.transitions.default}`,
          }} className="hero-contact-link">
            <FaPhone />
            <span>+49 123 456 789 00</span>
          </a>
        </div>

        <div style={{
          display: 'flex',
          gap: theme.spacing.lg,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="#reservation" className="hero-button" style={{
            fontFamily: theme.fonts.secondary,
            padding: `${theme.spacing.md} ${theme.spacing.xl}`,
            backgroundColor: theme.colors.primary,
            color: theme.colors.textWhite,
            fontSize: theme.fontSizes.base,
            fontWeight: '600',
            borderRadius: '4px',
            transition: `all ${theme.transitions.default}`,
            display: 'inline-block',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>
            Reservierung & Gutscheine
          </a>
          <a href="#hours" className="hero-button-outline" style={{
            fontFamily: theme.fonts.secondary,
            padding: `${theme.spacing.md} ${theme.spacing.xl}`,
            backgroundColor: 'transparent',
            color: theme.colors.textWhite,
            fontSize: theme.fontSizes.base,
            fontWeight: '600',
            border: `2px solid ${theme.colors.textWhite}`,
            borderRadius: '4px',
            transition: `all ${theme.transitions.default}`,
            display: 'inline-block',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>
            Öffnungszeiten
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-contact-link:hover {
          color: ${theme.colors.textWhite};
          transform: scale(1.05);
        }
        .hero-button:hover {
          background-color: ${theme.colors.hover};
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.large};
        }
        .hero-button-outline:hover {
          background-color: ${theme.colors.textWhite};
          color: ${theme.colors.primary};
          transform: translateY(-2px);
        }

        @media (max-width: ${theme.breakpoints.tablet}) {
          h1 {
            font-size: ${theme.fontSizes.xxlarge} !important;
          }
          h4 {
            font-size: ${theme.fontSizes.medium} !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

