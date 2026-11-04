import { useLoading } from '../context/LoadingContext';
import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { QualityProcess } from '../components/quality/QualityProcess';
import { QualityAssuranceBanner } from '../components/quality/QualityAssuranceBanner';
import { SupportingFeatures } from '../components/quality/SupportingFeatures';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  qualityProcessSteps,
  qualityAssuranceBannerItems,
  supportingCapabilities,
} from '../data/qualityData';
import { ArrowRight } from 'lucide-react';

export const QualityAssurance = ({ onNavigate }) => {
  const { isLoading } = useLoading();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div
      className="quality-page-root"
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '100vh',
        background: '#FAFBFD',
        position: 'relative',
        boxShadow: '0 0 40px rgba(0,0,0,0.12)',
        overflowX: 'clip',
      }}
    >
      {/* 1. Shared Global Link Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="quality"
        onNavigate={onNavigate}
      />

      {/* 2. Main Page Hero Section */}
      <main
        style={{
          position: 'relative',
          paddingTop: '40px',
          paddingBottom: '20px',
          background: '#FAFBFD',
        }}
      >
        {/* Subtle Watermark Gradients */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(ellipse at 85% 20%, rgba(8, 47, 98, 0.04) 0%, transparent 60%),
                              radial-gradient(ellipse at 15% 85%, rgba(232, 165, 42, 0.03) 0%, transparent 50%)`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Hero Top Grid: Left (Heading, Subtitle, 5 Process Items, CTA) & Right (Hero Image) */}
        <div
          className="quality-hero-wrapper"
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 1,
            padding: '0 36px',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          {/* Left Hero Content Area */}
          <div style={{ flex: '1 1 62%', maxWidth: '720px' }}>
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
              Quality Assurance
            </h1>

            {/* Subtitle in Navy-Blue Tone */}
            <p
              style={{
                fontSize: '18px',
                fontWeight: '400',
                color: '#2F5D96',
                fontFamily: 'var(--font-body)',
                marginBottom: '6px',
                letterSpacing: '-0.2px',
              }}
            >
              Quality You Can Trade With Confidence
            </p>

            {/* 5 Quality Process Items Row */}
            <QualityProcess
              steps={qualityProcessSteps}
              loading={isLoading}
              onItemClick={() => openModal('quote')}
            />

            {/* Our Quality Process CTA Button */}
            <button
              onClick={() => openModal('quote')}
              className="quality-cta-btn"
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
              <span>Our Quality Process</span>
              <ArrowRight size={18} strokeWidth={2.5} color="#E8A52A" />
            </button>
          </div>

          {/* Right Hero Image Container */}
          <div
            className="quality-hero-image-container"
            style={{
              flex: '0 0 38%',
              maxWidth: '430px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/quality-assurance-hero.jpg"
              alt="Quality Assurance & Scientific Inspection"
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

        {/* 3. Main Dark Navy Assurance Banner */}
        <QualityAssuranceBanner items={qualityAssuranceBannerItems} />

        {/* 4. Bottom 5 Supporting Capabilities Section */}
        <SupportingFeatures features={supportingCapabilities} />
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
