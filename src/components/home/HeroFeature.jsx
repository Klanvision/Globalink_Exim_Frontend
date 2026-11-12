import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, ShieldCheck, Package, Clock3 } from 'lucide-react';

const SPRING = { type: 'spring', stiffness: 420, damping: 26 };

const FeatureItem = ({ icon: Icon, title, subtitle, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '9px',
        cursor: 'default',
        padding: '6px 8px',
        borderRadius: '8px',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 224, 130, 0.22)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        transition: 'all 0.25s ease',
        minWidth: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 224, 130, 0.12)';
        e.currentTarget.style.borderColor = 'rgba(255, 224, 130, 0.55)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3), 0 0 12px rgba(255, 224, 130, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
        e.currentTarget.style.borderColor = 'rgba(255, 224, 130, 0.22)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Icon Pill */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={SPRING}
        style={{
          flexShrink: 0,
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(255, 224, 130, 0.25) 0%, rgba(255, 140, 0, 0.2) 100%)',
          border: '1.5px solid rgba(255, 224, 130, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Icon size={14} color="#FFE082" strokeWidth={2.2} style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4))' }} />
      </motion.div>

      {/* Text Container — Always 100% visible with crisp white and gold tones */}
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
        <div
          style={{
            fontSize: '11.5px',
            fontWeight: '700',
            color: '#FFFFFF',
            lineHeight: 1.25,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.01em',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: '10px',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.82)',
            lineHeight: 1.25,
            marginTop: '2px',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontFamily: 'var(--font-body)',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
          }}
        >
          {subtitle}
        </div>
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
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '12px',
        margin: '20px 0',
        maxWidth: '740px',
      }}
    >
      {features.map((item, index) => (
        <FeatureItem
          key={index}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          delay={index * 0.05}
        />
      ))}
    </div>
  );
};
