import React from 'react';
import { motion } from 'framer-motion';

export const CustomsServiceItem = ({ service, onClick, index = 0, loading = false }) => {
  if (loading || !service) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 8px', height: '100%' }}>
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

  const Icon = service.icon;

  return (
    <motion.div
      className="customs-service-item"
      onClick={() => onClick && onClick(service)}
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
      }}
    >
      {/* Circular White Icon Container with Radiant Orange Glow */}
      <div
        className="customs-circle-container"
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
        <Icon size={30} strokeWidth={1.9} color="#FF6F00" />
      </div>

      {/* 2-Line Service Title */}
      <h3
        style={{
          fontSize: '13.5px',
          fontWeight: '700',
          color: '#0F172A',
          lineHeight: '1.25',
          fontFamily: 'var(--font-body)',
          marginBottom: '4px',
          whiteSpace: 'pre-line',
          minHeight: '34px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {service.title}
      </h3>

      {/* Small Radiant Orange Underline */}
      <div
        style={{
          width: '28px',
          height: '2px',
          backgroundColor: '#FF6F00',
          borderRadius: '1px',
          margin: '0 auto 6px auto',
        }}
      />

      {/* Description */}
      <p
        style={{
          fontSize: '11.5px',
          fontWeight: '400',
          color: '#64748B',
          lineHeight: '1.35',
          fontFamily: 'var(--font-body)',
          textAlign: 'center',
        }}
      >
        {service.description}
      </p>
    </motion.div>
  );
};
