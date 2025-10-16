import React, { useState, useEffect } from 'react';
import theme from '../theme';
import { FaFilePdf, FaEye, FaDownload, FaSpinner } from 'react-icons/fa';
import PdfViewer from './PdfViewer';

const PdfList = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPdfId, setSelectedPdfId] = useState(null);

  const API_BASE = 'http://localhost:5000/api';

  // Fetch PDFs
  const fetchPdfs = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/pdfs`);
      const data = await response.json();
      setPdfs(data);
    } catch (error) {
      console.error('Error fetching PDFs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  const handleView = (pdfId) => {
    setSelectedPdfId(pdfId);
  };

  const handleDownload = (pdfId) => {
    window.open(`${API_BASE}/pdfs/file/${pdfId}`, '_blank');
  };

  const handleCloseViewer = () => {
    setSelectedPdfId(null);
  };

  if (loading) {
    return (
      <div style={{
        textAlign: 'center',
        padding: theme.spacing.xxxl,
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
          Loading documents...
        </p>
      </div>
    );
  }

  if (pdfs.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: theme.spacing.xxxl,
        color: theme.colors.textLight,
      }}>
        <FaFilePdf style={{
          fontSize: '4rem',
          marginBottom: theme.spacing.lg,
          opacity: 0.5,
        }} />
        <h3 style={{
          fontFamily: theme.fonts.primary,
          fontSize: theme.fontSizes.large,
          marginBottom: theme.spacing.md,
        }}>
          No documents available
        </h3>
        <p style={{
          fontFamily: theme.fonts.secondary,
          fontSize: theme.fontSizes.medium,
        }}>
          Check back later for new documents
        </p>
      </div>
    );
  }

  return (
    <>
      <div style={{
        background: `linear-gradient(135deg, ${theme.colors.darkBackground} 0%, #1A1512 100%)`,
        padding: theme.spacing.xxl,
        borderRadius: '16px',
        marginBottom: theme.spacing.xxxl,
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      }}>
        <h2 style={{
          fontFamily: theme.fonts.primary,
          fontSize: theme.fontSizes.xlarge,
          color: theme.colors.gold,
          marginBottom: theme.spacing.lg,
          textAlign: 'center',
        }}>
          📄 Documents & Menus
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: theme.spacing.lg,
        }}>
          {pdfs.map((pdf) => (
            <div
              key={pdf._id}
              style={{
                backgroundColor: theme.colors.textWhite,
                padding: theme.spacing.lg,
                borderRadius: '12px',
                color: theme.colors.darkBackground,
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: `2px solid transparent`,
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                e.target.style.borderColor = theme.colors.gold;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                e.target.style.borderColor = 'transparent';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: theme.spacing.md,
                marginBottom: theme.spacing.md,
              }}>
                <FaFilePdf style={{
                  fontSize: '2.5rem',
                  color: '#DC2626',
                  flexShrink: 0,
                }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: theme.fonts.primary,
                    fontSize: theme.fontSizes.large,
                    fontWeight: '600',
                    marginBottom: theme.spacing.xs,
                    color: theme.colors.darkBackground,
                  }}>
                    {pdf.title}
                  </h3>
                  {pdf.description && (
                    <p style={{
                      fontFamily: theme.fonts.secondary,
                      fontSize: theme.fontSizes.medium,
                      color: theme.colors.textLight,
                      marginBottom: theme.spacing.sm,
                    }}>
                      {pdf.description}
                    </p>
                  )}
                  <p style={{
                    fontFamily: theme.fonts.secondary,
                    fontSize: theme.fontSizes.small,
                    color: theme.colors.textLight,
                  }}>
                    Uploaded: {new Date(pdf.uploadedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: theme.spacing.sm,
                justifyContent: 'center',
              }}>
                <button
                  onClick={() => handleView(pdf._id)}
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.textWhite,
                    border: 'none',
                    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: theme.spacing.xs,
                    fontFamily: theme.fonts.primary,
                    fontSize: theme.fontSizes.medium,
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = theme.colors.secondary;
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = theme.colors.primary;
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  <FaEye />
                  View
                </button>
                <button
                  onClick={() => handleDownload(pdf._id)}
                  style={{
                    backgroundColor: theme.colors.gold,
                    color: theme.colors.darkBackground,
                    border: 'none',
                    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: theme.spacing.xs,
                    fontFamily: theme.fonts.primary,
                    fontSize: theme.fontSizes.medium,
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#F4E4C1';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = theme.colors.gold;
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  <FaDownload />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedPdfId && (
        <PdfViewer
          pdfId={selectedPdfId}
          onClose={handleCloseViewer}
        />
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default PdfList;
