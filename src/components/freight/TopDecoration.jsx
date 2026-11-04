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
        overflow: 'hidden',
      }}
    >
      <svg width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="orangeDecorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6F00" />
            <stop offset="100%" stopColor="#FF8C00" />
          </linearGradient>
        </defs>
        {/* Radiant Orange Primary Diagonal Polygon */}
        <polygon points="0,0 160,0 0,130" fill="url(#orangeDecorGrad)" opacity="0.95" />
        {/* Pure White Accent Stripe with soft shadow */}
        <polygon points="160,0 176,0 0,142 0,130" fill="#FFFFFF" opacity="0.95" />
        {/* Subtle Orange Glow Stripe */}
        <polygon points="176,0 184,0 0,148 0,142" fill="#FFA000" opacity="0.75" />
      </svg>
    </div>
  );
};
