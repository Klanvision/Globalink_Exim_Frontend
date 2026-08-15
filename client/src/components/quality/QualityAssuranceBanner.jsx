import React from 'react';

export const QualityAssuranceBanner = ({ items }) => {
  return (
    <section
      className="quality-assurance-banner"
      style={{
        backgroundColor: '#082F62',
        borderRadius: '22px',
        borderTop: '3.5px solid #E8A52A',
        boxShadow: '0 8px 24px rgba(8, 47, 98, 0.25)',
        margin: '36px 28px 0 28px',
        padding: '28px 20px',
      }}
    >
      <div
        className="quality-assurance-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          alignItems: 'flex-start',
        }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === items.length - 1;

          return (
            <div
              key={item.id}
              className="quality-assurance-item"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0 18px',
                borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.25)',
                height: '100%',
              }}
            >
              {/* Large Gold Icon */}
              <div
                style={{
                  color: '#E8A52A',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={38} strokeWidth={2} color="#E8A52A" />
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  lineHeight: '1.25',
                  marginBottom: '6px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.45',
                  color: 'rgba(255, 255, 255, 0.92)',
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
