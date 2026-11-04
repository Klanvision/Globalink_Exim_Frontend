import { useLoading } from '../context/LoadingContext';
import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { BuyerCategoriesRow } from '../components/buyers/BuyerCategoriesRow';
import { BuyerActionCards } from '../components/buyers/BuyerActionCards';
import { BuyerStatsBanner } from '../components/buyers/BuyerStatsBanner';
import { BuyerTrustRow } from '../components/buyers/BuyerTrustRow';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  buyerCategories,
  buyerActionCards,
  buyerStatistics,
  buyerTrustStatements,
} from '../data/buyersData';

export const Buyers = ({ onNavigate }) => {
  const { isLoading } = useLoading();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleActionClick = (action) => {
    if (action === 'rfq' || action === 'register') {
      openModal('quote');
    }
  };

  return (
    <div
      className="buyers-page-root"
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
        currentRoute="buyers"
        onNavigate={onNavigate}
      />

      <main>
        {/* =========================================================================
            GLOBAL BUYERS SECTION (Screen 11)
            ========================================================================= */}
        <section
          id="buyers-section"
          style={{
            position: 'relative',
            padding: '36px 28px 24px 28px',
            background: '#FAFBFD',
          }}
        >
          {/* Top Gold Label with decorative lines */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '10px',
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
                color: '#D99A1E',
                letterSpacing: '0.4px',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
              }}
            >
              CONNECTING MARKETS. CREATING OPPORTUNITIES.
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
              fontSize: '52px',
              fontWeight: '700',
              color: '#082653',
              lineHeight: '1.08',
              letterSpacing: '-0.5px',
              textAlign: 'center',
              marginBottom: '8px',
            }}
          >
            Global Buyers
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '20px',
              fontWeight: '400',
              color: '#40516D',
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              marginBottom: '12px',
            }}
          >
            Connecting Suppliers With Global Buyers
          </p>

          {/* Centered Gold Divider */}
          <div
            style={{
              width: '65px',
              height: '3px',
              backgroundColor: '#E8A52A',
              margin: '0 auto 20px auto',
              borderRadius: '2px',
            }}
          />

          {/* 6 Buyer Categories Row */}
          <BuyerCategoriesRow
            categories={buyerCategories}
            loading={isLoading}
            onCategoryClick={() => openModal('quote')}
          />

          {/* 2 Large Gold Action Cards */}
          <BuyerActionCards
            actions={buyerActionCards}
            onActionClick={handleActionClick}
          />

          {/* Dark Navy Statistics Banner */}
          <BuyerStatsBanner statistics={buyerStatistics} />

          {/* Bottom Clean White Trust Statements Row */}
          <BuyerTrustRow statements={buyerTrustStatements} />
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
