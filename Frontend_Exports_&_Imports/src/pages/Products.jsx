import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { ProductTrustRow } from '../components/portfolio/ProductTrustRow';
import { ProductCategoryGrid } from '../components/portfolio/ProductCategoryGrid';
import { PortfolioStatsBanner } from '../components/portfolio/PortfolioStatsBanner';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  portfolioTrustFeatures,
  globalProductCategories,
  portfolioStatistics,
} from '../data/globalPortfolioData';
import { ArrowRight } from 'lucide-react';

export const Products = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div
      className="products-page-root"
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
        currentRoute="products"
        onNavigate={onNavigate}
      />

      <main>
        {/* =========================================================================
            GLOBAL PRODUCT PORTFOLIO SECTION (Screen 10)
            ========================================================================= */}
        <section
          id="global-portfolio-section"
          style={{
            position: 'relative',
            padding: '36px 28px 30px 28px',
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
                width: '45px',
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
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
              }}
            >
              PREMIUM QUALITY. TRUSTED GLOBALLY
            </span>
            <div
              style={{
                width: '45px',
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
              fontSize: '44px',
              fontWeight: '700',
              color: '#082653',
              lineHeight: '1.1',
              letterSpacing: '-0.5px',
              textAlign: 'center',
              marginBottom: '12px',
            }}
          >
            Explore Our Global Product Portfolio
          </h1>

          {/* Subtitle Description */}
          <p
            style={{
              maxWidth: '840px',
              margin: '0 auto 16px auto',
              fontSize: '15.5px',
              lineHeight: '1.45',
              fontWeight: '400',
              color: '#40516D',
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
            }}
          >
            Discover a wide range of high-quality products across multiple categories, sourced from verified suppliers and delivered with reliability.
          </p>

          {/* 5-Item Trust Features Row */}
          <ProductTrustRow items={portfolioTrustFeatures} />

          {/* 4 × 2 Product Category Grid */}
          <ProductCategoryGrid
            categories={globalProductCategories}
            onCategoryClick={() => openModal('quote')}
          />

          {/* Centered View All Products CTA */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '22px', marginBottom: '14px' }}>
            <button
              onClick={() => openModal('quote')}
              className="portfolio-cta-btn"
              style={{
                width: '290px',
                height: '48px',
                backgroundColor: '#082653',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 22px',
                boxShadow: '0 4px 14px rgba(8, 38, 83, 0.22)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: 'none',
              }}
            >
              <span>View All Products</span>
              <ArrowRight size={18} strokeWidth={2.5} color="#F5B73A" />
            </button>
          </div>

          {/* Bottom Dark Navy Statistics Banner */}
          <PortfolioStatsBanner statistics={portfolioStatistics} />
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
