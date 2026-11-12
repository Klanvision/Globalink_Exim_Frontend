import React from 'react';
import { motion } from 'framer-motion';

export const BuyerCategoryItem = ({ category, onClick, index = 0, loading = false }) => {
  if (loading || !category) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, padding: '0 8px' }}>
        <div
          className="premium-skeleton-base premium-skeleton-circle"
          style={{ width: '74px', height: '74px', marginBottom: '10px' }}
        />
        <div
          className="premium-skeleton-base"
          style={{ width: '70px', height: '12px', borderRadius: '4px' }}
        />
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <motion.div
      className="buyer-category-item"
      onClick={() => onClick && onClick(category)}
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
        flex: 1,
        minWidth: 0,
        padding: '0 8px',
        cursor: 'pointer',
      }}
    >
      {/* Circular Icon Container with Radiant Orange Theme */}
      <div
        className="buyer-circle-container"
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
          marginBottom: '10px',
          transition: 'all 0.22s ease',
          flexShrink: 0,
        }}
      >
        <Icon size={30} strokeWidth={1.8} color="#FF6F00" />
      </div>

      {/* Category Title */}
      <h3
        style={{
          fontSize: '13.5px',
          fontWeight: '700',
          color: '#0F172A',
          fontFamily: 'var(--font-body)',
          marginBottom: '4px',
          lineHeight: '1.25',
        }}
      >
        {category.title}
      </h3>

      {/* Short Radiant Orange Underline */}
      <div
        style={{
          width: '28px',
          height: '2px',
          backgroundColor: '#FF6F00',
          borderRadius: '1px',
          marginBottom: '4px',
        }}
      />

      {/* Category Description */}
      <p
        style={{
          fontSize: '11px',
          fontWeight: '400',
          color: '#64748B',
          lineHeight: '1.35',
          fontFamily: 'var(--font-body)',
        }}
      >
        {category.description}
      </p>
    </motion.div>
  );
};
