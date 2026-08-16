import React from 'react';

export const BrandValueBar = ({ items }) => {
  return (
    <div
      className="brand-value-strip"
      style={{
        width: '100%',
        backgroundColor: '#0B2145',
        marginTop: '34px',
        padding: '28px 20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div
        className="brand-value-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          maxWidth: '1160px',
          margin: '0 auto',
          alignItems: 'center',
        }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === items.length - 1;

          return (
            <div
              key={item.id}
              className="brand-value-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '6px 16px',
                borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Icon size={20} strokeWidth={2.2} color="#F2B233" style={{ flexShrink: 0 }} />
              <span
                style={{
                  fontSize: '14.5px',
                  fontWeight: '500',
                  color: '#FFFFFF',
                  letterSpacing: '-0.2px',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
