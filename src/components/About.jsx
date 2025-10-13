import React from 'react';
import theme from '../theme';

const About = () => {
  return (
    <section id="about" style={{
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
            Das ist la CABANA
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            backgroundColor: theme.colors.gold,
            margin: '0 auto',
            marginBottom: theme.spacing.xl,
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: theme.spacing.xxl,
          marginBottom: theme.spacing.xxxl,
        }}>
          <div style={{
            textAlign: 'left',
          }}>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.medium,
              lineHeight: '1.8',
              color: theme.colors.text,
              marginBottom: theme.spacing.lg,
            }}>
              Überraschend vielfältig, überzeugend zugänglich. Einzigartig in der Region: unsere Gäste erleben authentische spanische Küche mit frischen Zutaten und traditionellen Rezepten.
            </p>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.medium,
              lineHeight: '1.8',
              color: theme.colors.text,
            }}>
              Von hausgemachten Tapas bis zu herzhaften Paella-Gerichten – wir bringen den Geschmack Spaniens direkt zu Ihnen.
            </p>
          </div>
          <div style={{
            textAlign: 'left',
          }}>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.medium,
              lineHeight: '1.8',
              color: theme.colors.text,
            }}>
              So lässt sich jeder Abend genüßlich beginnen – begleitet von einer aromatisch begeisternden Tapas-Küche und ausgewählten spanischen Weinen.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: theme.spacing.xl,
          marginTop: theme.spacing.xxxl,
        }} className="info-cards">
          {/* Weinbar Card */}
          <div className="info-card" style={{
            backgroundColor: theme.colors.darkBackground,
            padding: theme.spacing.xxl,
            borderRadius: '8px',
            color: theme.colors.textWhite,
            transition: `transform ${theme.transitions.default}`,
          }}>
            <h3 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.xlarge,
              marginBottom: theme.spacing.lg,
              color: theme.colors.gold,
            }}>
              Tapasbar
            </h3>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.base,
              lineHeight: '1.8',
              marginBottom: theme.spacing.lg,
            }}>
              Lust, spannende spanische Tapas und Weine zu entdecken? Bei uns in der la CABANA Tapasbar erleben Sie authentische spanische Küche.
            </p>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.base,
              lineHeight: '1.8',
              marginBottom: theme.spacing.xl,
            }}>
              Unsere Küche arbeitet mit frischen Zutaten und traditionellen spanischen Rezepten, die wir regelmäßig mit neuen Kreationen ergänzen.
            </p>
            <a href="#tapas" style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.base,
              color: theme.colors.gold,
              fontWeight: '600',
              textDecoration: 'underline',
            }}>
              Mehr dazu →
            </a>
          </div>

          {/* Restaurant Card */}
          <div className="info-card" style={{
            backgroundColor: theme.colors.primary,
            padding: theme.spacing.xxl,
            borderRadius: '8px',
            color: theme.colors.textWhite,
            transition: `transform ${theme.transitions.default}`,
          }}>
            <h3 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.xlarge,
              marginBottom: theme.spacing.lg,
              color: theme.colors.textWhite,
            }}>
              Restaurant
            </h3>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.base,
              lineHeight: '1.8',
              marginBottom: theme.spacing.lg,
            }}>
              Ein spanisches Restaurant mit authentischer Küche! Aber was bedeutet authentische spanische Küche eigentlich?
            </p>
            <p style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.base,
              lineHeight: '1.8',
              marginBottom: theme.spacing.xl,
            }}>
              Kernelement ist hierbei immer die Qualität der Zutaten und die traditionelle Zubereitung. Wir verwenden frische, regionale Produkte und authentische spanische Gewürze.
            </p>
            <a href="#restaurant" style={{
              fontFamily: theme.fonts.secondary,
              fontSize: theme.fontSizes.base,
              color: theme.colors.textWhite,
              fontWeight: '600',
              textDecoration: 'underline',
            }}>
              Mehr dazu →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .info-card:hover {
          transform: translateY(-8px);
          box-shadow: ${theme.shadows.large};
        }

        @media (max-width: ${theme.breakpoints.tablet}) {
          .info-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;

