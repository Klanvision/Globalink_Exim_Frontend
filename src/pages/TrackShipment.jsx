import React, { useState } from 'react';
import { SearchX, AlertCircle, LifeBuoy, X, ArrowRight, ShieldAlert } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import { CorporateTrackingHero } from '../components/tracking/CorporateTrackingHero';
import { CorporateTrackSearchCard } from '../components/tracking/CorporateTrackSearchCard';
import { CorporateShipmentDetails } from '../components/tracking/CorporateShipmentDetails';
import { CorporateShipmentDocuments } from '../components/tracking/CorporateShipmentDocuments';
import { CorporateTrackingEnterpriseSection } from '../components/tracking/CorporateTrackingEnterpriseSection';
import { CorporateSupportModal } from '../components/tracking/CorporateSupportModal';
import {
  defaultShipment,
  mockShipmentsDatabase,
  generateMockShipment,
} from '../data/shipmentTrackingData';

export const TrackShipment = ({ onNavigate }) => {
  const [hasSearched, setHasSearched] = useState(false);
  const [currentShipment, setCurrentShipment] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleSearch = (trackingCode, filterType) => {
    const clean = (trackingCode || '').trim();
    if (!clean) {
      setHasSearched(false);
      setCurrentShipment(null);
      setSearchError(null);
      return;
    }

    setIsLoading(true);
    setSearchError(null);

    // Simulate real-time tracking lookup with corporate telemetry validation
    setTimeout(() => {
      const result = generateMockShipment(clean);
      if (result) {
        setCurrentShipment(result);
        setHasSearched(true);
        setSearchError(null);
      } else {
        // Wrong / unverified ID: Trigger corporate diagnostic error state
        setCurrentShipment(null);
        setHasSearched(false);
        setSearchError({
          query: clean,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });
      }
      setIsLoading(false);
    }, 450);
  };

  const handleSelectExample = (exampleCode) => {
    setIsLoading(true);
    setSearchError(null);
    setTimeout(() => {
      const match = mockShipmentsDatabase[exampleCode] || generateMockShipment(exampleCode);
      setCurrentShipment(match);
      setHasSearched(true);
      setIsLoading(false);
    }, 300);
  };

  const handleResetSearch = () => {
    setHasSearched(false);
    setCurrentShipment(null);
    setSearchError(null);
  };

  return (
    <div
      className="track-shipment-page-root"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#F8FAFC',
        position: 'relative',
        overflowX: 'clip',
      }}
    >
      {/* 1. Global Navigation Header */}
      <Header
        onTrackClick={() => onNavigate && onNavigate('track-shipment')}
        onQuoteClick={() => setQuoteModalOpen(true)}
        currentRoute="track-shipment"
        onNavigate={onNavigate}
      />

      {/* 2. Full-Width End-to-End Hero Banner (Edge-to-Edge) like Home page */}
      <CorporateTrackingHero onNavigate={onNavigate} />

      {/* 3. Main Tracking View matching Reference Design */}
      <main
        style={{
          width: '100%',
          padding: '0 var(--section-horizontal-padding, 132px) 60px var(--section-horizontal-padding, 132px)',
          boxSizing: 'border-box',
        }}
      >
        {/* Card 1: Track Your Cargo (Search Form + Conditional 4-Stage Progress Stepper) */}
        <div style={{ marginTop: '-30px', position: 'relative', zIndex: 3 }}>
          <CorporateTrackSearchCard
            shipment={currentShipment}
            onSearch={handleSearch}
            onSelectExample={handleSelectExample}
            isLoading={isLoading}
            hasSearched={hasSearched}
            onResetSearch={handleResetSearch}
          />
        </div>

        {/* Scoped Keyframes for Corporate Error Animation */}
        <style>{`
          @keyframes kpl-error-slide-down {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes kpl-error-sonar {
            0% {
              transform: scale(0.95);
              opacity: 0.8;
            }
            100% {
              transform: scale(1.45);
              opacity: 0;
            }
          }
        `}</style>

        {/* Corporate Level Diagnostic Error Card when wrong / unverified ID is supplied */}
        {searchError && (
          <div
            className="kpl-corporate-error-card"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid #FCA5A5',
              boxShadow: '0 8px 30px -4px rgba(239, 68, 68, 0.12), 0 4px 12px rgba(15, 23, 42, 0.04)',
              overflow: 'hidden',
              marginTop: '18px',
              marginBottom: '20px',
              animation: 'kpl-error-slide-down 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative',
            }}
          >
            {/* Top Red-Orange Status Bar */}
            <div
              style={{
                height: '4px',
                background: 'linear-gradient(90deg, #DC2626 0%, #EA580C 50%, #DC2626 100%)',
              }}
            />

            <div style={{ padding: '24px 28px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '18px',
                  flexWrap: 'wrap',
                }}
              >
                {/* Glowing Radar Error Badge */}
                <div
                  style={{
                    position: 'relative',
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#FEF2F2',
                    border: '1.5px solid #FCA5A5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#DC2626',
                    flexShrink: 0,
                    boxShadow: '0 2px 10px rgba(220, 38, 38, 0.15)',
                  }}
                >
                  <SearchX size={24} strokeWidth={2.4} />
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-4px',
                      borderRadius: '16px',
                      border: '1.5px solid rgba(239, 68, 68, 0.35)',
                      animation: 'kpl-error-sonar 2.4s ease-out infinite',
                      pointerEvents: 'none',
                    }}
                  />
                </div>

                {/* Error Details Content */}
                <div style={{ flex: '1 1 300px' }}>
                  {/* Status Pill Tag */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '3px 9px',
                      borderRadius: '6px',
                      backgroundColor: '#FEF2F2',
                      border: '1px solid #FECACA',
                      color: '#DC2626',
                      fontSize: '11px',
                      fontWeight: '800',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#DC2626',
                      }}
                    />
                    <span>EDI MANIFEST NOT FOUND · STATUS 404</span>
                  </div>

                  {/* Main Title */}
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: '800',
                      color: '#0F172A',
                      margin: '0 0 6px 0',
                      letterSpacing: '-0.02em',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    No Active Cargo Found for Reference:{' '}
                    <span style={{ color: '#DC2626', fontFamily: 'monospace' }}>
                      "{searchError.query}"
                    </span>
                  </h3>

                  {/* Descriptive Message */}
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#475569',
                      lineHeight: '1.5',
                      margin: '0 0 16px 0',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Our global trade telemetry network searched multimodal AIS satellite tracking, airline cargo manifests, and port terminal gateways, but found no active record matching this identifier.
                  </p>

                  {/* Diagnostic Summary Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '10px',
                      backgroundColor: '#F8FAFC',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid #E2E8F0',
                      marginBottom: '18px',
                      fontSize: '12.5px',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          color: '#64748B',
                          display: 'block',
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          fontWeight: '600',
                        }}
                      >
                        Queried Reference
                      </span>
                      <strong style={{ color: '#0F172A', fontFamily: 'monospace' }}>
                        {searchError.query}
                      </strong>
                    </div>
                    <div>
                      <span
                        style={{
                          color: '#64748B',
                          display: 'block',
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          fontWeight: '600',
                        }}
                      >
                        Search Timestamp
                      </span>
                      <strong style={{ color: '#0F172A' }}>
                        {searchError.timestamp} UTC
                      </strong>
                    </div>
                    <div>
                      <span
                        style={{
                          color: '#64748B',
                          display: 'block',
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          fontWeight: '600',
                        }}
                      >
                        Gateways Checked
                      </span>
                      <strong style={{ color: '#0F172A' }}>
                        Port EDI · Airline AWB · Road LR
                      </strong>
                    </div>
                  </div>

                  {/* Action Guidance & Quick Test Pills */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px',
                    }}
                  >
                    {/* Suggested Valid IDs Quick Load */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          color: '#64748B',
                          fontWeight: '600',
                        }}
                      >
                        Try Verified Test ID:
                      </span>
                      <button
                        type="button"
                        onClick={() => handleSelectExample('KPL-EXP-2026-008421')}
                        style={{
                          padding: '5px 11px',
                          backgroundColor: '#FFF7ED',
                          border: '1px solid #FED7AA',
                          borderRadius: '6px',
                          color: '#C2410C',
                          fontSize: '12px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        Ocean (In Transit)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSelectExample('KPL-AIR-2026-119402')}
                        style={{
                          padding: '5px 11px',
                          backgroundColor: '#FFF7ED',
                          border: '1px solid #FED7AA',
                          borderRadius: '6px',
                          color: '#C2410C',
                          fontSize: '12px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        Air (Delivered)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSelectExample('KPL-TRK-2026-552910')}
                        style={{
                          padding: '5px 11px',
                          backgroundColor: '#FFF7ED',
                          border: '1px solid #FED7AA',
                          borderRadius: '6px',
                          color: '#C2410C',
                          fontSize: '12px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        Inland (Booking Confirmed)
                      </button>
                    </div>

                    {/* Support Desk Action Button */}
                    <button
                      type="button"
                      onClick={() => setSupportModalOpen(true)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#EA580C',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 8px rgba(234, 88, 12, 0.25)',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#C2410C';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#EA580C';
                      }}
                    >
                      <LifeBuoy size={14} />
                      <span>Contact 24/7 Operations Desk</span>
                    </button>
                  </div>
                </div>

                {/* Dismiss Button */}
                <button
                  type="button"
                  onClick={() => setSearchError(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94A3B8',
                    cursor: 'pointer',
                    padding: '4px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title="Dismiss error"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* When user has searched: Show Shipment Details & Shipment Documents */}
        {hasSearched && currentShipment && (
          <div
            className="tracking-columns-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1.15fr)',
              gap: '20px',
              alignItems: 'stretch',
              marginTop: '20px',
              marginBottom: '28px',
              animation: 'kpl-fade-slide-up 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Left Column: Shipment Details Card */}
            <div style={{ width: '100%', display: 'flex' }}>
              <CorporateShipmentDetails shipment={currentShipment} />
            </div>

            {/* Right Column: Shipment Documents Card */}
            <div style={{ width: '100%', display: 'flex' }}>
              <CorporateShipmentDocuments
                shipment={currentShipment}
                onContactSupport={() => setSupportModalOpen(true)}
              />
            </div>
          </div>
        )}

        {/* Enterprise Sections: Enterprise Visibility, Our Shipment Services, FAQ, Need Assistance
            Always visible below (directly under Search Box before searching; under Tracking Results after searching) */}
        <div style={{ marginTop: hasSearched ? '0' : '20px' }}>
          <CorporateTrackingEnterpriseSection
            onContactSupport={() => setSupportModalOpen(true)}
          />
        </div>
      </main>

      {/* 3. Global Footer */}
      <Footer onNavigate={onNavigate} />

      {/* 4. Modals */}
      <CorporateSupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
        shipmentId={currentShipment?.trackingId || 'GENERAL-SUPPORT'}
      />

      <TrackModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultType="quote"
      />
    </div>
  );
};
