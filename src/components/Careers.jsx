import React from 'react';
import theme from '../theme';

const Careers = () => {
  return (
    <section style={{
      padding: `${theme.spacing.xxxl} ${theme.spacing.xl}`,
      background: `linear-gradient(${theme.colors.overlay}, ${theme.colors.overlay}), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070') center/cover fixed`,
      color: theme.colors.textWhite,
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        <p style={{
          fontFamily: theme.fonts.accent,
          fontSize: theme.fontSizes.small,
          letterSpacing: '3px',
          marginBottom: theme.spacing.md,
          textTransform: 'uppercase',
        }}>
          Lust bekommen?
        </p>
        <h2 style={{
          fontFamily: theme.fonts.primary,
          fontSize: theme.fontSizes.xxlarge,
          marginBottom: theme.spacing.xl,
          fontWeight: '600',
        }}>
          Wir suchen dich
        </h2>
        <div style={{
          width: '80px',
          height: '3px',
          backgroundColor: theme.colors.gold,
          margin: '0 auto',
          marginBottom: theme.spacing.xl,
        }}></div>
        <p style={{
          fontFamily: theme.fonts.secondary,
          fontSize: theme.fontSizes.medium,
          lineHeight: '1.8',
          marginBottom: theme.spacing.xxl,
        }}>
          Ihr habt Lust teil unseres Teams zu werden und Bremen kulinarisch mitzugestalten: dann meldet euch gerne unter der info@bar-rique.de
        </p>
        <p style={{
          fontFamily: theme.fonts.secondary,
          fontSize: theme.fontSizes.medium,
          lineHeight: '1.8',
          marginBottom: theme.spacing.xl,
        }}>
          Wir suchen immer Aushilfen in Service und Küche.
        </p>
        <a href="#contact" className="careers-button" style={{
          fontFamily: theme.fonts.secondary,
          padding: `${theme.spacing.md} ${theme.spacing.xl}`,
          backgroundColor: theme.colors.gold,
          color: theme.colors.darkBackground,
          fontSize: theme.fontSizes.base,
          fontWeight: '600',
          borderRadius: '4px',
          transition: `all ${theme.transitions.default}`,
          display: 'inline-block',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}>
          Zu Kontakt
        </a>
      </div>

      <style>{`
        .careers-button:hover {
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.large};
          background-color: ${theme.colors.textWhite};
        }
      `}</style>
    </section>
  );
};

export default Careers;

