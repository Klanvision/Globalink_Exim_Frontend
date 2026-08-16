import React from 'react';

export const ProcurementStats = ({ stats }) => {
  return (
    <div
      className="procurement-stats-banner"
      style={{
        width: '100%',
        backgroundColor: '#062A62',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '36px 20px',
        marginTop: '34px',
      }}
    >
      <div
        className="procurement-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          maxWidth: '1160px',
          margin: '0 auto',
          alignItems: 'center',
        }}
      >
        {stats.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === stats.length - 1;

          return (
            <div
              key={item.id}
              className="procurement-stat-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                padding: '8px 12px',
                borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.18)',
              }}
            >
              {/* Gold Icon */}
              <div
                style={{
                  color: '#F2A922',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={38} strokeWidth={2} color="#F2A922" />
              </div>

              {/* Stat Value & Label */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '28px',
                    fontWeight: '800',
                    color: '#F2A922',
                    lineHeight: '1.1',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {item.value}
                </span>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#FFFFFF',
                    lineHeight: '1.2',
                    marginTop: '2px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
