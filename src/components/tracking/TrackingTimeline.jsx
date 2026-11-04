import React from 'react';
import { motion } from 'framer-motion';

export const TrackingTimeline = ({ stages, activeStep = 4, loading = false }) => {
  if (loading) {
    return (
      <div
        className="tracking-timeline-container"
        style={{
          width: '100%',
          position: 'relative',
          marginTop: '10px',
          marginBottom: '22px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '8px',
          }}
        >
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                textAlign: 'center',
              }}
            >
              <div
                className="premium-skeleton-base premium-skeleton-circle"
                style={{
                  width: '44px',
                  height: '44px',
                  marginBottom: '8px',
                  border: '1.5px solid rgba(255, 111, 0, 0.25)',
                }}
              />
              <div
                className="premium-skeleton-base"
                style={{ width: '60px', height: '11px', marginBottom: '4px', borderRadius: '4px' }}
              />
              <div
                className="premium-skeleton-base"
                style={{ width: '45px', height: '9px', borderRadius: '4px' }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div
      className="tracking-timeline-container"
      style={{
        width: '100%',
        position: 'relative',
        marginTop: '10px',
        marginBottom: '22px',
      }}
    >
      {/* Background Radiant Orange Connecting Line */}
      <div
        className="timeline-connecting-line"
        style={{
          position: 'absolute',
          top: '22px',
          left: '30px',
          right: '30px',
          height: '2px',
          background: 'linear-gradient(90deg, #FF6F00 0%, #FFA800 60%, #E2E8F0 100%)',
          zIndex: 0,
        }}
      />

      {/* 7 Stages Grid */}
      <div
        className="tracking-timeline-grid"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const isCompleted = index < activeStep;
          const isCurrent = index === activeStep - 1;

          return (
            <motion.div
              key={stage.id}
              className="tracking-timeline-step"
              whileHover={{ y: -2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                flex: 1,
                minWidth: 0,
              }}
            >
              {/* Circle Container */}
              <div
                className="timeline-circle"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: isCompleted ? '#FF6F00' : '#FFFFFF',
                  border: isCurrent
                    ? '2.5px solid #FF6F00'
                    : isCompleted
                    ? '2px solid #FF6F00'
                    : '1.5px solid #CBD5E1',
                  boxShadow: isCurrent
                    ? '0 0 12px rgba(255, 111, 0, 0.45)'
                    : isCompleted
                    ? '0 3px 8px rgba(255, 111, 0, 0.25)'
                    : '0 2px 6px rgba(15, 23, 42, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isCompleted ? '#FFFFFF' : '#64748B',
                  marginBottom: '6px',
                  transition: 'all 0.25s ease',
                  flexShrink: 0,
                }}
              >
                <Icon size={19} strokeWidth={2.2} color={isCompleted ? '#FFFFFF' : '#64748B'} />
              </div>

              {/* Stage Title */}
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: isCurrent ? '700' : '600',
                  color: isCurrent ? '#FF6F00' : isCompleted ? '#0F172A' : '#64748B',
                  lineHeight: '1.2',
                  marginBottom: '2px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {stage.title}
              </span>

              {/* Status */}
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: '500',
                  color: isCurrent ? '#FF6F00' : '#94A3B8',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {isCompleted ? 'Completed' : 'Pending'}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
