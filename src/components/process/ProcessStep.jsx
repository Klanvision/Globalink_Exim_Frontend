import React from 'react';
import { motion } from 'framer-motion';

export const ProcessStep = ({ step, onClick, index = 0, loading = false }) => {
  if (loading || !step) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, maxWidth: '140px' }}>
        <div
          className="premium-skeleton-base premium-skeleton-circle"
          style={{ width: '74px', height: '74px', marginBottom: '8px' }}
        />
        <div
          className="premium-skeleton-base"
          style={{ width: '65px', height: '12px', borderRadius: '4px' }}
        />
      </div>
    );
  }

  const Icon = step.icon;

  return (
    <motion.div
      onClick={onClick}
      className="process-step-item"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
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
        maxWidth: '140px',
        transition: 'all 0.2s ease',
      }}
    >
      {/* Circular Container with Radiant Orange Theme */}
      <div
        className="process-step-circle"
        style={{
          width: '74px',
          height: '74px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid rgba(255, 111, 0, 0.28)',
          boxShadow: '0 4px 14px rgba(255, 111, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FF6F00',
          marginBottom: '8px',
          transition: 'all 0.25s ease',
          flexShrink: 0,
        }}
      >
        <Icon size={30} strokeWidth={1.9} color="#FF6F00" />
      </div>

      {/* Radiant Orange Step Number */}
      <span
        style={{
          fontSize: '22px',
          fontWeight: '800',
          color: '#FF6F00',
          lineHeight: '1.1',
          marginBottom: '3px',
          fontFamily: 'var(--font-heading)',
        }}
      >
        {step.number}
      </span>

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
