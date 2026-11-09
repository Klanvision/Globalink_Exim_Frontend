import React, { useState } from 'react';
import {
  FileText,
  Download,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  X,
  Search,
  ShieldCheck,
  FolderArchive,
  Lock,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const CorporateShipmentDocuments = ({
  shipment,
  onDownloadDocument,
}) => {
  const [downloadingId, setDownloadingId] = useState(null);
  const [downloadSuccessId, setDownloadSuccessId] = useState(null);
  const [showVaultModal, setShowVaultModal] = useState(false);
  const [modalSearch, setModalSearch] = useState('');
  const [modalFilter, setModalFilter] = useState('all');
  const [downloadingAll, setDownloadingAll] = useState(false);

  // Core 4 primary documents matching reference UI
  const primaryDocuments = [
    {
      id: 'bol',
      name: 'Bill of Lading',
      status: 'available',
      refCode: shipment?.containerId ? `BL-${shipment.containerId}` : 'BL-984210',
      size: '1.4 MB',
      type: 'PDF',
      date: '08 Nov 2026',
      issuer: 'Carrier / Line Operator',
    },
    {
      id: 'invoice',
      name: 'Commercial Invoice',
      status: 'available',
      refCode: 'INV-2026-EXP-4401',
      size: '420 KB',
      type: 'PDF',
      date: '07 Nov 2026',
      issuer: 'KPL Export Billing',
    },
    {
      id: 'packing',
      name: 'Packing List',
      status: 'available',
      refCode: 'PL-2026-8831',
      size: '310 KB',
      type: 'PDF',
      date: '07 Nov 2026',
      issuer: 'Logistics Warehouse Unit',
    },
    {
      id: 'coo',
      name: 'Certificate of Origin',
      status: 'pending',
      refCode: 'COO-2026-IN-9012',
      size: '580 KB',
      type: 'PDF',
      date: 'Pending Verification',
      issuer: 'Chamber of Commerce',
    },
  ];

  // Extended documents suite in the "View All Documents" Vault
  const allVaultDocuments = [
    ...primaryDocuments,
    {
      id: 'shipping_bill',
      name: 'Customs Export Declaration',
      status: 'available',
      refCode: 'SB-2026-MAA-9941',
      size: '890 KB',
      type: 'PDF',
      date: '08 Nov 2026',
      issuer: 'Indian Customs EDI Gateway',
    },
    {
      id: 'insurance',
      name: 'Cargo Marine Insurance Policy',
      status: 'available',
      refCode: 'INS-2026-KPL-5510',
      size: '720 KB',
      type: 'PDF',
      date: '07 Nov 2026',
      issuer: 'Global Marine Underwriters',
    },
    {
      id: 'eir_pass',
      name: 'Port Gate-In & EIR Pass',
      status: 'available',
      refCode: 'EIR-2026-08144',
      size: '340 KB',
      type: 'PDF',
      date: '08 Nov 2026',
      issuer: 'Terminal Gate Operations',
    },
    {
      id: 'phyto',
      name: 'Inspection & Quality Certificate',
      status: 'available',
      refCode: 'INSP-2026-SGS-412',
      size: '610 KB',
      type: 'PDF',
      date: '06 Nov 2026',
      issuer: 'SGS International Inspection',
    },
  ];

  const handleDownload = (doc) => {
    if (doc.status !== 'available') return;
    setDownloadingId(doc.id);

    if (onDownloadDocument) {
      onDownloadDocument(doc);
    }

    setTimeout(() => {
      setDownloadingId(null);
      setDownloadSuccessId(doc.id);
      setTimeout(() => setDownloadSuccessId(null), 2500);
    }, 700);
  };

  const handleDownloadAll = () => {
    setDownloadingAll(true);
    setTimeout(() => {
      setDownloadingAll(false);
      alert('Archive compiled: All 8 shipment documents downloaded in a secure ZIP folder.');
    }, 1200);
  };

  const filteredVaultDocuments = allVaultDocuments.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(modalSearch.toLowerCase()) ||
      (doc.refCode && doc.refCode.toLowerCase().includes(modalSearch.toLowerCase()));
    if (modalFilter === 'all') return matchesSearch;
    if (modalFilter === 'available') return matchesSearch && doc.status === 'available';
    if (modalFilter === 'pending') return matchesSearch && doc.status === 'pending';
    return matchesSearch;
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      {/* Scrollbar styling with Orange Thumb and Arrows matching Reference */}
      <style>{`
        .kpl-shipment-docs-scrollbar::-webkit-scrollbar {
          width: 7px;
        }
        .kpl-shipment-docs-scrollbar::-webkit-scrollbar-track {
          background: #F1F5F9;
          border-radius: 4px;
        }
        .kpl-shipment-docs-scrollbar::-webkit-scrollbar-thumb {
          background: #E05305;
          border-radius: 4px;
        }
        .kpl-shipment-docs-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #C2410C;
        }
        .kpl-shipment-docs-scrollbar::-webkit-scrollbar-button:single-button:vertical:decrement {
          height: 10px;
          width: 7px;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 7px 6px;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='7' height='6' viewBox='0 0 7 6'><polygon points='3.5,0 0,6 7,6' fill='%23E05305'/></svg>");
        }
        .kpl-shipment-docs-scrollbar::-webkit-scrollbar-button:single-button:vertical:increment {
          height: 10px;
          width: 7px;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 7px 6px;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='7' height='6' viewBox='0 0 7 6'><polygon points='3.5,6 0,0 7,0' fill='%23E05305'/></svg>");
        }
        .kpl-shipment-docs-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #E05305 #F1F5F9;
        }

        @keyframes kpl-vault-box-appear {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

      {/* 1. Shipment Documents Card matching attachment exactly */}
      <div
        className="corporate-shipment-documents-card"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          padding: '24px 26px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
        }}
      >
        <div>
          {/* Card Header matching attachment */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '16px',
            }}
          >
            <h2
              style={{
                fontSize: '20px',
                fontWeight: '800',
                color: '#0A1E3F',
                margin: 0,
                letterSpacing: '-0.02em',
                fontFamily:
                  "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              Shipment documents
            </h2>
          </div>

          {/* Document Items List showing exactly 6 items with scrollbar matching attachment */}
          <div
            className="kpl-shipment-docs-scrollbar"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '9px',
              maxHeight: '348px',
              overflowY: 'auto',
              paddingRight: '7px',
            }}
          >
            {allVaultDocuments.map((doc) => {
              const isAvailable = doc.status === 'available';
              const isDownloading = downloadingId === doc.id;
              const isSuccess = downloadSuccessId === doc.id;

              return (
                <div
                  key={doc.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 18px',
                    backgroundColor: '#F3F6FA',
                    borderRadius: '12px',
                    transition: 'all 0.18s ease',
                    border: '1px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (isAvailable) {
                      e.currentTarget.style.backgroundColor = '#EEF4FA';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isAvailable) {
                      e.currentTarget.style.backgroundColor = '#F3F6FA';
                      e.currentTarget.style.borderColor = 'transparent';
                    }
                  }}
                >
                  {/* Document Title */}
                  <span
                    style={{
                      fontSize: '14.5px',
                      fontWeight: '700',
                      color: '#0F172A',
                      letterSpacing: '-0.01em',
                      fontFamily:
                        "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    }}
                  >
                    {doc.name}
                  </span>

                  {/* Right Action */}
                  <div>
                    {isAvailable ? (
                      <button
                        type="button"
                        onClick={() => handleDownload(doc)}
                        disabled={isDownloading}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: '2px 4px',
                          color: isSuccess ? '#16A34A' : '#E05305',
                          fontWeight: '700',
                          fontSize: '14.5px',
                          fontFamily:
                            "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                          letterSpacing: '-0.005em',
                          cursor: isDownloading ? 'wait' : 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'color 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          if (!isSuccess && !isDownloading) {
                            e.currentTarget.style.color = '#C2410C';
                            e.currentTarget.style.textDecoration = 'underline';
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = isSuccess ? '#16A34A' : '#E05305';
                          e.currentTarget.style.textDecoration = 'none';
                        }}
                      >
                        {isDownloading ? (
                          <span>Downloading...</span>
                        ) : isSuccess ? (
                          <>
                            <CheckCircle2 size={14} color="#16A34A" />
                            <span>Downloaded</span>
                          </>
                        ) : (
                          <span>Download</span>
                        )}
                      </button>
                    ) : (
                      <span
                        style={{
                          fontSize: '13.5px',
                          fontWeight: '600',
                          color: '#64748B',
                          fontFamily:
                            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                          letterSpacing: '-0.005em',
                          paddingRight: '4px',
                        }}
                      >
                        Awaiting upload
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Downside Action: View All Documents Button (Full Width, NO arrow buttons beside it) */}
        <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
          <button
            type="button"
            onClick={() => setShowVaultModal(true)}
            style={{
              width: '100%',
              padding: '11px 18px',
              backgroundColor: '#F8FAFC',
              border: '1px solid #CBD5E1',
              borderRadius: '10px',
              color: '#E05305',
              fontSize: '13.5px',
              fontWeight: '700',
              fontFamily:
                "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
              transition: 'all 0.18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFF7ED';
              e.currentTarget.style.borderColor = '#FED7AA';
              e.currentTarget.style.color = '#C2410C';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F8FAFC';
              e.currentTarget.style.borderColor = '#CBD5E1';
              e.currentTarget.style.color = '#E05305';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FileText size={15} strokeWidth={2.2} />
            <span>View All Documents (8 Files)</span>
            <ChevronRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* =========================================================================
          TOTAL BOX: ENTERPRISE DOCUMENT VAULT MODAL (100% VISIBLE & FRAME PERFECT)
          ========================================================================= */}
      {showVaultModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(7, 29, 58, 0.72)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '24px 16px',
            boxSizing: 'border-box',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowVaultModal(false);
          }}
        >
          {/* Total Box: Height and width calculated so TOTAL BOX is 100% visible including top search */}
          <div
            className="corporate-vault-total-box"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '860px',
              maxHeight: 'min(90vh, 740px)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 60px -10px rgba(10, 30, 63, 0.4), 0 0 0 1px rgba(226, 232, 240, 0.8)',
              overflow: 'hidden',
              position: 'relative',
              animation: 'kpl-vault-box-appear 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* 1. Box Header: Fixed at top, ALWAYS visible */}
            <div
              style={{
                flexShrink: 0,
                padding: '20px 28px',
                borderBottom: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#F8FAFC',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={22} color="#EA580C" strokeWidth={2.4} />
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: '800',
                      color: '#0A1E3F',
                      margin: 0,
                      fontFamily:
                        "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    }}
                  >
                    Shipment Document Vault
                  </h3>
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#64748B',
                    marginTop: '3px',
                    fontFamily:
                      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  }}
                >
                  Container & Trade Dossier · Ref:{' '}
                  <span style={{ fontWeight: '700', color: '#0F172A' }}>
                    {shipment?.containerId || 'KPLU 482019-6'}
                  </span>{' '}
                  · Tracking ID:{' '}
                  <span style={{ fontWeight: '700', color: '#EA580C' }}>
                    {shipment?.trackingId || 'KPL-EXP-2026-008421'}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowVaultModal(false)}
                title="Close Vault"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#64748B',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F1F5F9';
                  e.currentTarget.style.color = '#0F172A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#64748B';
                }}
              >
                <X size={18} strokeWidth={2.4} />
              </button>
            </div>

            {/* 2. Top Controls Bar: Search + Filters + Download All (Fixed at top, ALWAYS visible) */}
            <div
              style={{
                flexShrink: 0,
                padding: '14px 28px',
                borderBottom: '1px solid #F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '14px',
                flexWrap: 'wrap',
                backgroundColor: '#FFFFFF',
              }}
            >
              {/* Search input with clean search icon */}
              <div
                style={{
                  position: 'relative',
                  flex: '1 1 260px',
                }}
              >
                <Search
                  size={16}
                  color="#94A3B8"
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />
                <input
                  type="text"
                  placeholder="Search document name or reference..."
                  value={modalSearch}
                  onChange={(e) => setModalSearch(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px 8px 36px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13.5px',
                    fontFamily:
                      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.15s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#EA580C';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#CBD5E1';
                  }}
                />
              </div>

              {/* Status Filters */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {['all', 'available', 'pending'].map((filterKey) => (
                  <button
                    key={filterKey}
                    type="button"
                    onClick={() => setModalFilter(filterKey)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border:
                        modalFilter === filterKey
                          ? '1px solid #EA580C'
                          : '1px solid #E2E8F0',
                      backgroundColor:
                        modalFilter === filterKey ? '#FFF7ED' : '#FFFFFF',
                      color: modalFilter === filterKey ? '#EA580C' : '#64748B',
                      fontSize: '12.5px',
                      fontWeight: '700',
                      textTransform: 'capitalize',
                      cursor: 'pointer',
                      fontFamily:
                        "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    }}
                  >
                    {filterKey === 'all'
                      ? 'All (8)'
                      : filterKey === 'available'
                      ? 'Verified (7)'
                      : 'Pending (1)'}
                  </button>
                ))}
              </div>

              {/* Download All as ZIP */}
              <button
                type="button"
                onClick={handleDownloadAll}
                disabled={downloadingAll}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#EA580C',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: '700',
                  fontFamily:
                    "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  cursor: downloadingAll ? 'wait' : 'pointer',
                  boxShadow: '0 2px 8px rgba(234, 88, 12, 0.3)',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  if (!downloadingAll) e.currentTarget.style.backgroundColor = '#C2410C';
                }}
                onMouseLeave={(e) => {
                  if (!downloadingAll) e.currentTarget.style.backgroundColor = '#EA580C';
                }}
              >
                <FolderArchive size={15} strokeWidth={2.2} />
                <span>{downloadingAll ? 'Compiling ZIP...' : 'Download All (.ZIP)'}</span>
              </button>
            </div>

            {/* 3. Document Items List: Equipped with IMPRESSIVE CUSTOM SCROLLBAR on side */}
            <div
              className="kpl-impressive-scrollbar"
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '9px',
                backgroundColor: '#FFFFFF',
              }}
            >
              {filteredVaultDocuments.map((doc) => {
                const isAvail = doc.status === 'available';
                const isDownloading = downloadingId === doc.id;
                const isSuccess = downloadSuccessId === doc.id;

                return (
                  <div
                    key={doc.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '13px 18px',
                      backgroundColor: '#F8FAFC',
                      borderRadius: '10px',
                      border: '1px solid #E2E8F0',
                      transition: 'all 0.18s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F1F5F9';
                      e.currentTarget.style.borderColor = '#CBD5E1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F8FAFC';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                    }}
                  >
                    {/* File Icon & Info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          backgroundColor: isAvail ? '#FFF7ED' : '#F1F5F9',
                          border: isAvail ? '1px solid #FED7AA' : '1px solid #E2E8F0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isAvail ? '#EA580C' : '#94A3B8',
                          flexShrink: 0,
                        }}
                      >
                        <FileText size={20} strokeWidth={2.2} />
                      </div>

                      <div>
                        <div
                          style={{
                            fontSize: '14.5px',
                            fontWeight: '700',
                            color: '#0F172A',
                            fontFamily:
                              "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                          }}
                        >
                          {doc.name}
                        </div>
                        <div
                          style={{
                            fontSize: '12px',
                            color: '#64748B',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginTop: '2px',
                            fontFamily:
                              "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                          }}
                        >
                          <span style={{ fontWeight: '600', color: '#334155' }}>
                            {doc.refCode}
                          </span>
                          <span>•</span>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>{doc.issuer}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status & Action */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {/* Status Badge */}
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontSize: '11.5px',
                          fontWeight: '700',
                          padding: '3px 9px',
                          borderRadius: '6px',
                          backgroundColor: isAvail ? '#ECFDF5' : '#FFFBEB',
                          color: isAvail ? '#059669' : '#D97706',
                          border: isAvail
                            ? '1px solid #A7F3D0'
                            : '1px solid #FDE68A',
                          fontFamily:
                            "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        }}
                      >
                        {isAvail ? (
                          <>
                            <CheckCircle2 size={12} strokeWidth={2.5} />
                            <span>Verified</span>
                          </>
                        ) : (
                          <>
                            <Lock size={12} strokeWidth={2.5} />
                            <span>Pending</span>
                          </>
                        )}
                      </span>

                      {/* Download Button */}
                      {isAvail ? (
                        <button
                          type="button"
                          onClick={() => handleDownload(doc)}
                          disabled={isDownloading}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            backgroundColor: isSuccess ? '#16A34A' : '#EA580C',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '6px 14px',
                            fontSize: '12.5px',
                            fontWeight: '700',
                            fontFamily:
                              "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                            cursor: isDownloading ? 'wait' : 'pointer',
                            transition: 'all 0.15s ease',
                          }}
                          onMouseEnter={(e) => {
                            if (!isSuccess && !isDownloading) {
                              e.currentTarget.style.backgroundColor = '#C2410C';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSuccess && !isDownloading) {
                              e.currentTarget.style.backgroundColor = '#EA580C';
                            }
                          }}
                        >
                          <Download size={13} strokeWidth={2.4} />
                          <span>
                            {isDownloading
                              ? 'Downloading...'
                              : isSuccess
                              ? 'Downloaded'
                              : 'Download'}
                          </span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          disabled
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            backgroundColor: '#F1F5F9',
                            color: '#94A3B8',
                            border: '1px solid #E2E8F0',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontSize: '12px',
                            fontWeight: '600',
                            cursor: 'not-allowed',
                            fontFamily:
                              "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                          }}
                        >
                          <span>Locked</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 4. Box Footer: Fixed at bottom, ALWAYS visible */}
            <div
              style={{
                flexShrink: 0,
                padding: '16px 28px',
                borderTop: '1px solid #E2E8F0',
                backgroundColor: '#F8FAFC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  fontSize: '12.5px',
                  color: '#64748B',
                  fontFamily:
                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                🔒 Tamper-evident verified digital signatures attached to each cargo record.
              </div>

              <button
                type="button"
                onClick={() => setShowVaultModal(false)}
                style={{
                  padding: '8px 18px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  borderRadius: '6px',
                  color: '#0F172A',
                  fontSize: '13px',
                  fontWeight: '700',
                  fontFamily:
                    "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F1F5F9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
              >
                Close Vault
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
