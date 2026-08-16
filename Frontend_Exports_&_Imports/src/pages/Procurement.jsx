import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { ProcessFlow } from '../components/procurement/ProcessFlow';
import { BenefitSection } from '../components/procurement/BenefitSection';
import { ProcurementMessage } from '../components/procurement/ProcurementMessage';
import { ProcurementStats } from '../components/procurement/ProcurementStats';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import { procurementSteps, procurementBenefits, procurementStats } from '../data/procurementData';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Procurement = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div
      className="procurement-page-root"
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '100vh',
        background: '#FFFFFF',
        position: 'relative',
        boxShadow: '0 0 40px rgba(0,0,0,0.12)',
        overflowX: 'clip',
      }}
    >
      {/* 1. Global Link Shared Navigation Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="procurement"
        onNavigate={onNavigate}
      />

      {/* 2. Main Page Hero & Content with Logistics Background */}
      <main
        style={{
          position: 'relative',
          backgroundImage: "url('/procurement-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Soft White Readability Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.85) 100%)',
            backdropFilter: 'blur(1px)',
            zIndex: 1,
          }}
        />

        {/* Content Container on top of overlay */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '38px 24px 0 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Main Heading */}
          <h1
            style={{
              fontSize: '58px',
              fontWeight: '800',
              color: '#082653',
              textAlign: 'center',
              lineHeight: '1.05',
              letterSpacing: '-1px',
              fontFamily: 'var(--font-body)',
              marginBottom: '6px',
            }}
          >
            Procurement Solutions
          </h1>

          {/* Subtitle with Navy & Gold Styling */}
          <div
            style={{
              fontSize: '28px',
              fontWeight: '500',
              textAlign: 'center',
              color: '#082653',
              fontFamily: 'var(--font-body)',
              marginBottom: '10px',
              letterSpacing: '-0.2px',
            }}
          >
            <span>Source </span>
            <span style={{ color: '#E3A026', fontWeight: '600' }}>Smarter.</span>
            <span> Buy </span>
            <span style={{ color: '#E3A026', fontWeight: '600' }}>Better.</span>
          </div>

          {/* Subtle Decorative Gold Line & Downward Chevron */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '32px',
            }}
          >
            <div style={{ width: '48px', height: '1.5px', backgroundColor: '#E3A026' }} />
            <ChevronDown size={14} color="#E3A026" strokeWidth={2.5} />
            <div style={{ width: '48px', height: '1.5px', backgroundColor: '#E3A026' }} />
          </div>

          {/* 3. 9-Step Horizontal Procurement Process Flow */}
          <div style={{ width: '100%', maxWidth: '1160px', marginBottom: '28px' }}>
            <ProcessFlow steps={procurementSteps} />
          </div>

          {/* 4. Start Procurement CTA Button */}
          <button
            onClick={() => openModal('quote')}
            className="procurement-cta-btn"
            style={{
              width: '325px',
              height: '50px',
              backgroundColor: '#F2A922',
              color: '#082653',
              borderRadius: '7px',
              fontSize: '20px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              boxShadow: '0 4px 16px rgba(242, 169, 34, 0.35)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              border: 'none',
            }}
          >
            <span>Start Procurement</span>
            <ArrowRight size={22} strokeWidth={2.5} color="#082653" />
          </button>

          {/* 5. Why Choose Our Procurement Solutions Section (6 Cards) */}
          <BenefitSection benefits={procurementBenefits} />

          {/* 6. Procurement Message Bar */}
          <ProcurementMessage />
        </div>

        {/* 7. Bottom Dark Navy Statistics Banner */}
        <ProcurementStats stats={procurementStats} />
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
