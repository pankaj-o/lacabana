import React from 'react';
import theme from '../theme';
import { FaUtensils, FaWineGlass, FaUsers, FaGift } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaGift />,
      title: 'Gutscheine',
      description: 'Verschenken Sie ein Stück spanische Gastfreundschaft! Unsere Gutscheine sind perfekt für jeden Anlass und ermöglichen es Ihren Liebsten, unsere authentische Küche und warme Atmosphäre zu genießen.',
      link: '#contact',
    },
    {
      icon: <FaUtensils />,
      title: 'Catering & Events',
      description: 'Planen Sie eine besondere Feier? Wir bieten professionelles Catering für private Veranstaltungen, Firmenfeiern und besondere Anlässe. Unsere spanischen Spezialitäten bringen mediterranes Flair zu Ihrem Event.',
      link: '#contact',
    },
    {
      icon: <FaWineGlass />,
      title: 'Weinberatung',
      description: 'Entdecken Sie die perfekte Weinbegleitung zu unseren Gerichten. Unser geschultes Team berät Sie gerne bei der Auswahl spanischer Weine und hilft Ihnen, neue Geschmackserlebnisse zu entdecken.',
      link: '#contact',
    },
  ];

  return (
    <section id="services" style={{
      padding: `${theme.spacing.xxxl} ${theme.spacing.xl}`,
      backgroundColor: theme.colors.background,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: theme.spacing.xxxl,
        }}>
          <h2 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.xxlarge,
            color: theme.colors.primary,
            marginBottom: theme.spacing.lg,
            fontWeight: '600',
          }}>
            Unsere Services
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            backgroundColor: theme.colors.gold,
            margin: '0 auto',
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: theme.spacing.xxl,
          marginBottom: theme.spacing.xxxl,
        }} className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{
              backgroundColor: theme.colors.background,
              padding: theme.spacing.xxl,
              borderRadius: '12px',
              textAlign: 'left',
              transition: `all ${theme.transitions.default}`,
              boxShadow: theme.shadows.medium,
              border: `1px solid ${theme.colors.border}`,
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Service Icon */}
              <div style={{
                fontSize: '2.5rem',
                color: theme.colors.secondary,
                marginBottom: theme.spacing.lg,
              }}>
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 style={{
                fontFamily: theme.fonts.primary,
                fontSize: theme.fontSizes.large,
                color: theme.colors.primary,
                marginBottom: theme.spacing.md,
                fontWeight: '600',
              }}>
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p style={{
                fontFamily: theme.fonts.secondary,
                fontSize: theme.fontSizes.base,
                lineHeight: '1.7',
                color: theme.colors.text,
                marginBottom: theme.spacing.xl,
              }}>
                {service.description}
              </p>
              
              {/* Call to Action */}
              <a href={service.link} className="service-link" style={{
                fontFamily: theme.fonts.secondary,
                fontSize: theme.fontSizes.base,
                color: theme.colors.secondary,
                fontWeight: '600',
                textDecoration: 'none',
                position: 'relative',
                display: 'inline-block',
              }}>
                Zu Kontakt →
              </a>
            </div>
          ))}
        </div>

        {/* Special Offer Section */}
        <div style={{
          backgroundColor: theme.colors.primary,
          padding: theme.spacing.xxl,
          borderRadius: '12px',
          textAlign: 'center',
          color: theme.colors.textWhite,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.darkBackground} 100%)`,
            opacity: 0.9,
          }}></div>
          
          <div style={{
            position: 'relative',
            zIndex: 1,
          }}>
            <p style={{
              fontFamily: theme.fonts.accent,
              fontSize: theme.fontSizes.small,
              letterSpacing: '3px',
              marginBottom: theme.spacing.md,
              textTransform: 'uppercase',
              color: theme.colors.gold,
            }}>
              Besondere Angebote
            </p>
            <h2 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.xxlarge,
              marginBottom: theme.spacing.lg,
              color: theme.colors.textWhite,
            }}>
              Genießen Sie mehr
            </h2>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.medium,
              lineHeight: '1.8',
              maxWidth: '800px',
              margin: '0 auto',
              marginBottom: theme.spacing.xl,
            }}>
              Erleben Sie authentische spanische Küche in entspannter Atmosphäre. Unsere Tapas, Paella und spanischen Weine verwandeln jeden Besuch in ein kulinarisches Abenteuer. Reservieren Sie jetzt Ihren Tisch und lassen Sie sich von unserer Leidenschaft für spanische Gastronomie verzaubern.
            </p>
            <a href="#contact" style={{
              fontFamily: theme.fonts.secondary,
              padding: `${theme.spacing.md} ${theme.spacing.xl}`,
              backgroundColor: theme.colors.secondary,
              color: theme.colors.textWhite,
              fontSize: theme.fontSizes.base,
              fontWeight: '600',
              borderRadius: '6px',
              transition: `all ${theme.transitions.default}`,
              display: 'inline-block',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textDecoration: 'none',
            }}>
              Jetzt Reservieren
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: ${theme.shadows.large};
          border-color: ${theme.colors.gold};
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, ${theme.colors.secondary}, ${theme.colors.gold});
          transform: scaleX(0);
          transition: transform ${theme.transitions.default};
        }
        
        .service-card:hover::before {
          transform: scaleX(1);
        }
        
        .service-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: ${theme.colors.secondary};
          transition: width ${theme.transitions.default};
        }
        
        .service-link:hover::after {
          width: 100%;
        }

        @media (max-width: ${theme.breakpoints.tablet}) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;

