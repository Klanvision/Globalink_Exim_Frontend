import React from 'react';

export const PartnerLogosRow = ({ partners }) => {
  return (
    <div
      className="partner-logos-wrapper"
      style={{
        width: '100%',
        maxWidth: '1060px',
        margin: '24px auto 26px auto',
        padding: '0 10px',
      }}
    >
      <div
        className="partner-logos-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          alignItems: 'center',
        }}
      >
        {partners.map((partner, index) => {
          const isLast = index === partners.length - 1;

          return (
            <div
              key={partner.id}
              className="partner-logo-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 12px',
                borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.14)',
                textAlign: 'center',
                transition: 'opacity 0.2s ease',
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  color: 'rgba(255, 255, 255, 0.88)',
                  letterSpacing: '0.6px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {partner.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
