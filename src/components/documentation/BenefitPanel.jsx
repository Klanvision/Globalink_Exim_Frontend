import React from 'react';

export const BenefitPanel = ({ benefits }) => {
  return (
    <section
      className="compliance-benefit-panel"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        border: '1px solid #E2E6EB',
        borderTop: '3.5px solid #E4A326',
        boxShadow: '0 6px 20px rgba(8, 38, 83, 0.08)',
        margin: '36px 28px 0 28px',
        padding: '30px 24px',
      }}
    >
      <div
        className="compliance-benefits-grid"
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
              className="compliance-benefit-item"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0 20px',
                borderRight: isLast ? 'none' : '1px solid #DDE3EA',
                height: '100%',
              }}
            >
              {/* Navy Circular Icon */}
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: '#082653',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  boxShadow: '0 4px 10px rgba(8, 38, 83, 0.2)',
                  flexShrink: 0,
                }}
              >
                <Icon size={24} strokeWidth={2} color="#FFFFFF" />
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#082653',
                  lineHeight: '1.25',
                  marginBottom: '6px',
                  whiteSpace: 'pre-line',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: '400',
                  lineHeight: '1.45',
                  color: '#40516D',
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
