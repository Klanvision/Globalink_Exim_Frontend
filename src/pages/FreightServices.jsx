import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { TopDecoration } from '../components/freight/TopDecoration';
import { FreightCard } from '../components/freight/FreightCard';
import { TrustBar } from '../components/freight/TrustBar';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import { Plane, Ship, Truck, TrainFront, Globe } from 'lucide-react';

export const FreightServices = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('track');

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const cardsData = [
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
    <div
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '100vh',
        background: '#FFFFFF',
        position: 'relative',
        boxShadow: '0 0 40px rgba(0,0,0,0.1)',
        overflowX: 'clip'
      }}
    >
      {/* 1. Shared Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="services"
        onNavigate={onNavigate}
      />

      {/* Main Page Canvas with Light Background & Map Watermark */}
      <main
        style={{
          position: 'relative',
          paddingTop: '32px',
          paddingBottom: '20px',
          background: '#FFFFFF'
        }}
      >
        {/* Top Left Decorative Shape */}
        <TopDecoration />

        {/* Subtle World Map Watermark Top Right */}
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

        {/* 2. Main Page Titles */}
        <div
          style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
            marginBottom: '32px',
            padding: '0 20px'
          }}
        >
          <h1
            style={{
              fontSize: '52px',
              fontWeight: '800',
              color: '#092554',
              lineHeight: '1.1',
              letterSpacing: '-0.5px',
              fontFamily: 'var(--font-body)',
              marginBottom: '10px'
            }}
          >
            Your Global Freight, Our Priority
          </h1>

          {/* Subtitle with Gold Horizontal Lines */}
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
                fontSize: '28px',
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

        {/* 3. 4-Column Freight Cards Grid */}
        <div
          className="freight-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            margin: '0 28px',
            position: 'relative',
            zIndex: 2
          }}
        >
          {cardsData.map((card) => (
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

        {/* 4. Horizontal Trust Section */}
        <TrustBar />
      </main>

      {/* 5. Common Global Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Interactive Track & Quote Modal */}
      <TrackModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultType={modalType}
      />
    </div>
  );
};
