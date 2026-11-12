import { useLoading } from '../context/LoadingContext';
import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { TestimonialCard } from '../components/trustedbusinesses/TestimonialCard';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  testimonialsData,
} from '../data/trustedBusinessesData';

export const TrustedBusinesses = ({ onNavigate }) => {
  const { isLoading } = useLoading();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');
  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div
      className="trusted-businesses-page-root"
      style={{
        width: '100%',
        maxWidth: '100%',
        margin: '0',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #020F2D 0%, #03183B 52%, #02132F 100%)',
        position: 'relative',
        boxShadow: '0 0 40px rgba(0,0,0,0.30)',
        overflowX: 'clip',
      }}
    >
      {/* 1. Shared Global Link Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="trusted-businesses"
        onNavigate={onNavigate}
      />

      <main>
        {/* =========================================================================
            TRUSTED BY BUSINESSES WORLDWIDE SECTION (Screen 16)
            ========================================================================= */}
        <section
          id="trusted-businesses-section"
          style={{
            position: 'relative',
            padding: '38px var(--section-horizontal-padding, 132px) 28px var(--section-horizontal-padding, 132px)',
            background: 'linear-gradient(180deg, #020F2D 0%, #03183B 52%, #02132F 100%)',
          }}
        >
          {/* Top Gold Label with decorative lines */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '6px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '2px',
                backgroundColor: '#F2B52F',
                borderRadius: '1px',
              }}
            />
            <span
              style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#F2B52F',
                letterSpacing: '0.4px',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
              }}
            >
              TRUSTED BY BUSINESSES WORLDWIDE
            </span>
            <div
              style={{
                width: '32px',
                height: '2px',
                backgroundColor: '#F2B52F',
                borderRadius: '1px',
              }}
            />
          </div>

          {/* Main Serif Heading */}
          <h1
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '30px',
              fontWeight: '700',
              color: '#FFFFFF',
              lineHeight: '1.1',
              letterSpacing: '-0.3px',
              textAlign: 'center',
              marginBottom: '4px',
            }}
          >
            Trusted by Businesses Worldwide
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '13.5px',
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 0.88)',
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              marginBottom: '8px',
            }}
          >
            Real partnerships. Real results. Real trust.
          </p>

          {/* Centered Gold Underline */}
          <div
            style={{
              width: '42px',
              height: '2.5px',
              backgroundColor: '#F2B52F',
              margin: '0 auto 14px auto',
              borderRadius: '1.5px',
            }}
          />

          {/* 3-Comment Auto-Moving Testimonials Carousel */}
          <TestimonialCard
            testimonials={testimonialsData}
            loading={isLoading}
            autoPlay={true}
          />
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
