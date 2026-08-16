import React from 'react';
import { Globe2, ArrowRight } from 'lucide-react';

export const NetworkCtaButton = ({ onClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        margin: '0 auto 10px auto',
      }}
    >
      <button
        onClick={onClick}
        className="network-primary-cta"
        style={{
          width: '380px',
          maxWidth: '100%',
          height: '46px',
          borderRadius: '10px',
          background: 'linear-gradient(90deg, #0A4FC7 0%, #124BC0 100%)',
          boxShadow: '0 4px 16px rgba(10, 79, 199, 0.24)',
          color: '#FFFFFF',
          fontSize: '15px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 22px',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.22s ease',
          fontFamily: 'var(--font-body)',
        }}
      >
        {/* Left Globe Icon */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Globe2 size={20} strokeWidth={2.2} color="#FFFFFF" />
        </div>

        {/* Text */}
        <span style={{ letterSpacing: '0.2px' }}>Explore Our Network</span>

        {/* Right Arrow */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowRight size={20} strokeWidth={2.4} color="#FFFFFF" />
        </div>
      </button>
    </div>
  );
};
