import React from 'react';
import { motion } from 'framer-motion';

export const QualityAssuranceBanner = ({ items }) => {
  return (
    <section
      className="quality-assurance-banner"
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 50%, #FFF5EB 100%)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 111, 0, 0.22)',
        borderTop: '3px solid #FF6F00',
        boxShadow: '0 6px 24px rgba(255, 111, 0, 0.08)',
        margin: '28px 0 0 0',
        padding: '24px 20px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="quality-assurance-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          alignItems: 'flex-start',
          gap: '16px',
        }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === items.length - 1;

          return (
            <motion.div
              key={item.id}
              className="quality-assurance-item"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '6px 14px',
                borderRight: isLast ? 'none' : '1px solid rgba(226, 232, 240, 0.8)',
                height: '100%',
              }}
            >
              {/* Radiant Orange Circular Icon */}
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
                  boxShadow: '0 4px 12px rgba(255, 111, 0, 0.25)',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} strokeWidth={2.2} color="#FFFFFF" />
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: '13.5px',
                  fontWeight: '700',
                  color: '#0F172A',
                  lineHeight: '1.25',
                  marginBottom: '4px',
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
