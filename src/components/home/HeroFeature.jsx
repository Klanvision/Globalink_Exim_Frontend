import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Globe2, ShieldCheck, Package, Clock3 } from 'lucide-react';

const SPRING = { type: 'spring', stiffness: 460, damping: 24 };

const FeatureItem = ({ icon: Icon, title, subtitle, delay }) => {
  const [hovered, setHovered] = useState(false);
  const shimmer = useAnimation();

  const onEnter = () => {
    setHovered(true);
    shimmer.start({ x: ['-120%', '160%'], transition: { duration: 0.48, ease: [0.4, 0, 0.2, 1] } });
  };
  const onLeave = () => {
    setHovered(false);
    shimmer.set({ x: '-120%' });
  };

  const particles = [
    { left: '20%', delay: 0,    dx: -2 },
    { left: '55%', delay: 0.09, dx: 0  },
    { left: '78%', delay: 0.16, dx: 2  },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      whileHover="hov"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '8px',
        cursor: 'default',
        position: 'relative',
      }}
    >
      {/* Warm hover glow pill */}
      <motion.div
        variants={{ hov: { opacity: 1, scaleX: 1 } }}
        initial={{ opacity: 0, scaleX: 0.5 }}
        transition={{ type: 'spring', stiffness: 480, damping: 32 }}
        style={{
          position: 'absolute',
          inset: '-4px -4px',
          background: 'linear-gradient(90deg, rgba(255,224,130,0.16) 0%, rgba(255,195,50,0.07) 100%)',
          borderRadius: '6px',
          transformOrigin: 'left',
          pointerEvents: 'none',
        }}
      />

      {/* Left gold accent bar */}
      <motion.div
        variants={{ hov: { scaleY: 1, opacity: 1 } }}
        initial={{ scaleY: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 520, damping: 30 }}
        style={{
          position: 'absolute',
          left: '-2px',
          top: '2px',
          width: '2.5px',
          height: '26px',
          background: 'linear-gradient(180deg, #FFE082 0%, #FFA000 100%)',
          borderRadius: '2px',
          transformOrigin: 'center',
          boxShadow: '0 0 6px rgba(255,224,130,0.5)',
        }}
      />

      {/* Icon pill */}
      <motion.div
        variants={{ hov: { y: -5, scale: 1.18, boxShadow: '0 8px 20px rgba(0,0,0,0.35), 0 0 0 1.5px rgba(255,224,130,0.55)' } }}
        transition={SPRING}
        style={{
          flexShrink: 0,
          marginTop: '1px',
          width: '26px', height: '26px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 224, 130, 0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
          backdropFilter: 'blur(2px)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
        }}
      >
        {/* Shimmer */}
        <motion.span
          animate={shimmer}
          initial={{ x: '-120%' }}
          style={{
            position: 'absolute', top: 0, bottom: 0,
            width: '55%', skewX: '-10deg',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)',
            pointerEvents: 'none', zIndex: 2,
          }}
        />
        {/* Ambient glow */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,224,130,0.4) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        {/* Particles */}
        {particles.map((p, i) => (
          <motion.span
            key={i}
            animate={hovered
              ? { y: [-1, -12, -20], opacity: [0, 1, 0], x: p.dx }
              : { y: 0, opacity: 0 }
            }
            transition={{ duration: 0.6, delay: p.delay, ease: 'easeOut' }}
            style={{
              position: 'absolute', bottom: '10%', left: p.left,
              width: '2px', height: '2px', borderRadius: '50%',
              background: '#FFE082', boxShadow: '0 0 3px rgba(255,224,130,0.9)',
              pointerEvents: 'none', zIndex: 3,
            }}
          />
        ))}
        <motion.div
          variants={{ hov: { scale: 1.15, rotate: [0, -10, 7, 0] } }}
          transition={{ duration: 0.38, ease: 'easeOut' }}
          style={{ zIndex: 1, display: 'flex' }}
        >
          <Icon size={13} color="#FFE082" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.3))' }} />
        </motion.div>
      </motion.div>

      {/* Text */}
      <div>
        <motion.div
          variants={{ hov: { x: 4, color: '#FFE082', opacity: 1 } }}
          transition={SPRING}
          style={{
            fontSize: '11px',
            fontWeight: '700',
            color: 'var(--white)',
            lineHeight: 1.2,
            display: 'inline-block',
            transformOrigin: 'left center',
          }}
        >
          {title}
        </motion.div>
        <motion.div
          variants={{ hov: { x: 4, opacity: 1 } }}
          transition={{ ...SPRING, delay: 0.04 }}
          style={{
            fontSize: '9.5px',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.2,
            marginTop: '2px',
            display: 'inline-block',
            transformOrigin: 'left center',
          }}
        >
          {subtitle}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const HeroFeature = () => {
  const features = [
    { icon: Globe2,      title: 'Global Reach',        subtitle: 'Business in 150+ Countries' },
    { icon: ShieldCheck, title: 'Trusted Network',     subtitle: 'Verified Partners & Suppliers' },
    { icon: Package,     title: 'End-to-End Solutions',subtitle: 'From Sourcing to Final Delivery' },
    { icon: Clock3,      title: '24/7 Support',        subtitle: 'Always here to support you' },
  ];

  return (
    <div
      className="hero-feature-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        margin: '22px 0',
        maxWidth: '640px',
        paddingLeft: '6px',
      }}
    >
      {features.map((item, index) => (
        <FeatureItem
          key={index}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          delay={index * 0.08}
        />
      ))}
    </div>
  );
};
