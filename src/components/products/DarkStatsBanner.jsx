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
      transition: { duration: 0.52, ease: [0.4, 0, 0.2, 1] },
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
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -2 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        borderRight: isLast ? 'none' : '1px solid #FED7AA',
        padding: '0 14px',
        position: 'relative',
        zIndex: 2,
        cursor: 'default',
      }}
    >
      {/* Subtle Warm Hover Pill Backdrop */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0.85 }}
        transition={{ type: 'spring', stiffness: 480, damping: 32 }}
        style={{
          position: 'absolute',
          inset: '-6px 4px',
          background: 'linear-gradient(90deg, rgba(255, 247, 237, 0.95) 0%, rgba(255, 237, 213, 0.45) 100%)',
          borderRadius: '10px',
          transformOrigin: 'center',
          pointerEvents: 'none',
        }}
      />

      {/* Luxury Circular Icon Badge */}
      <motion.div
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={SPRING}
        style={{
          width: '42px',
          height: '42px',
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
          position: 'relative',
          overflow: 'hidden',
          boxShadow: hovered
            ? '0 6px 16px rgba(234, 88, 12, 0.22)'
            : '0 2px 6px rgba(234, 88, 12, 0.06)',
          transition: 'all 0.25s ease',
          zIndex: 2,
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
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.85) 50%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
        <Icon size={20} strokeWidth={2.4} style={{ zIndex: 2 }} />
      </motion.div>

      {/* Number & Label — Styled in Navbar Reference Style */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15, zIndex: 2 }}>
        <motion.span
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={SPRING}
          style={{
            fontSize: '25px',
            fontWeight: '800',
            color: hovered ? '#EA580C' : '#1E293B',
            fontFamily: 'var(--font-body)',
            letterSpacing: '-0.02em',
            transition: 'color 0.22s ease',
          }}
        >
          {item.number}
        </motion.span>
        <span
          style={{
            fontSize: '11px',
            fontWeight: '700',
            color: hovered ? '#334155' : '#64748B',
            marginTop: '3px',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            transition: 'color 0.22s ease',
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
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 50%, #FFF8F0 100%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        alignItems: 'center',
        padding: '18px 20px',
        boxShadow: '0 8px 30px rgba(15, 23, 42, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
        border: '1.5px solid #FED7AA',
      }}
      className="dark-stats-grid"
    >
      {/* Top Sunset Glow Accent Ribbon */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #FF8C00 0%, #FFA800 50%, #FF7A00 100%)',
          zIndex: 3,
        }}
      />

      {/* Subtle Architectural Dot Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(234, 88, 12, 0.05) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
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
