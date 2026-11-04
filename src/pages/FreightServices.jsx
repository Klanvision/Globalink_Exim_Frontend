import { useLoading } from '../context/LoadingContext';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { TopDecoration } from '../components/freight/TopDecoration';
import { FreightCard } from '../components/freight/FreightCard';
import { TrustBar } from '../components/freight/TrustBar';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import { Plane, Ship, Truck, TrainFront, Globe, Sparkles } from 'lucide-react';

export const FreightServices = ({ onNavigate }) => {
  const { isLoading } = useLoading();
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
          paddingTop: '42px',
          paddingBottom: '30px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 111, 0, 0.07) 0%, #FFFFFF 65%)'
        }}
      >
        {/* Top Left Decorative Shape */}
        <TopDecoration />

        {/* Subtle World Map Watermark Top Right - Warm Orange */}
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
          <Globe size={420} strokeWidth={0.75} />
        </div>

        {/* 2. Main Page Titles with High-End Animations */}
        <div
          style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
            marginBottom: '30px',
            padding: '0 20px'
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

          <motion.h1
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
          </motion.h1>

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

        {/* 3. 4-Column Freight Cards Grid */}
        <div
          className="freight-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '18px',
            margin: '0 24px',
            position: 'relative',
            zIndex: 2
          }}
        >
          {cardsData.map((card, idx) => (
            <FreightCard
              key={card.id}
              loading={isLoading}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
              bullets={card.bullets}
              image={card.image}
              buttonText={card.buttonText}
              delay={idx * 0.1}
              onExplore={() => openModal('quote')}
            />
          ))}
        </div>

        {/* 4. Horizontal Trust Section */}
        <div style={{ padding: '0 24px' }}>
          <TrustBar style={{ margin: '30px 0 0 0' }} />
        </div>
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
