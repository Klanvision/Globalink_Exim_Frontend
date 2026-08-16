import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const BuyerTrustRow = ({ statements }) => {
  return (
    <div
      className="buyer-trust-row"
      style={{
        width: '100%',
        maxWidth: '1120px',
        margin: '0 auto 10px auto',
        padding: '12px 10px',
      }}
    >
      <div
        className="buyer-trust-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          alignItems: 'center',
        }}
      >
        {statements.map((statement, index) => {
          const isLast = index === statements.length - 1;

          return (
            <div
              key={index}
              className="buyer-trust-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '4px 12px',
                borderRight: isLast ? 'none' : '1px solid #D6DCE4',
              }}
            >
              {/* Navy Check Icon */}
              <div
                style={{
                  color: '#082653',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <CheckCircle2 size={24} strokeWidth={2.4} color="#082653" />
              </div>

              {/* Text */}
              <span
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#17253B',
                  fontFamily: 'var(--font-body)',
                  whiteSpace: 'nowrap',
                }}
              >
                {statement}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
