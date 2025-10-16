import React, { useState, useEffect } from 'react';
import theme from '../theme';
import { FaClock, FaCalendarAlt, FaMapMarkerAlt, FaUtensils, FaStar, FaPhone, FaEnvelope, FaDownload, FaSpinner } from 'react-icons/fa';

const ComingSoon = () => {
  const [menuPdf, setMenuPdf] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_BASE = process.env.NODE_ENV === 'production' 
    ? 'https://your-api-gateway-url.amazonaws.com/dev/api' 
    : 'http://localhost:5000/api';

  // Fetch menu PDF on component mount
  useEffect(() => {
    fetchMenuPdf();
  }, []);

  const fetchMenuPdf = async () => {
    try {
      const response = await fetch(`${API_BASE}/pdfs`);
      const pdfs = await response.json();
      const menuFile = pdfs.find(pdf => 
        pdf.title.toLowerCase().includes('menu') && 
        !pdf.title.toLowerCase().includes('drink')
      );
      setMenuPdf(menuFile);
    } catch (error) {
      console.error('Error fetching menu PDF:', error);
    }
  };

  const handleMenuDownload = async () => {
    if (!menuPdf) {
      alert('Menu PDF not available yet. Please check back later!');
      return;
    }

    setLoading(true);
    try {
      window.open(`${API_BASE}/pdfs/file/${menuPdf._id}`, '_blank');
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download menu. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
      {/* Subtle Background Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)`,
      }}></div>

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
        }}>
          <h1 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.huge,
            fontWeight: '700',
            letterSpacing: '3px',
            marginBottom: theme.spacing.md,
            color: theme.colors.textWhite,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}>
            la CABANA
          </h1>
          <h2 style={{
            fontFamily: theme.fonts.accent,
            fontSize: theme.fontSizes.large,
            fontWeight: '300',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: theme.colors.gold,
            marginBottom: theme.spacing.xl,
          }}>
            Tapasbar & Restaurant
          </h2>
          <div style={{
            width: '100px',
            height: '2px',
            background: theme.colors.gold,
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
          padding: `${theme.spacing.xl} ${theme.spacing.xl}`,
          borderRadius: '12px',
          marginBottom: theme.spacing.xxxl,
          boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
          border: `1px solid ${theme.colors.gold}`,
        }}>
          <p style={{
            fontFamily: theme.fonts.accent,
            fontSize: theme.fontSizes.base,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: theme.spacing.md,
            color: theme.colors.gold,
            fontWeight: '600',
          }}>
            ★ NEUERÖFFNUNG! ★
          </p>
          <h2 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.xxlarge,
            fontWeight: '700',
            marginBottom: theme.spacing.lg,
            color: theme.colors.textWhite,
          }}>
            Am 24. OKTOBER 2025
          </h2>
          <p style={{
            fontFamily: theme.fonts.secondary,
            fontSize: theme.fontSizes.medium,
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0 auto',
            color: theme.colors.textLight,
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
            background: theme.colors.gold,
            color: theme.colors.darkBackground,
            border: 'none',
            padding: `${theme.spacing.lg} ${theme.spacing.xxl}`,
            fontSize: theme.fontSizes.large,
            fontWeight: '600',
            fontFamily: theme.fonts.primary,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            minWidth: '280px',
          }} 
          className="reserve-button"
          onClick={() => window.open('https://services.gastronovi.com/restaurants/128454/reservierung/widget#1', '_blank')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
            e.target.style.background = '#F4E4C1';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            e.target.style.background = theme.colors.gold;
          }}>
            🍽️ Tisch reservieren
          </button>
        </div>

        {/* Special Opening Offer */}
        <div style={{
          background: theme.colors.primary,
          padding: `${theme.spacing.xl} ${theme.spacing.xl}`,
          borderRadius: '12px',
          marginBottom: theme.spacing.xxxl,
          boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
          border: `1px solid ${theme.colors.gold}`,
        }}>
          <p style={{
            fontFamily: theme.fonts.accent,
            fontSize: theme.fontSizes.base,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: theme.spacing.md,
            color: theme.colors.gold,
            fontWeight: '700',
          }}>
            ✨ ANGEBOT zur Eröffnung ✨
          </p>
          <h3 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.xlarge,
            marginBottom: theme.spacing.md,
            color: theme.colors.textWhite,
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
            background: theme.colors.gold,
            display: 'inline-block',
            padding: `${theme.spacing.lg} ${theme.spacing.xxl}`,
            borderRadius: '8px',
            marginBottom: theme.spacing.lg,
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}>
            <div style={{
              fontSize: theme.fontSizes.huge,
              fontWeight: '700',
              color: theme.colors.darkBackground,
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
            letterSpacing: '1px',
            marginTop: theme.spacing.md,
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
            background: theme.colors.textWhite,
            padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
            borderRadius: '12px',
            color: theme.colors.darkBackground,
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            border: `1px solid ${theme.colors.gold}`,
            transition: 'all 0.3s ease',
          }} className="info-card">
            <FaClock style={{
              fontSize: '2rem',
              marginBottom: theme.spacing.md,
              color: theme.colors.gold,
            }} />
            <h4 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.large,
              marginBottom: theme.spacing.md,
              fontWeight: '700',
              color: theme.colors.darkBackground,
            }}>
              Öffnungszeiten
            </h4>
            <div style={{
              width: '40px',
              height: '2px',
              backgroundColor: theme.colors.gold,
              margin: '0 auto',
              marginBottom: theme.spacing.md,
            }}></div>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.medium,
              fontWeight: '600',
              lineHeight: '1.8',
              color: theme.colors.darkBackground,
            }}>
              TÄGLICH<br />
              11.30 - 22.00 Uhr
            </p>
          </div>

          {/* Address */}
          <div style={{
            backgroundColor: theme.colors.textWhite,
            padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
            borderRadius: '12px',
            color: theme.colors.darkBackground,
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            border: `1px solid ${theme.colors.primary}`,
            transition: 'all 0.3s ease',
          }} className="info-card">
            <FaMapMarkerAlt style={{
              fontSize: '2rem',
              marginBottom: theme.spacing.md,
              color: theme.colors.primary,
            }} />
            <h4 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.large,
              marginBottom: theme.spacing.md,
              fontWeight: '700',
              color: theme.colors.darkBackground,
            }}>
              Adresse
            </h4>
            <div style={{
              width: '40px',
              height: '2px',
              backgroundColor: theme.colors.primary,
              margin: '0 auto',
              marginBottom: theme.spacing.md,
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
          <div 
            onClick={handleMenuDownload}
            style={{
              backgroundColor: theme.colors.textWhite,
              padding: `${theme.spacing.xl} ${theme.spacing.lg}`,
              borderRadius: '12px',
              color: theme.colors.darkBackground,
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              border: `1px solid ${theme.colors.secondary}`,
              transition: 'all 0.3s ease',
              cursor: menuPdf ? 'pointer' : 'default',
            }} 
            className="info-card"
            onMouseEnter={(e) => {
              if (menuPdf) {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                e.target.style.borderColor = theme.colors.gold;
              }
            }}
            onMouseLeave={(e) => {
              if (menuPdf) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                e.target.style.borderColor = theme.colors.secondary;
              }
            }}
          >
            <FaUtensils style={{
              fontSize: '2rem',
              marginBottom: theme.spacing.md,
              color: theme.colors.secondary,
            }} />
            <h4 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.large,
              marginBottom: theme.spacing.md,
              fontWeight: '700',
              color: theme.colors.darkBackground,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: theme.spacing.sm,
            }}>
              Unser Konzept
              {menuPdf && (
                <FaDownload style={{
                  fontSize: '1.2rem',
                  color: theme.colors.gold,
                  animation: loading ? 'spin 1s linear infinite' : 'none',
                }} />
              )}
            </h4>
            
            <div style={{
              width: '40px',
              height: '2px',
              backgroundColor: theme.colors.secondary,
              margin: '0 auto',
              marginBottom: theme.spacing.md,
            }}></div>
            
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.medium,
              fontWeight: '600',
              lineHeight: '1.6',
              marginBottom: theme.spacing.md,
              color: theme.colors.darkBackground,
            }}>
              Authentische spanische Tapas<br />
              für die ganze Familie
            </p>
            
            {menuPdf && (
              <p style={{
                fontFamily: theme.fonts.secondary,
                fontSize: theme.fontSizes.small,
                color: theme.colors.gold,
                fontWeight: '600',
                margin: 0,
                fontStyle: 'italic',
              }}>
                👆 Klicken Sie hier für unser Menü
              </p>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div style={{
          background: theme.colors.darkBackground,
          padding: `${theme.spacing.xl} ${theme.spacing.xl}`,
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
          border: `1px solid ${theme.colors.gold}`,
        }}>
          <FaEnvelope style={{
            fontSize: '2rem',
            color: theme.colors.gold,
            marginBottom: theme.spacing.lg,
          }} />
          
          <a href="mailto:info@lacabana-bremen.de" style={{
            textDecoration: 'none',
          }}>
            <h4 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.large,
              marginBottom: theme.spacing.lg,
              color: theme.colors.gold,
              fontWeight: '600',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }} className="email-link">
              info@lacabana-bremen.de
            </h4>
          </a>
          
          <div style={{
            width: '60px',
            height: '2px',
            background: theme.colors.gold,
            margin: '0 auto',
            marginBottom: theme.spacing.lg,
          }}></div>
          
          <p style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.medium,
            color: theme.colors.textWhite,
            fontWeight: '600',
            backgroundColor: theme.colors.primary,
            padding: `${theme.spacing.md} ${theme.spacing.lg}`,
            borderRadius: '8px',
            margin: '0 auto',
            maxWidth: 'fit-content',
            textTransform: 'uppercase',
          }}>
            ✉ Reservierungen und weitere Informationen
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .info-card {
          animation: fadeInUp 0.8s ease-out both;
        }
        
        .info-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        
        .info-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .info-card:nth-child(3) {
          animation-delay: 0.3s;
        }
        
        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        
        .email-link:hover {
          color: ${theme.colors.textWhite} !important;
          transform: scale(1.02);
        }
        
        .address-link:hover {
          color: ${theme.colors.primary} !important;
          text-decoration: underline !important;
        }

        @media (max-width: ${theme.breakpoints.tablet}) {
          .coming-soon-container {
            padding: ${theme.spacing.md} !important;
            background-attachment: scroll !important;
            background-size: cover !important;
          }
          
          .content-container {
            padding: 0 ${theme.spacing.sm} !important;
          }
          
          h1 {
            font-size: ${theme.fontSizes.xlarge} !important;
            letter-spacing: 2px !important;
          }
          
          h2 {
            font-size: ${theme.fontSizes.large} !important;
            letter-spacing: 2px !important;
          }
          
          h3 {
            font-size: ${theme.fontSizes.medium} !important;
          }
          
          h4 {
            font-size: ${theme.fontSizes.base} !important;
          }
          
          .info-card {
            padding: ${theme.spacing.md} !important;
            animation: fadeInUp 0.6s ease-out both !important;
          }
          
          .info-card:hover {
            transform: none !important;
          }
          
          .info-card svg {
            font-size: 1.5rem !important;
          }
          
          .reserve-button {
            padding: ${theme.spacing.md} ${theme.spacing.lg} !important;
            font-size: ${theme.fontSizes.medium} !important;
            min-width: 240px !important;
          }
          
          .reserve-button:hover {
            transform: translateY(-2px) !important;
          }
          
          div[style*="grid-template-columns"] {
            gap: ${theme.spacing.md} !important;
            margin-bottom: ${theme.spacing.xl} !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
