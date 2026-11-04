import React from 'react';
import { motion } from 'framer-motion';

export const CustomsStatsCard = ({ stats }) => {
  return (
    <div
      className="customs-stats-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid rgba(255, 111, 0, 0.22)',
        boxShadow: '0 6px 20px rgba(255, 111, 0, 0.08)',
        padding: '16px 12px',
        width: '100%',
        maxWidth: '520px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="customs-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {stats.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === stats.length - 1;

          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2px 4px',
                borderRight: isLast ? 'none' : '1px solid #F1F5F9',
              }}
            >
              {/* Radiant Orange Icon */}
              <div
                style={{
                  color: '#FF6F00',
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(255, 111, 0, 0.1)',
                }}
              >
                <Icon size={19} strokeWidth={2} color="#FF6F00" />
              </div>

              {/* Number */}
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: '800',
                  color: '#0F172A',
                  lineHeight: '1.1',
                  letterSpacing: '-0.3px',
                  fontFamily: 'var(--font-body)',
                  marginBottom: '2px',
                }}
              >
                {item.value}
              </span>

              {/* Label */}
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: '500',
                  color: '#64748B',
                  lineHeight: '1.2',
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
