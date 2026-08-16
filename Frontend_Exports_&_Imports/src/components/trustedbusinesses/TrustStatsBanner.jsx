import React from 'react';

export const TrustStatsBanner = ({ stats }) => {
  return (
    <div
      className="trust-stats-banner"
      style={{
        backgroundColor: 'rgba(4, 24, 58, 0.72)',
        border: '1px solid rgba(77, 130, 190, 0.35)',
        borderRadius: '20px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.28)',
        padding: '16px 14px',
        width: '100%',
        maxWidth: '1060px',
        margin: '10px auto 0 auto',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        className="trust-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          alignItems: 'center',
        }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isLast = index === stats.length - 1;

          return (
            <div
              key={stat.id}
              className="trust-stat-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '4px 10px',
                borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.18)',
              }}
            >
              {/* Gold Icon */}
              <div
                style={{
                  color: '#F2B52F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={26} strokeWidth={1.8} color="#F2B52F" />
              </div>

              {/* Number, Label and Description Stack */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#F2B52F',
                    lineHeight: '1.1',
                    letterSpacing: '-0.2px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    lineHeight: '1.2',
                    fontFamily: 'var(--font-body)',
                    marginTop: '1px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {stat.label}
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 0.65)',
                    lineHeight: '1.2',
                    fontFamily: 'var(--font-body)',
                    marginTop: '1px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {stat.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
