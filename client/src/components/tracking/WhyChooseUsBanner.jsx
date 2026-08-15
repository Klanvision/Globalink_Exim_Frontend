import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhyChooseUsBanner = ({ items }) => {
  return (
    <div
      className="why-choose-us-banner"
      style={{
        backgroundColor: '#082653',
        borderRadius: '14px',
        boxShadow: '0 4px 14px rgba(8, 38, 83, 0.15)',
        padding: '12px 10px 10px 10px',
        width: '100%',
      }}
    >
      {/* Gold Title */}
      <h4
        style={{
          fontSize: '15px',
          fontWeight: '700',
          color: '#F5B73A',
          textAlign: 'center',
          marginBottom: '8px',
          fontFamily: 'var(--font-body)',
        }}
      >
        Why Choose Us?
      </h4>

      {/* 5 Horizontal Items */}
      <div
        className="why-choose-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          alignItems: 'center',
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2px 6px',
                borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.25)',
              }}
            >
              {/* Gold Check Circle */}
              <div style={{ color: '#E8A52A', marginBottom: '3px' }}>
                <CheckCircle2 size={15} strokeWidth={2.4} color="#E8A52A" />
              </div>

              {/* Title */}
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  lineHeight: '1.2',
                  whiteSpace: 'pre-line',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
