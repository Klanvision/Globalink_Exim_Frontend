import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Globe2, Package, Ship, Handshake, Users, Clock3 } from 'lucide-react';

const SPRING = { type: 'spring', stiffness: 460, damping: 24 };

const StatCard = ({ icon: Icon, number, label, isLast, delay }) => {
  const [hovered, setHovered] = useState(false);
  const shimmer = useAnimation();

  const onEnter = () => {
    setHovered(true);
    shimmer.start({
      x: ['-110%', '160%'],
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    });
  };
  const onLeave = () => {
    setHovered(false);
    shimmer.set({ x: '-110%' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      whileHover="hov"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.22)',
        padding: '0 8px',
        cursor: 'default',
        position: 'relative',
      }}
    >
      {/* Warm hover glow pill */}
      <motion.div
        variants={{ hov: { opacity: 1, scaleX: 1 } }}
        initial={{ opacity: 0, scaleX: 0.6 }}
        transition={{ type: 'spring', stiffness: 480, damping: 32 }}
        style={{
          position: 'absolute',
          inset: '-6px 2px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          transformOrigin: 'center',
          pointerEvents: 'none',
        }}
      />

      {/* Circular Icon Badge */}
      <motion.div
        variants={{ hov: { y: -3, scale: 1.12, boxShadow: '0 6px 18px rgba(0,0,0,0.25)' } }}
        transition={SPRING}
        style={{
          flexShrink: 0,
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.18)',
          border: '1.5px solid rgba(255, 255, 255, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(2px)',
        }}
      >
        {/* Shimmer sweep */}
        <motion.span
          animate={shimmer}
          initial={{ x: '-110%' }}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '55%',
            skewX: '-12deg',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
        <Icon size={18} color="#FFFFFF" strokeWidth={1.8} style={{ zIndex: 1 }} />
      </motion.div>

      {/* Number + Label */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <motion.span
          variants={{ hov: { x: 2 } }}
          transition={SPRING}
          style={{
            fontSize: '22px',
            fontWeight: '800',
            fontFamily: 'var(--font-body)',
            color: '#FFFFFF',
            letterSpacing: '-0.3px',
            display: 'inline-block',
            lineHeight: 1.05,
          }}
        >
          {number}
        </motion.span>
        <motion.span
          variants={{ hov: { x: 2 } }}
          transition={{ ...SPRING, delay: 0.03 }}
          style={{
            fontSize: '10.5px',
            color: 'rgba(255, 255, 255, 0.88)',
            fontFamily: 'var(--font-body)',
            fontWeight: '500',
            marginTop: '2px',
            display: 'inline-block',
            lineHeight: 1.2,
          }}
        >
          {label}
        </motion.span>
      </div>
    </motion.div>
  );
};

export const StatisticsBar = ({ containerStyle = {} }) => {
  const stats = [
    { icon: Globe2,    number: '150+',   label: 'Countries Connected' },
    { icon: Package,   number: '500+',   label: 'Products Traded' },
    { icon: Ship,      number: '1,500+', label: 'Shipments Managed' },
    { icon: Handshake, number: '250+',   label: 'Global Partners' },
    { icon: Users,     number: '50+',    label: 'Trusted Suppliers' },
    { icon: Clock3,    number: '98%',    label: 'On-Time Delivery' },
  ];

  return (
    <div
      className="statistics-grid"
      style={{
        width: '100%',
        boxSizing: 'border-box',
        margin: '0',
        ...containerStyle,
        background: 'linear-gradient(90deg, #F95A00 0%, #FF6C00 45%, #FF7B00 100%)',
        border: '1px solid rgba(255, 255, 255, 0.22)',
        borderRadius: '12px',
        minHeight: '74px',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        alignItems: 'center',
        padding: '12px 14px',
        boxShadow: '0 4px 20px rgba(249, 90, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.35)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot-pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
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
        <StatCard
          key={index}
          icon={item.icon}
          number={item.number}
          label={item.label}
          isLast={index === stats.length - 1}
          delay={index * 0.06}
        />
      ))}
    </div>
  );
};
