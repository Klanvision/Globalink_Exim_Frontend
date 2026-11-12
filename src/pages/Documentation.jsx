import { useLoading } from '../context/LoadingContext';
import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { DocumentationGrid } from '../components/documentation/DocumentationGrid';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import { documentationCategories } from '../data/documentationData';
import { ArrowRight } from 'lucide-react';

export const Documentation = ({ onNavigate }) => {
  const { isLoading } = useLoading();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div
      className="documentation-page-root"
      style={{
        width: '100%',
        maxWidth: '100%',
        margin: '0',
        minHeight: '100vh',
        background: '#FAFBFC',
        position: 'relative',
        boxShadow: '0 0 40px rgba(0,0,0,0.12)',
        overflowX: 'clip',
      }}
    >
      {/* 1. Shared Global Link Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="documentation"
        onNavigate={onNavigate}
      />

      {/* 2. Main Page Hero Section */}
      <main
        style={{
          position: 'relative',
          paddingTop: '40px',
          paddingBottom: '40px',
          paddingLeft: 'var(--section-horizontal-padding, 132px)',
          paddingRight: 'var(--section-horizontal-padding, 132px)',
          background: '#FAFBFC',
        }}
      >
        {/* Subtle Background Flowing Trade Lines Watermark */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(ellipse at 80% 20%, rgba(255, 111, 0, 0.035) 0%, transparent 60%),
                              radial-gradient(ellipse at 20% 80%, rgba(255, 111, 0, 0.025) 0%, transparent 50%)`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Hero Top Grid: Left (Text, Categories, CTA) & Right (Realistic Illustration) */}
        <div
          className="doc-hero-wrapper"
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 1,
            padding: '0',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          {/* Hero Content Area */}
          <div style={{ width: '100%' }}>
            {/* Elegant Georgia Serif Heading */}
            <h1
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '44px',
                fontWeight: '700',
                color: '#0F172A',
                lineHeight: '1.08',
                letterSpacing: '-0.5px',
                marginBottom: '8px',
              }}
            >
              Documentation & Compliance
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '18px',
                fontWeight: '400',
                color: '#40516D',
                fontFamily: 'var(--font-body)',
                marginBottom: '6px',
                letterSpacing: '-0.2px',
              }}
            >
              Trade Documentation Made Simple
            </p>

            {/* 6 Documentation Categories Row */}
            <DocumentationGrid
              categories={documentationCategories}
              loading={isLoading}
              onItemClick={() => openModal('quote')}
            />

            {/* Explore Documentation CTA Button */}
            <button
              onClick={() => openModal('quote')}
              className="doc-cta-btn"
              style={{
                width: '320px',
                height: '46px',
                background: 'linear-gradient(135deg, #FF6F00 0%, #FF8C00 45%, #E65100 100%)',
                borderRadius: '7px',
                color: '#FFFFFF',
                fontSize: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
                boxShadow: '0 4px 14px rgba(230, 81, 0, 0.28)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: 'none',
              }}
            >
              <span>Explore Documentation</span>
              <ArrowRight size={18} strokeWidth={2.5} color="#F4B52E" />
            </button>
          </div>
        </div>
      </main>

      {/* 3. Shared Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Interactive Modal */}
      <TrackModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultType={modalType}
      />
    </div>
  );
};
