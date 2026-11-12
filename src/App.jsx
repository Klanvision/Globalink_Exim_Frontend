import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home } from './pages/Home';
import { FreightServices } from './pages/FreightServices';
import { FeaturedProducts } from './pages/FeaturedProducts';
import { Procurement } from './pages/Procurement';
import { Documentation } from './pages/Documentation';
import { QualityAssurance } from './pages/QualityAssurance';
import { Services } from './pages/Services';
import { HowItWorks } from './pages/HowItWorks';
import { TrackShipment } from './pages/TrackShipment';
import { Products } from './pages/Products';
import { Buyers } from './pages/Buyers';
import { CustomsCompliance } from './pages/CustomsCompliance';
import { GlobalNetwork } from './pages/GlobalNetwork';
import { WhyBusinessesChooseUs } from './pages/WhyBusinessesChooseUs';
import { BusinessGlobal } from './pages/BusinessGlobal';
import { TrustedBusinesses } from './pages/TrustedBusinesses';
import { PortalLogin } from './pages/PortalLogin';

import { AirplaneScrollbar } from './components/common/AirplaneScrollbar';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import {
  TopProgressBar,
  LiveTelemetryBadge,
} from './components/common/Skeleton';

function AppContent() {
  const [currentRoute, setCurrentRoute] = useState('home');

  const handleNavigate = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const portalRoutes = [
    'client-access',
    'strategic-partners',
    'global-export',
    'global-import',
    'supplier-network',
    'logistics-operations',
    'enterprise-employee'
  ];

  const renderContent = () => {
    if (portalRoutes.includes(currentRoute)) {
      return <PortalLogin onNavigate={handleNavigate} type={currentRoute} />;
    }

    if (currentRoute === 'trusted-businesses' || currentRoute === 'testimonials') {
      return <TrustedBusinesses onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'business-global' || currentRoute === 'cta') {
      return <BusinessGlobal onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'why-choose-us' || currentRoute === 'advantages') {
      return <WhyBusinessesChooseUs onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'network' || currentRoute === 'global-network') {
      return <GlobalNetwork onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'customs-compliance' || currentRoute === 'compliance' || currentRoute === 'services/customs-compliance') {
      return <CustomsCompliance onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'buyers' || currentRoute === 'global-buyers') {
      return <Buyers onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'track-shipment' || currentRoute === 'tracking' || currentRoute === 'warehousing') {
      return <TrackShipment onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'how-it-works' || currentRoute === 'how-global-link-works') {
      return <HowItWorks onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'quality' || currentRoute === 'quality-assurance') {
      return <QualityAssurance onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'documentation' || currentRoute === 'resources') {
      return <Documentation onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'procurement') {
      return <Procurement onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'services' || currentRoute === 'services-overview') {
      return <Services onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'freight') {
      return <FreightServices onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'products' || currentRoute === 'portfolio') {
      return <Products onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'featured-products') {
      return <FeaturedProducts onNavigate={handleNavigate} />;
    }

    return <Home onNavigate={handleNavigate} />;
  };

  return (
    <>
      <AirplaneScrollbar />
      <TopProgressBar />
      <LiveTelemetryBadge />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentRoute}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  );
}
