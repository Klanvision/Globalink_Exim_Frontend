import React from 'react';
import { motion } from 'framer-motion';

export const BenefitCard = ({ benefit, index = 0, loading = false }) => {
  if (loading || !benefit) {
    return (
      <div
        className="premium-skeleton-card"
        style={{
          width: '100%',
          minHeight: '170px',
          borderRadius: '14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px 14px',
          boxSizing: 'border-box',
        }}
      >
        <div
          className="premium-skeleton-base"
          style={{ width: '48px', height: '48px', borderRadius: '12px', marginBottom: '10px' }}
        />
        <div
          className="premium-skeleton-base"
          style={{ width: '70%', height: '14px', marginBottom: '6px', borderRadius: '4px' }}
        />
        <div
          className="premium-skeleton-base"
          style={{ width: '85%', height: '11px', borderRadius: '4px' }}
        />
      </div>
    );
  }

  const Icon = benefit.icon;

  return (
    <motion.div
      className="procurement-benefit-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(255, 111, 0, 0.16)' }}
      style={{
        width: '100%',
        minHeight: '170px',
        borderRadius: '14px',
        border: '1px solid #E2E8F0',
        background: '#FFFFFF',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 14px',
        textAlign: 'center',
        boxSizing: 'border-box',
        cursor: 'default',
        transition: 'border 0.2s ease',
      }}
    >
      {/* Radiant Orange Icon Circle */}
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #FFF5EB 0%, #FFE8D6 100%)',
          border: '1px solid rgba(255, 111, 0, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FF6F00',
          marginBottom: '10px',
          flexShrink: 0,
          boxShadow: '0 2px 8px rgba(255, 111, 0, 0.1)',
        }}
      >
        <Icon size={24} strokeWidth={2} color="#FF6F00" />
      </div>

      {/* Benefit Title */}
      <h4
        style={{
          fontSize: '14px',
          fontWeight: '700',
          color: '#0F172A',
          lineHeight: '1.25',
          marginBottom: '4px',
          fontFamily: 'var(--font-body)',
        }}
      >
        {benefit.title}
      </h4>

      {/* Benefit Description */}
      <p
        style={{
          fontSize: '11.5px',
          lineHeight: '1.35',
          color: '#64748B',
          fontWeight: '400',
          fontFamily: 'var(--font-body)',
        }}
      >
        {benefit.description}
      </p>
    </motion.div>
  );
};
