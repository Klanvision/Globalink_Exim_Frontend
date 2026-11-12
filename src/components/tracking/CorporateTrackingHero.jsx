import React from 'react';
import { Home } from 'lucide-react';

export const CorporateTrackingHero = ({ onNavigate }) => {
  return (
    <section
      className="corporate-tracking-hero-banner"
      style={{
        width: '100%',
        maxWidth: '100vw',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '180px',
        maxHeight: '250px',
        height: 'clamp(210px, 20vw, 260px)',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#E4EEF6',
      }}
    >
      {/* 1. Full-Width End-to-End Panoramic Background Image (Water & full ship clearly visible) */}
      <img
        src="/sunrise-container-ship-at-port.png"
        alt="Sunrise Container Ship at Port"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'right 50%',
          display: 'block',
          zIndex: 0,
          transform: 'translateZ(0)',
          willChange: 'transform',
          filter: 'contrast(1.05) brightness(1.02) saturate(1.06)',
          imageRendering: 'high-quality',
        }}
      />

      {/* 2. Minimized, Soft Left-Side Sky Shade (fades to completely transparent by 48%) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to right,
            rgba(238, 245, 252, 0.88) 0%,
            rgba(238, 245, 252, 0.78) 18%,
            rgba(238, 245, 252, 0.46) 30%,
            rgba(238, 245, 252, 0.12) 42%,
            rgba(238, 245, 252, 0.0) 50%,
            rgba(0, 0, 0, 0) 100%)`,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 3. Text Overlay — aligned to exact same margin guides as navbar "Home" and "Get a Quote" */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          padding: '0 var(--section-horizontal-padding, 132px)',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            color: '#334155',
            marginBottom: '10px',
          }}
        >
          <button
            onClick={() => onNavigate && onNavigate('home')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#0F172A',
              fontWeight: '600',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'color 0.15s ease',
              textShadow: '0 1px 3px rgba(255, 255, 255, 0.8)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#EA580C')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#0F172A')}
          >
            <Home size={14} color="#0F172A" strokeWidth={2.4} />
            <span>Home</span>
          </button>

          <span style={{ color: '#64748B', userSelect: 'none' }}>/</span>

          <span
            style={{
              color: '#334155',
              fontWeight: '600',
              textShadow: '0 1px 3px rgba(255, 255, 255, 0.8)',
            }}
          >
            Track Cargo
          </span>
        </nav>

        {/* Heading */}
        <h1
          style={{
            fontSize: 'clamp(32px, 3.4vw, 44px)',
            fontWeight: '900',
            color: '#0A1E3F',
            lineHeight: '1.12',
            letterSpacing: '-0.5px',
            margin: '0 0 6px 0',
            fontFamily: 'var(--font-heading, "Inter", sans-serif)',
            textShadow: '0 1px 2px rgba(255, 255, 255, 0.7)',
          }}
        >
          Track Your Shipment
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(14.5px, 1.4vw, 16px)',
            color: '#1E293B',
            margin: 0,
            fontWeight: '600',
            letterSpacing: '-0.1px',
            textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
          }}
        >
          Real-time visibility. Reliable global delivery.
        </p>
      </div>
    </section>
  );
};
