import React from 'react';
import { motion } from 'framer-motion';

export const QualityProcessItem = ({ step, onClick, index = 0, loading = false }) => {
  if (loading || !step) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, maxWidth: '135px' }}>
        <div
          className="premium-skeleton-base premium-skeleton-circle"
          style={{ width: '74px', height: '74px', marginBottom: '10px' }}
        />
        <div
          className="premium-skeleton-base"
          style={{ width: '60px', height: '12px', borderRadius: '4px' }}
        />
      </div>
    );
  }

  const Icon = step.icon;

  return (
    <motion.div
      onClick={onClick}
      className="quality-process-item"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        flex: 1,
        minWidth: 0,
        maxWidth: '135px',
        transition: 'all 0.2s ease',
      }}
    >
      {/* Circular Container with Radiant Orange Theme */}
      <div
        className="quality-process-circle"
        style={{
          width: '74px',
          height: '74px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: step.isSpecial ? '2px solid #FF6F00' : '1px solid rgba(255, 111, 0, 0.25)',
          boxShadow: step.isSpecial
            ? '0 4px 16px rgba(255, 111, 0, 0.22)'
            : '0 4px 12px rgba(255, 111, 0, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FF6F00',
          marginBottom: '10px',
          transition: 'all 0.25s ease',
          flexShrink: 0,
        }}
      >
        <Icon size={30} strokeWidth={1.8} color="#FF6F00" />
      </div>

      {/* Process Title */}
      <h3
        style={{
          fontSize: '13px',
          fontWeight: '700',
          color: '#0F172A',
          lineHeight: '1.25',
          marginBottom: '4px',
          whiteSpace: 'pre-line',
          minHeight: '34px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-body)',
        }}
      >
        {step.title}
      </h3>

      {/* Process Description */}
      <p
        style={{
          fontSize: '11px',
          lineHeight: '1.35',
          color: '#64748B',
          fontWeight: '400',
          fontFamily: 'var(--font-body)',
        }}
      >
        {step.description}
      </p>
    </motion.div>
  );
};
