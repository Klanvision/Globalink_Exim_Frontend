import React from 'react';

export const CustomsServiceItem = ({ service, onClick }) => {
  const Icon = service.icon;

  return (
    <div
      className="customs-service-item"
      onClick={() => onClick && onClick(service)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 8px',
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
        height: '100%',
      }}
    >
      {/* Circular White Icon Container */}
      <div
        className="customs-circle-container"
        style={{
          width: '96px',
          height: '96px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid #D7DEE7',
          boxShadow: '0 2px 8px rgba(8, 38, 83, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#082653',
          marginBottom: '12px',
          transition: 'all 0.22s ease',
          flexShrink: 0,
        }}
      >
        <Icon size={36} strokeWidth={1.8} color="#082653" />
      </div>

      {/* 2-Line Service Title */}
      <h3
        style={{
          fontSize: '15px',
          fontWeight: '600',
          color: '#082653',
          lineHeight: '1.25',
          fontFamily: 'var(--font-body)',
          marginBottom: '4px',
          whiteSpace: 'pre-line',
          minHeight: '38px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {service.title}
      </h3>

      {/* Small Gold Underline */}
      <div
        style={{
          width: '32px',
          height: '2.5px',
          backgroundColor: '#E8A52A',
          borderRadius: '1.5px',
          margin: '0 auto 8px auto',
        }}
      />

      {/* Description */}
      <p
        style={{
          fontSize: '12px',
          lineHeight: '1.38',
          color: '#29364B',
          textAlign: 'center',
          whiteSpace: 'pre-line',
          fontFamily: 'var(--font-body)',
          maxWidth: '175px',
        }}
      >
        {service.description}
      </p>
    </div>
  );
};
