import React from 'react';
import theme from '../theme';
import { FaClock, FaCalendarAlt, FaMapMarkerAlt, FaUtensils } from 'react-icons/fa';

const ComingSoon = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(${theme.colors.overlay}, ${theme.colors.overlay}), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070') center/cover fixed`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.colors.textWhite,
      padding: theme.spacing.xl,
      position: 'relative',
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 20% 80%, ${theme.colors.primary}20 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${theme.colors.secondary}20 0%, transparent 50%)`,
      }}></div>

      <div style={{
        maxWidth: '1000px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Logo Section */}
        <div style={{
          marginBottom: theme.spacing.xxxl,
        }}>
          <h1 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.huge,
            fontWeight: '700',
            letterSpacing: '3px',
            marginBottom: theme.spacing.md,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}>
            la CABANA
          </h1>
          <h2 style={{
            fontFamily: theme.fonts.accent,
            fontSize: theme.fontSizes.large,
            fontWeight: '300',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: theme.colors.gold,
            marginBottom: theme.spacing.xl,
          }}>
            Tapasbar & Restaurant
          </h2>
          <div style={{
            width: '120px',
            height: '3px',
            backgroundColor: theme.colors.gold,
            margin: '0 auto',
            marginBottom: theme.spacing.xl,
          }}></div>
        </div>

        {/* Main Headline */}
        <div style={{
          marginBottom: theme.spacing.xxxl,
        }}>
          <h3 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.xxlarge,
            fontWeight: '600',
            marginBottom: theme.spacing.lg,
            lineHeight: '1.2',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          }}>
            Nur ein neues „A"
          </h3>
          <h4 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.xlarge,
            fontWeight: '400',
            color: theme.colors.gold,
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          }}>
            aber tatsächlich so viel mehr!
          </h4>
        </div>

        {/* Opening Date */}
        <div style={{
          backgroundColor: theme.colors.secondary,
          padding: `${theme.spacing.xl} ${theme.spacing.xxl}`,
          borderRadius: '12px',
          marginBottom: theme.spacing.xxxl,
          boxShadow: theme.shadows.large,
        }}>
          <p style={{
            fontFamily: theme.fonts.accent,
            fontSize: theme.fontSizes.small,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: theme.spacing.md,
          }}>
            NEUERÖFFNUNG!
          </p>
          <h2 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.xxlarge,
            fontWeight: '700',
            marginBottom: theme.spacing.lg,
          }}>
            Am 24. OKTOBER 2025
          </h2>
          <p style={{
            fontFamily: theme.fonts.secondary,
            fontSize: theme.fontSizes.medium,
            lineHeight: '1.6',
          }}>
            Wir freuen uns darauf, Sie in unserem neuen Restaurant begrüßen zu dürfen!
          </p>
        </div>

        {/* Special Opening Offer */}
        <div style={{
          backgroundColor: theme.colors.primary,
          padding: theme.spacing.xxl,
          borderRadius: '12px',
          marginBottom: theme.spacing.xxxl,
          boxShadow: theme.shadows.large,
        }}>
          <p style={{
            fontFamily: theme.fonts.accent,
            fontSize: theme.fontSizes.base,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: theme.spacing.md,
            color: theme.colors.gold,
          }}>
            ANGEBOT zur Eröffnung
          </p>
          <h3 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.xlarge,
            marginBottom: theme.spacing.lg,
          }}>
            Mittagstisch als 3-Gang-Menü
          </h3>
          <p style={{
            fontFamily: theme.fonts.secondary,
            fontSize: theme.fontSizes.medium,
            lineHeight: '1.6',
            marginBottom: theme.spacing.lg,
          }}>
            inklusive Tagessuppe & Dessert
          </p>
          <div style={{
            fontSize: theme.fontSizes.huge,
            fontWeight: '700',
            color: theme.colors.gold,
            marginBottom: theme.spacing.lg,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}>
            NUR 14.90 €!
          </div>
          <p style={{
            fontFamily: theme.fonts.secondary,
            fontSize: theme.fontSizes.base,
            fontWeight: '600',
            color: theme.colors.gold,
          }}>
            MO - FR · 11.30 - 16 Uhr
          </p>
        </div>

        {/* Restaurant Info Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: theme.spacing.xl,
          marginBottom: theme.spacing.xxxl,
        }}>
          {/* Opening Hours */}
          <div style={{
            backgroundColor: theme.colors.gold,
            padding: theme.spacing.xl,
            borderRadius: '12px',
            color: theme.colors.darkBackground,
            textAlign: 'center',
            boxShadow: theme.shadows.medium,
          }}>
            <FaClock style={{
              fontSize: '2rem',
              marginBottom: theme.spacing.md,
            }} />
            <h4 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.large,
              marginBottom: theme.spacing.sm,
            }}>
              Öffnungszeiten
            </h4>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.base,
              fontWeight: '600',
            }}>
              TÄGLICH<br />
              11.30 - 22.00 Uhr
            </p>
          </div>

          {/* Address */}
          <div style={{
            backgroundColor: theme.colors.textWhite,
            padding: theme.spacing.xl,
            borderRadius: '12px',
            color: theme.colors.darkBackground,
            textAlign: 'center',
            boxShadow: theme.shadows.medium,
          }}>
            <FaMapMarkerAlt style={{
              fontSize: '2rem',
              marginBottom: theme.spacing.md,
              color: theme.colors.primary,
            }} />
            <h4 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.large,
              marginBottom: theme.spacing.sm,
            }}>
              Adresse
            </h4>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.base,
            }}>
              Oberneulander Landstraße 103<br />
              28355 Bremen
            </p>
          </div>

          {/* Concept */}
          <div style={{
            backgroundColor: theme.colors.textWhite,
            padding: theme.spacing.xl,
            borderRadius: '12px',
            color: theme.colors.darkBackground,
            textAlign: 'center',
            boxShadow: theme.shadows.medium,
          }}>
            <FaUtensils style={{
              fontSize: '2rem',
              marginBottom: theme.spacing.md,
              color: theme.colors.secondary,
            }} />
            <h4 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.large,
              marginBottom: theme.spacing.sm,
            }}>
              Unser Konzept
            </h4>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.base,
            }}>
              Authentische spanische Tapas<br />
              für die ganze Familie
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div style={{
          backgroundColor: theme.colors.darkBackground,
          padding: theme.spacing.xl,
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: theme.shadows.large,
        }}>
          <h4 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.large,
            marginBottom: theme.spacing.md,
            color: theme.colors.gold,
          }}>
            info@lacabana-bremen.de
          </h4>
          <p style={{
            fontFamily: theme.fonts.secondary,
            fontSize: theme.fontSizes.base,
            color: theme.colors.textLight,
          }}>
            Reservierungen und weitere Informationen
          </p>
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
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        h1, h2, h3, h4 {
          animation: fadeInUp 1s ease-out;
        }
        
        .opening-date {
          animation: pulse 2s infinite;
        }

        @media (max-width: ${theme.breakpoints.tablet}) {
          h1 {
            font-size: ${theme.fontSizes.xxlarge} !important;
          }
          h2 {
            font-size: ${theme.fontSizes.xlarge} !important;
          }
          h3 {
            font-size: ${theme.fontSizes.large} !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
