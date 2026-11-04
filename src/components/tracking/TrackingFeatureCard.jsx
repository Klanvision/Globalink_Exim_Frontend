import React from 'react';
import { motion } from 'framer-motion';

export const TrackingFeatureCard = ({ features }) => {
  return (
    <div
      className="tracking-feature-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)',
        padding: '12px 14px',
        width: '100%',
        marginTop: '10px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="tracking-feature-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px 14px',
        }}
      >
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.id}
              whileHover={{ y: -2 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
              }}
            >
              {/* Radiant Orange Icon Container */}
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '8px',
                  backgroundColor: '#FFF5EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF6F00',
                  flexShrink: 0,
                  marginTop: '1px',
                  border: '1px solid rgba(255, 111, 0, 0.2)',
                }}
              >
                <Icon size={15} strokeWidth={2.2} color="#FF6F00" />
              </div>

              {/* Title & Description */}
              <div>
                <h4
                  style={{
                    fontSize: '12px',
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
                    fontSize: '10.5px',
                    color: '#64748B',
                    lineHeight: '1.3',
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
    </div>
  );
};
