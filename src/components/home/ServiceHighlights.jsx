import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Package, Network, ShieldCheck, Leaf } from 'lucide-react';

const SPRING = { type: 'spring', stiffness: 460, damping: 24 };

const HighlightCard = ({ icon: Icon, title, description, isLast, delay }) => {
  const [hovered, setHovered] = useState(false);
  const shimmer = useAnimation();

  const onEnter = () => {
    setHovered(true);
    shimmer.start({ x: ['-120%', '160%'], transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } });
  };
  const onLeave = () => {
    setHovered(false);
    shimmer.set({ x: '-120%' });
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
        gap: '12px',
        borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.22)',
        paddingRight: isLast ? '0' : '16px',
        cursor: 'default',
        position: 'relative',
      }}
    >
      {/* Warm glow pill on hover */}
      <motion.div
        variants={{ hov: { opacity: 1, scaleX: 1 } }}
        initial={{ opacity: 0, scaleX: 0.6 }}
        transition={{ type: 'spring', stiffness: 480, damping: 32 }}
        style={{
          position: 'absolute',
          inset: '-6px 0',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          transformOrigin: 'left',
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
        <motion.span
          animate={shimmer}
          initial={{ x: '-120%' }}
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

      {/* Text Container */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <motion.div
          variants={{ hov: { x: 2 } }}
          transition={SPRING}
          style={{
            fontSize: '13px',
            fontWeight: '700',
            color: '#FFFFFF',
            fontFamily: 'var(--font-body)',
            display: 'inline-block',
          }}
        >
          {title}
        </motion.div>
        <motion.div
          variants={{ hov: { x: 2 } }}
          transition={{ ...SPRING, delay: 0.03 }}
          style={{
            fontSize: '10.5px',
            color: 'rgba(255, 255, 255, 0.88)',
            fontFamily: 'var(--font-body)',
            fontWeight: '400',
            marginTop: '2px',
            display: 'inline-block',
          }}
        >
          {description}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const ServiceHighlights = ({ containerStyle = {} }) => {
  const highlights = [
    { icon: Package,    title: 'End-to-End Solutions',    description: 'From sourcing to final delivery' },
    { icon: Network,    title: 'Smart Logistics Network', description: 'Faster routes. Lower costs.' },
    { icon: ShieldCheck,title: 'Secure & Compliant',      description: 'Safe, legal & hassle-free' },
    { icon: Leaf,       title: 'Sustainable Future',      description: 'Responsible trade for tomorrow' },
  ];

  return (
    <div
      className="service-highlights-grid"
      style={{
        width: '100%',
        boxSizing: 'border-box',
        margin: '0',
        ...containerStyle,
        background: 'linear-gradient(90deg, #F95A00 0%, #FF6C00 45%, #FF7B00 100%)',
        border: '1px solid rgba(255, 255, 255, 0.22)',
        borderRadius: '12px',
        padding: '12px 18px',
        minHeight: '66px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        alignItems: 'center',
        gap: '14px',
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
      {highlights.map((item, index) => (
        <HighlightCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          isLast={index === highlights.length - 1}
          delay={index * 0.07}
        />
      ))}
    </div>
  );
};
