import React, { useState } from 'react';
import theme from '../theme';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Newsletter-Anmeldung erfolgreich!');
    setFormData({ email: '', firstName: '', lastName: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" style={{
      padding: `${theme.spacing.xxxl} ${theme.spacing.xl}`,
      backgroundColor: theme.colors.darkBackground,
      color: theme.colors.textWhite,
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
            marginBottom: theme.spacing.lg,
            fontWeight: '600',
          }}>
            Kontaktiere uns.
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: theme.spacing.xxl,
        }} className="contact-grid">
          {/* Contact Info */}
          <div>
            <div style={{
              marginBottom: theme.spacing.xl,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing.md,
                marginBottom: theme.spacing.lg,
              }}>
                <FaMapMarkerAlt style={{
                  fontSize: theme.fontSizes.large,
                  color: theme.colors.gold,
                }} />
                <div>
                  <h3 style={{
                    fontFamily: theme.fonts.primary,
                    fontSize: theme.fontSizes.large,
                    marginBottom: theme.spacing.sm,
                  }}>
                    Adresse
                  </h3>
                  <p style={{
                    fontFamily: theme.fonts.secondary,
                    fontSize: theme.fontSizes.base,
                    lineHeight: '1.6',
                  }}>
                    [Ihre Adresse]<br />
                    [Ihre Stadt]
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing.md,
              }}>
                <FaEnvelope style={{
                  fontSize: theme.fontSizes.large,
                  color: theme.colors.gold,
                }} />
                <div>
                  <h3 style={{
                    fontFamily: theme.fonts.primary,
                    fontSize: theme.fontSizes.large,
                    marginBottom: theme.spacing.sm,
                  }}>
                    E-Mail
                  </h3>
                  <a href="mailto:info@lacabana.de" style={{
                    fontFamily: theme.fonts.secondary,
                    fontSize: theme.fontSizes.base,
                    color: theme.colors.gold,
                  }}>
                    info@lacabana.de
                  </a>
                </div>
              </div>
            </div>

            <div style={{
              marginTop: theme.spacing.xxl,
            }}>
              <h3 style={{
                fontFamily: theme.fonts.primary,
                fontSize: theme.fontSizes.large,
                marginBottom: theme.spacing.md,
              }}>
                la CABANA
              </h3>
              <p style={{
                fontFamily: theme.fonts.secondary,
                fontSize: theme.fontSizes.base,
                lineHeight: '1.8',
                color: theme.colors.textLight,
              }}>
                Authentische spanische Küche in gemütlicher Atmosphäre. Wo Tradition auf moderne Gastronomie trifft.
              </p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div style={{
            backgroundColor: theme.colors.primary,
            padding: theme.spacing.xxl,
            borderRadius: '8px',
          }}>
            <h3 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.xlarge,
              marginBottom: theme.spacing.lg,
            }}>
              Newsletter
            </h3>
            <form onSubmit={handleSubmit}>
              <div style={{
                marginBottom: theme.spacing.md,
              }}>
                <label style={{
                  fontFamily: theme.fonts.secondary,
                  fontSize: theme.fontSizes.small,
                  marginBottom: theme.spacing.sm,
                  display: 'block',
                }}>
                  E-Mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: theme.spacing.md,
                    fontFamily: theme.fonts.secondary,
                    fontSize: theme.fontSizes.base,
                    borderRadius: '4px',
                    border: 'none',
                  }}
                />
              </div>

              <div style={{
                marginBottom: theme.spacing.md,
              }}>
                <label style={{
                  fontFamily: theme.fonts.secondary,
                  fontSize: theme.fontSizes.small,
                  marginBottom: theme.spacing.sm,
                  display: 'block',
                }}>
                  Vorname
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: theme.spacing.md,
                    fontFamily: theme.fonts.secondary,
                    fontSize: theme.fontSizes.base,
                    borderRadius: '4px',
                    border: 'none',
                  }}
                />
              </div>

              <div style={{
                marginBottom: theme.spacing.lg,
              }}>
                <label style={{
                  fontFamily: theme.fonts.secondary,
                  fontSize: theme.fontSizes.small,
                  marginBottom: theme.spacing.sm,
                  display: 'block',
                }}>
                  Nachname
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: theme.spacing.md,
                    fontFamily: theme.fonts.secondary,
                    fontSize: theme.fontSizes.base,
                    borderRadius: '4px',
                    border: 'none',
                  }}
                />
              </div>

              <button type="submit" className="submit-button" style={{
                width: '100%',
                padding: theme.spacing.md,
                backgroundColor: theme.colors.secondary,
                color: theme.colors.textWhite,
                fontFamily: theme.fonts.secondary,
                fontSize: theme.fontSizes.base,
                fontWeight: '600',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: `all ${theme.transitions.default}`,
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>
                Anmelden
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .submit-button:hover {
          background-color: ${theme.colors.textWhite};
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.medium};
        }

        @media (max-width: ${theme.breakpoints.tablet}) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;

