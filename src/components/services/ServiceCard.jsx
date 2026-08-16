import React from 'react';

export const ServiceCard = ({ service, onClick }) => {
  const Icon = service.icon;

  return (
    <div
      onClick={onClick}
      className="clay-service-card"
      style={{
        background: 'linear-gradient(145deg, #0B2B5C 0%, #051A3B 100%)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: 'inset 3px 3px 6px rgba(255, 255, 255, 0.12), inset -4px -4px 8px rgba(0, 0, 0, 0.55), 0 12px 24px rgba(0, 0, 0, 0.35)',
        padding: '18px 12px 16px 12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)',
        minHeight: '172px',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* 3D Tactile Clay Icon Orb */}
      <div
        className="clay-service-icon-wrap"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'linear-gradient(145deg, #FFC94A 0%, #DE971B 100%)',
          boxShadow: 'inset 2.5px 2.5px 5px rgba(255, 255, 255, 0.55), inset -2.5px -2.5px 5px rgba(130, 80, 0, 0.45), 0 8px 18px rgba(222, 151, 27, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#03132D',
          marginBottom: '10px',
          transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
          flexShrink: 0,
        }}
      >
        <Icon size={25} strokeWidth={2.2} color="#03132D" />
      </div>

      {/* Service Title */}
      <h3
        style={{
          fontSize: '14px',
          fontWeight: '700',
          color: '#FFFFFF',
          lineHeight: '1.25',
          marginBottom: '4px',
          fontFamily: 'var(--font-body)',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
        }}
      >
        {service.title}
      </h3>

      {/* Service Description */}
      <p
        style={{
          fontSize: '11.5px',
          lineHeight: '1.4',
          color: 'rgba(255, 255, 255, 0.82)',
          whiteSpace: 'pre-line',
          fontWeight: '400',
          fontFamily: 'var(--font-body)',
        }}
      >
        {service.description}
      </p>
    </div>
  );
};
