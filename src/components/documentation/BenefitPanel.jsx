import React from 'react';
import { motion } from 'framer-motion';

export const BenefitPanel = ({ benefits }) => {
  return (
    <section
      className="compliance-benefit-panel"
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #E2E8F0',
        borderTop: '3px solid #FF6F00',
        boxShadow: '0 6px 20px rgba(15, 23, 42, 0.05)',
        margin: '26px 0 0 0',
        padding: '24px 20px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="compliance-benefits-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          alignItems: 'flex-start',
          gap: '16px',
        }}
      >
        {benefits.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === benefits.length - 1;

          return (
            <motion.div
              key={item.id}
              className="compliance-benefit-item"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '6px 14px',
                borderRight: isLast ? 'none' : '1px solid #F1F5F9',
                height: '100%',
              }}
            >
              {/* Radiant Orange Circular Icon */}
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: '#FFF5EB',
                  border: '1px solid rgba(255, 111, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF6F00',
                  marginBottom: '10px',
                  boxShadow: '0 2px 8px rgba(255, 111, 0, 0.1)',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} strokeWidth={2.2} color="#FF6F00" />
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: '13.5px',
                  fontWeight: '700',
                  color: '#0F172A',
                  lineHeight: '1.25',
                  marginBottom: '4px',
                  whiteSpace: 'pre-line',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  fontSize: '11.5px',
                  fontWeight: '400',
                  color: '#64748B',
                  lineHeight: '1.35',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
