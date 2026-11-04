import { useLoading } from '../context/LoadingContext';
import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { DocumentationGrid } from '../components/documentation/DocumentationGrid';
import { BenefitPanel } from '../components/documentation/BenefitPanel';
import { BrandValueBar } from '../components/documentation/BrandValueBar';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  documentationCategories,
  complianceBenefits,
  brandValues,
} from '../data/documentationData';
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
        maxWidth: '1200px',
        margin: '0 auto',
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
          background: '#FAFBFC',
        }}
      >
        {/* Subtle Background Flowing Trade Lines Watermark */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(ellipse at 80% 20%, rgba(8, 38, 83, 0.035) 0%, transparent 60%),
                              radial-gradient(ellipse at 20% 80%, rgba(8, 38, 83, 0.025) 0%, transparent 50%)`,
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
            padding: '0 40px',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          {/* Left Hero Content Area */}
          <div style={{ flex: '1 1 68%', maxWidth: '780px' }}>
            {/* Elegant Georgia Serif Heading */}
            <h1
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: '44px',
                fontWeight: '700',
                color: '#082653',
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
                backgroundColor: '#082653',
                borderRadius: '7px',
                color: '#FFFFFF',
                fontSize: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
                boxShadow: '0 4px 14px rgba(8, 38, 83, 0.22)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: 'none',
              }}
            >
              <span>Explore Documentation</span>
              <ArrowRight size={18} strokeWidth={2.5} color="#F4B52E" />
            </button>
          </div>

          {/* Right Hero Image Container */}
          <div
            className="doc-hero-image-container"
            style={{
              flex: '0 0 32%',
              maxWidth: '380px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/documentation-hero.jpg"
              alt="Trade Documentation & Compliance"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '12px',
                filter: 'drop-shadow(0 10px 25px rgba(8, 38, 83, 0.12))',
              }}
            />
          </div>
        </div>

        {/* 3. 5-Column Compliance Benefit Panel */}
        <BenefitPanel benefits={complianceBenefits} />

        {/* 4. Bottom 4-Item Brand Value Strip */}
        <BrandValueBar items={brandValues} />
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
