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
        gap: '12px',
        borderRight: isLast ? 'none' : '1px solid #FED7AA',
        paddingRight: isLast ? '0' : '14px',
        paddingLeft: isFirst ? '0' : '14px',
        cursor: 'default',
        position: 'relative',
      }}
    >
      {/* Subtle Warm Hover Pill Backdrop */}
      <motion.div
        variants={{ hov: { opacity: 1, scaleX: 1 } }}
        initial={{ opacity: 0, scaleX: 0.85 }}
        transition={{ type: 'spring', stiffness: 480, damping: 32 }}
        style={{
          position: 'absolute',
          inset: '-6px 2px',
          background: 'linear-gradient(90deg, rgba(255, 247, 237, 0.95) 0%, rgba(255, 237, 213, 0.45) 100%)',
          borderRadius: '10px',
          transformOrigin: 'left center',
          pointerEvents: 'none',
        }}
      />

      {/* Circular Icon Badge */}
      <motion.div
        variants={{ hov: { scale: 1.08, y: -2, boxShadow: '0 6px 16px rgba(234, 88, 12, 0.22)' } }}
        transition={SPRING}
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          background: hovered
            ? 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)'
            : '#FFF7ED',
          border: hovered
            ? '1.5px solid #FB923C'
            : '1.5px solid #FED7AA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#EA580C',
          flexShrink: 0,
          boxShadow: '0 2px 6px rgba(234, 88, 12, 0.06)',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 1,
          transition: 'all 0.25s ease',
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
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.85) 50%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />

        <Icon size={18} strokeWidth={2.2} style={{ zIndex: 2 }} />
      </motion.div>

      {/* Typography */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={{ hov: { x: 2, color: '#EA580C' } }}
          transition={SPRING}
          style={{
            fontSize: '11.5px',
            fontWeight: '700',
            color: '#1E293B',
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
            fontSize: '10.5px',
            color: '#64748B',
            marginTop: '2px',
            fontWeight: '400',
            lineHeight: 1.25,
            fontFamily: 'var(--font-body)',
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
        borderRadius: '16px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 100%)',
        border: '1.5px solid #FED7AA',
        boxShadow: '0 4px 18px rgba(15, 23, 42, 0.04)',
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
