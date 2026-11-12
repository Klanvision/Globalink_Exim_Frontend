import { useLoading } from '../context/LoadingContext';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { FreightCard } from '../components/freight/FreightCard';
import { TrustBar } from '../components/freight/TrustBar';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import { Plane, Ship, Truck, TrainFront, Globe } from 'lucide-react';

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
        maxWidth: '100%',
        margin: '0',
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

      {/* Main Page Canvas with High-Premium Architectural Background */}
      <main
        style={{
          position: 'relative',
          paddingTop: '46px',
          paddingBottom: '36px',
          paddingLeft: 'var(--section-horizontal-padding, 132px)',
          paddingRight: 'var(--section-horizontal-padding, 132px)',
          background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 18%, #FFFDF9 50%, #FFFFFF 82%, #F8FAFC 100%)',
          backgroundImage: 'radial-gradient(rgba(249, 115, 22, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
          overflow: 'hidden',
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
          <Globe size={420} strokeWidth={0.75} />
        </div>

        {/* 2. Main Page Titles with High-End Animations */}
        <div
          style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
            marginBottom: '32px',
            padding: '0 20px'
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

          <motion.h1
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
            margin: '0',
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
        <div style={{ padding: '0' }}>
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
