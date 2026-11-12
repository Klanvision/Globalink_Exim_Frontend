import { useLoading } from '../context/LoadingContext';
import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import { globalServices } from '../data/servicesData';
import { ArrowRight } from 'lucide-react';

export const Services = ({ onNavigate }) => {
  const { isLoading } = useLoading();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCardClick = (service) => {
    if (service.route && onNavigate) {
      onNavigate(service.route);
    } else {
      openModal('quote');
    }
  };

  return (
    <div
      className="services-page-root"
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
        currentRoute="services"
        onNavigate={onNavigate}
      />

      {/* 2. Main Page Hero & Services Overview */}
      <main
        style={{
          position: 'relative',
          paddingTop: '38px',
          paddingBottom: '40px',
          paddingLeft: 'var(--section-horizontal-padding, 132px)',
          paddingRight: 'var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF8F0 100%)',
        }}
      >
        {/* Top Eyebrow Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '5px 14px',
              borderRadius: '999px',
              background: 'rgba(255, 111, 0, 0.08)',
              border: '1px solid rgba(255, 111, 0, 0.25)',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: '700',
                color: '#FF6F00',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
              }}
            >
              FULL-SPECTRUM TRADE CAPABILITIES
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1
          style={{
            fontSize: 'clamp(28px, 2.5vw, 40px)',
            fontWeight: '800',
            color: '#0F172A',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '6px',
          }}
        >
          End-to-End <span style={{ color: '#FF6F00' }}>Global Trade Solutions</span>
        </h1>

        {/* Glowing Gradient Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #FF6F00)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #FF6F00, transparent)' }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '15px',
            fontWeight: '400',
            color: '#475569',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '20px',
          }}
        >
          Integrated Services. Global Reach. Seamless Trade.
        </p>

        {/* Service Cards Area (Full-Width) */}
        <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
          <ServiceGrid
            services={globalServices}
            loading={isLoading}
            onCardClick={handleCardClick}
          />

          {/* Centered Explore All Services CTA Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <button
              onClick={() => openModal('quote')}
              style={{
                width: '290px',
                height: '46px',
                background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
                borderRadius: '999px',
                color: '#FFFFFF',
                fontSize: '14.5px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: '0 4px 16px rgba(255, 111, 0, 0.28)',
                cursor: 'pointer',
                border: 'none',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.2s ease',
              }}
            >
              <span>Explore All Services</span>
              <ArrowRight size={18} strokeWidth={2.5} color="#FFFFFF" />
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
