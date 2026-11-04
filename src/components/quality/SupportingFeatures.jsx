import React from 'react';
import { motion } from 'framer-motion';

export const SupportingFeatures = ({ features }) => {
  return (
    <section
      className="supporting-features-section"
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
        margin: '22px 0 0 0',
        padding: '20px 16px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="supporting-features-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isLast = index === features.length - 1;

          return (
            <motion.div
              key={feature.id}
              className="supporting-feature-item"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '4px 12px',
                borderRight: isLast ? 'none' : '1px solid #F1F5F9',
                height: '100%',
              }}
            >
              {/* Radiant Orange Icon */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(255, 111, 0, 0.1)',
                  marginTop: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#FF6F00',
                }}
              >
                <Icon size={19} strokeWidth={2} color="#FF6F00" />
              </div>

              {/* Title & Description */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4
                  style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#0F172A',
                    lineHeight: '1.25',
                    marginBottom: '2px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    fontSize: '11px',
                    color: '#64748B',
                    lineHeight: '1.35',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
