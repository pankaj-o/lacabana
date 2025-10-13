import React from 'react';
import theme from '../theme';

const Events = () => {
  const events = [
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
      title: 'Terrassensaison',
      description: 'Auf eine erfolgreiche Terrassensaison mit unglaublich vielen Sonnentagen ☀️',
    },
    {
      image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=2070',
      title: 'Austern & Wein',
      description: 'Uns ist unglaublich wichtig mit lokalen Händlern und Freunden zusammenzuarbeiten 🤗',
    },
    {
      image: 'https://images.unsplash.com/photo-1558346489-19413928158b?q=80&w=2070',
      title: 'Seafood & Wein',
      description: 'Was gibts am Europahafenkopf schöneres als Seafood und Wein 🥂',
    },
    {
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=2070',
      title: 'Hafenbar Eröffnung',
      description: "Heute um 13:00 Uhr eröffnet Fietes Hafenbar 🥂 Hier gibt es den ganzen Sommer ab mittags gefüllte Brioches, Bratwürste, Aperol & Bier.",
    },
  ];

  return (
    <section id="events" style={{
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
          <p style={{
            fontFamily: theme.fonts.accent,
            fontSize: theme.fontSizes.small,
            letterSpacing: '3px',
            color: theme.colors.primary,
            marginBottom: theme.spacing.md,
            textTransform: 'uppercase',
          }}>
            Das passiert bei uns
          </p>
          <h2 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.xxlarge,
            color: theme.colors.primary,
            marginBottom: theme.spacing.lg,
            fontWeight: '600',
          }}>
            Aktuelles
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: theme.spacing.xl,
        }} className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card" style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '8px',
              height: '400px',
              cursor: 'pointer',
              transition: `transform ${theme.transitions.default}`,
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${event.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: `transform ${theme.transitions.slow}`,
              }} className="event-image"></div>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(to top, rgba(0,0,0,0.8), transparent)`,
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: theme.spacing.lg,
                color: theme.colors.textWhite,
              }}>
                <h3 style={{
                  fontFamily: theme.fonts.primary,
                  fontSize: theme.fontSizes.large,
                  marginBottom: theme.spacing.sm,
                }}>
                  {event.title}
                </h3>
                <p style={{
                  fontFamily: theme.fonts.secondary,
                  fontSize: theme.fontSizes.small,
                  lineHeight: '1.6',
                }}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .event-card:hover {
          transform: translateY(-8px);
        }
        .event-card:hover .event-image {
          transform: scale(1.1);
        }

        @media (max-width: ${theme.breakpoints.tablet}) {
          .events-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Events;

