import React from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '../common/Skeleton';

export const ServiceCard = ({ service, onClick, index = 0, loading = false }) => {
  if (loading || !service) {
    return (
      <div
        className="premium-skeleton-card"
        style={{
          borderRadius: '16px',
          padding: '18px 14px 16px 14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '170px',
          justifyContent: 'center',
        }}
      >
        <Skeleton variant="circle" width={50} height={50} style={{ marginBottom: '10px' }} />
        <Skeleton variant="text" width="70%" height={14} style={{ marginBottom: '6px' }} />
        <Skeleton variant="text" width="85%" height={11} />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <motion.div
      onClick={onClick}
      className="clay-service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6, boxShadow: '0 12px 28px rgba(255, 111, 0, 0.16)' }}
      style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
        padding: '18px 14px 16px 14px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'border 0.25s ease',
        minHeight: '170px',
        justifyContent: 'center',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {/* Radiant Orange Icon Badge */}
      <div
        className="clay-service-icon-wrap"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #FFF5EB 0%, #FFE8D6 100%)',
          border: '1px solid rgba(255, 111, 0, 0.28)',
          boxShadow: '0 4px 12px rgba(255, 111, 0, 0.14)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FF6F00',
          marginBottom: '10px',
          flexShrink: 0,
        }}
      >
        <Icon size={24} strokeWidth={2.2} color="#FF6F00" />
      </div>

      {/* Service Title */}
      <h3
        style={{
          fontSize: '13.5px',
          fontWeight: '700',
          color: '#0F172A',
          lineHeight: '1.25',
          marginBottom: '4px',
          fontFamily: 'var(--font-body)',
        }}
      >
        {service.title}
      </h3>

      {/* Service Description */}
      <p
        style={{
          fontSize: '11.5px',
          lineHeight: '1.35',
          color: '#64748B',
          whiteSpace: 'pre-line',
          fontWeight: '400',
          fontFamily: 'var(--font-body)',
        }}
      >
        {service.description}
      </p>
    </motion.div>
  );
};
