import React from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '../common/Skeleton';

export const AdvantageItem = ({ item, onClick, index = 0, loading = false }) => {
  if (loading || !item) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 8px',
          height: '100%',
        }}
      >
        <Skeleton variant="circle" width={74} height={74} style={{ marginBottom: '10px' }} />
        <Skeleton variant="text" width="75%" height={14} style={{ marginBottom: '6px' }} />
        <Skeleton variant="text" width="90%" height={11} />
      </div>
    );
  }

  const Icon = item.icon;

  return (
    <motion.div
      className="advantage-item"
      onClick={() => onClick && onClick(item)}
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
        padding: '0 8px',
        cursor: 'pointer',
        height: '100%',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Circular Radiant Orange Icon Container */}
      <div
        className="advantage-circle"
        style={{
          width: '74px',
          height: '74px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid rgba(255, 111, 0, 0.28)',
          boxShadow: '0 4px 14px rgba(255, 111, 0, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FF6F00',
          marginBottom: '10px',
          transition: 'all 0.22s ease',
          flexShrink: 0,
        }}
      >
        <Icon size={30} strokeWidth={1.8} color="#FF6F00" />
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '13.5px',
          fontWeight: '700',
          color: '#0F172A',
          lineHeight: '1.25',
          marginBottom: '4px',
          whiteSpace: 'pre-line',
          minHeight: '34px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
        }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '11px',
          lineHeight: '1.35',
          color: '#64748B',
          fontWeight: '400',
          fontFamily: 'var(--font-body)',
        }}
      >
        {item.description}
      </p>
    </motion.div>
  );
};
