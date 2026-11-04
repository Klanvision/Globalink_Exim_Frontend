import { useLoading } from '../context/LoadingContext';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/home/Hero';
import { HeroBanner } from '../components/home/HeroBanner';
import { TopDecoration } from '../components/freight/TopDecoration';
import { FreightCard } from '../components/freight/FreightCard';
import { TrustBar } from '../components/freight/TrustBar';
import { Footer } from '../components/layout/Footer';
import { ProductCard } from '../components/products/ProductCard';
import { ProductTrustBar } from '../components/products/ProductTrustBar';
import { DarkStatsBanner } from '../components/products/DarkStatsBanner';
import { ProcessFlow } from '../components/procurement/ProcessFlow';
import { BenefitSection } from '../components/procurement/BenefitSection';
import { ProcurementMessage } from '../components/procurement/ProcurementMessage';
import { ProcurementStats } from '../components/procurement/ProcurementStats';
import { DocumentationGrid } from '../components/documentation/DocumentationGrid';
import { BenefitPanel } from '../components/documentation/BenefitPanel';
import { BrandValueBar } from '../components/documentation/BrandValueBar';
import { QualityProcess } from '../components/quality/QualityProcess';
import { QualityAssuranceBanner } from '../components/quality/QualityAssuranceBanner';
import { SupportingFeatures } from '../components/quality/SupportingFeatures';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { ServicesBenefitsBanner } from '../components/services/ServicesBenefitsBanner';
import { ServicesStatisticsRow } from '../components/services/ServicesStatisticsRow';
import { ProcessFlow as HowItWorksProcessFlow } from '../components/process/ProcessFlow';
import { ProcessTrustBanner } from '../components/process/ProcessTrustBanner';
import { ProcessStatisticsRow } from '../components/process/ProcessStatisticsRow';
import { TrackingForm } from '../components/tracking/TrackingForm';
import { TrackingTimeline } from '../components/tracking/TrackingTimeline';
import { TrackingFeatureCard } from '../components/tracking/TrackingFeatureCard';
import { WarehousingCapabilities } from '../components/tracking/WarehousingCapabilities';
import { WarehouseStatsCard } from '../components/tracking/WarehouseStatsCard';
import { WhyChooseUsBanner } from '../components/tracking/WhyChooseUsBanner';
import { TrackModal } from '../components/common/TrackModal';
import { featuredProducts } from '../data/productsData';
import { procurementSteps, procurementBenefits, procurementStats } from '../data/procurementData';
import {
  documentationCategories,
  complianceBenefits,
  brandValues,
} from '../data/documentationData';
import {
  qualityProcessSteps,
  qualityAssuranceBannerItems,
  supportingCapabilities,
} from '../data/qualityData';
import {
  globalServices,
  serviceBenefits,
  serviceStatistics,
} from '../data/servicesData';
import {
  processSteps as howItWorksSteps,
  trustBannerItems as howItWorksTrustItems,
  processStatistics as howItWorksStats,
} from '../data/processData';
import {
  trackingTimelineStages,
  trackingFeatures,
  warehousingCapabilities,
  warehouseStats,
  whyChooseUsItems,
} from '../data/trackingWarehousingData';
import { ProductTrustRow } from '../components/portfolio/ProductTrustRow';
import { ProductCategoryGrid } from '../components/portfolio/ProductCategoryGrid';
import { PortfolioStatsBanner } from '../components/portfolio/PortfolioStatsBanner';
import {
  portfolioTrustFeatures,
  globalProductCategories,
  portfolioStatistics,
} from '../data/globalPortfolioData';
import { BuyerCategoriesRow } from '../components/buyers/BuyerCategoriesRow';
import { BuyerActionCards } from '../components/buyers/BuyerActionCards';
import { BuyerStatsBanner } from '../components/buyers/BuyerStatsBanner';
import { BuyerTrustRow } from '../components/buyers/BuyerTrustRow';
import {
  buyerCategories,
  buyerActionCards,
  buyerStatistics,
  buyerTrustStatements,
} from '../data/buyersData';
import { CustomsServiceGrid } from '../components/customs/CustomsServiceGrid';
import { CustomsLogisticsSection } from '../components/customs/CustomsLogisticsSection';
import {
  customsComplianceServices,
  customsComplianceStats,
} from '../data/customsComplianceData';
import { NetworkMapGraphic } from '../components/network/NetworkMapGraphic';
import { NetworkStatsRow } from '../components/network/NetworkStatsRow';
import { NetworkCtaButton } from '../components/network/NetworkCtaButton';
import { globalNetworkStats } from '../data/globalNetworkData';
import { AdvantageGrid } from '../components/whychooseus/AdvantageGrid';
import { WhyChooseUsStatsBanner } from '../components/whychooseus/WhyChooseUsStatsBanner';
import {
  whyChooseUsAdvantages,
  whyChooseUsStats,
} from '../data/whyChooseUsData';
import { TestimonialCard } from '../components/trustedbusinesses/TestimonialCard';
import { PartnerLogosRow } from '../components/trustedbusinesses/PartnerLogosRow';
import { TrustStatsBanner } from '../components/trustedbusinesses/TrustStatsBanner';
import {
  testimonialsData,
  partnerLogos,
  trustStatsData,
} from '../data/trustedBusinessesData';
import { BusinessGlobalCTA } from '../components/businessglobal/BusinessGlobalCTA';
import { Plane, Ship, Truck, TrainFront, Globe, ArrowRight, ChevronRight, ChevronDown, Sparkles } from 'lucide-react';

