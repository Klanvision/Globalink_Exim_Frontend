import React from 'react';

export const ServicesStatisticsRow = ({ statistics }) => {
  return (
    <div
      className="clay-stats-row"
      style={{
        background: 'linear-gradient(145deg, #092B5C 0%, #041738 100%)',
        borderRadius: '22px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: 'inset 3px 3px 7px rgba(255, 255, 255, 0.12), inset -4px -4px 10px rgba(0, 0, 0, 0.60), 0 14px 30px rgba(0, 0, 0, 0.40)',
        margin: '24px 28px 0 28px',
        padding: '18px 14px',
      }}
    >
      <div
        className="services-stats-grid"
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
              className="services-stat-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '4px 10px',
                borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              {/* 3D Clay Icon Orb */}
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'linear-gradient(145deg, #FFC94A 0%, #DE971B 100%)',
                  boxShadow: 'inset 2px 2px 4px rgba(255, 255, 255, 0.5), inset -2px -2px 4px rgba(120, 70, 0, 0.45), 0 5px 12px rgba(222, 151, 27, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} strokeWidth={2.2} color="#03132D" />
              </div>

              {/* Stat Value & Label */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#FFC94A',
                    lineHeight: '1.1',
                    letterSpacing: '-0.3px',
                    fontFamily: 'var(--font-body)',
                    textShadow: '0 2px 6px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: '500',
                    color: 'rgba(255, 255, 255, 0.88)',
                    lineHeight: '1.2',
                    marginTop: '2px',
                    whiteSpace: 'nowrap',
                    fontFamily: 'var(--font-body)',
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
