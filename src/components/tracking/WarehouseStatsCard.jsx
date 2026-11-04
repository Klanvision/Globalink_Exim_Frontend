import React from 'react';
import { motion } from 'framer-motion';

export const WarehouseStatsCard = ({ stats }) => {
  return (
    <div
      className="warehouse-stats-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)',
        padding: '10px 8px',
        width: '100%',
        marginBottom: '10px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="warehouse-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          alignItems: 'center',
        }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isLast = index === stats.length - 1;

          return (
            <motion.div
              key={stat.id}
              whileHover={{ y: -2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '2px 6px',
                borderRight: isLast ? 'none' : '1px solid #F1F5F9',
              }}
            >
              {/* Radiant Orange Icon */}
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 111, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF6F00',
                  flexShrink: 0,
                }}
              >
                <Icon size={16} strokeWidth={2} color="#FF6F00" />
              </div>

              {/* Value & Label */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: '800',
                    color: '#FF6F00',
                    lineHeight: '1.1',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: '500',
                    color: '#64748B',
                    lineHeight: '1.2',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