export const Home = ({ onNavigate }) => {
  const { isLoading } = useLoading();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('track');
  const [productsList, setProductsList] = useState(featuredProducts);
  const [activeTrackingStep, setActiveTrackingStep] = useState(4);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

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
          onTrackClick={() => scrollToSection('tracking-warehousing-section')}
          onQuoteClick={() => openModal('quote')}
          currentRoute="home"
          onNavigate={(route) => {
            if (route === 'trusted-businesses' || route === 'testimonials') {
              scrollToSection('trusted-businesses-section');
            } else if (route === 'business-global' || route === 'cta') {
              scrollToSection('business-global-cta');
            } else if (route === 'why-choose-us' || route === 'advantages') {
              scrollToSection('why-choose-us-section');
            } else if (route === 'network' || route === 'global-network') {
              scrollToSection('global-network-section');
            } else if (route === 'customs-compliance' || route === 'compliance') {
              scrollToSection('customs-compliance-section');
            } else if (route === 'buyers' || route === 'global-buyers') {
              scrollToSection('buyers-section');
            } else if (route === 'track-shipment' || route === 'tracking' || route === 'warehousing') {
              scrollToSection('tracking-warehousing-section');
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
          padding: '38px 24px 32px 24px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 111, 0, 0.07) 0%, #FFFFFF 65%)',
          color: '#0F172A',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 111, 0, 0.18)',
        }}
      >
        <TopDecoration />

        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'rgba(255, 111, 0, 0.05)',
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
            marginBottom: '30px'
          }}
        >
          {/* Animated Eyebrow badge - White & Orange */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            whileHover={{ scale: 1.04 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '6px 16px',
              borderRadius: '24px',
              background: '#FFFFFF',
              border: '1.5px solid rgba(255, 111, 0, 0.4)',
              marginBottom: '10px',
              boxShadow: '0 4px 12px rgba(255, 111, 0, 0.12)',
              cursor: 'default',
            }}
          >
            <Sparkles size={13} color="#FF6F00" />
            <span
              style={{
                fontSize: '10.5px',
                fontWeight: '700',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: '#FF6F00',
                fontFamily: 'var(--font-body)'
              }}
            >
              Multi-Modal Logistics &amp; Freight Forwarding
            </span>
          </motion.div>

          {/* Luxury Main Heading with reduced proportional size */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
            style={{
              fontSize: 'clamp(24px, 2.3vw, 34px)',
              fontWeight: '900',
              color: '#092554',
              lineHeight: '1.18',
              letterSpacing: '-0.3px',
              fontFamily: 'var(--font-heading)',
              marginBottom: '8px'
            }}
          >
            Your Global Freight,{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FF6F00 0%, #FFA800 60%, #FFB700 100%)',
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
          padding: '42px 24px 36px 24px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF8F0 100%)',
          color: '#0F172A',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 111, 0, 0.16)',
          boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)'
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
            <Sparkles size={12} color="#FF6F00" />
            <span
              style={{
                fontSize: '11px',
                fontWeight: '700',
                color: '#FF6F00',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)'
              }}
            >
              QUALITY PRODUCTS. GLOBAL REACH.
            </span>
          </div>
        </div>

        {/* Main Section Heading */}
        <h2
          style={{
            fontSize: 'clamp(24px, 2.3vw, 34px)',
            fontWeight: '800',
            color: '#0F172A',
            textAlign: 'center',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            fontFamily: 'var(--font-body)',
            marginBottom: '6px'
          }}
        >
          Featured <span style={{ color: '#FF6F00' }}>Products</span>
        </h2>

        {/* Glowing Gradient Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #FF6F00)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #FF6F00, transparent)' }} />
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            fontSize: '14.5px',
            fontWeight: '500',
            color: '#475569',
            marginBottom: '26px',
            flexWrap: 'wrap'
          }}
        >
          <span>Handpicked Quality</span>
          <span style={{ color: '#FF6F00', fontSize: '12px' }}>•</span>
          <span>Trusted Suppliers</span>
          <span style={{ color: '#FF6F00', fontSize: '12px' }}>•</span>
          <span>Global Delivery</span>
        </div>

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
            whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(255, 111, 0, 0.35)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openModal('quote')}
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
              gap: '10px',
              boxShadow: '0 4px 16px rgba(255, 111, 0, 0.28)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <span>Explore All Products</span>
            <ArrowRight size={18} strokeWidth={2.5} />
          </motion.button>
        </div>

        {/* Product Trust Bar */}
        <ProductTrustBar />

        {/* Statistics Banner */}
        <DarkStatsBanner />
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
          padding: '42px 24px 36px 24px',
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
            <Sparkles size={12} color="#FF6F00" />
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

        {/* Bottom Statistics Banner */}
        <PortfolioStatsBanner statistics={portfolioStatistics} />
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
          padding: '42px 24px 36px 24px',
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
            <Sparkles size={12} color="#FF6F00" />
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

        {/* Bottom Statistics Banner */}
        <ProcurementStats stats={procurementStats} />
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
          padding: '42px 24px 36px 24px',
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
            <Sparkles size={12} color="#FF6F00" />
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
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Hero Content Area */}
          <div style={{ flex: '1 1 540px' }}>
            <DocumentationGrid
              categories={documentationCategories}
              loading={isLoading}
              onItemClick={() => openModal('quote')}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '12px' }}>
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

          {/* Right Hero Image Container */}
          <div
            className="doc-hero-image-container"
            style={{
              flex: '0 0 320px',
              maxWidth: '380px',
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 6px 20px rgba(15, 23, 42, 0.08)',
            }}
          >
            <img
              src="/documentation-hero.jpg"
              alt="Trade Documentation & Compliance"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* 5-Column Compliance Benefit Panel */}
        <BenefitPanel benefits={complianceBenefits} />

        {/* Bottom Brand Value Strip */}
        <BrandValueBar items={brandValues} />
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
          padding: '42px 24px 36px 24px',
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
            <Sparkles size={12} color="#FF6F00" />
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

        {/* Bottom Logistics Visual & Statistics Section */}
        <CustomsLogisticsSection stats={customsComplianceStats} />
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
          padding: '42px 24px 36px 24px',
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
            <Sparkles size={12} color="#FF6F00" />
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
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Hero Content Area */}
          <div style={{ flex: '1 1 540px' }}>
            <QualityProcess
              steps={qualityProcessSteps}
              loading={isLoading}
              onItemClick={() => openModal('quote')}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '14px' }}>
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

          {/* Right Hero Image Container */}
          <div
            className="quality-hero-image-container"
            style={{
              flex: '0 0 320px',
              maxWidth: '380px',
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 6px 20px rgba(15, 23, 42, 0.08)',
            }}
          >
            <img
              src="/quality-assurance-hero.jpg"
              alt="Quality Assurance & Scientific Inspection"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block',
              }}
            />
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
          padding: '42px 24px 36px 24px',
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
            <Sparkles size={12} color="#FF6F00" />
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

        {/* Hero Top Wrapper */}
        <div
          className="services-hero-wrapper"
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Service Cards Area */}
          <div style={{ flex: '1 1 540px' }}>
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
                className="clay-cta-btn"
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

          {/* Right Hero Image Container */}
          <div
            className="services-hero-image-container"
            style={{
              flex: '0 0 320px',
              maxWidth: '380px',
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 6px 20px rgba(15, 23, 42, 0.08)',
            }}
          >
            <img
              src="/global-trade-hero.jpg"
              alt="Global Multi-Modal Logistics & Trade Solutions"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Benefits Banner */}
        <ServicesBenefitsBanner benefits={serviceBenefits} />

        {/* Statistics Row */}
        <ServicesStatisticsRow statistics={serviceStatistics} />
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
          padding: '42px 24px 36px 24px',
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
            <Sparkles size={12} color="#FF6F00" />
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
        <div
          className="process-hero-wrapper"
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Process Area */}
          <div style={{ flex: '1 1 540px' }}>
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

          {/* Right Hero Image Container */}
          <div
            className="process-hero-image-container"
            style={{
              flex: '0 0 320px',
              maxWidth: '380px',
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 6px 20px rgba(15, 23, 42, 0.08)',
            }}
          >
            <img
              src="/how-it-works-hero.jpg"
              alt="How Global Link Works - Process & Multi-Modal Logistics"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Trust Banner */}
        <ProcessTrustBanner items={howItWorksTrustItems} />

        {/* Statistics Row */}
        <ProcessStatisticsRow statistics={howItWorksStats} />
      </section>

      {/* 15. Track Your Shipment + Warehousing & Distribution Section (Screen 9) */}
      <section
        id="tracking-warehousing-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 0 28px 0',
          background: '#FFFFFF',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 111, 0, 0.16)',
          boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)',
        }}
      >
        {/* UPPER: TRACK YOUR SHIPMENT */}
        <div
          id="tracking-section"
          style={{
            position: 'relative',
            padding: '38px 24px 26px 24px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 100%)',
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
              <Sparkles size={12} color="#FF6F00" />
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
                REAL-TIME CARGO TELEMETRY
              </span>
            </div>
          </div>

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
            Track Your <span style={{ color: '#FF6F00' }}>Shipment</span>
          </h2>

          {/* Glowing Gradient Divider */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
            <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #FF6F00)' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
            <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #FF6F00, transparent)' }} />
          </div>

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
            Real-time updates. Complete visibility across every mile.
          </p>

          <div
            className="tracking-hero-grid"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            {/* Left Content Area */}
            <div style={{ flex: '1 1 540px' }}>
              <TrackingForm
                onTrack={(query) => {
                  setActiveTrackingStep(Math.floor(Math.random() * 3) + 4);
                }}
              />

              <TrackingTimeline
                stages={trackingTimelineStages}
                loading={isLoading}
                activeStep={activeTrackingStep}
              />

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '14px' }}>
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(255, 111, 0, 0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openModal('track')}
                  className="view-all-shipments-btn"
                  style={{
                    padding: '10px 24px',
                    background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
                    borderRadius: '999px',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 4px 16px rgba(255, 111, 0, 0.28)',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                >
                  <span>View All Shipments</span>
                  <ArrowRight size={16} strokeWidth={2.5} color="#FFFFFF" />
                </motion.button>
              </div>
            </div>

            {/* Right Visual & Feature Card */}
            <div
              className="tracking-visual-area"
              style={{
                flex: '0 0 320px',
                maxWidth: '380px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <img
                src="/track-shipment-hero.jpg"
                alt="Global Shipment Tracking & Multi-Modal Visibility"
                style={{
                  width: '100%',
                  height: '175px',
                  objectFit: 'cover',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.06)',
                  display: 'block',
                }}
              />

              <TrackingFeatureCard features={trackingFeatures} />
            </div>
          </div>
        </div>

        {/* LOWER: WAREHOUSING & DISTRIBUTION */}
        <div
          id="warehousing-section"
          style={{
            position: 'relative',
            padding: '38px 24px 30px 24px',
            background: 'linear-gradient(180deg, #FFFDF9 0%, #FFF8F0 100%)',
            borderTop: '1px solid rgba(255, 111, 0, 0.14)',
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
              <Sparkles size={12} color="#FF6F00" />
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

          <div
            className="warehousing-main-grid"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            {/* Left Capabilities Area */}
            <div style={{ flex: '1 1 500px' }}>
              <WarehousingCapabilities
                capabilities={warehousingCapabilities}
                onExploreClick={() => openModal('quote')}
              />
            </div>

            {/* Right Information Panels Area */}
            <div
              className="warehousing-info-area"
              style={{
                flex: '1 1 420px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <WarehouseStatsCard stats={warehouseStats} />
              <WhyChooseUsBanner items={whyChooseUsItems} />
            </div>
          </div>
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
          padding: '42px 24px 36px 24px',
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
            <Sparkles size={12} color="#FF6F00" />
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

        {/* Statistics Banner */}
        <BuyerStatsBanner statistics={buyerStatistics} />

        {/* Trust Statements Row */}
        <BuyerTrustRow statements={buyerTrustStatements} />
      </section>

      {/* 17. Global Network Section (Screen 13) */}
      <section
        id="global-network-section"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: '0 0 28px 0',
          padding: '42px 24px 36px 24px',
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
            <Sparkles size={12} color="#FF6F00" />
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
              EXPANSIVE WORLDWIDE LOGISTICS FOOTPRINT
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
          Global <span style={{ color: '#FF6F00' }}>Network</span>
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
          One Network. Multiple Markets. Continuous Connectivity.
        </p>

        {/* Large Network Map Graphic */}
        <NetworkMapGraphic loading={isLoading} />

        {/* 4 Network Statistics */}
        <NetworkStatsRow stats={globalNetworkStats} />

        {/* Explore Our Network CTA Button */}
        <NetworkCtaButton onClick={() => openModal('quote')} />
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
          padding: '42px 24px 36px 24px',
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
            <Sparkles size={12} color="#FF6F00" />
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
          padding: '42px 24px 36px 24px',
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
            <Sparkles size={12} color="#FF6F00" />
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

        {/* Customer Testimonial Card with Carousel Navigation */}
        <TestimonialCard
          testimonial={testimonialsData[currentTestimonialIndex]}
          loading={isLoading}
          onPrev={() =>
            setCurrentTestimonialIndex((prev) =>
              prev === 0 ? testimonialsData.length - 1 : prev - 1
            )
          }
          onNext={() =>
            setCurrentTestimonialIndex((prev) =>
              prev === testimonialsData.length - 1 ? 0 : prev + 1
            )
          }
        />

        {/* Partner Logos Row */}
        <PartnerLogosRow partners={partnerLogos} />

        {/* Bottom Statistics Banner */}
        <TrustStatsBanner stats={trustStatsData} />
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
