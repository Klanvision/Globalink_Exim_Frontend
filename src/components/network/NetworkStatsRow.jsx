import React from 'react';
import { motion } from 'framer-motion';

export const NetworkStatsRow = ({ stats }) => {
  return (
    <div
      className="network-stats-wrapper"
      style={{
        width: '100%',
        margin: '0 auto 24px auto',
        padding: '0 10px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="network-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        {stats.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === stats.length - 1;

          return (
            <motion.div
              key={item.id}
              className="network-stat-item"
              whileHover={{ y: -3 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '4px 12px',
                borderRight: isLast ? 'none' : '1px solid #E2E8F0',
              }}
            >
              {/* Elevated Circular White Icon Container with Orange Ring */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid rgba(255, 111, 0, 0.28)',
                  boxShadow: '0 4px 14px rgba(255, 111, 0, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF6F00',
                  marginBottom: '8px',
                  flexShrink: 0,
                  transition: 'transform 0.2s ease',
                }}
              >
                <Icon size={24} strokeWidth={2} color="#FF6F00" />
              </div>

              {/* Radiant Orange Number */}
              <span
                style={{
                  fontSize: '24px',
                  fontWeight: '800',
                  color: '#FF6F00',
                  lineHeight: '1.1',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '2px',
                }}
              >
                {item.value}
              </span>

              {/* Deep Slate Label */}
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: '600',
                  color: '#0F172A',
                  lineHeight: '1.25',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
