import React from 'react';

export const ProcessTrustBanner = ({ items }) => {
  return (
    <section
      className="process-trust-banner"
      style={{
        backgroundColor: '#082F62',
        borderRadius: '22px',
        border: '2px solid #E8A52A',
        boxShadow: '0 7px 16px rgba(8, 47, 98, 0.25)',
        margin: '28px 28px 0 28px',
        padding: '24px 18px',
      }}
    >
      <div
        className="process-trust-grid"
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
              className="process-trust-item"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0 16px',
                borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.25)',
                height: '100%',
                transition: 'transform 0.2s ease',
              }}
            >
              {/* Large Gold Icon */}
              <div
                style={{
                  color: '#F5B73A',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={36} strokeWidth={2} color="#F5B73A" />
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: '15.5px',
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
                  fontSize: '12.5px',
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
