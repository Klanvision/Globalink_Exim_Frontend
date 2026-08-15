import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTAButtons = ({ onExploreServices, onExploreProducts }) => {
  return (
    <div
      className="cta-buttons-container"
      style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '14px' }}
    >
      {/* Primary Gold CTA */}
      <button
        onClick={onExploreServices}
        style={{
          width: '180px',
          height: '40px',
          borderRadius: '5px',
          background: 'var(--gold)',
          color: 'var(--navy)',
          fontWeight: '700',
          fontSize: '12.5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          boxShadow: '0 4px 14px rgba(250, 174, 43, 0.3)',
          transition: 'all 0.2s ease'
        }}
      >
        <span>Explore Our Services</span>
        <ArrowRight size={15} strokeWidth={2.5} />
      </button>

      {/* Secondary Outlined CTA */}
      <button
        onClick={onExploreProducts}
        style={{
          width: '180px',
          height: '40px',
          borderRadius: '5px',
          background: 'rgba(0, 18, 41, 0.6)',
          border: '1px solid var(--gold)',
          color: 'var(--white)',
          fontWeight: '600',
          fontSize: '12.5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          backdropFilter: 'blur(4px)',
          transition: 'all 0.2s ease'
        }}
      >
        <span>Explore Products</span>
        <ArrowRight size={15} strokeWidth={2.5} color="var(--gold)" />
      </button>
    </div>
  );
};
