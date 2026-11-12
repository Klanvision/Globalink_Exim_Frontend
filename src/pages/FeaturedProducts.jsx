import React, { useState } from 'react';
import { useLoading } from '../context/LoadingContext';
import { Header } from '../components/layout/Header';
import { ProductCard } from '../components/products/ProductCard';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import { featuredProducts } from '../data/productsData';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const FeaturedProducts = ({ onNavigate }) => {
  const { isLoading } = useLoading();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('track');
  const [productsList, setProductsList] = useState(featuredProducts);
  const [isRotating, setIsRotating] = useState(false);

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  // Carousel shift handler with real-time skeleton loading
  const handleCarouselNext = () => {
    setIsRotating(true);
    setTimeout(() => {
      setProductsList((prev) => {
        const next = [...prev];
        const first = next.shift();
        next.push(first);
        return next;
      });
      setIsRotating(false);
    }, 280);
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '100%',
        margin: '0',
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
          padding: '35px var(--section-horizontal-padding, 132px) 24px var(--section-horizontal-padding, 132px)',
          background: '#FAF8F3'
        }}
      >
        {/* Top Eyebrow Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '6px 20px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 100%)',
              border: '1.5px solid #FED7AA',
              boxShadow: '0 4px 14px rgba(234, 88, 12, 0.08)',
              cursor: 'default',
            }}
          >
            <span
              style={{
                fontSize: '11.5px',
                fontWeight: '800',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#EA580C',
                fontFamily: 'var(--font-body)'
              }}
            >
              Quality Products. Global Reach.
            </span>
          </div>
        </div>

        {/* Main Page Heading */}
        <h1
          style={{
            fontSize: 'clamp(32px, 3.5vw, 52px)',
            fontWeight: '900',
            color: '#1E293B',
            textAlign: 'center',
            lineHeight: '1.15',
            letterSpacing: '-0.4px',
            fontFamily: 'var(--font-heading)',
            marginBottom: '10px'
          }}
        >
          Featured{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #FF7A00 0%, #FFA800 55%, #FF8C00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
          >
            Products
          </span>
        </h1>

        {/* Subtitle with Glowing Dividers */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '32px',
            flexWrap: 'wrap'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent 0%, #FF8C00 70%, #FFD000 100%)',
              borderRadius: '1px',
            }}
          />
          <span
            style={{
              fontSize: '16px',
              fontWeight: '500',
              color: '#475569',
              fontFamily: 'var(--font-body)',
              letterSpacing: '-0.1px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span>Handpicked Quality</span>
            <span style={{ color: '#EA580C', fontSize: '14px' }}>•</span>
            <span>Trusted Suppliers</span>
            <span style={{ color: '#EA580C', fontSize: '14px' }}>•</span>
            <span>Global Delivery</span>
          </span>
          <div
            style={{
              width: '42px',
              height: '2px',
              background: 'linear-gradient(90deg, #FFD000 0%, #FF8C00 30%, transparent 100%)',
              borderRadius: '1px',
            }}
          />
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
                loading={isLoading || isRotating}
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
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1.5px solid #FED7AA',
              color: '#EA580C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 20px rgba(234, 88, 12, 0.14)',
              zIndex: 10,
              cursor: 'pointer',
              transition: 'transform 0.2s ease, background 0.2s ease, border-color 0.2s ease'
            }}
            className="carousel-arrow"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Centered Explore All Products Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '28px' }}>
          <button
            onClick={() => openModal('quote')}
            style={{
              padding: '12px 32px',
              background: 'linear-gradient(135deg, #FF8C00 0%, #FF7A00 50%, #F57C00 100%)',
              color: '#FFFFFF',
              borderRadius: '999px',
              fontSize: '15px',
              fontWeight: '700',
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.01em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 4px 18px rgba(245, 124, 0, 0.32)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <span>Explore All Products</span>
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
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
