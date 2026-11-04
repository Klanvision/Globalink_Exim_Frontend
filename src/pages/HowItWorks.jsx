import { useLoading } from '../context/LoadingContext';
import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { ProcessFlow } from '../components/process/ProcessFlow';
import { ProcessTrustBanner } from '../components/process/ProcessTrustBanner';
import { ProcessStatisticsRow } from '../components/process/ProcessStatisticsRow';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  processSteps,
  trustBannerItems,
  processStatistics,
} from '../data/processData';
import { ArrowRight } from 'lucide-react';

export const HowItWorks = ({ onNavigate }) => {
  const { isLoading } = useLoading();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div
      className="how-it-works-root"
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
        currentRoute="how-it-works"
        onNavigate={onNavigate}
      />

      {/* 2. Main Page Hero & Process Overview */}
      <main
        style={{
          position: 'relative',
          paddingTop: '36px',
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

        {/* Heading & Subtitle Header */}
        <div
          style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            marginBottom: '18px',
            padding: '0 20px',
          }}
        >
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '44px',
              fontWeight: '700',
              color: '#082653',
              lineHeight: '1.08',
              letterSpacing: '-0.5px',
              marginBottom: '6px',
            }}
          >
            How Global Link Works
          </h1>

          <p
            style={{
              fontSize: '18px',
              fontWeight: '400',
              color: '#082653',
              fontFamily: 'var(--font-body)',
              marginBottom: '10px',
              letterSpacing: '-0.2px',
            }}
          >
            Simple Process. Complete Transparency.{' '}
            <span style={{ color: '#E8A52A', fontWeight: '500' }}>
              On-Time Delivery.
            </span>
          </p>

          {/* Centered Decorative Gold Line */}
          <div
            style={{
              width: '95px',
              height: '3px',
              backgroundColor: '#E8A52A',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* Hero Top Wrapper: Left (6 Process Steps + CTA) & Right (Global Logistics Visual) */}
        <div
          className="process-hero-wrapper"
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 1,
            padding: '0 24px',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          {/* Left Process Area */}
          <div style={{ flex: '1 1 65%', maxWidth: '760px' }}>
            <ProcessFlow
              steps={processSteps}
              loading={isLoading}
              onStepClick={() => openModal('quote')}
            />

            {/* Centered Learn More About Our Process CTA Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <button
                onClick={() => openModal('quote')}
                className="process-cta-btn"
                style={{
                  width: '380px',
                  height: '48px',
                  backgroundColor: '#082653',
                  borderRadius: '9px',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 24px',
                  boxShadow: '0 4px 14px rgba(8, 38, 83, 0.22)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: 'none',
                }}
              >
                <span>Learn More About Our Process</span>
                <ArrowRight size={18} strokeWidth={2.5} color="#E8A52A" />
              </button>
            </div>
          </div>

          {/* Right Hero Image Container */}
          <div
            className="process-hero-image-container"
            style={{
              flex: '0 0 35%',
              maxWidth: '390px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/how-it-works-hero.jpg"
              alt="How Global Link Works - Process & Multi-Modal Logistics"
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

        {/* 3. Dark Navy Trust Banner */}
        <ProcessTrustBanner items={trustBannerItems} />

        {/* 4. Bottom Clean White Statistics Row */}
        <ProcessStatisticsRow statistics={processStatistics} />
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
