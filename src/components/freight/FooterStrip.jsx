import React from 'react';
import { Globe } from 'lucide-react';

export const FooterStrip = () => {
  return (
    <footer
      style={{
        margin: '20px 28px 24px 28px',
        background: '#001E4A',
        minHeight: '85px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '20px 28px',
        borderRadius: '12px',
        border: '1px solid var(--border)'
      }}
    >
      {/* Bottom-Left Gold/Navy Decorative Shape */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '120px',
          height: '60px',
          pointerEvents: 'none',
          opacity: 0.8
        }}
      >
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
          <path d="M0 60L80 60L0 0Z" fill="#00142F" />
          <path d="M80 60L95 60L0 0L0 12Z" fill="#F5AD24" />
        </svg>
      </div>

      {/* Centered Statement with Thin Gold Lines */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          zIndex: 2,
          textAlign: 'center'
        }}
      >
        {/* Left Gold Line */}
        <div
          style={{
            width: '60px',
            height: '1px',
            backgroundColor: '#F5AD24',
            opacity: 0.85
          }}
        />

        {/* Statement Text */}
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '400',
            fontFamily: 'var(--font-heading)',
            color: '#FFFFFF',
            letterSpacing: '0.01em',
            margin: 0
          }}
        >
          One World. One Partner. Endless Possibilities.
        </h2>

        {/* Right Gold Line */}
        <div
          style={{
            width: '60px',
            height: '1px',
            backgroundColor: '#F5AD24',
            opacity: 0.85
          }}
        />
      </div>

      {/* Bottom-Right Globe Graphic */}
      <div
        style={{
          position: 'absolute',
          bottom: '-35px',
          right: '-25px',
          color: 'rgba(255, 255, 255, 0.08)',
          pointerEvents: 'none',
          transform: 'rotate(-15deg)'
        }}
      >
        <Globe size={150} strokeWidth={1} />
      </div>
    </footer>
  );
};
