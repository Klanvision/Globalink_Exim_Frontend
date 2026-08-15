import React from 'react';
import { AdvantageItem } from './AdvantageItem';

export const AdvantageGrid = ({ advantages, onAdvantageClick }) => {
  return (
    <div
      className="advantage-grid-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        margin: '28px auto 32px auto',
        padding: '10px 0',
      }}
    >
      {/* Background World Map & Blue Network Wave Vectors */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.45,
        }}
        preserveAspectRatio="none"
        viewBox="0 0 1000 300"
      >
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0A4A91" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#1B73C9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0A4A91" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Curved Network Flow Paths */}
        <path
          d="M 0 120 Q 250 40 500 130 T 1000 110"
          fill="none"
          stroke="url(#waveGrad)"
          strokeWidth="1.8"
        />
        <path
          d="M 0 160 Q 300 220 550 140 T 1000 180"
          fill="none"
          stroke="url(#waveGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 0 90 Q 350 150 700 80 T 1000 130"
          fill="none"
          stroke="url(#waveGrad)"
          strokeWidth="1.2"
        />

        {/* Small Glowing Nodes */}
        <circle cx="250" cy="85" r="3.5" fill="#BFE7FF" filter="drop-shadow(0 0 6px rgba(120,200,255,0.8))" />
        <circle cx="500" cy="130" r="4.5" fill="#FFFFFF" filter="drop-shadow(0 0 8px rgba(120,200,255,0.9))" />
        <circle cx="750" cy="115" r="3.5" fill="#BFE7FF" filter="drop-shadow(0 0 6px rgba(120,200,255,0.8))" />
        <circle cx="350" cy="175" r="3" fill="#BFE7FF" />
        <circle cx="650" cy="145" r="3.5" fill="#BFE7FF" />
      </svg>

      {/* 6 Advantages Grid with Vertical Dividers */}
      <div
        className="advantages-six-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {advantages.map((item, index) => {
          const isLast = index === advantages.length - 1;

          return (
            <div
              key={item.id}
              style={{
                borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.18)',
                padding: '0 6px',
              }}
              className="advantage-column-divider"
            >
              <AdvantageItem
                item={item}
                onClick={onAdvantageClick}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
