import React from 'react';

export const PortfolioStatsBanner = ({ statistics }) => {
  return (
    <div
      className="portfolio-stats-banner"
      style={{
        backgroundColor: '#082653',
        borderRadius: '18px',
        boxShadow: '0 6px 20px rgba(8, 38, 83, 0.22)',
        padding: '20px 14px',
        width: '100%',
        margin: '24px auto 0 auto',
      }}
    >
      <div
        className="portfolio-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          alignItems: 'center',
        }}
      >
        {statistics.map((stat, index) => {
          const Icon = stat.icon;
          const isLast = index === statistics.length - 1;

          return (
            <div
              key={stat.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '4px 10px',
                borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
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
                <Icon size={34} strokeWidth={1.8} color="#F5B73A" />
              </div>

              {/* Value and Label */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '23px',
                    fontWeight: '700',
                    color: '#F5B73A',
                    lineHeight: '1.1',
                    letterSpacing: '-0.3px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: '400',
                    color: '#FFFFFF',
                    lineHeight: '1.25',
                    opacity: 0.95,
                    fontFamily: 'var(--font-body)',
                    marginTop: '2px',
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
