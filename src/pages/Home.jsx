import { useLoading } from '../context/LoadingContext';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/home/Hero';
import { HeroBanner } from '../components/home/HeroBanner';
import { FreightCard } from '../components/freight/FreightCard';
import { TrustBar } from '../components/freight/TrustBar';
import { Footer } from '../components/layout/Footer';
import { ProductCard } from '../components/products/ProductCard';
import { ProcessFlow } from '../components/procurement/ProcessFlow';
import { BenefitSection } from '../components/procurement/BenefitSection';
import { ProcurementMessage } from '../components/procurement/ProcurementMessage';
import { DocumentationGrid } from '../components/documentation/DocumentationGrid';
import { QualityProcess } from '../components/quality/QualityProcess';
import { QualityAssuranceBanner } from '../components/quality/QualityAssuranceBanner';
import { SupportingFeatures } from '../components/quality/SupportingFeatures';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { ProcessFlow as HowItWorksProcessFlow } from '../components/process/ProcessFlow';
import { ProcessTrustBanner } from '../components/process/ProcessTrustBanner';
import { ProcessStatisticsRow } from '../components/process/ProcessStatisticsRow';
import { WarehousingCapabilities } from '../components/tracking/WarehousingCapabilities';
import { TrackModal } from '../components/common/TrackModal';
import { featuredProducts } from '../data/productsData';
import { procurementSteps, procurementBenefits } from '../data/procurementData';
import { documentationCategories } from '../data/documentationData';
import {
  qualityProcessSteps,
  qualityAssuranceBannerItems,
  supportingCapabilities,
} from '../data/qualityData';
import { globalServices } from '../data/servicesData';
import {
  processSteps as howItWorksSteps,
  trustBannerItems as howItWorksTrustItems,
  processStatistics as howItWorksStats,
} from '../data/processData';
import {
  warehousingCapabilities,
} from '../data/trackingWarehousingData';
import { ProductTrustRow } from '../components/portfolio/ProductTrustRow';
import { ProductCategoryGrid } from '../components/portfolio/ProductCategoryGrid';
import {
  portfolioTrustFeatures,
  globalProductCategories,
} from '../data/globalPortfolioData';
import { BuyerCategoriesRow } from '../components/buyers/BuyerCategoriesRow';
import { BuyerActionCards } from '../components/buyers/BuyerActionCards';
import {
  buyerCategories,
  buyerActionCards,
} from '../data/buyersData';
import { CustomsServiceGrid } from '../components/customs/CustomsServiceGrid';
import {
  customsComplianceServices,
} from '../data/customsComplianceData';
import { AdvantageGrid } from '../components/whychooseus/AdvantageGrid';
import { WhyChooseUsStatsBanner } from '../components/whychooseus/WhyChooseUsStatsBanner';
import {
  whyChooseUsAdvantages,
  whyChooseUsStats,
} from '../data/whyChooseUsData';
import { TestimonialCard } from '../components/trustedbusinesses/TestimonialCard';
import {
  testimonialsData,
} from '../data/trustedBusinessesData';
import { BusinessGlobalCTA } from '../components/businessglobal/BusinessGlobalCTA';
import { Plane, Ship, Truck, TrainFront, Globe, ArrowRight, ChevronRight, ChevronDown } from 'lucide-react';

