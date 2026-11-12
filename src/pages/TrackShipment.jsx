import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { TrackingForm } from '../components/tracking/TrackingForm';
import { TrackingTimeline } from '../components/tracking/TrackingTimeline';
import { WarehousingCapabilities } from '../components/tracking/WarehousingCapabilities';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  trackingTimelineStages,
  warehousingCapabilities,
} from '../data/trackingWarehousingData';
import { ArrowRight } from 'lucide-react';

export const TrackShipment = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('track');
  const [activeStep, setActiveStep] = useState(4);
  const [trackingQuery, setTrackingQuery] = useState('');

  const openModal = (type = 'track') => {
    setModalType(type);
    setModalOpen(true);
  };

  const [isSearching, setIsSearching] = useState(false);

  const handleTrackSubmit = (query) => {
    setTrackingQuery(query);
    setIsSearching(true);
    // Simulate real-time mock tracking update with skeleton loading
    setTimeout(() => {
      setActiveStep(Math.floor(Math.random() * 3) + 4);
      setIsSearching(false);
    }, 450);
  };

  return (
    <div
      className="track-shipment-page-root"
      style={{
        width: '100%',
        maxWidth: '100%',
        margin: '0',
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
        currentRoute="track"
        onNavigate={onNavigate}
      />

      <main>
        {/* =========================================================================
            SECTION 1: TRACK YOUR SHIPMENT (Screen 9 Upper)
            ========================================================================= */}
        <section
          id="tracking-section"
          style={{
            position: 'relative',
            padding: '36px var(--section-horizontal-padding, 132px) 28px var(--section-horizontal-padding, 132px)',
            background: '#FAFBFD',
          }}
        >
          {/* Content Area (Full-Width) */}
          <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
            {/* Left-Aligned Heading */}
            <h1
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '34px',
                fontWeight: '700',
                color: '#0F172A',
                lineHeight: '1.1',
                letterSpacing: '-0.4px',
                marginBottom: '4px',
              }}
            >
              Track Your Shipment
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '15px',
                fontWeight: '400',
                color: '#40516D',
                fontFamily: 'var(--font-body)',
                marginBottom: '2px',
                letterSpacing: '-0.1px',
              }}
            >
              Real-time updates. Complete visibility.
            </p>

            {/* Functional Tracking Search Form */}
            <TrackingForm onTrack={handleTrackSubmit} />

            {/* 7-Stage Horizontal Tracking Timeline */}
            <TrackingTimeline
              stages={trackingTimelineStages}
              activeStep={activeStep}
              loading={isSearching}
            />

            {/* View All Shipments Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '14px' }}>
              <button
                onClick={() => openModal('track')}
                className="view-all-shipments-btn"
                style={{
                  width: '260px',
                  height: '42px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #FF8C00 45%, #E65100 100%)',
                  borderRadius: '7px',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 18px',
                  boxShadow: '0 4px 14px rgba(230, 81, 0, 0.28)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: 'none',
                }}
              >
                <span>View All Shipments</span>
                <ArrowRight size={16} strokeWidth={2.5} color="#E8A52A" />
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: WAREHOUSING & DISTRIBUTION (Screen 9 Lower)
            ========================================================================= */}
        <section
          id="warehousing-section"
          style={{
            position: 'relative',
            padding: '36px var(--section-horizontal-padding, 132px) 30px var(--section-horizontal-padding, 132px)',
            backgroundColor: '#F2F7FC',
            borderTop: '1px solid #DDE3EA',
          }}
        >
          {/* Capabilities Area (Full-Width) */}
          <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
            <h2
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '32px',
                fontWeight: '700',
                color: '#0F172A',
                lineHeight: '1.1',
                letterSpacing: '-0.4px',
                marginBottom: '3px',
              }}
            >
              Warehousing & Distribution
            </h2>

            <p
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#1C5EA8',
                fontFamily: 'var(--font-body)',
                marginBottom: '4px',
                letterSpacing: '-0.1px',
              }}
            >
              Store. Manage. Distribute.
            </p>

            {/* 5 Warehousing Capabilities */}
            <WarehousingCapabilities
              capabilities={warehousingCapabilities}
              onExploreClick={() => openModal('quote')}
            />
          </div>
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
