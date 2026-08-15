import React from 'react';

export const ProcessStatisticsRow = ({ statistics }) => {
  return (
    <div
      className="process-stats-row"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid #DDE3EA',
        boxShadow: '0 2px 10px rgba(8, 38, 83, 0.04)',
        margin: '24px 28px 0 28px',
        padding: '20px 14px',
      }}
    >
      <div
        className="process-stats-grid"
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
              className="process-stat-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '4px 10px',
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
                <Icon size={30} strokeWidth={1.8} color="#082653" />
              </div>

              {/* Stat Value & Label */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#082653',
                    lineHeight: '1.1',
                    letterSpacing: '-0.3px',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '12.5px',
                    fontWeight: '400',
                    color: '#40516D',
                    lineHeight: '1.2',
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
