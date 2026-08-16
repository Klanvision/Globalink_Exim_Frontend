import React from 'react';

export const BuyerStatsBanner = ({ statistics }) => {
  return (
    <div
      className="buyer-stats-banner"
      style={{
        backgroundColor: '#082653',
        borderRadius: '18px',
        boxShadow: '0 6px 20px rgba(8, 38, 83, 0.22)',
        padding: '20px 14px',
        width: '100%',
        margin: '10px auto 26px auto',
      }}
    >
      <div
        className="buyer-stats-grid"
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

              {/* Text Area */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    lineHeight: '1.1',
                    letterSpacing: '-0.3px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    lineHeight: '1.2',
                    fontFamily: 'var(--font-body)',
                    marginTop: '2px',
                  }}
                >
                  {stat.title}
                </span>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 0.75)',
                    lineHeight: '1.2',
                    fontFamily: 'var(--font-body)',
                    marginTop: '1px',
                  }}
                >
                  {stat.subtitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
