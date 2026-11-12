import React from 'react';
import { motion } from 'framer-motion';

export const DocumentationCategory = ({ item, onClick, index = 0, loading = false }) => {
  if (loading || !item) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 140px', maxWidth: '180px', padding: '0 8px' }}>
        <div
          className="premium-skeleton-base premium-skeleton-circle"
          style={{ width: '74px', height: '74px', marginBottom: '10px' }}
        />
        <div
          className="premium-skeleton-base"
          style={{ width: '80px', height: '14px', borderRadius: '4px', marginBottom: '6px' }}
        />
        <div
          className="premium-skeleton-base"
          style={{ width: '110px', height: '11px', borderRadius: '4px', marginBottom: '4px' }}
        />
        <div
          className="premium-skeleton-base"
          style={{ width: '60px', height: '16px', borderRadius: '999px', marginTop: '6px' }}
        />
      </div>
    );
  }

  const Icon = item.icon;

  return (
    <motion.div
      onClick={onClick}
      className="doc-category-item"
      initial={{ opacity: 0, y: 16 }}
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
        transition: 'all 0.22s ease',
        flex: '1 1 145px',
        maxWidth: '185px',
        padding: '0 6px',
        height: '100%',
        boxSizing: 'border-box',
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
          border: item.isDots ? '1.5px dashed rgba(255, 111, 0, 0.45)' : '1.5px solid rgba(255, 111, 0, 0.28)',
          boxShadow: '0 4px 14px rgba(255, 111, 0, 0.1)',
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
          fontSize: '13.5px',
          fontWeight: '700',
          color: '#0F172A',
          lineHeight: '1.25',
          whiteSpace: 'pre-line',
          fontFamily: 'var(--font-body)',
          marginBottom: '4px',
          minHeight: '34px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {item.title}
      </h3>

      {/* Small Radiant Orange Underline */}
      <div
        style={{
          width: '26px',
          height: '2px',
          backgroundColor: '#FF6F00',
          borderRadius: '1px',
          margin: '0 auto 6px auto',
        }}
      />

      {/* Added Content: Professional Description */}
      {item.description && (
        <p
          style={{
            fontSize: '11.5px',
            fontWeight: '400',
            color: '#64748B',
            lineHeight: '1.4',
            fontFamily: 'var(--font-body)',
            textAlign: 'center',
            marginBottom: '8px',
          }}
        >
          {item.description}
        </p>
      )}

      {/* Added Content: Feature / Compliance Tag Badge */}
      {item.tag && (
        <span
          style={{
            display: 'inline-block',
            marginTop: 'auto',
            padding: '3px 8px',
            borderRadius: '999px',
            background: 'rgba(255, 111, 0, 0.08)',
            border: '1px solid rgba(255, 111, 0, 0.2)',
            color: '#FF6F00',
            fontSize: '10px',
            fontWeight: '700',
            letterSpacing: '0.02em',
            fontFamily: 'var(--font-body)',
            whiteSpace: 'nowrap',
          }}
        >
          {item.tag}
        </span>
      )}
    </motion.div>
  );
};
