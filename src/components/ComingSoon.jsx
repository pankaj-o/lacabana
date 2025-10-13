import React from 'react';
import theme from '../theme';
import { FaClock, FaCalendarAlt, FaMapMarkerAlt, FaUtensils, FaStar, FaPhone, FaEnvelope } from 'react-icons/fa';

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
          position: 'relative',
        }} className="logo-section">
          {/* Decorative Stars */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '12px',
          }}>
            <FaStar style={{ color: theme.colors.gold, fontSize: '20px' }} className="star-icon" />
            <FaStar style={{ color: theme.colors.gold, fontSize: '16px' }} className="star-icon" />
            <FaStar style={{ color: theme.colors.gold, fontSize: '20px' }} className="star-icon" />
          </div>
          
          <h1 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.huge,
            fontWeight: '700',
            letterSpacing: '5px',
            marginBottom: theme.spacing.md,
            textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
            background: `linear-gradient(135deg, ${theme.colors.textWhite} 0%, ${theme.colors.gold} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            la CABANA
          </h1>
          <h2 style={{
            fontFamily: theme.fonts.accent,
            fontSize: theme.fontSizes.large,
            fontWeight: '300',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            color: theme.colors.gold,
            marginBottom: theme.spacing.xl,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}>
            Tapasbar & Restaurant
          </h2>
          <div style={{
            width: '150px',
            height: '4px',
            background: `linear-gradient(90deg, transparent, ${theme.colors.gold}, transparent)`,
            margin: '0 auto',
            marginBottom: theme.spacing.xl,
            borderRadius: '2px',
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
          padding: `${theme.spacing.xxl} ${theme.spacing.xxl}`,
          borderRadius: '16px',
          marginBottom: theme.spacing.xxxl,
          boxShadow: `0 10px 40px rgba(0,0,0,0.4), 0 0 0 3px ${theme.colors.gold}`,
          position: 'relative',
          overflow: 'hidden',
          border: `2px solid ${theme.colors.gold}`,
        }} className="opening-date-card">
          {/* Decorative Corner Elements */}
          <div style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
            width: '30px',
            height: '30px',
            borderTop: `3px solid ${theme.colors.gold}`,
            borderLeft: `3px solid ${theme.colors.gold}`,
          }}></div>
          <div style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            width: '30px',
            height: '30px',
            borderTop: `3px solid ${theme.colors.gold}`,
            borderRight: `3px solid ${theme.colors.gold}`,
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '15px',
            left: '15px',
            width: '30px',
            height: '30px',
            borderBottom: `3px solid ${theme.colors.gold}`,
            borderLeft: `3px solid ${theme.colors.gold}`,
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '15px',
            right: '15px',
            width: '30px',
            height: '30px',
            borderBottom: `3px solid ${theme.colors.gold}`,
            borderRight: `3px solid ${theme.colors.gold}`,
          }}></div>
          
          <p style={{
            fontFamily: theme.fonts.accent,
            fontSize: theme.fontSizes.base,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: theme.spacing.md,
            color: theme.colors.gold,
            fontWeight: '600',
          }} className="pulse-text">
            ★ NEUERÖFFNUNG! ★
          </p>
          <h2 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.xxlarge,
            fontWeight: '700',
            marginBottom: theme.spacing.lg,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }} className="date-text">
            Am 24. OKTOBER 2025
          </h2>
          <p style={{
            fontFamily: theme.fonts.secondary,
            fontSize: theme.fontSizes.medium,
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Wir freuen uns darauf, Sie in unserem neuen Restaurant begrüßen zu dürfen!
          </p>
        </div>

        {/* Special Opening Offer */}
        <div style={{
          background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #6D4C41 100%)`,
          padding: `${theme.spacing.xxl} ${theme.spacing.xl}`,
          borderRadius: '16px',
          marginBottom: theme.spacing.xxxl,
          boxShadow: `0 15px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`,
          border: `3px solid ${theme.colors.gold}`,
          position: 'relative',
          overflow: 'hidden',
        }} className="offer-card">
          {/* Decorative Background Pattern */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, ${theme.colors.gold}15 0%, transparent 70%)`,
            borderRadius: '50%',
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, ${theme.colors.secondary}20 0%, transparent 70%)`,
            borderRadius: '50%',
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{
              fontFamily: theme.fonts.accent,
              fontSize: theme.fontSizes.base,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: theme.spacing.md,
              color: theme.colors.gold,
              fontWeight: '700',
              display: 'inline-block',
              padding: `${theme.spacing.sm} ${theme.spacing.md}`,
              backgroundColor: 'rgba(0,0,0,0.3)',
              borderRadius: '6px',
            }}>
              ✨ ANGEBOT zur Eröffnung ✨
            </p>
            <h3 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.xlarge,
              marginBottom: theme.spacing.md,
              marginTop: theme.spacing.lg,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}>
              Mittagstisch als 3-Gang-Menü
            </h3>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.medium,
              lineHeight: '1.8',
              marginBottom: theme.spacing.xl,
              color: theme.colors.textLight,
            }}>
              inklusive Tagessuppe & Dessert
            </p>
            <div style={{
              background: `linear-gradient(135deg, ${theme.colors.gold} 0%, #F4E4C1 100%)`,
              display: 'inline-block',
              padding: `${theme.spacing.lg} ${theme.spacing.xxl}`,
              borderRadius: '12px',
              marginBottom: theme.spacing.lg,
              boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
              transform: 'rotate(-2deg)',
            }} className="price-tag">
              <div style={{
                fontSize: theme.fontSizes.huge,
                fontWeight: '800',
                color: theme.colors.darkBackground,
                textShadow: '2px 2px 0px rgba(255,255,255,0.3)',
                lineHeight: '1',
              }}>
                NUR 14.90 €!
              </div>
            </div>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.medium,
              fontWeight: '700',
              color: theme.colors.gold,
              letterSpacing: '2px',
              marginTop: theme.spacing.md,
            }}>
              MO - FR · 11.30 - 16 Uhr
            </p>
          </div>
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
            background: `linear-gradient(135deg, ${theme.colors.gold} 0%, #F4E4C1 100%)`,
            padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
            borderRadius: '16px',
            color: theme.colors.darkBackground,
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
            border: `2px solid ${theme.colors.darkBackground}`,
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s ease',
          }} className="info-card">
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
            }}></div>
            <FaClock style={{
              fontSize: '2.5rem',
              marginBottom: theme.spacing.md,
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
            }} />
            <h4 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.large,
              marginBottom: theme.spacing.md,
              fontWeight: '700',
              letterSpacing: '1px',
            }}>
              Öffnungszeiten
            </h4>
            <div style={{
              width: '40px',
              height: '3px',
              backgroundColor: theme.colors.darkBackground,
              margin: '0 auto',
              marginBottom: theme.spacing.md,
              borderRadius: '2px',
            }}></div>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.medium,
              fontWeight: '700',
              lineHeight: '1.8',
            }}>
              TÄGLICH<br />
              11.30 - 22.00 Uhr
            </p>
          </div>

          {/* Address */}
          <div style={{
            backgroundColor: theme.colors.textWhite,
            padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
            borderRadius: '16px',
            color: theme.colors.darkBackground,
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
            border: `2px solid ${theme.colors.primary}`,
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s ease',
          }} className="info-card">
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              background: `${theme.colors.primary}10`,
              borderRadius: '50%',
            }}></div>
            <FaMapMarkerAlt style={{
              fontSize: '2.5rem',
              marginBottom: theme.spacing.md,
              color: theme.colors.primary,
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
            }} />
            <h4 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.large,
              marginBottom: theme.spacing.md,
              fontWeight: '700',
              letterSpacing: '1px',
            }}>
              Adresse
            </h4>
            <div style={{
              width: '40px',
              height: '3px',
              backgroundColor: theme.colors.primary,
              margin: '0 auto',
              marginBottom: theme.spacing.md,
              borderRadius: '2px',
            }}></div>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.medium,
              fontWeight: '600',
              lineHeight: '1.8',
            }}>
              Oberneulander Landstraße 103<br />
              28355 Bremen
            </p>
          </div>

          {/* Concept */}
          <div style={{
            backgroundColor: theme.colors.textWhite,
            padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
            borderRadius: '16px',
            color: theme.colors.darkBackground,
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
            border: `2px solid ${theme.colors.secondary}`,
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s ease',
          }} className="info-card">
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              background: `${theme.colors.secondary}10`,
              borderRadius: '50%',
            }}></div>
            <FaUtensils style={{
              fontSize: '2.5rem',
              marginBottom: theme.spacing.md,
              color: theme.colors.secondary,
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
            }} />
            <h4 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.large,
              marginBottom: theme.spacing.md,
              fontWeight: '700',
              letterSpacing: '1px',
            }}>
              Unser Konzept
            </h4>
            <div style={{
              width: '40px',
              height: '3px',
              backgroundColor: theme.colors.secondary,
              margin: '0 auto',
              marginBottom: theme.spacing.md,
              borderRadius: '2px',
            }}></div>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.medium,
              fontWeight: '600',
              lineHeight: '1.8',
            }}>
              Authentische spanische Tapas<br />
              für die ganze Familie
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div style={{
          background: `linear-gradient(135deg, ${theme.colors.darkBackground} 0%, #1A1512 100%)`,
          padding: `${theme.spacing.xxl} ${theme.spacing.xl}`,
          borderRadius: '16px',
          textAlign: 'center',
          boxShadow: '0 15px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
          border: `3px solid ${theme.colors.gold}`,
          position: 'relative',
          overflow: 'hidden',
        }} className="contact-card">
          {/* Decorative Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 20% 50%, ${theme.colors.gold}08 0%, transparent 50%), radial-gradient(circle at 80% 50%, ${theme.colors.secondary}08 0%, transparent 50%)`,
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Decorative Icon */}
            <div style={{
              display: 'inline-block',
              backgroundColor: theme.colors.gold,
              borderRadius: '50%',
              padding: theme.spacing.md,
              marginBottom: theme.spacing.lg,
              boxShadow: '0 8px 20px rgba(212, 175, 55, 0.4)',
            }}>
              <FaEnvelope style={{
                fontSize: '2rem',
                color: theme.colors.darkBackground,
              }} />
            </div>
            
            <a href="mailto:info@lacabana-bremen.de" style={{
              textDecoration: 'none',
            }}>
              <h4 style={{
                fontFamily: theme.fonts.primary,
                fontSize: theme.fontSizes.xlarge,
                marginBottom: theme.spacing.lg,
                color: theme.colors.gold,
                fontWeight: '600',
                letterSpacing: '1px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }} className="email-link">
                info@lacabana-bremen.de
              </h4>
            </a>
            
            <div style={{
              width: '100px',
              height: '3px',
              background: `linear-gradient(90deg, transparent, ${theme.colors.gold}, transparent)`,
              margin: '0 auto',
              marginBottom: theme.spacing.lg,
            }}></div>
            
            <p style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.medium,
              color: theme.colors.textWhite,
              fontWeight: '700',
              letterSpacing: '2px',
              backgroundColor: theme.colors.primary,
              padding: `${theme.spacing.md} ${theme.spacing.xl}`,
              borderRadius: '12px',
              margin: '0 auto',
              maxWidth: 'fit-content',
              boxShadow: '0 8px 25px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
              textTransform: 'uppercase',
              border: `2px solid ${theme.colors.gold}`,
            }} className="reservation-badge">
              ✉ Reservierungen und weitere Informationen
            </p>
          </div>
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
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 10px 40px rgba(0,0,0,0.4), 0 0 0 3px ${theme.colors.gold};
          }
          50% {
            box-shadow: 0 10px 40px rgba(0,0,0,0.4), 0 0 0 3px ${theme.colors.gold}, 0 0 20px rgba(212, 175, 55, 0.5);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        @keyframes starTwinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }
        
        @keyframes priceWiggle {
          0%, 100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg) scale(1.05);
          }
        }
        
        h1, h2, h3, h4 {
          animation: fadeInUp 1s ease-out;
        }
        
        .logo-section h1 {
          animation: fadeInUp 1s ease-out, shimmer 3s infinite;
        }
        
        .star-icon {
          animation: starTwinkle 2s ease-in-out infinite;
        }
        
        .star-icon:nth-child(1) {
          animation-delay: 0s;
        }
        
        .star-icon:nth-child(2) {
          animation-delay: 0.3s;
        }
        
        .star-icon:nth-child(3) {
          animation-delay: 0.6s;
        }
        
        .opening-date-card {
          animation: fadeInUp 1s ease-out 0.3s both, glow 3s ease-in-out infinite;
        }
        
        .pulse-text {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .date-text {
          animation: fadeInUp 1s ease-out 0.5s both;
        }
        
        .offer-card {
          animation: fadeInUp 1s ease-out 0.4s both;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        
        .offer-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2);
        }
        
        .price-tag {
          animation: priceWiggle 3s ease-in-out infinite;
          transition: transform 0.3s ease;
        }
        
        .price-tag:hover {
          transform: rotate(0deg) scale(1.1) !important;
        }
        
        .info-card {
          animation: fadeInUp 1s ease-out both;
        }
        
        .info-card:nth-child(1) {
          animation-delay: 0.5s;
        }
        
        .info-card:nth-child(2) {
          animation-delay: 0.6s;
        }
        
        .info-card:nth-child(3) {
          animation-delay: 0.7s;
        }
        
        .info-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 15px 40px rgba(0,0,0,0.5);
        }
        
        .contact-card {
          animation: fadeInUp 1s ease-out 0.8s both;
        }
        
        .reservation-badge {
          animation: pulse 2.5s ease-in-out infinite;
        }
        
        .email-link:hover {
          color: ${theme.colors.textWhite} !important;
          transform: scale(1.05);
          text-shadow: 3px 3px 6px rgba(0,0,0,0.7), 0 0 20px rgba(212, 175, 55, 0.6);
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
          
          .price-tag {
            transform: rotate(0deg) !important;
          }
          
          .info-card:hover {
            transform: none;
          }
          
          .offer-card:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
