import React from 'react';
import theme from '../theme';
import { FaClock, FaCalendarAlt, FaMapMarkerAlt, FaUtensils, FaStar, FaPhone, FaEnvelope } from 'react-icons/fa';

const ComingSoon = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(${theme.colors.overlay}, ${theme.colors.overlay}), url('/images/ComingSoon.png') center/cover`,
      backgroundAttachment: 'scroll',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.colors.textWhite,
      padding: theme.spacing.xl,
      position: 'relative',
    }} className="coming-soon-container">
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 20% 80%, ${theme.colors.primary}20 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${theme.colors.secondary}20 0%, transparent 50%)`,
      }} className="background-pattern"></div>

      <div style={{
        maxWidth: '1000px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        width: '100%',
      }} className="content-container">
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

        {/* Reserve Table Button */}
        <div style={{
          marginBottom: theme.spacing.xxxl,
          textAlign: 'center',
        }}>
          <button style={{
            background: `linear-gradient(135deg, #B8860B 0%, ${theme.colors.gold} 30%, #FFD700 70%, #DAA520 100%)`,
            color: theme.colors.darkBackground,
            border: `4px solid #8B6914`,
            padding: `${theme.spacing.xl} ${theme.spacing.xxxl}`,
            fontSize: theme.fontSizes.xlarge,
            fontWeight: '800',
            fontFamily: theme.fonts.primary,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            borderRadius: '20px',
            cursor: 'pointer',
            boxShadow: '0 15px 40px rgba(0,0,0,0.5), inset 0 3px 6px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2)',
            transition: 'all 0.4s ease',
            position: 'relative',
            overflow: 'hidden',
            minWidth: '320px',
            textShadow: '3px 3px 0px rgba(255,255,255,0.4), 0 0 10px rgba(0,0,0,0.3)',
            transform: 'perspective(1000px) rotateX(5deg)',
          }} 
          className="reserve-button"
          onClick={() => window.open('https://services.gastronovi.com/restaurants/128454/reservierung/widget#1', '_blank')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'perspective(1000px) rotateX(0deg) translateY(-8px) scale(1.08)';
            e.target.style.boxShadow = '0 20px 50px rgba(0,0,0,0.6), inset 0 4px 8px rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.3)';
            e.target.style.filter = 'brightness(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'perspective(1000px) rotateX(5deg) translateY(0) scale(1)';
            e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.5), inset 0 3px 6px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2)';
            e.target.style.filter = 'brightness(1)';
          }}>
            {/* Decorative background pattern */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '100px',
              height: '100px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              width: '60px',
              height: '60px',
              background: 'rgba(0,0,0,0.1)',
              borderRadius: '50%',
            }}></div>
            
            <span style={{ position: 'relative', zIndex: 1 }}>
              🍽️ Tisch reservieren
            </span>
          </button>
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
              background: `linear-gradient(135deg, #8B7355 0%, #A68B5B 50%, #8B7355 100%)`,
              display: 'inline-block',
              padding: `${theme.spacing.lg} ${theme.spacing.xxl}`,
              borderRadius: '8px',
              marginBottom: theme.spacing.lg,
              boxShadow: '0 8px 25px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.2)',
              transform: 'rotate(-1deg)',
              border: `2px solid #6B5B47`,
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
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Oberneulander+Landstraße+103,+28355+Bremen" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
              }}
            >
              <p style={{
                fontFamily: theme.fonts.secondary,
                fontSize: theme.fontSizes.medium,
                fontWeight: '600',
                lineHeight: '1.8',
                color: theme.colors.darkBackground,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }} className="address-link">
                Oberneulander Landstraße 103<br />
                28355 Bremen
              </p>
            </a>
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
        
        .reserve-button {
          animation: fadeInUp 1s ease-out 0.6s both, buttonPulse 3s ease-in-out infinite;
        }
        
        @keyframes buttonPulse {
          0%, 100% {
            box-shadow: 0 15px 40px rgba(0,0,0,0.5), inset 0 3px 6px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2), 0 0 0 0 rgba(212, 175, 55, 0.4);
          }
          50% {
            box-shadow: 0 15px 40px rgba(0,0,0,0.5), inset 0 3px 6px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2), 0 0 0 10px rgba(212, 175, 55, 0.1);
          }
        }
        
        .email-link:hover {
          color: ${theme.colors.textWhite} !important;
          transform: scale(1.05);
          text-shadow: 3px 3px 6px rgba(0,0,0,0.7), 0 0 20px rgba(212, 175, 55, 0.6);
        }
        
        .address-link:hover {
          color: ${theme.colors.primary} !important;
          transform: scale(1.05);
          text-decoration: underline !important;
        }

        @media (max-width: ${theme.breakpoints.tablet}) {
          .coming-soon-container {
            padding: ${theme.spacing.md} !important;
            background-attachment: scroll !important;
            background-size: cover !important;
          }
          
          .background-pattern {
            opacity: 0.3;
          }
          
          .content-container {
            padding: 0 ${theme.spacing.sm} !important;
          }
          
          .logo-section {
            margin-bottom: ${theme.spacing.xl} !important;
          }
          
          h1 {
            font-size: ${theme.fontSizes.xlarge} !important;
            letter-spacing: 2px !important;
          }
          
          h2 {
            font-size: ${theme.fontSizes.large} !important;
            letter-spacing: 3px !important;
          }
          
          h3 {
            font-size: ${theme.fontSizes.medium} !important;
          }
          
          h4 {
            font-size: ${theme.fontSizes.base} !important;
          }
          
          /* Reduce star decorations on mobile */
          .logo-section > div:first-child {
            display: none !important;
          }
          
          /* Simplify opening date card */
          .opening-date-card {
            padding: ${theme.spacing.lg} !important;
            border-width: 2px !important;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3), 0 0 0 2px ${theme.colors.gold} !important;
            animation: fadeInUp 1s ease-out 0.3s both !important;
          }
          
          /* Hide decorative corners on mobile */
          .opening-date-card > div[style*="position: absolute"] {
            display: none !important;
          }
          
          /* Simplify offer card */
          .offer-card {
            padding: ${theme.spacing.lg} !important;
            border-width: 2px !important;
            box-shadow: 0 8px 25px rgba(0,0,0,0.4) !important;
            animation: fadeInUp 1s ease-out 0.4s both !important;
          }
          
          .offer-card:hover {
            transform: none !important;
          }
          
          /* Simplify price tag */
          .price-tag {
            transform: rotate(0deg) !important;
            padding: ${theme.spacing.md} ${theme.spacing.lg} !important;
            animation: none !important;
          }
          
          .price-tag:hover {
            transform: scale(1) !important;
          }
          
          .price-tag > div {
            font-size: ${theme.fontSizes.xxlarge} !important;
          }
          
          /* Simplify info cards */
          .info-card {
            padding: ${theme.spacing.md} !important;
            border-width: 2px !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
            animation: fadeInUp 0.8s ease-out both !important;
          }
          
          .info-card:hover {
            transform: none !important;
          }
          
          .info-card svg {
            font-size: 2rem !important;
          }
          
          /* Hide decorative circles in info cards */
          .info-card > div[style*="position: absolute"] {
            display: none !important;
          }
          
          /* Simplify contact card */
          .contact-card {
            padding: ${theme.spacing.lg} !important;
            border-width: 2px !important;
            box-shadow: 0 8px 25px rgba(0,0,0,0.4) !important;
            animation: fadeInUp 1s ease-out 0.6s both !important;
          }
          
          .contact-card > div > div:first-child {
            padding: ${theme.spacing.sm} !important;
            margin-bottom: ${theme.spacing.md} !important;
          }
          
          .contact-card svg {
            font-size: 1.5rem !important;
          }
          
          .email-link {
            font-size: ${theme.fontSizes.large} !important;
          }
          
          .reservation-badge {
            font-size: ${theme.fontSizes.small} !important;
            padding: ${theme.spacing.sm} ${theme.spacing.md} !important;
            letter-spacing: 1px !important;
            animation: none !important;
            word-break: break-word !important;
          }
          
          .reserve-button {
            padding: ${theme.spacing.lg} ${theme.spacing.xl} !important;
            font-size: ${theme.fontSizes.large} !important;
            min-width: 280px !important;
            letter-spacing: 2px !important;
            animation: fadeInUp 1s ease-out 0.6s both, buttonPulse 3s ease-in-out infinite !important;
            transform: perspective(1000px) rotateX(2deg) !important;
            border-width: 3px !important;
          }
          
          .reserve-button:hover {
            transform: perspective(1000px) rotateX(0deg) translateY(-5px) scale(1.05) !important;
            filter: brightness(1.1) !important;
          }
          
          /* Disable heavy animations on mobile */
          .star-icon,
          .pulse-text,
          .logo-section h1 {
            animation: fadeInUp 1s ease-out !important;
          }
          
          /* Adjust grid for mobile */
          div[style*="grid-template-columns"] {
            gap: ${theme.spacing.md} !important;
            margin-bottom: ${theme.spacing.xl} !important;
          }
          
          /* Reduce section spacing */
          .opening-date-card,
          .offer-card {
            margin-bottom: ${theme.spacing.xl} !important;
          }
          
          /* Reduce decorative line width */
          div[style*="width: '150px'"] {
            width: 100px !important;
          }
          
          div[style*="width: '100px'"] {
            width: 60px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
