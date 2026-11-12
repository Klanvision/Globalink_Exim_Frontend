import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Globe, ShieldCheck, Clock3, Headphones, Leaf } from 'lucide-react';

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
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover="hov"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        borderRight: isLast ? 'none' : '1px solid rgba(226, 232, 240, 0.85)',
        paddingRight: isLast ? '0' : '16px',
        paddingLeft: isFirst ? '0' : '16px',
        cursor: 'default',
        position: 'relative',
      }}
    >
      {/* Individual Themed Glow Pill Background on Hover */}
      <motion.div
        variants={{ hov: { opacity: 1, scaleX: 1 } }}
        initial={{ opacity: 0, scaleX: 0.85 }}
        transition={{ type: 'spring', stiffness: 480, damping: 32 }}
        style={{
          position: 'absolute',
          inset: '-6px 2px',
          background: item.hoverBg,
          borderRadius: '10px',
          transformOrigin: 'left center',
          pointerEvents: 'none',
        }}
      />

      {/* Themed Circular Icon Badge */}
      <motion.div
        variants={{ hov: { scale: 1.08, y: -1, boxShadow: item.hoverShadow } }}
        transition={SPRING}
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          background: hovered ? item.pillBg : item.bg,
          border: hovered ? `1.5px solid ${item.hoverBorder}` : `1.5px solid ${item.border}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: item.color,
          flexShrink: 0,
          boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 1,
          transition: 'background 0.25s ease, border-color 0.25s ease',
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
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.85) 50%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />

        <div style={{ display: 'flex', zIndex: 2 }}>
          <Icon size={19} strokeWidth={2.6} />
        </div>
      </motion.div>

      {/* Typography with Themed Hover Transition */}
      <div style={{ position: 'relative', zIndex: 1, minWidth: 0 }}>
        <motion.div
          variants={{ hov: { x: 1, color: item.color } }}
          transition={SPRING}
          style={{
            fontSize: '11px',
            fontWeight: '800',
            color: '#1E293B',
            letterSpacing: '0.03em',
            fontFamily: 'var(--font-body)',
            textTransform: 'uppercase',
            lineHeight: 1.25,
            transition: 'color 0.22s ease',
            whiteSpace: 'nowrap',
          }}
        >
          {item.title}
        </motion.div>
        <div
          style={{
            fontSize: '10.5px',
            color: '#64748B',
            marginTop: '2px',
            fontWeight: '500',
            lineHeight: 1.25,
            whiteSpace: 'nowrap',
          }}
        >
          {item.desc}
        </div>
      </div>
    </motion.div>
  );
};

export const TrustBar = ({ style = {} }) => {
  const items = [
    {
      icon: Globe,
      title: 'GLOBAL NETWORK',
      desc: 'Across 120+ Countries',
      color: '#0284C7', // Sky Blue
      bg: '#F0F9FF',
      border: '#BAE6FD',
      hoverBg: 'linear-gradient(90deg, rgba(240, 249, 255, 0.95) 0%, rgba(224, 242, 254, 0.5) 100%)',
      hoverShadow: '0 6px 16px rgba(2, 132, 199, 0.22)',
      hoverBorder: '#38BDF8',
      pillBg: '#E0F2FE',
    },
    {
      icon: ShieldCheck,
      title: 'SAFE & SECURE',
      desc: 'Your Cargo, Our Responsibility',
      color: '#4F46E5', // Indigo
      bg: '#EEF2FF',
      border: '#C7D2FE',
      hoverBg: 'linear-gradient(90deg, rgba(238, 242, 255, 0.95) 0%, rgba(224, 231, 255, 0.5) 100%)',
      hoverShadow: '0 6px 16px rgba(79, 70, 229, 0.22)',
      hoverBorder: '#818CF8',
      pillBg: '#E0E7FF',
    },
    {
      icon: Clock3,
      title: 'ON-TIME DELIVERY',
      desc: 'Because Time Matters',
      color: '#EA580C', // Sunset Amber
      bg: '#FFF7ED',
      border: '#FED7AA',
      hoverBg: 'linear-gradient(90deg, rgba(255, 247, 237, 0.95) 0%, rgba(255, 237, 213, 0.5) 100%)',
      hoverShadow: '0 6px 16px rgba(234, 88, 12, 0.22)',
      hoverBorder: '#FB923C',
      pillBg: '#FFEDD5',
    },
    {
      icon: Headphones,
      title: '24/7 CUSTOMER SUPPORT',
      desc: "We're Here, Anytime",
      color: '#9333EA', // Violet/Purple
      bg: '#FAF5FF',
      border: '#E9D5FF',
      hoverBg: 'linear-gradient(90deg, rgba(250, 245, 255, 0.95) 0%, rgba(243, 232, 255, 0.5) 100%)',
      hoverShadow: '0 6px 16px rgba(147, 51, 234, 0.22)',
      hoverBorder: '#C084FC',
      pillBg: '#F3E8FF',
    },
    {
      icon: Leaf,
      title: 'SUSTAINABLE LOGISTICS',
      desc: 'Moving Forward Responsibly',
      color: '#16A34A', // Emerald Green
      bg: '#F0FDF4',
      border: '#BBF7D0',
      hoverBg: 'linear-gradient(90deg, rgba(240, 253, 244, 0.95) 0%, rgba(220, 252, 231, 0.5) 100%)',
      hoverShadow: '0 6px 16px rgba(22, 163, 74, 0.22)',
      hoverBorder: '#4ADE80',
      pillBg: '#DCFCE7',
    },
  ];

  return (
    <div
      className="trust-bar-container"
      style={{
        margin: '26px 0 0 0',
        padding: '16px 22px',
        border: '1.5px solid rgba(226, 232, 240, 0.95)',
        borderRadius: '16px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 100%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {items.map((item, index) => (
        <TrustItem
          key={index}
          index={index}
          item={item}
          isFirst={index === 0}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};
