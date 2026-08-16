import React from 'react';

export const ProductTrustRow = ({ items }) => {
  return (
    <div
      className="portfolio-trust-row"
      style={{
        width: '100%',
        maxWidth: '1120px',
        margin: '22px auto 26px auto',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid #DDE3EA',
        boxShadow: '0 3px 12px rgba(8, 38, 83, 0.05)',
        padding: '14px 10px',
      }}
    >
      <div
        className="portfolio-trust-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          alignItems: 'center',
        }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === items.length - 1;

          return (
            <div
              key={item.id}
              className="portfolio-trust-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '4px 12px',
                borderRight: isLast ? 'none' : '1px solid #DDE3EA',
                transition: 'transform 0.2s ease',
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#F0F4FA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#082653',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} strokeWidth={2.2} color="#082653" />
              </div>

              {/* Text Area */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#082653',
                    lineHeight: '1.2',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {item.title}
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: '#40516D',
                    lineHeight: '1.25',
                    marginTop: '2px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {item.subtitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
