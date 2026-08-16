import React from 'react';

export const CustomsStatsCard = ({ stats }) => {
  return (
    <div
      className="customs-stats-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '18px',
        border: '1.5px solid #DCE6F1',
        boxShadow: '0 4px 14px rgba(8, 38, 83, 0.07)',
        padding: '16px 10px',
        width: '100%',
        maxWidth: '520px',
      }}
    >
      <div
        className="customs-stats-grid"
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
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2px 6px',
                borderRight: isLast ? 'none' : '1px solid #D6DDE6',
              }}
            >
              {/* Dark Navy Icon */}
              <div
                style={{
                  color: '#082653',
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={28} strokeWidth={1.8} color="#082653" />
              </div>

              {/* Number */}
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#082653',
                  lineHeight: '1.1',
                  letterSpacing: '-0.2px',
                  fontFamily: 'var(--font-body)',
                  marginBottom: '3px',
                }}
              >
                {item.value}
              </span>

              {/* Label */}
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#40516D',
                  lineHeight: '1.25',
                  fontFamily: 'var(--font-body)',
                  whiteSpace: 'pre-line',
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
