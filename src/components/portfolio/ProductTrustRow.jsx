import React from 'react';
import { motion } from 'framer-motion';

export const ProductTrustRow = ({ items }) => {
  return (
    <motion.div
      className="portfolio-trust-row"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{
        width: '100%',
        margin: '20px 0 24px 0',
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
        padding: '14px 16px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="portfolio-trust-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === items.length - 1;

          return (
            <motion.div
              key={item.id}
              className="portfolio-trust-item"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '6px 12px',
                borderRight: isLast ? 'none' : '1px solid #F1F5F9',
              }}
            >
              {/* Icon Container with Radiant Orange Accent */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#FFF5EB',
                  border: '1px solid rgba(255, 111, 0, 0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF6F00',
                  flexShrink: 0,
                  boxShadow: '0 2px 6px rgba(255, 111, 0, 0.08)',
                }}
              >
                <Icon size={18} strokeWidth={2.2} color="#FF6F00" />
              </div>

              {/* Text Area */}
              <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#0F172A',
                    lineHeight: '1.25',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {item.title}
                </span>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: '400',
                    color: '#64748B',
                    lineHeight: '1.25',
                    marginTop: '2px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {item.subtitle}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
