import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { TrackingForm } from '../components/tracking/TrackingForm';
import { TrackingTimeline } from '../components/tracking/TrackingTimeline';
import { TrackingFeatureCard } from '../components/tracking/TrackingFeatureCard';
import { WarehousingCapabilities } from '../components/tracking/WarehousingCapabilities';
import { WarehouseStatsCard } from '../components/tracking/WarehouseStatsCard';
import { WhyChooseUsBanner } from '../components/tracking/WhyChooseUsBanner';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  trackingTimelineStages,
  trackingFeatures,
  warehousingCapabilities,
  warehouseStats,
  whyChooseUsItems,
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
            padding: '36px 28px 28px 28px',
            background: '#FAFBFD',
          }}
        >
          {/* Top Two-Column Grid: Left Content (Form + Timeline + CTA) & Right Visual (Image + Feature Card) */}
          <div
            className="tracking-hero-grid"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            {/* Left Content Area */}
            <div style={{ flex: '1 1 58%', maxWidth: '680px' }}>
              {/* Left-Aligned Heading */}
              <h1
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '34px',
                  fontWeight: '700',
                  color: '#082653',
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
                    backgroundColor: '#082653',
                    borderRadius: '7px',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 18px',
                    boxShadow: '0 4px 14px rgba(8, 38, 83, 0.2)',
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

            {/* Right Visual & Feature Card Area */}
            <div
              className="tracking-visual-area"
              style={{
                flex: '0 0 32%',
                maxWidth: '330px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src="/track-shipment-hero.jpg"
                alt="Global Shipment Tracking & Multi-Modal Visibility"
                style={{
                  width: '100%',
                  maxHeight: '200px',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  filter: 'drop-shadow(0 6px 16px rgba(8, 38, 83, 0.10))',
                  marginBottom: '8px',
                }}
              />

              {/* 2x2 Feature Card */}
              <TrackingFeatureCard features={trackingFeatures} />
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
            padding: '36px 28px 30px 28px',
            backgroundColor: '#F2F7FC',
            borderTop: '1px solid #DDE3EA',
          }}
        >
          <div
            className="warehousing-main-grid"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            {/* Left Capabilities Area (~52%) */}
            <div style={{ flex: '1 1 52%', maxWidth: '580px' }}>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#082653',
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

            {/* Right Information Panels Area (~48%) */}
            <div
              className="warehousing-info-area"
              style={{
                flex: '0 0 44%',
                maxWidth: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '6px',
              }}
            >
              {/* 4 Warehouse Statistics Card */}
              <WarehouseStatsCard stats={warehouseStats} />

              {/* Why Choose Us? Navy Banner */}
              <WhyChooseUsBanner items={whyChooseUsItems} />
            </div>
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
