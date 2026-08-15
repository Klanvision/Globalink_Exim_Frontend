import React from 'react';

export const TopDecoration = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '180px',
        height: '140px',
        pointerEvents: 'none',
        zIndex: 5,
        overflow: 'hidden'
      }}
    >
      <svg width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dark Navy Primary Diagonal Polygon */}
        <polygon points="0,0 160,0 0,130" fill="#00142F" />
        {/* Gold Accent Stripe */}
        <polygon points="160,0 178,0 0,140 0,130" fill="#F5AD24" />
      </svg>
    </div>
  );
};
