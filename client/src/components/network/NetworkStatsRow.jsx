import React from 'react';

export const NetworkStatsRow = ({ stats }) => {
  return (
    <div
      className="network-stats-wrapper"
      style={{
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto 28px auto',
        padding: '0 10px',
      }}
    >
      <div
        className="network-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          alignItems: 'center',
        }}
      >
        {stats.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === stats.length - 1;

          return (
            <div
              key={item.id}
              className="network-stat-item"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '4px 14px',
                borderRight: isLast ? 'none' : '1px solid #C7D3E3',
              }}
            >
              {/* Elevated Circular White Icon Container */}
              <div
                style={{
                  width: '66px',
                  height: '66px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 3px 12px rgba(8, 38, 83, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0A4FC7',
                  marginBottom: '8px',
                  flexShrink: 0,
                  transition: 'transform 0.2s ease',
                }}
              >
                <Icon size={30} strokeWidth={1.8} color="#0A4FC7" />
              </div>

              {/* Vibrant Blue Number */}
              <span
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#0A4FC7',
                  lineHeight: '1.1',
                  letterSpacing: '-0.2px',
                  fontFamily: 'var(--font-body)',
                  marginBottom: '2px',
                }}
              >
                {item.value}
              </span>

              {/* Dark Navy Label */}
              <span
                style={{
                  fontSize: '14.5px',
                  fontWeight: '600',
                  color: '#071C3D',
                  lineHeight: '1.2',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
