import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SPRING = { type: 'spring', stiffness: 440, damping: 24 };

export const ProcessStep = ({ step, isLast, index = 0 }) => {
  const [hovered, setHovered] = useState(false);
  const shimmer = useAnimation();
  const Icon = step.icon;

  const handleMouseEnter = () => {
    setHovered(true);
    shimmer.start({
      x: ['-110%', '160%'],
      transition: { duration: 0.55, ease: 'easeInOut' },
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    shimmer.start({
      x: '-110%',
      transition: { duration: 0.2, ease: 'easeOut' },
    });
  };

  return (
    <motion.div
      className="procurement-step-item"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        flex: '1 1 0',
        minWidth: '92px',
        maxWidth: '125px',
        position: 'relative',
        padding: '6px 4px 8px 4px',
        cursor: 'pointer',
        boxSizing: 'border-box',
      }}
    >
      {/* Subtle Warm Hover Card Backdrop */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.94 }}
        transition={{ type: 'spring', stiffness: 450, damping: 28 }}
        style={{
          position: 'absolute',
          inset: '0 -2px',
          background: 'linear-gradient(180deg, rgba(255, 247, 237, 0.95) 0%, rgba(255, 237, 213, 0.4) 100%)',
          borderRadius: '12px',
          border: '1px solid #FED7AA',
          boxShadow: '0 4px 14px rgba(234, 88, 12, 0.08)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Circle Container with Luxury Amber / Sunset Theme */}
      <motion.div
        className="procurement-step-circle"
        animate={{
          scale: hovered ? 1.08 : 1,
          borderColor: hovered ? '#FB923C' : '#FED7AA',
          backgroundColor: hovered ? '#FFF7ED' : '#FFFFFF',
          boxShadow: hovered
            ? '0 6px 18px rgba(234, 88, 12, 0.22)'
            : '0 2px 8px rgba(15, 23, 42, 0.04)',
        }}
        transition={SPRING}
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          borderWidth: '1.5px',
          borderStyle: 'solid',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#EA580C',
          marginBottom: '8px',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
          zIndex: 1,
        }}
      >
        {/* Shimmer sweep effect sitting BEHIND the icon */}
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
            zIndex: 2,
          }}
        />

        {/* Lucide Icon placed at zIndex 4 - NEVER obscured or missing on hover */}
        <div style={{ position: 'relative', zIndex: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={23} strokeWidth={2.1} color="#EA580C" />
        </div>
      </motion.div>

      {/* Step Number Badge */}
      <motion.div
        animate={{
          scale: hovered ? 1.05 : 1,
          backgroundColor: hovered ? '#EA580C' : 'rgba(255, 247, 237, 0.95)',
          color: hovered ? '#FFFFFF' : '#EA580C',
          borderColor: hovered ? '#EA580C' : '#FED7AA',
          boxShadow: hovered ? '0 2px 8px rgba(234, 88, 12, 0.3)' : 'none',
        }}
        transition={SPRING}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2px 7px',
          borderRadius: '999px',
          borderWidth: '1px',
          borderStyle: 'solid',
          fontSize: '9.5px',
          fontWeight: '800',
          letterSpacing: '0.04em',
          marginBottom: '5px',
          fontFamily: 'var(--font-body)',
          zIndex: 1,
        }}
      >
        STEP 0{index + 1}
      </motion.div>

      {/* Step Title */}
      <h3
        style={{
          fontSize: '12px',
          fontWeight: '800',
          color: hovered ? '#EA580C' : '#1E293B',
          lineHeight: '1.2',
          letterSpacing: '-0.2px',
          marginBottom: '3px',
          whiteSpace: 'pre-line',
          minHeight: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-body)',
          transition: 'color 0.2s ease',
          zIndex: 1,
        }}
      >
        {step.title}
      </h3>

      {/* Step Description */}
      <p
        style={{
          fontSize: '10.5px',
          lineHeight: '1.25',
          color: hovered ? '#334155' : '#64748B',
          whiteSpace: 'pre-line',
          fontWeight: '500',
          fontFamily: 'var(--font-body)',
          margin: 0,
          zIndex: 1,
          transition: 'color 0.2s ease',
        }}
      >
        {step.description}
      </p>
    </motion.div>
  );
};
