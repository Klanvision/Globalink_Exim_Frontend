import React from 'react';

export const SupportingFeatures = ({ features }) => {
  return (
    <section
      className="supporting-features-section"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #DDE3EA',
        boxShadow: '0 4px 16px rgba(8, 38, 83, 0.05)',
        margin: '30px 28px 0 28px',
        padding: '24px 16px',
      }}
    >
      <div
        className="supporting-features-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          alignItems: 'center',
        }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isLast = index === features.length - 1;

          return (
            <div
              key={feature.id}
              className="supporting-feature-item"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '4px 14px',
                borderRight: isLast ? 'none' : '1px solid #DDE3EA',
                height: '100%',
              }}
            >
              {/* Navy Icon */}
              <div
                style={{
                  color: '#082653',
                  marginTop: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={32} strokeWidth={1.8} color="#082653" />
              </div>

              {/* Title & Description */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4
                  style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#082653',
                    lineHeight: '1.25',
                    marginBottom: '4px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    fontSize: '12.5px',
                    lineHeight: '1.4',
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
    </section>
  );
};
