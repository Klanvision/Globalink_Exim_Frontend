import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Globe2, Users, Package, Award, BarChart3 } from 'lucide-react';

const SPRING = { type: 'spring', stiffness: 460, damping: 24 };

const StatItem = ({ item, isLast, index }) => {
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -2 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.25)',
        padding: '0 12px',
        position: 'relative',
        zIndex: 2,
        cursor: 'default',
      }}
    >
      {/* Circular icon badge with shimmer */}
      <motion.div
        animate={{ scale: hovered ? 1.12 : 1 }}
        transition={SPRING}
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.2)',
          border: '1.5px solid rgba(255, 255, 255, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
        }}
      >
        <motion.span
          animate={shimmer}
          initial={{ x: '-110%' }}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '60%',
            skewX: '-15deg',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
        <Icon size={20} strokeWidth={1.8} style={{ zIndex: 2 }} />
      </motion.div>

      {/* Number & Label */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <motion.span
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={SPRING}
          style={{
            fontSize: '24px',
            fontWeight: '900',
            color: '#FFFFFF',
            fontFamily: "'Georgia', serif",
            letterSpacing: '-0.3px',
          }}
        >
          {item.number}
        </motion.span>
        <span
          style={{
            fontSize: '11px',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.92)',
            marginTop: '2px',
            fontFamily: 'var(--font-body)',
          }}
        >
          {item.label}
        </span>
      </div>
    </motion.div>
  );
};

export const DarkStatsBanner = () => {
  const stats = [
    { icon: Globe2, number: '50+', label: 'Countries Served' },
    { icon: Users, number: '1,000+', label: 'Happy Clients' },
    { icon: Package, number: '5,000+', label: 'Products Delivered' },
    { icon: Award, number: '99%', label: 'Client Satisfaction' },
    { icon: BarChart3, number: '10+', label: 'Years of Excellence' },
  ];

  return (
    <div
      style={{
        margin: '24px 0 0 0',
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '88px',
        background: 'linear-gradient(90deg, #F95A00 0%, #FF6C00 45%, #FF7B00 100%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        alignItems: 'center',
        padding: '16px 20px',
        boxShadow: '0 6px 24px rgba(249, 90, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.35)',
        border: '1px solid rgba(255, 255, 255, 0.22)',
      }}
      className="dark-stats-grid"
    >
      {/* Background dot pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Shine overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(0,0,0,0.04) 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {stats.map((item, index) => (
        <StatItem
          key={index}
          item={item}
          index={index}
          isLast={index === stats.length - 1}
        />
      ))}
    </div>
  );
};
