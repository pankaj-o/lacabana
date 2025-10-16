import React, { useState, useEffect } from 'react';
import theme from '../theme';
import { FaUpload, FaFilePdf, FaUtensils, FaWineGlassAlt } from 'react-icons/fa';

const SimpleAdmin = () => {
  const [menuPdf, setMenuPdf] = useState(null);
  const [drinksPdf, setDrinksPdf] = useState(null);
  const [uploading, setUploading] = useState({ menu: false, drinks: false });
  const [uploadedFiles, setUploadedFiles] = useState({ menu: null, drinks: null });

  const API_BASE = process.env.NODE_ENV === 'production' 
    ? '/api' 
    : 'http://localhost:5000/api';

  // Fetch existing files on component mount
  useEffect(() => {
    fetchExistingFiles();
  }, []);

  const fetchExistingFiles = async () => {
    try {
      const response = await fetch(`${API_BASE}/pdfs`);
      const pdfs = await response.json();
      
      const menuFile = pdfs.find(pdf => pdf.title.toLowerCase().includes('menu'));
      const drinksFile = pdfs.find(pdf => pdf.title.toLowerCase().includes('drink'));
      
      setUploadedFiles({
        menu: menuFile || null,
        drinks: drinksFile || null
      });
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const handleFileChange = (type, file) => {
    if (type === 'menu') {
      setMenuPdf(file);
    } else {
      setDrinksPdf(file);
    }
  };

  const handleUpload = async (type) => {
    const file = type === 'menu' ? menuPdf : drinksPdf;
    if (!file) {
      alert(`Please select a ${type} PDF file`);
      return;
    }

    setUploading(prev => ({ ...prev, [type]: true }));

    try {
      const formData = new FormData();
      formData.append('title', type === 'menu' ? 'Menu' : 'Drinks Menu');
      formData.append('description', `La Cabana ${type === 'menu' ? 'Food' : 'Drinks'} Menu`);
      formData.append('pdf', file);

      const response = await fetch(`${API_BASE}/pdfs/upload`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert(`${type === 'menu' ? 'Menu' : 'Drinks'} uploaded successfully!`);
        if (type === 'menu') {
          setMenuPdf(null);
          document.getElementById('menuFile').value = '';
        } else {
          setDrinksPdf(null);
          document.getElementById('drinksFile').value = '';
        }
        fetchExistingFiles();
      } else {
        const error = await response.json();
        alert(`Upload failed: ${error.error}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(prev => ({ ...prev, [type]: false }));
    }
  };

  const handleDelete = async (type) => {
    const file = uploadedFiles[type];
    if (!file) return;

    if (window.confirm(`Are you sure you want to delete the ${type} PDF?`)) {
      try {
        const response = await fetch(`${API_BASE}/pdfs/${file._id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          setUploadedFiles(prev => ({ ...prev, [type]: null }));
          alert(`${type === 'menu' ? 'Menu' : 'Drinks'} deleted successfully!`);
        } else {
          alert('Failed to delete PDF');
        }
      } catch (error) {
        console.error('Delete error:', error);
        alert('Delete failed. Please try again.');
      }
    }
  };

  const handleView = (fileId) => {
    window.open(`${API_BASE}/pdfs/file/${fileId}`, '_blank');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${theme.colors.darkBackground} 0%, #1A1512 100%)`,
      padding: theme.spacing.xxl,
      color: theme.colors.textWhite,
    }}>
      <div style={{
        maxWidth: '800px',
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
            La Cabana Admin
          </h1>
          <p style={{
            fontFamily: theme.fonts.secondary,
            fontSize: theme.fontSizes.medium,
            color: theme.colors.textLight,
          }}>
            Upload Menu and Drinks PDFs
          </p>
        </div>

        {/* Menu Upload Section */}
        <div style={{
          backgroundColor: theme.colors.primary,
          padding: theme.spacing.xxl,
          borderRadius: '16px',
          marginBottom: theme.spacing.xl,
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.md,
            marginBottom: theme.spacing.lg,
          }}>
            <FaUtensils style={{
              fontSize: '2rem',
              color: theme.colors.gold,
            }} />
            <h2 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.xlarge,
              color: theme.colors.gold,
              margin: 0,
            }}>
              Food Menu
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: theme.spacing.md,
            alignItems: 'end',
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
                Select Menu PDF
              </label>
              <input
                id="menuFile"
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange('menu', e.target.files[0])}
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
              onClick={() => handleUpload('menu')}
              disabled={!menuPdf || uploading.menu}
              style={{
                backgroundColor: theme.colors.gold,
                color: theme.colors.darkBackground,
                border: 'none',
                padding: `${theme.spacing.md} ${theme.spacing.lg}`,
                borderRadius: '8px',
                fontFamily: theme.fonts.primary,
                fontSize: theme.fontSizes.medium,
                fontWeight: '600',
                cursor: menuPdf && !uploading.menu ? 'pointer' : 'not-allowed',
                opacity: menuPdf && !uploading.menu ? 1 : 0.7,
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing.sm,
                whiteSpace: 'nowrap',
              }}
            >
              <FaUpload />
              {uploading.menu ? 'Uploading...' : 'Upload Menu'}
            </button>
          </div>

          {/* Current Menu Display */}
          {uploadedFiles.menu && (
            <div style={{
              backgroundColor: theme.colors.textWhite,
              padding: theme.spacing.lg,
              borderRadius: '8px',
              color: theme.colors.darkBackground,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
                <FaFilePdf style={{ fontSize: '1.5rem', color: '#DC2626' }} />
                <div>
                  <p style={{
                    fontFamily: theme.fonts.primary,
                    fontSize: theme.fontSizes.medium,
                    fontWeight: '600',
                    margin: 0,
                  }}>
                    {uploadedFiles.menu.title}
                  </p>
                  <p style={{
                    fontFamily: theme.fonts.secondary,
                    fontSize: theme.fontSizes.small,
                    color: theme.colors.textLight,
                    margin: 0,
                  }}>
                    Uploaded: {new Date(uploadedFiles.menu.uploadedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: theme.spacing.sm }}>
                <button
                  onClick={() => handleView(uploadedFiles.menu._id)}
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.textWhite,
                    border: 'none',
                    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: theme.fontSizes.small,
                  }}
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete('menu')}
                  style={{
                    backgroundColor: '#DC2626',
                    color: theme.colors.textWhite,
                    border: 'none',
                    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: theme.fontSizes.small,
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Drinks Upload Section */}
        <div style={{
          backgroundColor: theme.colors.secondary,
          padding: theme.spacing.xxl,
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.md,
            marginBottom: theme.spacing.lg,
          }}>
            <FaWineGlassAlt style={{
              fontSize: '2rem',
              color: theme.colors.gold,
            }} />
            <h2 style={{
              fontFamily: theme.fonts.primary,
              fontSize: theme.fontSizes.xlarge,
              color: theme.colors.gold,
              margin: 0,
            }}>
              Drinks Menu
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: theme.spacing.md,
            alignItems: 'end',
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
                Select Drinks PDF
              </label>
              <input
                id="drinksFile"
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange('drinks', e.target.files[0])}
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
              onClick={() => handleUpload('drinks')}
              disabled={!drinksPdf || uploading.drinks}
              style={{
                backgroundColor: theme.colors.gold,
                color: theme.colors.darkBackground,
                border: 'none',
                padding: `${theme.spacing.md} ${theme.spacing.lg}`,
                borderRadius: '8px',
                fontFamily: theme.fonts.primary,
                fontSize: theme.fontSizes.medium,
                fontWeight: '600',
                cursor: drinksPdf && !uploading.drinks ? 'pointer' : 'not-allowed',
                opacity: drinksPdf && !uploading.drinks ? 1 : 0.7,
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing.sm,
                whiteSpace: 'nowrap',
              }}
            >
              <FaUpload />
              {uploading.drinks ? 'Uploading...' : 'Upload Drinks'}
            </button>
          </div>

          {/* Current Drinks Display */}
          {uploadedFiles.drinks && (
            <div style={{
              backgroundColor: theme.colors.textWhite,
              padding: theme.spacing.lg,
              borderRadius: '8px',
              color: theme.colors.darkBackground,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
                <FaFilePdf style={{ fontSize: '1.5rem', color: '#DC2626' }} />
                <div>
                  <p style={{
                    fontFamily: theme.fonts.primary,
                    fontSize: theme.fontSizes.medium,
                    fontWeight: '600',
                    margin: 0,
                  }}>
                    {uploadedFiles.drinks.title}
                  </p>
                  <p style={{
                    fontFamily: theme.fonts.secondary,
                    fontSize: theme.fontSizes.small,
                    color: theme.colors.textLight,
                    margin: 0,
                  }}>
                    Uploaded: {new Date(uploadedFiles.drinks.uploadedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: theme.spacing.sm }}>
                <button
                  onClick={() => handleView(uploadedFiles.drinks._id)}
                  style={{
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.textWhite,
                    border: 'none',
                    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: theme.fontSizes.small,
                  }}
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete('drinks')}
                  style={{
                    backgroundColor: '#DC2626',
                    color: theme.colors.textWhite,
                    border: 'none',
                    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: theme.fontSizes.small,
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleAdmin;
