import React from 'react';
import { motion } from 'framer-motion';

export const PortfolioStatsBanner = ({ statistics }) => {
  return (
    <motion.div
      className="portfolio-stats-banner"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 45%, #FFF7ED 100%)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 111, 0, 0.22)',
        boxShadow: '0 6px 24px rgba(255, 111, 0, 0.08), 0 2px 8px rgba(15, 23, 42, 0.04)',
        padding: '20px 22px',
        width: '100%',
        margin: '26px auto 0 auto',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow circle */}
      <div
        style={{
          position: 'absolute',
          top: '-30px',
          right: '5%',
          width: '160px',
          height: '160px',
          background: 'radial-gradient(circle, rgba(255, 111, 0, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="portfolio-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          alignItems: 'center',
          gap: '16px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {statistics.map((stat, index) => {
          const Icon = stat.icon;
          const isLast = index === statistics.length - 1;

          return (
            <motion.div
              key={stat.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '6px 12px',
                borderRight: isLast ? 'none' : '1px solid rgba(226, 232, 240, 0.8)',
              }}
            >
              {/* Radiant Orange Circular Icon Badge */}
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
                  boxShadow: '0 4px 12px rgba(255, 111, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} strokeWidth={2.2} color="#FFFFFF" />
              </div>

              {/* Value and Label */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '22px',
                    fontWeight: '800',
                    color: '#0F172A',
                    lineHeight: '1.1',
                    letterSpacing: '-0.4px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#64748B',
                    lineHeight: '1.25',
                    fontFamily: 'var(--font-body)',
                    marginTop: '3px',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
