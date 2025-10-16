import React, { useState, useEffect } from 'react';
import theme from '../theme';
import { FaFilePdf, FaDownload, FaTimes, FaSpinner } from 'react-icons/fa';

const PdfViewer = ({ pdfId, onClose }) => {
  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = 'http://localhost:5000/api';

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await fetch(`${API_BASE}/pdfs/${pdfId}`);
        if (response.ok) {
          const data = await response.json();
          setPdf(data);
        } else {
          setError('PDF not found');
        }
      } catch (err) {
        setError('Failed to load PDF');
      } finally {
        setLoading(false);
      }
    };

    if (pdfId) {
      fetchPdf();
    }
  }, [pdfId]);

  const handleDownload = () => {
    window.open(`${API_BASE}/pdfs/file/${pdfId}`, '_blank');
  };

  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}>
        <div style={{
          textAlign: 'center',
          color: theme.colors.textWhite,
        }}>
          <FaSpinner style={{
            fontSize: '3rem',
            animation: 'spin 1s linear infinite',
            marginBottom: theme.spacing.lg,
          }} />
          <p style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.large,
          }}>
            Loading PDF...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}>
        <div style={{
          backgroundColor: theme.colors.primary,
          padding: theme.spacing.xxl,
          borderRadius: '16px',
          textAlign: 'center',
          maxWidth: '400px',
          margin: theme.spacing.lg,
        }}>
          <h3 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.large,
            color: theme.colors.gold,
            marginBottom: theme.spacing.md,
          }}>
            Error
          </h3>
          <p style={{
            fontFamily: theme.fonts.secondary,
            fontSize: theme.fontSizes.medium,
            color: theme.colors.textWhite,
            marginBottom: theme.spacing.lg,
          }}>
            {error}
          </p>
          <button
            onClick={onClose}
            style={{
              backgroundColor: theme.colors.gold,
              color: theme.colors.darkBackground,
              border: 'none',
              padding: `${theme.spacing.md} ${theme.spacing.lg}`,
              borderRadius: '8px',
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.medium,
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.9)',
      zIndex: 1000,
    }}>
      {/* Header */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.colors.darkBackground,
        padding: `${theme.spacing.md} ${theme.spacing.lg}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1001,
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
          <FaFilePdf style={{ fontSize: '1.5rem', color: '#DC2626' }} />
          <div>
            <h3 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.large,
              color: theme.colors.textWhite,
              margin: 0,
            }}>
              {pdf?.title}
            </h3>
            {pdf?.description && (
              <p style={{
                fontFamily: theme.fonts.secondary,
                fontSize: theme.fontSizes.small,
                color: theme.colors.textLight,
                margin: 0,
              }}>
                {pdf.description}
              </p>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: theme.spacing.sm }}>
          <button
            onClick={handleDownload}
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.textWhite,
              border: 'none',
              padding: `${theme.spacing.sm} ${theme.spacing.md}`,
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.xs,
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.small,
            }}
          >
            <FaDownload />
            Download
          </button>
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#DC2626',
              color: theme.colors.textWhite,
              border: 'none',
              padding: `${theme.spacing.sm} ${theme.spacing.md}`,
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.xs,
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.small,
            }}
          >
            <FaTimes />
            Close
          </button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div style={{
        position: 'absolute',
        top: '60px',
        left: 0,
        right: 0,
        bottom: 0,
        padding: theme.spacing.lg,
      }}>
        <iframe
          src={`${API_BASE}/pdfs/file/${pdfId}`}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: theme.colors.textWhite,
          }}
          title={pdf?.title}
        />
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default PdfViewer;
