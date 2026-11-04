import React from 'react';
import { motion } from 'framer-motion';

export const DocumentationCategory = ({ item, onClick, index = 0, loading = false }) => {
  if (loading || !item) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 110px', maxWidth: '130px' }}>
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

  const Icon = item.icon;

  return (
    <motion.div
      onClick={onClick}
      className="doc-category-item"
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
        transition: 'all 0.2s ease',
        flex: '1 1 110px',
        maxWidth: '130px',
      }}
    >
      {/* Circular Container with Radiant Orange Theme */}
      <div
        className="doc-category-circle"
        style={{
          width: '74px',
          height: '74px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: item.isDots ? '1.5px dashed rgba(255, 111, 0, 0.4)' : '1px solid rgba(255, 111, 0, 0.25)',
          boxShadow: '0 4px 14px rgba(255, 111, 0, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FF6F00',
          marginBottom: '10px',
          transition: 'all 0.25s ease',
          flexShrink: 0,
        }}
      >
        <Icon size={item.isDots ? 28 : 32} strokeWidth={1.8} color="#FF6F00" />
      </div>

      {/* Category Title */}
      <h3
        style={{
          fontSize: '12.5px',
          fontWeight: '700',
          color: '#0F172A',
          lineHeight: '1.25',
          whiteSpace: 'pre-line',
          fontFamily: 'var(--font-body)',
        }}
      >
        {item.title}
      </h3>
    </motion.div>
  );
};
