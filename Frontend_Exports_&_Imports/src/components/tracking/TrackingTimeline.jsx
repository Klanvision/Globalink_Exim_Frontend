import React from 'react';

export const TrackingTimeline = ({ stages, activeStep = 4 }) => {
  return (
    <div
      className="tracking-timeline-container"
      style={{
        width: '100%',
        position: 'relative',
        marginTop: '10px',
        marginBottom: '26px',
      }}
    >
      {/* Background Gold Connecting Line */}
      <div
        className="timeline-connecting-line"
        style={{
          position: 'absolute',
          top: '26px',
          left: '30px',
          right: '30px',
          height: '2.5px',
          backgroundColor: '#E8A52A',
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
            <div
              key={stage.id}
              className="tracking-timeline-step"
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
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: isCompleted ? '#082653' : '#40516D',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  boxShadow: isCurrent
                    ? '0 0 0 3px rgba(232, 165, 42, 0.4), 0 3px 10px rgba(8, 38, 83, 0.22)'
                    : '0 3px 8px rgba(8, 38, 83, 0.15)',
                  marginBottom: '6px',
                  transition: 'all 0.25s ease',
                  border: isCurrent ? '2px solid #E8A52A' : 'none',
                }}
              >
                <Icon size={22} strokeWidth={1.8} color="#FFFFFF" />
              </div>

              {/* Gold Number */}
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#D99A1E',
                  lineHeight: '1.1',
                  marginBottom: '3px',
                }}
              >
                {stage.number}
              </span>

              {/* Title */}
              <h4
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#082653',
                  lineHeight: '1.2',
                  whiteSpace: 'pre-line',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {stage.title}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
