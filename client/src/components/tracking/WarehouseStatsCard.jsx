import React from 'react';

export const WarehouseStatsCard = ({ stats }) => {
  return (
    <div
      className="warehouse-stats-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid #EDF0F3',
        boxShadow: '0 4px 14px rgba(8, 38, 83, 0.05)',
        padding: '12px 10px',
        width: '100%',
        marginBottom: '12px',
      }}
    >
      <div
        className="warehouse-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          alignItems: 'center',
        }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isLast = index === stats.length - 1;

          return (
            <div
              key={stat.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '2px 6px',
                borderRight: isLast ? 'none' : '1px solid #DDE3EA',
              }}
            >
              {/* Navy Icon */}
              <div
                style={{
                  color: '#082653',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={22} strokeWidth={1.8} color="#082653" />
              </div>

              {/* Value & Label */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#D99A1E',
                    lineHeight: '1.1',
                    letterSpacing: '-0.3px',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '500',
                    color: '#40516D',
                    lineHeight: '1.2',
                    whiteSpace: 'pre-line',
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
