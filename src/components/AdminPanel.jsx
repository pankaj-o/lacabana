import React, { useState, useEffect } from 'react';
import theme from '../theme';
import { FaUpload, FaTrash, FaEye, FaEdit, FaFilePdf } from 'react-icons/fa';

const AdminPanel = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    pdf: null
  });
  const [editingId, setEditingId] = useState(null);

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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      pdf: e.target.files[0]
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.pdf) {
      alert('Please select a PDF file');
      return;
    }

    setUploading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('pdf', formData.pdf);

      const response = await fetch(`${API_BASE}/pdfs/upload`, {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setFormData({ title: '', description: '', pdf: null });
        document.getElementById('pdfFile').value = '';
        fetchPdfs();
        alert('PDF uploaded successfully!');
      } else {
        const error = await response.json();
        alert(`Upload failed: ${error.error}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  // Handle PDF deletion
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this PDF?')) {
      try {
        const response = await fetch(`${API_BASE}/pdfs/${id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          fetchPdfs();
          alert('PDF deleted successfully!');
        } else {
          alert('Failed to delete PDF');
        }
      } catch (error) {
        console.error('Delete error:', error);
        alert('Delete failed. Please try again.');
      }
    }
  };

  // Handle PDF viewing
  const handleView = (id) => {
    window.open(`${API_BASE}/pdfs/file/${id}`, '_blank');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${theme.colors.darkBackground} 0%, #1A1512 100%)`,
      padding: theme.spacing.xl,
      color: theme.colors.textWhite,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: theme.spacing.xxxl,
        }}>
          <h1 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.xxlarge,
            fontWeight: '700',
            color: theme.colors.gold,
            marginBottom: theme.spacing.md,
          }}>
            Admin Panel
          </h1>
          <p style={{
            fontFamily: theme.fonts.secondary,
            fontSize: theme.fontSizes.medium,
            color: theme.colors.textLight,
          }}>
            Manage PDF documents for La Cabana
          </p>
        </div>

        {/* Upload Form */}
        <div style={{
          backgroundColor: theme.colors.primary,
          padding: theme.spacing.xxl,
          borderRadius: '16px',
          marginBottom: theme.spacing.xxxl,
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        }}>
          <h2 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.xlarge,
            marginBottom: theme.spacing.lg,
            color: theme.colors.gold,
          }}>
            Upload New PDF
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: theme.spacing.lg,
              marginBottom: theme.spacing.lg,
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: theme.spacing.sm,
                  fontFamily: theme.fonts.primary,
                  fontWeight: '600',
                  color: theme.colors.textWhite,
                }}>
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: theme.spacing.md,
                    borderRadius: '8px',
                    border: `2px solid ${theme.colors.gold}`,
                    backgroundColor: theme.colors.textWhite,
                    color: theme.colors.darkBackground,
                    fontFamily: theme.fonts.primary,
                    fontSize: theme.fontSizes.medium,
                  }}
                />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: theme.spacing.sm,
                  fontFamily: theme.fonts.primary,
                  fontWeight: '600',
                  color: theme.colors.textWhite,
                }}>
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: theme.spacing.md,
                    borderRadius: '8px',
                    border: `2px solid ${theme.colors.gold}`,
                    backgroundColor: theme.colors.textWhite,
                    color: theme.colors.darkBackground,
                    fontFamily: theme.fonts.primary,
                    fontSize: theme.fontSizes.medium,
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: theme.spacing.lg }}>
              <label style={{
                display: 'block',
                marginBottom: theme.spacing.sm,
                fontFamily: theme.fonts.primary,
                fontWeight: '600',
                color: theme.colors.textWhite,
              }}>
                PDF File *
              </label>
              <input
                id="pdfFile"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                required
                style={{
                  width: '100%',
                  padding: theme.spacing.md,
                  borderRadius: '8px',
                  border: `2px solid ${theme.colors.gold}`,
                  backgroundColor: theme.colors.textWhite,
                  color: theme.colors.darkBackground,
                  fontFamily: theme.fonts.primary,
                  fontSize: theme.fontSizes.medium,
                }}
              />
            </div>

            <button
              type="submit"
              disabled={uploading}
              style={{
                backgroundColor: theme.colors.gold,
                color: theme.colors.darkBackground,
                border: 'none',
                padding: `${theme.spacing.md} ${theme.spacing.xl}`,
                borderRadius: '8px',
                fontFamily: theme.fonts.primary,
                fontSize: theme.fontSizes.medium,
                fontWeight: '600',
                cursor: uploading ? 'not-allowed' : 'pointer',
                opacity: uploading ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing.sm,
                margin: '0 auto',
              }}
            >
              <FaUpload />
              {uploading ? 'Uploading...' : 'Upload PDF'}
            </button>
          </form>
        </div>

        {/* PDFs List */}
        <div style={{
          backgroundColor: theme.colors.secondary,
          padding: theme.spacing.xxl,
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        }}>
          <h2 style={{
            fontFamily: theme.fonts.primary,
            fontSize: theme.fontSizes.xlarge,
            marginBottom: theme.spacing.lg,
            color: theme.colors.gold,
          }}>
            Uploaded PDFs
          </h2>

          {loading ? (
            <div style={{
              textAlign: 'center',
              padding: theme.spacing.xxl,
              color: theme.colors.textLight,
            }}>
              Loading PDFs...
            </div>
          ) : pdfs.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: theme.spacing.xxl,
              color: theme.colors.textLight,
            }}>
              No PDFs uploaded yet
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gap: theme.spacing.md,
            }}>
              {pdfs.map((pdf) => (
                <div
                  key={pdf._id}
                  style={{
                    backgroundColor: theme.colors.textWhite,
                    padding: theme.spacing.lg,
                    borderRadius: '12px',
                    color: theme.colors.darkBackground,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
                    <FaFilePdf style={{ fontSize: '2rem', color: '#DC2626' }} />
                    <div>
                      <h3 style={{
                        fontFamily: theme.fonts.primary,
                        fontSize: theme.fontSizes.large,
                        fontWeight: '600',
                        marginBottom: theme.spacing.xs,
                      }}>
                        {pdf.title}
                      </h3>
                      {pdf.description && (
                        <p style={{
                          fontFamily: theme.fonts.secondary,
                          fontSize: theme.fontSizes.medium,
                          color: theme.colors.textLight,
                          marginBottom: theme.spacing.xs,
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

                  <div style={{ display: 'flex', gap: theme.spacing.sm }}>
                    <button
                      onClick={() => handleView(pdf._id)}
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
                      }}
                    >
                      <FaEye />
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(pdf._id)}
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
                      }}
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
