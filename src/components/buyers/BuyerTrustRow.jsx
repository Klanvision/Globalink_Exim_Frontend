import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const BuyerTrustRow = ({ statements }) => {
  return (
    <div
      className="buyer-trust-row"
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)',
        margin: '0 auto 10px auto',
        padding: '12px 14px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="buyer-trust-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {statements.map((statement, index) => {
          const isLast = index === statements.length - 1;

          return (
            <motion.div
              key={index}
              className="buyer-trust-item"
              whileHover={{ y: -2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '4px 10px',
                borderRight: isLast ? 'none' : '1px solid #F1F5F9',
              }}
            >
              {/* Radiant Orange Check Icon */}
              <div
                style={{
                  color: '#FF6F00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <CheckCircle2 size={18} strokeWidth={2.4} color="#FF6F00" />
              </div>

              {/* Text */}
              <span
                style={{
                  fontSize: '12.5px',
                  fontWeight: '600',
                  color: '#0F172A',
                  fontFamily: 'var(--font-body)',
                  whiteSpace: 'nowrap',
                }}
              >
                {statement.text}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
