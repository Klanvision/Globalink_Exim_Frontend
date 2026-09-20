import React from 'react';

export const HeroBanner = () => {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '100vw',
        margin: '-50px 0 0 0', /* Negative margin pulls it up exactly behind the 50px transparent nav bar */
        padding: '0',
        lineHeight: '0',
        overflow: 'hidden',
        display: 'block',
        fontSize: '0',
        position: 'relative',
      }}
    >
      <img
        src="/hero-section-banner-v2.png"
        alt="GlobalLink Exim – Bridging Global Trade"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'cover',
          objectPosition: 'center center',
          /* Ultra high resolution GPU-accelerated rendering */
          transform: 'translateZ(0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          imageRendering: 'high-quality',
        }}
      />
      {/* Dark shade overlay on the left side for text readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(0, 18, 41, 0.95) 0%, rgba(0, 18, 41, 0.7) 40%, rgba(0, 18, 41, 0) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </section>
  );
};
