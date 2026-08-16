import React from 'react';

export const ServicesBenefitsBanner = ({ benefits }) => {
  return (
    <section
      className="clay-benefits-banner"
      style={{
        background: 'linear-gradient(145deg, #092C5E 0%, #041738 100%)',
        borderRadius: '24px',
        border: '1.5px solid rgba(242, 181, 47, 0.35)',
        boxShadow: 'inset 3px 3px 8px rgba(255, 255, 255, 0.14), inset -5px -5px 12px rgba(0, 0, 0, 0.65), 0 16px 36px rgba(0, 0, 0, 0.45)',
        margin: '28px 28px 0 28px',
        padding: '22px 18px',
      }}
    >
      <div
        className="services-benefits-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          alignItems: 'flex-start',
        }}
      >
        {benefits.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === benefits.length - 1;

          return (
            <div
              key={item.id}
              className="services-benefit-item"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0 14px',
                borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.12)',
                height: '100%',
                transition: 'transform 0.2s ease',
              }}
            >
              {/* 3D Clay Icon Orb */}
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(145deg, #FFC94A 0%, #DE971B 100%)',
                  boxShadow: 'inset 2px 2px 4px rgba(255, 255, 255, 0.5), inset -2px -2px 4px rgba(120, 70, 0, 0.45), 0 6px 14px rgba(222, 151, 27, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                  flexShrink: 0,
                }}
              >
                <Icon size={22} strokeWidth={2.2} color="#03132D" />
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: '14.5px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  lineHeight: '1.25',
                  marginBottom: '4px',
                  fontFamily: 'var(--font-body)',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.35)',
                }}
              >
                {item.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  fontSize: '11.5px',
                  lineHeight: '1.45',
                  color: 'rgba(255, 255, 255, 0.85)',
                  whiteSpace: 'pre-line',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
