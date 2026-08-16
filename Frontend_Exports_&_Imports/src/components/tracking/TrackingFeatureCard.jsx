import React from 'react';

export const TrackingFeatureCard = ({ features }) => {
  return (
    <div
      className="tracking-feature-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid #EDF0F3',
        boxShadow: '0 4px 14px rgba(8, 38, 83, 0.06)',
        padding: '12px 14px',
        width: '100%',
        marginTop: '10px',
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
            <div
              key={feature.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#F0F4FA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#082653',
                  flexShrink: 0,
                  marginTop: '1px',
                }}
              >
                <Icon size={16} strokeWidth={2} color="#082653" />
              </div>

              {/* Title & Description */}
              <div>
                <h4
                  style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#082653',
                    marginBottom: '2px',
                    lineHeight: '1.2',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    fontSize: '10.5px',
                    lineHeight: '1.3',
                    color: '#40516D',
                    whiteSpace: 'pre-line',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
