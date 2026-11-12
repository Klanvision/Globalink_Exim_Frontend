import { useLoading } from '../context/LoadingContext';
import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { CustomsServiceGrid } from '../components/customs/CustomsServiceGrid';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  customsComplianceServices,
} from '../data/customsComplianceData';
import { ArrowRight } from 'lucide-react';

export const CustomsCompliance = ({ onNavigate }) => {
  const { isLoading } = useLoading();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div
      className="customs-page-root"
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

      <main>
        {/* =========================================================================
            CUSTOMS & TRADE COMPLIANCE SECTION (Screen 12)
            ========================================================================= */}
        <section
          id="customs-compliance-section"
          style={{
            position: 'relative',
            padding: '36px var(--section-horizontal-padding, 132px) 24px var(--section-horizontal-padding, 132px)',
            background: '#FAFBFD',
          }}
        >
          {/* Top Gold Label with decorative lines */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '2px',
                backgroundColor: '#E8A52A',
                borderRadius: '1px',
              }}
            />
            <span
              style={{
                fontSize: '13.5px',
                fontWeight: '600',
                color: '#D99A1E',
                letterSpacing: '0.4px',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
              }}
            >
              TRUSTED • COMPLIANT • GLOBAL
            </span>
            <div
              style={{
                width: '32px',
                height: '2px',
                backgroundColor: '#E8A52A',
                borderRadius: '1px',
              }}
            />
          </div>

          {/* Main Serif Heading */}
          <h1
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '34px',
              fontWeight: '700',
              color: '#0F172A',
              lineHeight: '1.1',
              letterSpacing: '-0.4px',
              textAlign: 'center',
              marginBottom: '6px',
            }}
          >
            Customs & Trade Compliance
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '15px',
              fontWeight: '400',
              color: '#40516D',
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              marginBottom: '10px',
            }}
          >
            Simplifying Cross-Border Trade
          </p>

          {/* Centered Gold Divider */}
          <div
            style={{
              width: '45px',
              height: '2.5px',
              backgroundColor: '#E8A52A',
              margin: '0 auto 14px auto',
              borderRadius: '1.5px',
            }}
          />

          {/* 6 Service Categories Grid */}
          <CustomsServiceGrid
            services={customsComplianceServices}
            loading={isLoading}
            onServiceClick={() => openModal('quote')}
          />

          {/* Centered Learn More CTA */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '18px', marginBottom: '6px' }}>
            <button
              onClick={() => openModal('quote')}
              className="customs-cta-btn"
              style={{
                width: '220px',
                height: '44px',
                background: 'linear-gradient(135deg, #FF6F00 0%, #FF8C00 45%, #E65100 100%)',
                borderRadius: '10px',
                color: '#FFFFFF',
                fontSize: '14.5px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
                boxShadow: '0 3px 12px rgba(230, 81, 0, 0.28)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: 'none',
              }}
            >
              <span>Learn More</span>
              <ArrowRight size={18} strokeWidth={2.4} color="#F5B73A" />
            </button>
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
