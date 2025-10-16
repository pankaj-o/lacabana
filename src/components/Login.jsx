import React, { useState } from 'react';
import theme from '../theme';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Simple password - in production, this should be more secure
  const ADMIN_PASSWORD = 'lacabana2025';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('admin_authenticated', 'true');
      onLogin(true);
    } else {
      setError('Falsches Passwort. Bitte versuchen Sie es erneut.');
    }
    
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${theme.colors.darkBackground} 0%, #1A1512 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.xl,
    }}>
      <div style={{
        background: theme.colors.textWhite,
        padding: theme.spacing.xxxl,
        borderRadius: '16px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
      }}>
        {/* Logo */}
        <div style={{
          marginBottom: theme.spacing.xxxl,
        }}>
          <h1 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.xxlarge,
            fontWeight: '700',
            letterSpacing: '2px',
            marginBottom: theme.spacing.sm,
            color: theme.colors.darkBackground,
          }}>
            la CABANA
          </h1>
          <p style={{
            fontFamily: theme.fonts.accent,
            fontSize: theme.fontSizes.medium,
            color: theme.colors.textLight,
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}>
            Admin Login
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div style={{
            marginBottom: theme.spacing.xl,
          }}>
            <div style={{
              position: 'relative',
              marginBottom: theme.spacing.lg,
            }}>
              <FaLock style={{
                position: 'absolute',
                left: theme.spacing.md,
                top: '50%',
                transform: 'translateY(-50%)',
                color: theme.colors.textLight,
                fontSize: '1.2rem',
              }} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin Passwort"
                required
                style={{
                  width: '100%',
                  padding: `${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.xxxl}`,
                  border: `2px solid ${theme.colors.textLight}`,
                  borderRadius: '8px',
                  fontSize: theme.fontSizes.medium,
                  fontFamily: theme.fonts.primary,
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: theme.colors.textWhite,
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = theme.colors.gold;
                  e.target.style.boxShadow = `0 0 0 3px ${theme.colors.gold}20`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = theme.colors.textLight;
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: theme.spacing.md,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: theme.colors.textLight,
                  fontSize: '1.2rem',
                  padding: theme.spacing.xs,
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {error && (
              <div style={{
                background: '#FEE2E2',
                color: '#DC2626',
                padding: theme.spacing.md,
                borderRadius: '8px',
                fontSize: theme.fontSizes.small,
                fontFamily: theme.fonts.secondary,
                marginBottom: theme.spacing.lg,
                border: '1px solid #FECACA',
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              style={{
                width: '100%',
                background: loading ? theme.colors.textLight : theme.colors.gold,
                color: theme.colors.darkBackground,
                border: 'none',
                padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
                borderRadius: '8px',
                fontSize: theme.fontSizes.medium,
                fontWeight: '600',
                fontFamily: theme.fonts.primary,
                cursor: loading || !password ? 'not-allowed' : 'pointer',
                opacity: loading || !password ? 0.7 : 1,
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
              onMouseEnter={(e) => {
                if (!loading && password) {
                  e.target.style.background = '#F4E4C1';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading && password) {
                  e.target.style.background = theme.colors.gold;
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              {loading ? 'Anmelden...' : 'Anmelden'}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div style={{
          marginTop: theme.spacing.xl,
          paddingTop: theme.spacing.lg,
          borderTop: `1px solid ${theme.colors.textLight}`,
        }}>
          <p style={{
            fontFamily: theme.fonts.secondary,
            fontSize: theme.fontSizes.small,
            color: theme.colors.textLight,
            margin: 0,
          }}>
            Nur für autorisierte Administratoren
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
