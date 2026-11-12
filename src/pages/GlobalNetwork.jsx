import { useLoading } from '../context/LoadingContext';
import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { NetworkMapGraphic } from '../components/network/NetworkMapGraphic';
import { NetworkStatsRow } from '../components/network/NetworkStatsRow';
import { NetworkCtaButton } from '../components/network/NetworkCtaButton';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import { globalNetworkStats } from '../data/globalNetworkData';

export const GlobalNetwork = ({ onNavigate }) => {
  const { isLoading } = useLoading();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div
      className="global-network-page-root"
      style={{
        width: '100%',
        maxWidth: '100%',
        margin: '0',
        minHeight: '100vh',
        background: '#F7FAFE',
        position: 'relative',
        boxShadow: '0 0 40px rgba(0,0,0,0.12)',
        overflowX: 'clip',
      }}
    >
      {/* 1. Shared Global Link Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="network"
        onNavigate={onNavigate}
      />

      <main>
        {/* =========================================================================
            GLOBAL NETWORK SECTION (Screen 13)
            ========================================================================= */}
        <section
          id="global-network-section"
          style={{
            position: 'relative',
            padding: '38px var(--section-horizontal-padding, 132px) 28px var(--section-horizontal-padding, 132px)',
            background: '#F7FAFE',
          }}
        >
          {/* Main Two-Tone Sans-Serif Heading */}
          <h1
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '36px',
              fontWeight: '800',
              lineHeight: '1.1',
              letterSpacing: '-0.5px',
              textAlign: 'center',
              marginBottom: '4px',
            }}
          >
            <span style={{ color: '#0F172A' }}>Global </span>
            <span style={{ color: '#0A4FC7' }}>Network</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '15px',
              fontWeight: '400',
              color: '#586579',
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              marginBottom: '4px',
            }}
          >
            One Network. Multiple Markets.
          </p>

          {/* Large World Network Map Graphic */}
          <NetworkMapGraphic loading={isLoading} />

          {/* 4 Network Statistics */}
          <NetworkStatsRow stats={globalNetworkStats} />

          {/* Explore Our Network CTA Button */}
          <NetworkCtaButton onClick={() => openModal('quote')} />
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
