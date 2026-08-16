import React from 'react';
import { BenefitCard } from './BenefitCard';

export const BenefitSection = ({ benefits }) => {
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
          fontSize: '22px',
          fontWeight: '700',
          color: '#082653',
          textAlign: 'center',
          marginBottom: '20px',
          letterSpacing: '-0.2px',
        }}
      >
        Why Choose Our Procurement Solutions?
      </h3>

      <div
        className="procurement-benefits-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '16px',
          width: '100%',
          maxWidth: '1140px',
          justifyContent: 'center',
        }}
      >
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </section>
  );
};
