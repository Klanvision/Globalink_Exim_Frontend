import React from 'react';
import { motion } from 'framer-motion';

export const BuyerStatsBanner = ({ statistics }) => {
  return (
    <div
      className="buyer-stats-banner"
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 50%, #FFF5EB 100%)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 111, 0, 0.22)',
        boxShadow: '0 6px 24px rgba(255, 111, 0, 0.08)',
        padding: '18px 14px',
        width: '100%',
        margin: '10px auto 22px auto',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="buyer-stats-grid"
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
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '4px 10px',
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

              {/* Text Area */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: '800',
                    color: '#0F172A',
                    lineHeight: '1.1',
                    letterSpacing: '-0.3px',
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
