import React from 'react';
import { ProcessStep } from './ProcessStep';

export const ProcessFlow = ({ steps, loading = false }) => {
  if (loading) {
    return (
      <div
        className="procurement-flow-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '16px',
          width: '100%',
          textAlign: 'center',
          padding: '20px 0',
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              className="premium-skeleton-base premium-skeleton-circle"
              style={{ width: '68px', height: '68px', marginBottom: '12px', border: '2px solid rgba(255, 111, 0, 0.25)' }}
            />
            <div className="premium-skeleton-base" style={{ width: '60px', height: '14px', marginBottom: '6px', borderRadius: '4px' }} />
            <div className="premium-skeleton-base" style={{ width: '90px', height: '11px', borderRadius: '4px' }} />
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
        margin: '20px auto 0 auto',
        flexWrap: 'wrap',
        gap: '12px',
      }}
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <React.Fragment key={step.id}>
            <ProcessStep step={step} isLast={isLast} index={index} />

            {!isLast && (
              <div
                className="procurement-connector"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  width: '28px',
                  height: '78px',
                  flexShrink: 0,
                }}
              >
                {/* Radiant Orange Dashed Line with Arrowhead */}
                <svg
                  width="28"
                  height="12"
                  viewBox="0 0 28 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ overflow: 'visible' }}
                >
                  <line
                    x1="0"
                    y1="6"
                    x2="20"
                    y2="6"
                    stroke="#FF6F00"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                  />
                  <polygon
                    points="18,2 26,6 18,10"
                    fill="#FF6F00"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
