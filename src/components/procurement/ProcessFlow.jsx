import React from 'react';
import { motion } from 'framer-motion';
import { ProcessStep } from './ProcessStep';

export const ProcessFlow = ({ steps, loading = false }) => {
  if (loading) {
    return (
      <div
        className="procurement-flow-container"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '8px',
          width: '100%',
          padding: '14px 6px 18px 6px',
          overflowX: 'auto',
        }}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 0', minWidth: '92px' }}>
            <div
              className="premium-skeleton-base premium-skeleton-circle"
              style={{ width: '54px', height: '54px', marginBottom: '8px', border: '1.5px solid rgba(255, 111, 0, 0.25)' }}
            />
            <div className="premium-skeleton-base" style={{ width: '48px', height: '12px', marginBottom: '6px', borderRadius: '4px' }} />
            <div className="premium-skeleton-base" style={{ width: '64px', height: '10px', borderRadius: '4px' }} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="procurement-flow-container"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '100%',
        margin: '8px auto 0 auto',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        padding: '14px 6px 18px 6px',
        boxSizing: 'border-box',
      }}
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <React.Fragment key={step.id}>
            <ProcessStep step={step} isLast={isLast} index={index} />

            {!isLast && (
              <motion.div
                className="procurement-connector"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 + 0.03, ease: 'easeOut' }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  width: '18px',
                  height: '54px',
                  flexShrink: 0,
                  transformOrigin: 'left center',
                  marginTop: '6px',
                }}
              >
                {/* Radiant Orange Dashed Line with Arrowhead */}
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ overflow: 'visible' }}
                >
                  <line
                    x1="0"
                    y1="5"
                    x2="11"
                    y2="5"
                    stroke="#FB923C"
                    strokeWidth="1.6"
                    strokeDasharray="2.5 2"
                  />
                  <polygon
                    points="10,2 16,5 10,8"
                    fill="#EA580C"
                  />
                </svg>
              </motion.div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
