import React from 'react';
import { motion } from 'framer-motion';

export const ProcessStatisticsRow = ({ statistics }) => {
  return (
    <div
      className="process-stats-row"
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
        margin: '22px 0 0 0',
        padding: '18px 14px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="process-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        {statistics.map((stat, index) => {
          const Icon = stat.icon;
          const isLast = index === statistics.length - 1;

          return (
            <motion.div
              key={stat.id}
              whileHover={{ y: -2 }}
              className="process-stat-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '4px 10px',
                borderRight: isLast ? 'none' : '1px solid #F1F5F9',
              }}
            >
              {/* Radiant Orange Icon */}
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 111, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF6F00',
                  flexShrink: 0,
                }}
              >
                <Icon size={19} strokeWidth={2.2} color="#FF6F00" />
              </div>

              {/* Stat Value & Label */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: '800',
                    color: '#0F172A',
                    lineHeight: '1.1',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '500',
                    color: '#64748B',
                    lineHeight: '1.25',
                    marginTop: '2px',
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
