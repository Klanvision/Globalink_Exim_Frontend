import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { AdvantageGrid } from '../components/whychooseus/AdvantageGrid';
import { WhyChooseUsStatsBanner } from '../components/whychooseus/WhyChooseUsStatsBanner';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  whyChooseUsAdvantages,
  whyChooseUsStats,
} from '../data/whyChooseUsData';

export const WhyBusinessesChooseUs = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div
      className="why-choose-us-page-root"
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #020F2D 0%, #03183B 50%, #061B43 100%)',
        position: 'relative',
        boxShadow: '0 0 40px rgba(0,0,0,0.22)',
        overflowX: 'clip',
      }}
    >
      {/* 1. Shared Global Link Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="why-choose-us"
        onNavigate={onNavigate}
      />

      <main>
        {/* =========================================================================
            WHY BUSINESSES CHOOSE US SECTION (Screen 14)
            ========================================================================= */}
        <section
          id="why-choose-us-section"
          style={{
            position: 'relative',
            padding: '38px 28px 28px 28px',
            background: 'linear-gradient(180deg, #020F2D 0%, #03183B 50%, #061B43 100%)',
          }}
        >
          {/* Top Gold Label with decorative lines */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '2px',
                backgroundColor: '#E8A52A',
                borderRadius: '1px',
              }}
            />
            <span
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#E8A52A',
                letterSpacing: '0.4px',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
              }}
            >
              OUR ADVANTANTAGES
            </span>
            <div
              style={{
                width: '42px',
                height: '2px',
                backgroundColor: '#E8A52A',
                borderRadius: '1px',
              }}
            />
          </div>

          {/* Main Serif Heading */}
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '36px',
              fontWeight: '700',
              color: '#FFFFFF',
              lineHeight: '1.1',
              letterSpacing: '-0.4px',
              textAlign: 'center',
              marginBottom: '6px',
            }}
          >
            Why Businesses Choose Us
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '15px',
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 0.88)',
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              marginBottom: '8px',
            }}
          >
            Delivering value, reliability, and trust every step of the way
          </p>

          {/* 6 Advantages Grid */}
          <AdvantageGrid
            advantages={whyChooseUsAdvantages}
            onAdvantageClick={() => openModal('quote')}
          />

          {/* Bottom Dark Translucent Statistics Banner */}
          <WhyChooseUsStatsBanner stats={whyChooseUsStats} />
        </section>
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