export const Home = ({ onNavigate }) => {
  const { isLoading } = useLoading();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('track');
  const [productsList, setProductsList] = useState(featuredProducts);

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -66;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCarouselNext = () => {
    setProductsList((prev) => {
      const next = [...prev];
      const first = next.shift();
      next.push(first);
      return next;
    });
  };

  const freightCardsData = [
    {
      id: 'air',
      title: 'AIR FREIGHT SOLUTIONS',
      subtitle: 'Move Faster. Reach Further.',
      icon: Plane,
      bullets: [
        'International air cargo',
        'Express cargo',
        'Time-sensitive shipments',
        'Door-to-door delivery',
        'Special cargo handling',
      ],
      image: '/air-freight.jpg',
      buttonText: 'Explore Air Freight',
    },
    {
      id: 'ocean',
      title: 'OCEAN FREIGHT SOLUTIONS',
      subtitle: 'Global Trade Moves by Sea',
      icon: Ship,
      bullets: [
        'FCL & LCL Shipping',
        'Container Shipping',
        'Port-to-Port Services',
        'Door-to-Door Delivery',
        'Bulk & Break-Bulk Cargo',
      ],
      image: '/ocean-freight.jpg',
      buttonText: 'Explore Ocean Freight',
    },
    {
      id: 'land',
      title: 'LAND TRANSPORTATION',
      subtitle: 'Connected Roads. Reliable Delivery.',
      icon: Truck,
      bullets: [
        'Full Truckload Services',
        'Container Transportation',
        'Port & Warehouse Transport',
        'Domestic Distribution',
        'Last Mile Delivery',
      ],
      image: '/land-freight.jpg',
      buttonText: 'Explore Land Transport',
    },
    {
      id: 'rail',
      title: 'RAIL FREIGHT SOLUTIONS',
      subtitle: 'Efficient Tracks. Strong Connections.',
      icon: TrainFront,
      bullets: [
        'Container Rail Transport',
        'Bulk Cargo Rail Services',
        'Intermodal Rail Solutions',
        'Cost-Effective Long Haul',
        'Safe & Timely Delivery',
      ],
      image: '/rail-freight.jpg',
      buttonText: 'Explore Rail Freight',
    },
  ];

  return (
    <>
      {/* ── Header sits inside page-viewport for sticky/max-width behaviour ── */}
      <div className="page-viewport" style={{ paddingBottom: 0, minHeight: 'unset' }}>
        {/* 1. Shared Navigation Header */}
        <Header
          onTrackClick={() => onNavigate('track-shipment')}
          onQuoteClick={() => openModal('quote')}
          currentRoute="home"
          onNavigate={(route) => {
            if (route === 'track-shipment' || route === 'track-cargo' || route === 'tracking') {
              onNavigate('track-shipment');
              return;
            }
            if (route === 'trusted-businesses' || route === 'testimonials') {
              scrollToSection('trusted-businesses-section');
            } else if (route === 'business-global' || route === 'cta') {
              scrollToSection('business-global-cta');
            } else if (route === 'why-choose-us' || route === 'advantages') {
              scrollToSection('why-choose-us-section');
            } else if (route === 'network' || route === 'global-network') {
              if (onNavigate) {
                onNavigate('network');
              }
            } else if (route === 'customs-compliance' || route === 'compliance') {
              scrollToSection('customs-compliance-section');
            } else if (route === 'buyers' || route === 'global-buyers') {
              scrollToSection('buyers-section');
            } else if (route === 'warehousing') {
              scrollToSection('warehousing-section');
            } else if (route === 'how-it-works' || route === 'about') {
              scrollToSection('how-it-works-section');
            } else if (route === 'quality' || route === 'quality-assurance') {
              scrollToSection('quality-section');
            } else if (route === 'resources' || route === 'documentation') {
              scrollToSection('documentation-section');
            } else if (route === 'procurement') {
              scrollToSection('procurement-section');
            } else if (route === 'services' || route === 'services-overview') {
              scrollToSection('services-overview-section');
            } else if (route === 'logistics' || route === 'freight') {
              scrollToSection('services-section');
            } else if (route === 'products' || route === 'portfolio') {
              scrollToSection('global-portfolio-section');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        />
      </div>

      {/* 2. Full-Width Hero Banner – OUTSIDE page-viewport, edge-to-edge with text overlay */}
      <HeroBanner
        onExploreServices={() => scrollToSection('services-overview-section')}
        onExploreProducts={() => scrollToSection('products-section')}
        onSearch={(id) => openModal('track')}
        onNavigate={onNavigate}
        onQuote={() => openModal('quote')}
        onTrack={(id) => openModal('track')}
      />


      {/* ── 6. Freight Services Section: Full 100% width edge-to-edge (matching HeroBanner above) ── */}
      <section
        id="services-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100vw',
          boxSizing: 'border-box',
          margin: '0',
          padding: '42px var(--section-horizontal-padding, 132px) 36px var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 18%, #FFFDF9 50%, #FFFFFF 82%, #F8FAFC 100%)',
          backgroundImage: 'radial-gradient(rgba(249, 115, 22, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          color: '#0F172A',
          overflow: 'hidden',
          borderTop: '1px solid rgba(226, 232, 240, 0.9)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
        }}
      >
        {/* Ambient Top Radiant Lighting Aura */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '820px',
            height: '340px',
            background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255, 140, 0, 0.08), transparent 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Executive Watermark Globe */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'rgba(234, 88, 12, 0.04)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <Globe size={380} strokeWidth={0.75} />
        </div>

        <div
          style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
            marginBottom: '32px'
          }}
        >
          {/* Animated Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '6px 18px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 100%)',
              border: '1.5px solid #FED7AA',
              marginBottom: '10px',
              boxShadow: '0 4px 14px rgba(234, 88, 12, 0.08)',
              cursor: 'default',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: '800',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#EA580C',
                fontFamily: 'var(--font-body)'
              }}
            >
              Multi-Modal Logistics &amp; Freight Forwarding
            </span>
          </motion.div>

          {/* Luxury Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
            style={{
              fontSize: 'clamp(24px, 2.3vw, 34px)',
              fontWeight: '900',
              color: '#1E293B',
              lineHeight: '1.18',
              letterSpacing: '-0.3px',
              fontFamily: 'var(--font-heading)',
              marginBottom: '8px'
            }}
          >
            Your Global Freight,{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FF7A00 0%, #FFA800 55%, #FF8C00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Our Priority
            </span>
          </motion.h2>

          {/* Subtitle with High-End Glowing Dividers */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16, ease: 'easeOut' }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px'
            }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                width: '42px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent 0%, #FF8C00 70%, #FFD000 100%)',
                borderRadius: '1px',
                transformOrigin: 'right center',
              }}
            />
            <span
              style={{
                fontSize: '15px',
                fontWeight: '500',
                color: '#475569',
                fontFamily: 'var(--font-body)',
                letterSpacing: '-0.1px'
              }}
            >
              Fast. Reliable. Worldwide.
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                width: '42px',
                height: '2px',
                background: 'linear-gradient(90deg, #FFD000 0%, #FF8C00 30%, transparent 100%)',
                borderRadius: '1px',
                transformOrigin: 'left center',
              }}
            />
          </motion.div>
        </div>

        <div
          className="freight-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            margin: '0',
            position: 'relative',
            zIndex: 2
          }}
        >
          {freightCardsData.map((card, idx) => (
            <FreightCard
              key={card.id}
              loading={isLoading}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
              bullets={card.bullets}
              image={card.image}
              buttonText={card.buttonText}
              delay={idx * 0.08}
              onExplore={() => openModal('quote')}
            />
          ))}
        </div>

        <TrustBar style={{ margin: '24px 0 0 0' }} />
      </section>

      {/* ── All remaining content inside page-viewport ── */}
      {/* ── All remaining content inside full-width container ── */}
      <div className="page-viewport" style={{ width: '100%', maxWidth: '100%', padding: 0 }}>

      {/* 7. Featured Products Section (Screen 3) */}
      <section
        id="products-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 0 28px 0',
          padding: '42px var(--section-horizontal-padding, 132px) 36px var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF8F0 100%)',
          color: '#0F172A',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 111, 0, 0.16)',
          boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)'
        }}
      >
        {/* Top Eyebrow Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '6px 18px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 100%)',
              border: '1.5px solid #FED7AA',
              boxShadow: '0 4px 14px rgba(234, 88, 12, 0.08)',
              cursor: 'default',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: '800',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#EA580C',
                fontFamily: 'var(--font-body)'
              }}
            >
              Quality Products. Global Reach.
            </span>
          </motion.div>
        </div>

        {/* Main Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
          style={{
            fontSize: 'clamp(24px, 2.3vw, 34px)',
            fontWeight: '900',
            color: '#1E293B',
            textAlign: 'center',
            lineHeight: '1.18',
            letterSpacing: '-0.3px',
            fontFamily: 'var(--font-heading)',
            marginBottom: '8px'
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
        </motion.h2>

        {/* Subtitle with High-End Glowing Dividers */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16, ease: 'easeOut' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '28px',
            flexWrap: 'wrap'
          }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              width: '42px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent 0%, #FF8C00 70%, #FFD000 100%)',
              borderRadius: '1px',
              transformOrigin: 'right center',
            }}
          />
          <span
            style={{
              fontSize: '15px',
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
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              width: '42px',
              height: '2px',
              background: 'linear-gradient(90deg, #FFD000 0%, #FF8C00 30%, transparent 100%)',
              borderRadius: '1px',
              transformOrigin: 'left center',
            }}
          />
        </motion.div>

        {/* Product Cards Grid with Carousel Arrow */}
        <div style={{ position: 'relative' }}>
          <div
            className="featured-products-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '18px',
              position: 'relative'
            }}
          >
            {productsList.map((product, idx) => (
              <ProductCard
                key={product.id}
                loading={isLoading}
                product={product}
                delay={idx * 0.08}
                onViewDetails={() => openModal('quote')}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCarouselNext}
            aria-label="Next Products"
            style={{
              position: 'absolute',
              right: '-14px',
              top: '42%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid rgba(255, 111, 0, 0.35)',
              color: '#FF6F00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 20px rgba(255, 111, 0, 0.18)',
              zIndex: 10,
              cursor: 'pointer'
            }}
            className="carousel-arrow"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </motion.button>
        </div>

        {/* Centered Explore Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(245, 124, 0, 0.42)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openModal('quote')}
            style={{
              padding: '11px 28px',
              background: 'linear-gradient(135deg, #FF8C00 0%, #FF7A00 50%, #F57C00 100%)',
              color: '#FFFFFF',
              borderRadius: '999px',
              fontSize: '14px',
              fontWeight: '700',
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.01em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 4px 16px rgba(245, 124, 0, 0.3)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <span>Explore All Products</span>
            <ArrowRight size={17} strokeWidth={2.5} />
          </motion.button>
        </div>
      </section>

      {/* 8. Global Product Portfolio Section (Screen 10) */}
      <section
        id="global-portfolio-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 0 28px 0',
          padding: '42px var(--section-horizontal-padding, 132px) 36px var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF9F2 100%)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 111, 0, 0.16)',
          boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)',
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
              PREMIUM QUALITY. TRUSTED GLOBALLY
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(24px, 2.3vw, 34px)',
            fontWeight: '800',
            color: '#0F172A',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '6px',
          }}
        >
          Explore Our <span style={{ color: '#FF6F00' }}>Global Product Portfolio</span>
        </h2>

        {/* Glowing Gradient Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #FF6F00)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #FF6F00, transparent)' }} />
        </div>

        {/* Subtitle Description */}
        <p
          style={{
            maxWidth: '740px',
            margin: '0 auto 20px auto',
            fontSize: '14.5px',
            lineHeight: '1.5',
            fontWeight: '400',
            color: '#475569',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
          }}
        >
          Discover a wide range of high-quality products across multiple categories, sourced from verified suppliers and delivered with reliability.
        </p>

        {/* 5-Item Trust Features Row */}
        <ProductTrustRow items={portfolioTrustFeatures} />

        {/* 4 x 2 Product Category Grid */}
        <ProductCategoryGrid
          categories={globalProductCategories}
          loading={isLoading}
          onCategoryClick={() => openModal('quote')}
        />

        {/* Centered View All Products CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px', marginBottom: '14px' }}>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(255, 111, 0, 0.35)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openModal('quote')}
            className="portfolio-cta-btn"
            style={{
              padding: '11px 28px',
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
            }}
          >
            <span>View All Products</span>
            <ArrowRight size={18} strokeWidth={2.5} color="#FFFFFF" />
          </motion.button>
        </div>
      </section>

      {/* 9. Procurement Solutions Section (Screen 4) */}
      <section
        id="procurement-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 0 28px 0',
          padding: '42px var(--section-horizontal-padding, 132px) 36px var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF8F0 100%)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 111, 0, 0.16)',
          boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)',
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
              END-TO-END SOURCING & PROCUREMENT
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(24px, 2.3vw, 34px)',
            fontWeight: '800',
            color: '#0F172A',
            textAlign: 'center',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            fontFamily: 'var(--font-body)',
            marginBottom: '6px',
          }}
        >
          Procurement <span style={{ color: '#FF6F00' }}>Solutions</span>
        </h2>

        {/* Glowing Gradient Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #FF6F00)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #FF6F00, transparent)' }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '14.5px',
            fontWeight: '500',
            textAlign: 'center',
            color: '#475569',
            fontFamily: 'var(--font-body)',
            marginBottom: '26px',
          }}
        >
          Source Smarter. Buy Better. <span style={{ color: '#FF6F00', fontWeight: '600' }}>Global Reach.</span>
        </p>

        {/* Horizontal Procurement Process Flow */}
        <div style={{ width: '100%', marginBottom: '26px' }}>
          <ProcessFlow steps={procurementSteps} loading={isLoading} />
        </div>

        {/* Start Procurement CTA Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(255, 111, 0, 0.35)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openModal('quote')}
            className="procurement-cta-btn"
            style={{
              padding: '11px 28px',
              background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
              color: '#FFFFFF',
              borderRadius: '999px',
              fontSize: '14.5px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              boxShadow: '0 4px 16px rgba(255, 111, 0, 0.28)',
              cursor: 'pointer',
              border: 'none',
            }}
          >
            <span>Start Procurement</span>
            <ArrowRight size={18} strokeWidth={2.5} color="#FFFFFF" />
          </motion.button>
        </div>

        {/* Why Choose Our Procurement Solutions Section */}
        <BenefitSection benefits={procurementBenefits} />

        {/* Procurement Message Bar */}
        <ProcurementMessage />
      </section>

      {/* 10. Documentation & Compliance Section (Screen 5) */}
      <section
        id="documentation-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 0 28px 0',
          padding: '42px var(--section-horizontal-padding, 132px) 36px var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF9F2 100%)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 111, 0, 0.16)',
          boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)',
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
              COMPLIANCE & REGULATORY EXCELLENCE
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(24px, 2.3vw, 34px)',
            fontWeight: '800',
            color: '#0F172A',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '6px',
          }}
        >
          Documentation & <span style={{ color: '#FF6F00' }}>Compliance</span>
        </h2>

        {/* Glowing Gradient Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #FF6F00)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #FF6F00, transparent)' }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '14.5px',
            fontWeight: '400',
            color: '#475569',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '24px',
          }}
        >
          Trade Documentation Made Simple, Fast & Fully Compliant
        </p>

        {/* Hero Top Grid */}
        <div
          className="doc-hero-wrapper"
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {/* Content Area (Full-Width) */}
          <div style={{ width: '100%' }}>
            <DocumentationGrid
              categories={documentationCategories}
              loading={isLoading}
              onItemClick={() => openModal('quote')}
            />

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(255, 111, 0, 0.35)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal('quote')}
                className="doc-cta-btn"
                style={{
                  padding: '11px 26px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
                  borderRadius: '999px',
                  color: '#FFFFFF',
                  fontSize: '14.5px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 4px 16px rgba(255, 111, 0, 0.28)',
                  cursor: 'pointer',
                  border: 'none',
                }}
              >
                <span>Explore Documentation</span>
                <ArrowRight size={18} strokeWidth={2.5} color="#FFFFFF" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Customs & Trade Compliance Section (Screen 12) */}
      <section
        id="customs-compliance-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 0 28px 0',
          padding: '42px var(--section-horizontal-padding, 132px) 36px var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF8F0 100%)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 111, 0, 0.16)',
          boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)',
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
              TRUSTED • COMPLIANT • GLOBAL
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(24px, 2.3vw, 34px)',
            fontWeight: '800',
            color: '#0F172A',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '6px',
          }}
        >
          Customs & Trade <span style={{ color: '#FF6F00' }}>Compliance</span>
        </h2>

        {/* Glowing Gradient Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #FF6F00)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #FF6F00, transparent)' }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '14.5px',
            fontWeight: '400',
            color: '#475569',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '20px',
          }}
        >
          Simplifying Cross-Border Trade With Complete Regulatory Assurance
        </p>

        {/* 6 Service Categories Grid */}
        <CustomsServiceGrid
          services={customsComplianceServices}
          loading={isLoading}
          onServiceClick={() => openModal('quote')}
        />

        {/* Centered Learn More CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '22px', marginBottom: '6px' }}>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(255, 111, 0, 0.35)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openModal('quote')}
            className="customs-cta-btn"
            style={{
              padding: '11px 28px',
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
            }}
          >
            <span>Learn More</span>
            <ArrowRight size={18} strokeWidth={2.4} color="#FFFFFF" />
          </motion.button>
        </div>
      </section>

      {/* 12. Quality Assurance Section (Screen 6) */}
      <section
        id="quality-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 0 28px 0',
          padding: '42px var(--section-horizontal-padding, 132px) 36px var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF9F2 100%)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 111, 0, 0.16)',
          boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)',
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
              CERTIFIED QUALITY. ZERO DEFECTS.
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(24px, 2.3vw, 34px)',
            fontWeight: '800',
            color: '#0F172A',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '6px',
          }}
        >
          Quality <span style={{ color: '#FF6F00' }}>Assurance</span>
        </h2>

        {/* Glowing Gradient Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #FF6F00)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #FF6F00, transparent)' }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '14.5px',
            fontWeight: '400',
            color: '#475569',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '24px',
          }}
        >
          Quality You Can Trade With Utmost Confidence Across Every Border
        </p>

        {/* Hero Top Grid */}
        <div
          className="quality-hero-wrapper"
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {/* Content Area (Full-Width) */}
          <div style={{ width: '100%' }}>
            <QualityProcess
              steps={qualityProcessSteps}
              loading={isLoading}
              onItemClick={() => openModal('quote')}
            />

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(255, 111, 0, 0.35)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal('quote')}
                className="quality-cta-btn"
                style={{
                  padding: '11px 26px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
                  borderRadius: '999px',
                  color: '#FFFFFF',
                  fontSize: '14.5px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 4px 16px rgba(255, 111, 0, 0.28)',
                  cursor: 'pointer',
                  border: 'none',
                }}
              >
                <span>Our Quality Process</span>
                <ArrowRight size={18} strokeWidth={2.5} color="#FFFFFF" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Main Assurance Banner */}
        <QualityAssuranceBanner items={qualityAssuranceBannerItems} />

        {/* Supporting Capabilities Section */}
        <SupportingFeatures features={supportingCapabilities} />
      </section>

      {/* 13. End-to-End Global Trade Solutions Section (Screen 7) */}
      <section
        id="services-overview-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 0 28px 0',
          padding: '42px var(--section-horizontal-padding, 132px) 36px var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF8F0 100%)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 111, 0, 0.16)',
          boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)',
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
        <h2
          style={{
            fontSize: 'clamp(24px, 2.3vw, 34px)',
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
        </h2>

        {/* Glowing Gradient Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #FF6F00)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #FF6F00, transparent)' }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '14.5px',
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
            onCardClick={(service) => {
              if (service.id === 3 || service.id === 4 || service.id === 5) {
                scrollToSection('services-section');
              } else if (service.id === 6) {
                scrollToSection('procurement-section');
              } else if (service.id === 9) {
                scrollToSection('documentation-section');
              } else if (service.id === 8) {
                scrollToSection('quality-section');
              } else {
                openModal('quote');
              }
            }}
          />

          {/* Explore All Services CTA Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(255, 111, 0, 0.35)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('services-section')}
              style={{
                padding: '11px 28px',
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
              }}
            >
              <span>Explore All Services</span>
              <ArrowRight size={18} strokeWidth={2.5} color="#FFFFFF" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* 14. How Global Link Works Section (Screen 8) */}
      <section
        id="how-it-works-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 0 28px 0',
          padding: '42px var(--section-horizontal-padding, 132px) 36px var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF9F2 100%)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 111, 0, 0.16)',
          boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)',
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
              PROVEN EXECUTION WORKFLOW
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(24px, 2.3vw, 34px)',
            fontWeight: '800',
            color: '#0F172A',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '6px',
          }}
        >
          How Global Link <span style={{ color: '#FF6F00' }}>Works</span>
        </h2>

        {/* Glowing Gradient Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #FF6F00)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #FF6F00, transparent)' }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '14.5px',
            fontWeight: '400',
            color: '#475569',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '20px',
          }}
        >
          Simple Process. Complete Transparency. <span style={{ color: '#FF6F00', fontWeight: '600' }}>On-Time Delivery.</span>
        </p>

        {/* Hero Top Wrapper */}
        {/* Hero Top Grid */}
        <div
          className="process-hero-wrapper"
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {/* Content Area (Full-Width) */}
          <div style={{ width: '100%' }}>
            <HowItWorksProcessFlow
              steps={howItWorksSteps}
              loading={isLoading}
              onStepClick={() => openModal('quote')}
            />

            {/* Learn More About Our Process CTA Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(255, 111, 0, 0.35)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal('quote')}
                className="process-cta-btn"
                style={{
                  padding: '11px 28px',
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
                }}
              >
                <span>Learn More About Our Process</span>
                <ArrowRight size={18} strokeWidth={2.5} color="#FFFFFF" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Trust Banner */}
        <ProcessTrustBanner items={howItWorksTrustItems} />

        {/* Statistics Row */}
        <ProcessStatisticsRow statistics={howItWorksStats} />
      </section>

      {/* 15. Warehousing & Distribution Section (Screen 9) */}
      <section
        id="warehousing-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 0 28px 0',
          padding: '42px var(--section-horizontal-padding, 132px) 36px var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF8F0 100%)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 111, 0, 0.16)',
          boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)',
        }}
      >
        {/* Eyebrow Pill */}
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
              SECURE STORAGE & LOGISTICS HUBS
            </span>
          </div>
        </div>

        <h3
          style={{
            fontSize: 'clamp(22px, 2.1vw, 30px)',
            fontWeight: '800',
            color: '#0F172A',
            lineHeight: '1.2',
            letterSpacing: '-0.4px',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '4px',
          }}
        >
          Warehousing & <span style={{ color: '#FF6F00' }}>Distribution</span>
        </h3>

        <p
          style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#475569',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '20px',
          }}
        >
          Store. Manage. Distribute with precision and climate control.
        </p>

        {/* Capabilities Area (Full-Width) */}
        <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
          <WarehousingCapabilities
            capabilities={warehousingCapabilities}
            onExploreClick={() => openModal('quote')}
          />
        </div>
      </section>

      {/* 16. Global Buyers Section (Screen 11) */}
      <section
        id="buyers-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 0 28px 0',
          padding: '42px var(--section-horizontal-padding, 132px) 36px var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF8F0 100%)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 111, 0, 0.16)',
          boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)',
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
              CONNECTING MARKETS. CREATING OPPORTUNITIES.
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(24px, 2.3vw, 34px)',
            fontWeight: '800',
            color: '#0F172A',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '6px',
          }}
        >
          Global <span style={{ color: '#FF6F00' }}>Buyers</span>
        </h2>

        {/* Glowing Gradient Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #FF6F00)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #FF6F00, transparent)' }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '14.5px',
            fontWeight: '400',
            color: '#475569',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '20px',
          }}
        >
          Connecting Verified Suppliers With Global Buyers in 120+ International Markets
        </p>

        {/* 6 Buyer Categories Row */}
        <BuyerCategoriesRow
          categories={buyerCategories}
          loading={isLoading}
          onCategoryClick={() => openModal('quote')}
        />

        {/* 2 Large Action Cards */}
        <BuyerActionCards
          actions={buyerActionCards}
          onActionClick={(action) => openModal('quote')}
        />
      </section>

      {/* 18. Why Businesses Choose Us Section (Screen 14) */}
      <section
        id="why-choose-us-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 0 28px 0',
          padding: '42px var(--section-horizontal-padding, 132px) 36px var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF8F0 100%)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 111, 0, 0.16)',
          boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)',
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
              THE GLOBAL LINK ADVANTAGE
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(24px, 2.3vw, 34px)',
            fontWeight: '800',
            color: '#0F172A',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '6px',
          }}
        >
          Why Businesses <span style={{ color: '#FF6F00' }}>Choose Us</span>
        </h2>

        {/* Glowing Gradient Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #FF6F00)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #FF6F00, transparent)' }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '14.5px',
            fontWeight: '400',
            color: '#475569',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '20px',
          }}
        >
          Delivering value, reliability, and trust every single step of the way
        </p>

        {/* 6 Advantages Grid */}
        <AdvantageGrid
          advantages={whyChooseUsAdvantages}
          loading={isLoading}
          onAdvantageClick={() => openModal('quote')}
        />

        {/* Bottom Statistics Banner */}
        <WhyChooseUsStatsBanner stats={whyChooseUsStats} />
      </section>

      {/* 19. Trusted by Businesses Worldwide Section (Screen 16) */}
      <section
        id="trusted-businesses-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 0 28px 0',
          padding: '42px var(--section-horizontal-padding, 132px) 36px var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF9F2 100%)',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 111, 0, 0.16)',
          boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)',
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
              CLIENT TESTIMONIALS & GLOBAL PARTNERS
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(24px, 2.3vw, 34px)',
            fontWeight: '800',
            color: '#0F172A',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '6px',
          }}
        >
          Trusted by <span style={{ color: '#FF6F00' }}>Businesses Worldwide</span>
        </h2>

        {/* Glowing Gradient Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #FF6F00)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #FF6F00, transparent)' }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '14.5px',
            fontWeight: '400',
            color: '#475569',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '16px',
          }}
        >
          Real partnerships. Real results. Real trust.
        </p>

        {/* 3-Comment Auto-Moving Testimonials Carousel */}
        <TestimonialCard
          testimonials={testimonialsData}
          loading={isLoading}
          autoPlay={true}
        />
      </section>

      {/* 20. Business Global CTA Section (Screen 15) */}
      <BusinessGlobalCTA
        onQuoteClick={() => openModal('quote')}
        onTradeClick={() => openModal('quote')}
        onPartnerClick={() => openModal('quote')}
      />

      {/* 21. Global Link Common Footer (Screen 17) */}
      <Footer onNavigate={onNavigate} />

      {/* Interactive Modal */}
      <TrackModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultType={modalType}
      />
    </div> {/* end second page-viewport */}
    </>
  );
};
