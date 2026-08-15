import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { ServicesBenefitsBanner } from '../components/services/ServicesBenefitsBanner';
import { ServicesStatisticsRow } from '../components/services/ServicesStatisticsRow';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  globalServices,
  serviceBenefits,
  serviceStatistics,
} from '../data/servicesData';
import { ArrowRight } from 'lucide-react';

export const Services = ({ onNavigate }) => {
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
        currentRoute="services"
        onNavigate={onNavigate}
      />

      {/* 2. Main Page Hero & Services Overview (Claymorphism) */}
      <main
        style={{
          position: 'relative',
          paddingTop: '38px',
          paddingBottom: '32px',
          background: 'linear-gradient(145deg, #051A3B 0%, #020F28 100%)',
        }}
      >
        {/* Subtle Ambient Clay Top Highlight */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '120px',
            background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.06) 0%, transparent 70%)',
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
            marginBottom: '20px',
            padding: '0 20px',
          }}
        >
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '38px',
              fontWeight: '700',
              color: '#FFFFFF',
              lineHeight: '1.1',
              letterSpacing: '-0.4px',
              marginBottom: '6px',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
            }}
          >
            End-to-End Global Trade Solutions
          </h1>

          <p
            style={{
              fontSize: '15px',
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 0.88)',
              fontFamily: 'var(--font-body)',
              marginBottom: '10px',
            }}
          >
            Integrated Services. Global Reach. Seamless Trade.
          </p>

          {/* Centered Decorative 3D Gold Clay Pill */}
          <div
            style={{
              width: '64px',
              height: '5px',
              background: 'linear-gradient(145deg, #FFC94A 0%, #DE971B 100%)',
              boxShadow: 'inset 1px 1px 2px rgba(255, 255, 255, 0.6), 0 2px 6px rgba(222, 151, 27, 0.4)',
              margin: '0 auto',
              borderRadius: '3px',
            }}
          />
        </div>

        {/* Hero Top Wrapper: Left (5x2 Service Grid + CTA) & Right (Global Logistics Visual) */}
        <div
          className="services-hero-wrapper"
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 1,
            padding: '0 28px',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          {/* Left Service Cards Area */}
          <div style={{ flex: '1 1 65%', maxWidth: '750px' }}>
            <ServiceGrid
              services={globalServices}
              onCardClick={handleCardClick}
            />

            {/* Centered Explore All Services 3D Clay CTA Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <button
                onClick={() => openModal('quote')}
                className="clay-cta-btn"
                style={{
                  width: '320px',
                  height: '46px',
                  background: 'linear-gradient(145deg, #FFC94A 0%, #DE971B 100%)',
                  borderRadius: '16px',
                  color: '#03132D',
                  fontSize: '14px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 22px',
                  boxShadow: 'inset 2.5px 2.5px 5px rgba(255, 255, 255, 0.6), inset -3px -3px 6px rgba(120, 70, 0, 0.5), 0 10px 24px rgba(222, 151, 27, 0.40)',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  border: 'none',
                  fontFamily: 'var(--font-body)',
                }}
              >
                <span>Explore All Services</span>
                <ArrowRight size={18} strokeWidth={2.5} color="#03132D" />
              </button>
            </div>
          </div>

          {/* Right Hero Image Container (3D Clay Pod) */}
          <div
            className="services-hero-image-container"
            style={{
              flex: '0 0 35%',
              maxWidth: '390px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              background: 'linear-gradient(145deg, #092B5C 0%, #041738 100%)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: 'inset 4px 4px 8px rgba(255, 255, 255, 0.12), inset -5px -5px 12px rgba(0, 0, 0, 0.65), 0 16px 36px rgba(0, 0, 0, 0.45)',
            }}
          >
            <img
              src="/global-trade-hero.jpg"
              alt="Global Multi-Modal Logistics & Trade Solutions"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '16px',
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.35)',
              }}
            />
          </div>
        </div>

        {/* 3. 3D Clay Benefits Banner */}
        <ServicesBenefitsBanner benefits={serviceBenefits} />

        {/* 4. Bottom 3D Clay Statistics Row */}
        <ServicesStatisticsRow statistics={serviceStatistics} />
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
