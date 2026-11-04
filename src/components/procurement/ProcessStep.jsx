import React from 'react';
import { motion } from 'framer-motion';

export const ProcessStep = ({ step, isLast, index = 0 }) => {
  const Icon = step.icon;

  return (
    <motion.div
      className="procurement-step-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        flex: 1,
        minWidth: '130px',
        position: 'relative',
        padding: '0 6px',
      }}
    >
      {/* Circle Container with Radiant Orange Theme */}
      <div
        className="procurement-step-circle"
        style={{
          width: '78px',
          height: '78px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid rgba(255, 111, 0, 0.3)',
          boxShadow: '0 6px 18px rgba(255, 111, 0, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FF6F00',
          marginBottom: '12px',
          transition: 'all 0.25s ease',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        <Icon size={34} strokeWidth={1.9} color="#FF6F00" />
      </div>

      {/* Step Number Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2px 8px',
          borderRadius: '999px',
          background: 'rgba(255, 111, 0, 0.1)',
          color: '#FF6F00',
          fontSize: '10.5px',
          fontWeight: '700',
          marginBottom: '6px',
        }}
      >
        STEP 0{index + 1}
      </div>

      {/* Step Title */}
      <h3
        style={{
          fontSize: '14px',
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

      {/* Step Description */}
      <p
        style={{
          fontSize: '12px',
          lineHeight: '1.35',
          color: '#64748B',
          whiteSpace: 'pre-line',
          fontWeight: '400',
          fontFamily: 'var(--font-body)',
        }}
      >
        {step.description}
      </p>
    </motion.div>
  );
};
