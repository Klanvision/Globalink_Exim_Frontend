import React from 'react';
import { BenefitCard } from './BenefitCard';

export const BenefitSection = ({ benefits, loading = false }) => {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '28px',
        width: '100%',
      }}
    >
      <h3
        style={{
          fontSize: '19px',
          fontWeight: '700',
          color: '#0F172A',
          textAlign: 'center',
          marginBottom: '18px',
          letterSpacing: '-0.3px',
          fontFamily: 'var(--font-body)',
        }}
      >
        Why Choose Our <span style={{ color: '#FF6F00' }}>Procurement Solutions?</span>
      </h3>

      <div
        className="procurement-benefits-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '14px',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {(loading ? Array.from({ length: 6 }) : benefits).map((benefit, index) => (
          <BenefitCard
            key={benefit ? benefit.id : index}
            benefit={benefit}
            loading={loading}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
