import React from 'react';

export const WhyChooseUsStatsBanner = ({ stats }) => {
  return (
    <div
      className="why-choose-us-stats-banner"
      style={{
        backgroundColor: 'rgba(4, 24, 58, 0.75)',
        border: '1px solid rgba(100, 160, 220, 0.40)',
        borderRadius: '18px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.28)',
        padding: '16px 10px',
        width: '100%',
        margin: '10px auto 0 auto',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        className="why-choose-us-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          alignItems: 'center',
        }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isLast = index === stats.length - 1;

          return (
            <div
              key={stat.id}
              className="why-choose-us-stat-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '4px 8px',
                borderRight: isLast ? 'none' : '1px solid rgba(232, 165, 42, 0.30)',
              }}
            >
              {/* Gold Icon */}
              <div
                style={{
                  color: '#F5B73A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={32} strokeWidth={1.8} color="#F5B73A" />
              </div>

              {/* Number and Label Stack */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '21px',
                    fontWeight: '700',
                    color: '#F5B73A',
                    lineHeight: '1.1',
                    letterSpacing: '-0.2px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#FFFFFF',
                    lineHeight: '1.2',
                    fontFamily: 'var(--font-body)',
                    marginTop: '2px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
