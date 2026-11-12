import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { FreightCardSkeleton } from '../common/Skeleton';

const SPRING = { type: 'spring', stiffness: 460, damping: 24 };

export const FreightCard = ({
  title,
  subtitle,
  icon: Icon,
  bullets = [],
  image,
  buttonText,
  onExplore,
  delay = 0,
  loading = false,
}) => {
  if (loading) {
    return <FreightCardSkeleton />;
  }
  const [isHovered, setIsHovered] = useState(false);
  const shimmer = useAnimation();

  const handleMouseEnter = () => {
    setIsHovered(true);
    shimmer.start({
      x: ['-110%', '160%'],
      transition: { duration: 0.52, ease: [0.4, 0, 0.2, 1] },
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    shimmer.set({ x: '-110%' });
  };

  /* Floating micro-particles around the icon badge */
  const particles = [
    { left: '20%', delay: 0, dx: -2 },
    { left: '48%', delay: 0.08, dx: 0 },
    { left: '72%', delay: 0.15, dx: 2 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6 }}
      style={{
        background: '#FFFFFF',
        border: isHovered
          ? '1px solid rgba(255, 111, 0, 0.75)'
          : '1px solid rgba(255, 111, 0, 0.25)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: isHovered
          ? '0 20px 42px rgba(255, 111, 0, 0.16), 0 0 20px rgba(255, 111, 0, 0.12)'
          : '0 4px 18px rgba(0, 0, 0, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        height: '490px',
        position: 'relative',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        boxSizing: 'border-box',
      }}
      className="freight-card"
    >
      {/* Top Gold-to-Orange Running Glow Strip */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scaleX: isHovered ? 1 : 0.6,
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #FF6F00 0%, #FFA800 50%, #FF6F00 100%)',
          zIndex: 4,
          transformOrigin: 'left center',
        }}
      />

      {/* Top Content Area - Pure White Canvas */}
      <div
        style={{
          padding: '20px 18px 14px 18px',
          position: 'relative',
          zIndex: 2,
          background: '#FFFFFF',
        }}
      >
        {/* Animated Circular Icon Badge - Warm Orange & White */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: isHovered
              ? 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)'
              : '#FFF7ED',
            border: isHovered
              ? '1.5px solid #FF6F00'
              : '1.5px solid rgba(255, 111, 0, 0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FF6F00',
            boxShadow: isHovered
              ? '0 6px 16px rgba(255, 111, 0, 0.3)'
              : '0 2px 6px rgba(255, 111, 0, 0.08)',
            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            overflow: 'hidden',
          }}
        >
          {/* Shimmer sweep effect */}
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

          {/* Floating micro-particles */}
          {particles.map((p, i) => (
            <motion.span
              key={i}
              animate={isHovered
                ? { y: [-1, -14, -22], opacity: [0, 0.9, 0], x: p.dx }
                : { y: 0, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: p.delay, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                bottom: '12%',
                left: p.left,
                width: '2.5px',
                height: '2.5px',
                borderRadius: '50%',
                background: '#FF6F00',
                boxShadow: '0 0 3px rgba(255, 111, 0, 0.9)',
                pointerEvents: 'none',
                zIndex: 4,
              }}
            />
          ))}

          <motion.div
            animate={{
              scale: isHovered ? 1.12 : 1,
              rotate: isHovered ? [0, -5, 5, 0] : 0,
            }}
            transition={{ duration: 0.35 }}
            style={{ display: 'flex', zIndex: 2 }}
          >
            <Icon size={20} strokeWidth={1.8} />
          </motion.div>
        </div>

        {/* Card Title */}
        <h3
          style={{
            fontSize: '16.5px',
            fontWeight: '800',
            color: '#0F172A',
            textTransform: 'uppercase',
            letterSpacing: '0.015em',
            fontFamily: 'var(--font-body)',
            maxWidth: '78%',
            lineHeight: 1.2,
            margin: '0 0 4px 0',
          }}
        >
          {title}
        </h3>

        {/* Subtitle - Vibrant Orange */}
        <div
          style={{
            fontSize: '12.5px',
            fontWeight: '700',
            color: '#FF6F00',
            marginBottom: '11px',
            letterSpacing: '-0.1px',
          }}
        >
          {subtitle}
        </div>

        {/* 5 Premium Bullet Points with Orange Checks */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '5.5px' }}>
          {bullets.map((bullet, idx) => (
            <motion.li
              key={idx}
              animate={{ x: isHovered ? 2 : 0 }}
              transition={{ duration: 0.2, delay: idx * 0.025 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11.5px',
                lineHeight: '1.4',
                color: '#334155',
                fontWeight: '500',
              }}
            >
              <span
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: isHovered ? 'rgba(255, 111, 0, 0.22)' : 'rgba(255, 111, 0, 0.1)',
                  border: isHovered ? '1px solid #FF6F00' : '1px solid rgba(255, 111, 0, 0.4)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                }}
              >
                <Check
                  size={9}
                  strokeWidth={3}
                  color="#FF6F00"
                />
              </span>
              <span>{bullet}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Large Logistics Background Image & CTA Button Area */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '190px',
        }}
      >
        <motion.img
          src={image}
          alt={title}
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />

        {/* Soft upper gradient transition overlay to white */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '38px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0) 100%)',
          }}
        />

        {/* Bottom subtle shadow overlay for CTA clarity */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '74px',
            background: 'linear-gradient(0deg, rgba(2, 10, 28, 0.55) 0%, rgba(2, 10, 28, 0) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* White and Orange Luxury CTA Button */}
        <motion.button
          onClick={onExplore}
          whileHover={{
            scale: 1.03,
            y: -1.5,
            boxShadow: '0 8px 22px rgba(255, 111, 0, 0.5), 0 0 0 2px #FFFFFF',
          }}
          whileTap={{ scale: 0.96, y: 0 }}
          transition={SPRING}
          style={{
            position: 'absolute',
            bottom: '15px',
            left: '15px',
            height: '35px',
            padding: '0 16px',
            background: 'linear-gradient(135deg, #FF7A00 0%, #FF6600 50%, #F55000 100%)',
            color: '#FFFFFF',
            borderRadius: '7px',
            fontSize: '12px',
            fontWeight: '700',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(245, 80, 0, 0.35)',
            zIndex: 3,
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.01em',
          }}
        >
          <span>{buttonText}</span>
          <motion.span
            animate={{ x: isHovered ? 3 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex' }}
          >
            <ArrowRight size={13} strokeWidth={2.5} color="#FFFFFF" />
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};
