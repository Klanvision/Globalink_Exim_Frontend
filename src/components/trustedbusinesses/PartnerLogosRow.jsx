import React from 'react';
import { motion } from 'framer-motion';

export const PartnerLogosRow = ({ partners }) => {
  return (
    <div
      className="partner-logos-wrapper"
      style={{
        width: '100%',
        maxWidth: '100%',
        margin: '20px auto 22px auto',
        padding: '0 6px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="partner-logos-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {partners.map((partner, index) => {
          const isLast = index === partners.length - 1;

          return (
            <motion.div
              key={partner.id}
              whileHover={{ y: -2 }}
              className="partner-logo-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px 10px',
                borderRight: isLast ? 'none' : '1px solid #E2E8F0',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#475569',
                  letterSpacing: '0.6px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {partner.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
