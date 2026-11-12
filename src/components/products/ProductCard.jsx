import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimation } from 'framer-motion';
import { ArrowRight, Leaf, Award, Shirt, Settings } from 'lucide-react';
import { ProductCardSkeleton } from '../common/Skeleton';

const SPRING = { type: 'spring', stiffness: 460, damping: 24 };

export const ProductCard = ({ product, onViewDetails, delay = 0, loading = false }) => {
  if (loading || !product) {
    return <ProductCardSkeleton />;
  }
  const { name, origin, destination, moq, image, badgeText, badgeBg, badgeTextColor, badgePosition, benefits } = product;
  const [hovered, setHovered] = useState(false);
  const shimmer = useAnimation();

  // 3D Tilt motion values
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-120, 120], [8, -8]), { stiffness: 350, damping: 24 });
  const rotY = useSpring(useTransform(mx, [-120, 120], [-8, 8]), { stiffness: 350, damping: 24 });

  const handleMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    shimmer.start({
      x: ['-110%', '160%'],
      transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    mx.set(0);
    my.set(0);
    shimmer.set({ x: '-110%' });
  };

  const getBadgeIcon = () => {
    if (name.includes('Mangos')) return <Leaf size={11} color="#FFFFFF" />;
    if (name.includes('Decor')) return <Award size={11} color="#FFFFFF" />;
    if (name.includes('Garments')) return <Shirt size={11} color="#FFFFFF" />;
    return <Settings size={11} color="#FFFFFF" />;
  };

  const getBadgePositionStyle = () => {
    switch (badgePosition) {
      case 'bottom-right':
        return { bottom: '12px', right: '12px' };
      case 'right':
        return { top: '14px', right: '12px' };
      default:
        return { top: '12px', left: '12px' };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformStyle: 'preserve-3d',
        perspective: 800,
        background: '#FFFFFF',
        border: hovered ? '1.5px solid #FB923C' : '1.5px solid #FED7AA',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: hovered
          ? '0 18px 36px rgba(234, 88, 12, 0.14), 0 4px 12px rgba(0, 0, 0, 0.04)'
          : '0 4px 18px rgba(15, 23, 42, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        transition: 'border-color 0.28s ease, box-shadow 0.28s ease',
        boxSizing: 'border-box',
      }}
      className="product-card"
    >
      {/* Product Image Area with Shimmer Reflection */}
      <div style={{ width: '100%', height: '210px', position: 'relative', overflow: 'hidden' }}>
        <motion.img
          src={image}
          alt={name}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* Diagonal Shimmer Sweep */}
        <motion.span
          animate={shimmer}
          initial={{ x: '-110%' }}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '60%',
            skewX: '-18deg',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />

        {/* Gradient vignette */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50px',
            background: 'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Floating Custom Overlay Badge */}
        {badgeText && (
          <motion.div
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute',
              ...getBadgePositionStyle(),
              background: 'linear-gradient(135deg, #FF8C00 0%, #FF7A00 100%)',
              color: '#FFFFFF',
              padding: '4px 10px',
              borderRadius: '20px',
              fontSize: '10px',
              fontWeight: '800',
              lineHeight: 1.15,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              letterSpacing: '0.04em',
              boxShadow: '0 4px 12px rgba(245, 124, 0, 0.35)',
              zIndex: 4,
            }}
          >
            {getBadgeIcon()}
            <span style={{ whiteSpace: 'pre-line' }}>{badgeText}</span>
          </motion.div>
        )}
      </div>

      {/* Card Body Information */}
      <div style={{ padding: '16px 14px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, boxSizing: 'border-box' }}>
        {/* Product Name */}
        <h3
          style={{
            fontSize: '17px',
            fontWeight: '800',
            color: '#1E293B',
            textAlign: 'center',
            marginBottom: '4px',
            lineHeight: 1.25,
            letterSpacing: '-0.2px',
            fontFamily: 'var(--font-body)',
          }}
        >
          {name}
        </h3>

        {/* Origin → Destination */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '700', color: '#EA580C', marginBottom: '4px', letterSpacing: '0.01em' }}>
          <span>{origin}</span>
          <ArrowRight size={13} color="#EA580C" strokeWidth={2.5} />
          <span>{destination}</span>
        </div>

        {/* MOQ */}
        <div style={{ fontSize: '12px', fontWeight: '500', color: '#64748B', marginBottom: '12px' }}>
          {moq}
        </div>

        {/* 3 Horizontal Product Benefits */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          width: '100%',
          gap: '4px',
          padding: '8px 0',
          borderTop: '1px solid #F1F5F9',
          borderBottom: '1px solid #F1F5F9',
          marginBottom: '14px',
        }}>
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '3px' }}>
                <div style={{ color: '#EA580C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={18} strokeWidth={2} />
                </div>
                <span style={{ fontSize: '10.5px', fontWeight: '600', color: '#334155', lineHeight: 1.15 }}>
                  {b.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Sunset Pill Luxury CTA Button */}
        <motion.button
          onClick={onViewDetails}
          whileHover={{
            scale: 1.03,
            y: -1.5,
            boxShadow: '0 8px 22px rgba(245, 124, 0, 0.42)',
          }}
          whileTap={{ scale: 0.96, y: 0 }}
          transition={SPRING}
          style={{
            height: '36px',
            width: '100%',
            maxWidth: '220px',
            background: 'linear-gradient(135deg, #FF8C00 0%, #FF7A00 50%, #F57C00 100%)',
            color: '#FFFFFF',
            borderRadius: '8px',
            fontSize: '12.5px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(245, 124, 0, 0.28)',
            marginTop: 'auto',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.01em',
          }}
        >
          <span>View Details</span>
          <motion.span
            animate={{ x: hovered ? 3 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex' }}
          >
            <ArrowRight size={14} strokeWidth={2.5} color="#FFFFFF" />
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};
