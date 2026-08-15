import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/home/Hero';
import { TradeSearch } from '../components/home/TradeSearch';
import { StatisticsBar } from '../components/home/StatisticsBar';
import { ServiceHighlights } from '../components/home/ServiceHighlights';
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
import { Plane, Ship, Truck, TrainFront, Globe, ArrowRight, ChevronRight, ChevronDown } from 'lucide-react';

export const Home = ({ onNavigate }) => {
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
    <div className="page-viewport">
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

      {/* 2. Hero Section */}
      <Hero
        onExploreServices={() => scrollToSection('services-overview-section')}
        onExploreProducts={() => scrollToSection('products-section')}
      />

      {/* 3. Trade Search & Filter Bar */}
      <TradeSearch
        onSearch={() => openModal('track')}
      />

      {/* 4. Statistics Bar */}
      <StatisticsBar />

      {/* 5. Service Highlights */}
      <ServiceHighlights />

      {/* 6. Freight Services Section */}
      <section
        id="services-section"
        style={{
          position: 'relative',
          margin: '35px 28px 0 28px',
          padding: '50px 24px 35px 24px',
          background: '#FFFFFF',
          color: '#092554',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #D9E0E8',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
        }}
      >
        <TopDecoration />

        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'rgba(9, 37, 84, 0.04)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <Globe size={420} strokeWidth={0.75} />
        </div>

        <div
          style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
            marginBottom: '32px'
          }}
        >
          <h2
            style={{
              fontSize: '50px',
              fontWeight: '800',
              color: '#092554',
              lineHeight: '1.1',
              letterSpacing: '-0.5px',
              fontFamily: 'var(--font-body)',
              marginBottom: '10px'
            }}
          >
            Your Global Freight, Our Priority
          </h2>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px'
            }}
          >
            <div style={{ width: '45px', height: '1.5px', backgroundColor: '#F5AD24' }} />
            <span
              style={{
                fontSize: '26px',
                fontWeight: '400',
                color: '#4A5568',
                fontFamily: 'var(--font-body)'
              }}
            >
              Fast. Reliable. Worldwide.
            </span>
            <div style={{ width: '45px', height: '1.5px', backgroundColor: '#F5AD24' }} />
          </div>
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
          {freightCardsData.map((card) => (
            <FreightCard
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
              bullets={card.bullets}
              image={card.image}
              buttonText={card.buttonText}
              onExplore={() => openModal('quote')}
            />
          ))}
        </div>

        <TrustBar style={{ margin: '25px 0 0 0' }} />
      </section>

      {/* 7. Featured Products Section (Screen 3) */}
      <section
        id="products-section"
        style={{
          position: 'relative',
          margin: '35px 28px 0 28px',
          padding: '45px 24px 35px 24px',
          background: '#FAF8F3',
          color: '#082653',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #DDE1E6',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)'
        }}
      >
        {/* Top Decorative Label */}
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

        {/* Main Section Heading */}
        <h2
          style={{
            fontSize: '56px',
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
        </h2>

        {/* Tagline */}
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

        {/* Product Cards Grid with Carousel Arrow */}
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

          <button
            onClick={handleCarouselNext}
            aria-label="Next Products"
            style={{
              position: 'absolute',
              right: '-18px',
              top: '42%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid #DDE1E6',
              color: '#D99A20',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 20px rgba(8, 38, 83, 0.15)',
              zIndex: 10,
              cursor: 'pointer'
            }}
            className="carousel-arrow"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Centered Explore Button */}
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
              boxShadow: '0 4px 16px rgba(16, 45, 90, 0.25)'
            }}
          >
            <span>Explore All Products</span>
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Product Trust Bar */}
        <ProductTrustBar />

        {/* Dark Navy Statistics Banner */}
        <DarkStatsBanner />
      </section>

      {/* 8. Global Product Portfolio Section (Screen 10) */}
      <section
        id="global-portfolio-section"
        style={{
          position: 'relative',
          margin: '35px 28px 0 28px',
          padding: '36px 28px 30px 28px',
          background: '#FAFBFD',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #DDE3EA',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
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
        <h2
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
        </h2>

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

      {/* 9. Procurement Solutions Section (Screen 4) */}
      <section
        id="procurement-section"
        style={{
          position: 'relative',
          margin: '35px 28px 0 28px',
          backgroundImage: "url('/procurement-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #DDE3EA',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
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
          <h2
            style={{
              fontSize: '56px',
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
          </h2>

          {/* Subtitle with Navy & Gold Styling */}
          <div
            style={{
              fontSize: '27px',
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

          {/* 9-Step Horizontal Procurement Process Flow */}
          <div style={{ width: '100%', maxWidth: '1160px', marginBottom: '28px' }}>
            <ProcessFlow steps={procurementSteps} />
          </div>

          {/* Start Procurement CTA Button */}
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

          {/* Why Choose Our Procurement Solutions Section (6 Cards) */}
          <BenefitSection benefits={procurementBenefits} />

          {/* Procurement Message Bar */}
          <ProcurementMessage />
        </div>

        {/* Bottom Dark Navy Statistics Banner */}
        <ProcurementStats stats={procurementStats} />
      </section>

      {/* 9. Documentation & Compliance Section (Screen 5) */}
      <section
        id="documentation-section"
        style={{
          position: 'relative',
          margin: '35px 28px 0 28px',
          paddingTop: '40px',
          background: '#FAFBFC',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #DCE2E9',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Subtle Watermark Trade Lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(ellipse at 80% 20%, rgba(8, 38, 83, 0.035) 0%, transparent 60%),
                              radial-gradient(ellipse at 20% 80%, rgba(8, 38, 83, 0.025) 0%, transparent 50%)`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Hero Top Grid: Left (Text, Categories, CTA) & Right (Realistic Illustration) */}
        <div
          className="doc-hero-wrapper"
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 1,
            padding: '0 36px',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          {/* Left Hero Content Area */}
          <div style={{ flex: '1 1 68%', maxWidth: '780px' }}>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: '44px',
                fontWeight: '700',
                color: '#082653',
                lineHeight: '1.08',
                letterSpacing: '-0.5px',
                marginBottom: '8px',
              }}
            >
              Documentation & Compliance
            </h2>

            <p
              style={{
                fontSize: '18px',
                fontWeight: '400',
                color: '#40516D',
                fontFamily: 'var(--font-body)',
                marginBottom: '6px',
                letterSpacing: '-0.2px',
              }}
            >
              Trade Documentation Made Simple
            </p>

            <DocumentationGrid
              categories={documentationCategories}
              onItemClick={() => openModal('quote')}
            />

            <button
              onClick={() => openModal('quote')}
              className="doc-cta-btn"
              style={{
                width: '320px',
                height: '46px',
                backgroundColor: '#082653',
                borderRadius: '7px',
                color: '#FFFFFF',
                fontSize: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
                boxShadow: '0 4px 14px rgba(8, 38, 83, 0.22)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: 'none',
              }}
            >
              <span>Explore Documentation</span>
              <ArrowRight size={18} strokeWidth={2.5} color="#F4B52E" />
            </button>
          </div>

          {/* Right Hero Image Container */}
          <div
            className="doc-hero-image-container"
            style={{
              flex: '0 0 32%',
              maxWidth: '380px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/documentation-hero.jpg"
              alt="Trade Documentation & Compliance"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '12px',
                filter: 'drop-shadow(0 10px 25px rgba(8, 38, 83, 0.12))',
              }}
            />
          </div>
        </div>

        {/* 5-Column Compliance Benefit Panel */}
        <BenefitPanel benefits={complianceBenefits} />

        {/* Bottom 4-Item Brand Value Strip */}
        <BrandValueBar items={brandValues} />
      </section>

      {/* 10. Customs & Trade Compliance Section (Screen 12) */}
      <section
        id="customs-compliance-section"
        style={{
          position: 'relative',
          margin: '35px 28px 0 28px',
          padding: '36px 28px 24px 28px',
          background: '#FAFBFD',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #DDE3EA',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
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
        <h2
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '34px',
            fontWeight: '700',
            color: '#082653',
            lineHeight: '1.1',
            letterSpacing: '-0.4px',
            textAlign: 'center',
            marginBottom: '6px',
          }}
        >
          Customs & Trade Compliance
        </h2>

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
              backgroundColor: '#082653',
              borderRadius: '10px',
              color: '#FFFFFF',
              fontSize: '14.5px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 20px',
              boxShadow: '0 3px 12px rgba(8, 38, 83, 0.20)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              border: 'none',
            }}
          >
            <span>Learn More</span>
            <ArrowRight size={18} strokeWidth={2.4} color="#F5B73A" />
          </button>
        </div>

        {/* Bottom Logistics Visual & Statistics Section */}
        <CustomsLogisticsSection stats={customsComplianceStats} />
      </section>

      {/* 11. Quality Assurance Section (Screen 6) */}
      <section
        id="quality-section"
        style={{
          position: 'relative',
          margin: '35px 28px 0 28px',
          paddingTop: '40px',
          paddingBottom: '20px',
          background: '#FAFBFD',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #DDE3EA',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Subtle Watermark Gradients */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(ellipse at 85% 20%, rgba(8, 47, 98, 0.04) 0%, transparent 60%),
                              radial-gradient(ellipse at 15% 85%, rgba(232, 165, 42, 0.03) 0%, transparent 50%)`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Hero Top Grid: Left (Heading, Subtitle, 5 Process Items, CTA) & Right (Hero Image) */}
        <div
          className="quality-hero-wrapper"
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 1,
            padding: '0 36px',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          {/* Left Hero Content Area */}
          <div style={{ flex: '1 1 62%', maxWidth: '720px' }}>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: '44px',
                fontWeight: '700',
                color: '#082653',
                lineHeight: '1.08',
                letterSpacing: '-0.5px',
                marginBottom: '8px',
              }}
            >
              Quality Assurance
            </h2>

            <p
              style={{
                fontSize: '18px',
                fontWeight: '400',
                color: '#2F5D96',
                fontFamily: 'var(--font-body)',
                marginBottom: '6px',
                letterSpacing: '-0.2px',
              }}
            >
              Quality You Can Trade With Confidence
            </p>

            <QualityProcess
              steps={qualityProcessSteps}
              onItemClick={() => openModal('quote')}
            />

            <button
              onClick={() => openModal('quote')}
              className="quality-cta-btn"
              style={{
                width: '320px',
                height: '46px',
                backgroundColor: '#082653',
                borderRadius: '7px',
                color: '#FFFFFF',
                fontSize: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
                boxShadow: '0 4px 14px rgba(8, 38, 83, 0.22)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: 'none',
              }}
            >
              <span>Our Quality Process</span>
              <ArrowRight size={18} strokeWidth={2.5} color="#E8A52A" />
            </button>
          </div>

          {/* Right Hero Image Container */}
          <div
            className="quality-hero-image-container"
            style={{
              flex: '0 0 38%',
              maxWidth: '430px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/quality-assurance-hero.jpg"
              alt="Quality Assurance & Scientific Inspection"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '12px',
                filter: 'drop-shadow(0 10px 25px rgba(8, 38, 83, 0.12))',
              }}
            />
          </div>
        </div>

        {/* 3. Main Dark Navy Assurance Banner */}
        <QualityAssuranceBanner items={qualityAssuranceBannerItems} />

        {/* 4. Bottom 5 Supporting Capabilities Section */}
        <SupportingFeatures features={supportingCapabilities} />
      </section>

      {/* 11. End-to-End Global Trade Solutions Section (Screen 7) */}
      <section
        id="services-overview-section"
        style={{
          position: 'relative',
          margin: '35px 28px 0 28px',
          paddingTop: '38px',
          paddingBottom: '28px',
          background: 'linear-gradient(145deg, #051A3B 0%, #020F28 100%)',
          borderRadius: '28px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: 'inset 4px 4px 10px rgba(255, 255, 255, 0.10), inset -6px -6px 14px rgba(0, 0, 0, 0.70), 0 20px 48px rgba(0, 0, 0, 0.50)',
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
          <h2
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
          </h2>

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

            {/* Centered Explore All Services 3D Clay CTA Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <button
                onClick={() => scrollToSection('services-section')}
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

        {/* 3D Clay Benefits Banner */}
        <ServicesBenefitsBanner benefits={serviceBenefits} />

        {/* Bottom 3D Clay Statistics Row */}
        <ServicesStatisticsRow statistics={serviceStatistics} />
      </section>

      {/* 12. How Global Link Works Section (Screen 8) */}
      <section
        id="how-it-works-section"
        style={{
          position: 'relative',
          margin: '35px 28px 0 28px',
          paddingTop: '36px',
          paddingBottom: '20px',
          background: '#FAFBFD',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #DDE3EA',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Subtle Watermark Gradients */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(ellipse at 85% 20%, rgba(8, 47, 98, 0.04) 0%, transparent 60%),
                              radial-gradient(ellipse at 15% 85%, rgba(232, 165, 42, 0.03) 0%, transparent 50%)`,
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
            marginBottom: '18px',
            padding: '0 20px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '44px',
              fontWeight: '700',
              color: '#082653',
              lineHeight: '1.08',
              letterSpacing: '-0.5px',
              marginBottom: '6px',
            }}
          >
            How Global Link Works
          </h2>

          <p
            style={{
              fontSize: '18px',
              fontWeight: '400',
              color: '#082653',
              fontFamily: 'var(--font-body)',
              marginBottom: '10px',
              letterSpacing: '-0.2px',
            }}
          >
            Simple Process. Complete Transparency.{' '}
            <span style={{ color: '#E8A52A', fontWeight: '500' }}>
              On-Time Delivery.
            </span>
          </p>

          {/* Centered Decorative Gold Line */}
          <div
            style={{
              width: '95px',
              height: '3px',
              backgroundColor: '#E8A52A',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* Hero Top Wrapper: Left (6 Process Steps + CTA) & Right (Global Logistics Visual) */}
        <div
          className="process-hero-wrapper"
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 1,
            padding: '0 24px',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          {/* Left Process Area */}
          <div style={{ flex: '1 1 65%', maxWidth: '760px' }}>
            <HowItWorksProcessFlow
              steps={howItWorksSteps}
              onStepClick={() => openModal('quote')}
            />

            {/* Centered Learn More About Our Process CTA Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <button
                onClick={() => openModal('quote')}
                className="process-cta-btn"
                style={{
                  width: '380px',
                  height: '48px',
                  backgroundColor: '#082653',
                  borderRadius: '9px',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 24px',
                  boxShadow: '0 4px 14px rgba(8, 38, 83, 0.22)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: 'none',
                }}
              >
                <span>Learn More About Our Process</span>
                <ArrowRight size={18} strokeWidth={2.5} color="#E8A52A" />
              </button>
            </div>
          </div>

          {/* Right Hero Image Container */}
          <div
            className="process-hero-image-container"
            style={{
              flex: '0 0 35%',
              maxWidth: '390px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/how-it-works-hero.jpg"
              alt="How Global Link Works - Process & Multi-Modal Logistics"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '12px',
                filter: 'drop-shadow(0 10px 25px rgba(8, 38, 83, 0.12))',
              }}
            />
          </div>
        </div>

        {/* 3. Dark Navy Trust Banner */}
        <ProcessTrustBanner items={howItWorksTrustItems} />

        {/* 4. Bottom Clean White Statistics Row */}
        <ProcessStatisticsRow statistics={howItWorksStats} />
      </section>

      {/* 13. Track Your Shipment + Warehousing & Distribution Section (Screen 9) */}
      <section
        id="tracking-warehousing-section"
        style={{
          position: 'relative',
          margin: '35px 28px 0 28px',
          background: '#FAFBFD',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #DDE3EA',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* =========================================================================
            SECTION 1: TRACK YOUR SHIPMENT (Screen 9 Upper)
            ========================================================================= */}
        <div
          id="tracking-section"
          style={{
            position: 'relative',
            padding: '36px 28px 28px 28px',
            background: '#FAFBFD',
          }}
        >
          {/* Top Two-Column Grid */}
          <div
            className="tracking-hero-grid"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            {/* Left Content Area */}
            <div style={{ flex: '1 1 58%', maxWidth: '680px' }}>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '34px',
                  fontWeight: '700',
                  color: '#082653',
                  lineHeight: '1.1',
                  letterSpacing: '-0.4px',
                  marginBottom: '4px',
                }}
              >
                Track Your Shipment
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  fontWeight: '400',
                  color: '#40516D',
                  fontFamily: 'var(--font-body)',
                  marginBottom: '2px',
                  letterSpacing: '-0.1px',
                }}
              >
                Real-time updates. Complete visibility.
              </p>

              <TrackingForm
                onTrack={(query) => {
                  setActiveTrackingStep(Math.floor(Math.random() * 3) + 4);
                }}
              />

              <TrackingTimeline
                stages={trackingTimelineStages}
                activeStep={activeTrackingStep}
              />

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '14px' }}>
                <button
                  onClick={() => openModal('track')}
                  className="view-all-shipments-btn"
                  style={{
                    width: '260px',
                    height: '42px',
                    backgroundColor: '#082653',
                    borderRadius: '7px',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 18px',
                    boxShadow: '0 4px 14px rgba(8, 38, 83, 0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: 'none',
                  }}
                >
                  <span>View All Shipments</span>
                  <ArrowRight size={16} strokeWidth={2.5} color="#E8A52A" />
                </button>
              </div>
            </div>

            {/* Right Visual & Feature Card */}
            <div
              className="tracking-visual-area"
              style={{
                flex: '0 0 32%',
                maxWidth: '330px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
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
                  border: '1px solid #EDF0F3',
                  boxShadow: '0 4px 14px rgba(8, 38, 83, 0.06)',
                  display: 'block',
                  boxSizing: 'border-box',
                }}
              />

              <TrackingFeatureCard features={trackingFeatures} />
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 2: WAREHOUSING & DISTRIBUTION (Screen 9 Lower)
            ========================================================================= */}
        <div
          id="warehousing-section"
          style={{
            position: 'relative',
            padding: '36px 28px 30px 28px',
            backgroundColor: '#F2F7FC',
            borderTop: '1px solid #DDE3EA',
          }}
        >
          <div
            className="warehousing-main-grid"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            {/* Left Capabilities Area */}
            <div style={{ flex: '1 1 52%', maxWidth: '580px' }}>
              <h3
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#082653',
                  lineHeight: '1.1',
                  letterSpacing: '-0.4px',
                  marginBottom: '3px',
                }}
              >
                Warehousing & Distribution
              </h3>

              <p
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#1C5EA8',
                  fontFamily: 'var(--font-body)',
                  marginBottom: '4px',
                  letterSpacing: '-0.1px',
                }}
              >
                Store. Manage. Distribute.
              </p>

              <WarehousingCapabilities
                capabilities={warehousingCapabilities}
                onExploreClick={() => openModal('quote')}
              />
            </div>

            {/* Right Information Panels Area */}
            <div
              className="warehousing-info-area"
              style={{
                flex: '0 0 44%',
                maxWidth: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '6px',
              }}
            >
              <WarehouseStatsCard stats={warehouseStats} />
              <WhyChooseUsBanner items={whyChooseUsItems} />
            </div>
          </div>
        </div>
      </section>

      {/* 14. Global Buyers Section (Screen 11 - Placed Last) */}
      <section
        id="buyers-section"
        style={{
          position: 'relative',
          margin: '35px 28px 0 28px',
          padding: '36px 28px 24px 28px',
          background: '#FAFBFD',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #DDE3EA',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
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
        <h2
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '48px',
            fontWeight: '700',
            color: '#082653',
            lineHeight: '1.08',
            letterSpacing: '-0.5px',
            textAlign: 'center',
            marginBottom: '8px',
          }}
        >
          Global Buyers
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '19px',
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
          onCategoryClick={() => openModal('quote')}
        />

        {/* 2 Large Gold Action Cards */}
        <BuyerActionCards
          actions={buyerActionCards}
          onActionClick={(action) => openModal('quote')}
        />

        {/* Dark Navy Statistics Banner */}
        <BuyerStatsBanner statistics={buyerStatistics} />

        {/* Bottom Clean White Trust Statements Row */}
        <BuyerTrustRow statements={buyerTrustStatements} />
      </section>

      {/* 15. Global Network Section (Screen 13 - Placed Last) */}
      <section
        id="global-network-section"
        style={{
          position: 'relative',
          margin: '35px 28px 0 28px',
          padding: '38px 28px 28px 28px',
          background: '#F7FAFE',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #DDE3EA',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Main Two-Tone Sans-Serif Heading */}
        <h2
          style={{
            fontFamily: 'Inter, Arial, Helvetica, sans-serif',
            fontSize: '36px',
            fontWeight: '800',
            lineHeight: '1.1',
            letterSpacing: '-0.5px',
            textAlign: 'center',
            marginBottom: '4px',
          }}
        >
          <span style={{ color: '#082653' }}>Global </span>
          <span style={{ color: '#0A4FC7' }}>Network</span>
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '15px',
            fontWeight: '400',
            color: '#586579',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '4px',
          }}
        >
          One Network. Multiple Markets.
        </p>

        {/* Large Real World Network Map Graphic */}
        <NetworkMapGraphic />

        {/* 4 Network Statistics */}
        <NetworkStatsRow stats={globalNetworkStats} />

        {/* Explore Our Network CTA Button */}
        <NetworkCtaButton onClick={() => openModal('quote')} />
      </section>

      {/* 16. Why Businesses Choose Us Section (Screen 14 - Placed Last) */}
      <section
        id="why-choose-us-section"
        style={{
          position: 'relative',
          margin: '35px 28px 0 28px',
          padding: '38px 28px 28px 28px',
          background: 'linear-gradient(180deg, #020F2D 0%, #03183B 50%, #061B43 100%)',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #1C355E',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Top Gold Label with decorative lines */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '8px',
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
              color: '#E8A52A',
              letterSpacing: '0.4px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-body)',
            }}
          >
            OUR ADVANTANTAGES
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
        <h2
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '36px',
            fontWeight: '700',
            color: '#FFFFFF',
            lineHeight: '1.1',
            letterSpacing: '-0.4px',
            textAlign: 'center',
            marginBottom: '6px',
          }}
        >
          Why Businesses Choose Us
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '15px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.88)',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            marginBottom: '8px',
          }}
        >
          Delivering value, reliability, and trust every step of the way
        </p>

        {/* 6 Advantages Grid */}
        <AdvantageGrid
          advantages={whyChooseUsAdvantages}
          onAdvantageClick={() => openModal('quote')}
        />

        {/* Bottom Dark Translucent Statistics Banner */}
        <WhyChooseUsStatsBanner stats={whyChooseUsStats} />
      </section>

      {/* 17. Trusted by Businesses Worldwide Section (Screen 16) */}
      <section
        id="trusted-businesses-section"
        style={{
          position: 'relative',
          margin: '35px 28px 0 28px',
          padding: '38px 28px 28px 28px',
          background: 'linear-gradient(180deg, #020F2D 0%, #03183B 52%, #02132F 100%)',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #1C355E',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
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
        <h2
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
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
        </h2>

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

        {/* Customer Testimonial Card with Carousel Navigation */}
        <TestimonialCard
          testimonial={testimonialsData[currentTestimonialIndex]}
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

        {/* 7 Partner Logos Row */}
        <PartnerLogosRow partners={partnerLogos} />

        {/* Bottom 5-Metric Statistics Banner */}
        <TrustStatsBanner stats={trustStatsData} />
      </section>

      {/* 18. Business Global CTA Section (Screen 15) */}
      <BusinessGlobalCTA
        onQuoteClick={() => openModal('quote')}
        onTradeClick={() => openModal('quote')}
        onPartnerClick={() => openModal('quote')}
      />

      {/* 19. Global Link Common Footer (Screen 17) */}
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
