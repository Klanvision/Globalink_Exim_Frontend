import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Globe, ShieldCheck, Package, Truck, Headphones } from 'lucide-react';

const SPRING = { type: 'spring', stiffness: 460, damping: 24 };

const TrustItem = ({ item, isLast, isFirst, index }) => {
  const [hovered, setHovered] = useState(false);
  const shimmer = useAnimation();
  const Icon = item.icon;

  const handleMouseEnter = () => {
    setHovered(true);
    shimmer.start({
      x: ['-110%', '160%'],
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    shimmer.set({ x: '-110%' });
  };

  const particles = [
    { left: '20%', delay: 0, dx: -2 },
    { left: '50%', delay: 0.08, dx: 0 },
    { left: '76%', delay: 0.15, dx: 2 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover="hov"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        borderRight: isLast ? 'none' : '1px solid rgba(255, 111, 0, 0.15)',
        paddingRight: isLast ? '0' : '14px',
        paddingLeft: isFirst ? '0' : '14px',
        cursor: 'default',
        position: 'relative',
      }}
    >
      {/* Glow pill background */}
      <motion.div
        variants={{ hov: { opacity: 1, scaleX: 1 } }}
        initial={{ opacity: 0, scaleX: 0.7 }}
        transition={{ type: 'spring', stiffness: 480, damping: 32 }}
        style={{
          position: 'absolute',
          inset: '-4px 2px',
          background: 'linear-gradient(90deg, rgba(255, 243, 224, 0.7) 0%, rgba(255, 224, 178, 0.35) 100%)',
          borderRadius: '8px',
          transformOrigin: 'left center',
          pointerEvents: 'none',
        }}
      />

      {/* Circular Icon Badge */}
      <motion.div
        variants={{ hov: { scale: 1.08, y: -2, boxShadow: '0 6px 16px rgba(255, 111, 0, 0.28)' } }}
        transition={SPRING}
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: hovered
            ? 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)'
            : '#FFF7ED',
          border: hovered
            ? '1.5px solid #FF6F00'
            : '1.5px solid rgba(255, 111, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FF6F00',
          flexShrink: 0,
          boxShadow: '0 2px 5px rgba(255, 111, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <motion.span
          animate={shimmer}
          initial={{ x: '-110%' }}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '55%',
            skewX: '-15deg',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.75) 50%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />

        {particles.map((p, i) => (
          <motion.span
            key={i}
            animate={hovered
              ? { y: [-1, -12, -20], opacity: [0, 0.9, 0], x: p.dx }
              : { y: 0, opacity: 0 }
            }
            transition={{ duration: 0.6, delay: p.delay, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              bottom: '10%',
              left: p.left,
              width: '2px',
              height: '2px',
              borderRadius: '50%',
              background: '#FF6F00',
              boxShadow: '0 0 3px rgba(255, 111, 0, 0.85)',
              pointerEvents: 'none',
              zIndex: 4,
            }}
          />
        ))}

        <Icon size={17} strokeWidth={1.8} style={{ zIndex: 2 }} />
      </motion.div>

      {/* Typography */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={{ hov: { x: 2, color: '#FF6F00' } }}
          transition={SPRING}
          style={{
            fontSize: '11.5px',
            fontWeight: '700',
            color: '#0F172A',
            letterSpacing: '0.03em',
            fontFamily: 'var(--font-body)',
            textTransform: 'uppercase',
            lineHeight: 1.2,
          }}
        >
          {item.title}
        </motion.div>
        <div
          style={{
            fontSize: '10px',
            color: '#64748B',
            marginTop: '1.5px',
            fontWeight: '400',
            lineHeight: 1.25,
          }}
        >
          {item.desc}
        </div>
      </div>
    </motion.div>
  );
};

export const ProductTrustBar = () => {
  const trustItems = [
    { icon: Globe, title: 'Global Sourcing', desc: 'Trusted suppliers worldwide' },
    { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Strict quality checks & standards' },
    { icon: Package, title: 'Secure Packaging', desc: 'Safe & durable packaging' },
    { icon: Truck, title: 'On-time Delivery', desc: 'Reliable & timely shipments' },
    { icon: Headphones, title: '24/7 Support', desc: "We're here to help you anytime" },
  ];

  return (
    <div
      className="product-trust-container"
      style={{
        margin: '24px 0 0 0',
        padding: '14px 20px',
        borderRadius: '14px',
        background: '#FFFFFF',
        border: '1px solid rgba(255, 111, 0, 0.22)',
        boxShadow: '0 4px 18px rgba(255, 111, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {trustItems.map((item, index) => (
        <TrustItem
          key={index}
          index={index}
          item={item}
          isFirst={index === 0}
          isLast={index === trustItems.length - 1}
        />
      ))}
    </div>
  );
};
