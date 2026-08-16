import React from 'react';

export const NetworkMapGraphic = () => {
  return (
    <div
      className="network-map-container"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1060px',
        margin: '16px auto 26px auto',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(8, 38, 83, 0.08)',
        background: '#FFFFFF',
        border: '1px solid #E2EBF5',
      }}
    >
      {/* Real High-Resolution World Network Map */}
      <img
        src="/world-network-map.jpg"
        alt="Global Link Connected Trade Network Map"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '480px',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />
    </div>
  );
};
