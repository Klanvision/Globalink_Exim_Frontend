import React from 'react';
import { motion } from 'framer-motion';

export const ProcurementStats = ({ stats }) => {
  return (
    <div
      className="procurement-stats-banner"
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 50%, #FFF5EB 100%)',
        borderTop: '1px solid rgba(255, 111, 0, 0.16)',
        padding: '24px 20px',
        marginTop: '32px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="procurement-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          width: '100%',
          margin: '0 auto',
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
              whileHover={{ y: -2 }}
              className="procurement-stat-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '6px 12px',
                borderRight: isLast ? 'none' : '1px solid rgba(226, 232, 240, 0.8)',
              }}
            >
              {/* Radiant Orange Icon */}
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
                  boxShadow: '0 3px 10px rgba(255, 111, 0, 0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} strokeWidth={2.2} color="#FFFFFF" />
              </div>

              {/* Stat Value & Label */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '22px',
                    fontWeight: '800',
                    color: '#0F172A',
                    lineHeight: '1.1',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {item.value}
                </span>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: '500',
                    color: '#64748B',
                    lineHeight: '1.25',
                    marginTop: '2px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {item.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
