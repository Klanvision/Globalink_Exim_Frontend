import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { ProductCard } from '../components/products/ProductCard';
import { ProductTrustBar } from '../components/products/ProductTrustBar';
import { DarkStatsBanner } from '../components/products/DarkStatsBanner';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import { featuredProducts } from '../data/productsData';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const FeaturedProducts = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('track');
  const [productsList, setProductsList] = useState(featuredProducts);

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  // Carousel shift handler
  const handleCarouselNext = () => {
    setProductsList((prev) => {
      const next = [...prev];
      const first = next.shift();
      next.push(first);
      return next;
    });
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '100vh',
        background: '#FAF8F3',
        position: 'relative',
        boxShadow: '0 0 40px rgba(0,0,0,0.1)',
        overflowX: 'clip'
      }}
    >
      {/* 1. Navigation Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="products"
        onNavigate={onNavigate}
      />

      {/* Main Page Canvas */}
      <main
        style={{
          position: 'relative',
          padding: '35px 28px 24px 28px',
          background: '#FAF8F3'
        }}
      >
        {/* Top Decorative Gold Label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '6px'
          }}
        >
          <div style={{ width: '40px', height: '1.5px', backgroundColor: '#D99A20' }} />
          <span
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#D99A20',
              letterSpacing: '0.04em',
              fontFamily: 'var(--font-body)'
            }}
          >
            QUALITY PRODUCTS. GLOBAL REACH.
          </span>
          <div style={{ width: '40px', height: '1.5px', backgroundColor: '#D99A20' }} />
        </div>

        {/* Main Page Heading */}
        <h1
          style={{
            fontSize: '58px',
            fontWeight: '800',
            color: '#082653',
            textAlign: 'center',
            lineHeight: '1.05',
            letterSpacing: '-1px',
            fontFamily: 'var(--font-body)',
            marginBottom: '8px'
          }}
        >
          Featured Products
        </h1>

        {/* Secondary Tagline with Gold Circular Dots */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            fontSize: '19px',
            fontWeight: '500',
            color: '#082653',
            marginBottom: '32px',
            flexWrap: 'wrap'
          }}
        >
          <span>Handpicked Quality</span>
          <span style={{ color: '#D99A20', fontSize: '14px' }}>•</span>
          <span>Trusted Suppliers</span>
          <span style={{ color: '#D99A20', fontSize: '14px' }}>•</span>
          <span>Global Delivery</span>
        </div>

        {/* 4 Product Cards Grid with Right Carousel Arrow */}
        <div style={{ position: 'relative' }}>
          <div
            className="featured-products-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              position: 'relative'
            }}
          >
            {productsList.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={() => openModal('quote')}
              />
            ))}
          </div>

          {/* Right Side Circular Carousel Arrow Button */}
          <button
            onClick={handleCarouselNext}
            aria-label="Next Products"
            style={{
              position: 'absolute',
              right: '-24px',
              top: '42%',
              transform: 'translateY(-50%)',
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid #DDE1E6',
              color: '#D99A20',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 20px rgba(8, 38, 83, 0.15)',
              zIndex: 10,
              cursor: 'pointer',
              transition: 'transform 0.2s ease, background 0.2s ease'
            }}
            className="carousel-arrow"
          >
            <ChevronRight size={26} strokeWidth={2.5} />
          </button>
        </div>

        {/* Centered Explore All Products Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
          <button
            onClick={() => openModal('quote')}
            style={{
              width: '345px',
              height: '48px',
              background: '#102D5A',
              color: '#FFFFFF',
              borderRadius: '8px',
              fontSize: '19px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              boxShadow: '0 4px 16px rgba(16, 45, 90, 0.25)',
              transition: 'all 0.2s ease'
            }}
          >
            <span>Explore All Products</span>
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Product Trust Section */}
        <ProductTrustBar />

        {/* Dark Navy Statistics Banner */}
        <DarkStatsBanner />
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
