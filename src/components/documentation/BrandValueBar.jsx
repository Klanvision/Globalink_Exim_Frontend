import React from 'react';
import { motion } from 'framer-motion';

export const BrandValueBar = ({ items }) => {
  return (
    <div
      className="brand-value-strip"
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 50%, #FFF5EB 100%)',
        marginTop: '28px',
        padding: '20px 16px',
        borderTop: '1px solid rgba(255, 111, 0, 0.16)',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="brand-value-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          width: '100%',
          margin: '0 auto',
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
              whileHover={{ y: -2 }}
              className="brand-value-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '6px 12px',
                borderRight: isLast ? 'none' : '1px solid rgba(226, 232, 240, 0.8)',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(255, 111, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF6F00',
                  flexShrink: 0,
                }}
              >
                <Icon size={18} strokeWidth={2.2} color="#FF6F00" />
              </div>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#0F172A',
                  letterSpacing: '-0.2px',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.text}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
