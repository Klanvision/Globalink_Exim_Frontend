import React from 'react';
import { HeroFeature } from './HeroFeature';
import { CTAButtons } from './CTAButtons';

export const Hero = ({ onExploreServices, onExploreProducts }) => {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '420px',
        margin: '16px 28px 0 28px',
        padding: '36px 32px 24px 32px',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(to right,
          rgba(2, 8, 22, 1) 0%,
          rgba(2, 8, 22, 0.97) 22%,
          rgba(2, 10, 28, 0.92) 38%,
          rgba(3, 14, 36, 0.72) 52%,
          rgba(4, 18, 45, 0.35) 68%,
          rgba(4, 18, 45, 0.05) 84%,
          rgba(0, 0, 0, 0) 100%),
          url('/hero-section-banner-v2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '1px solid rgba(250, 174, 43, 0.18)',
        boxShadow: '0 8px 40px rgba(2, 8, 22, 0.55)'
      }}
    >
      {/* Hero Text & Heading Container */}
      <div style={{ maxWidth: '580px', zIndex: 2 }}>

        {/* Top Tagline — white, bold, tracking */}
        <p
          style={{
            fontSize: '15px',
            fontWeight: '700',
            letterSpacing: '0.06em',
            color: '#ffffff',
            fontFamily: 'var(--font-heading)',
            marginBottom: '6px',
            textTransform: 'uppercase',
            opacity: 0.92
          }}
        >
          Your Global Trade Partner
        </p>

        {/* Main Brand Name — giant orange-to-yellow gradient */}
        <h1
          className="hero-heading"
          style={{
            fontSize: '52px',
            fontWeight: '900',
            lineHeight: '1.05',
            letterSpacing: '-1px',
            fontFamily: 'var(--font-heading)',
            background: 'linear-gradient(90deg, #FF6B00 0%, #FF8C00 30%, #FFA800 55%, #FFD000 80%, #FFE566 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '4px',
            display: 'inline-block'
          }}
        >
          GlobalLink Exports
          <br />
          &amp; Imports
        </h1>

        {/* Decorative separator — double bar matching image */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '14px', marginBottom: '16px' }}>
          <div style={{
            width: '54px',
            height: '3.5px',
            background: 'linear-gradient(90deg, #FF8C00, #FFD000)',
            borderRadius: '2px'
          }} />
          <div style={{
            width: '18px',
            height: '3.5px',
            background: 'linear-gradient(90deg, #FFD000, rgba(255,208,0,0.25))',
            borderRadius: '2px'
          }} />
        </div>

        {/* Hero Description */}
        <p
          className="hero-description"
          style={{
            fontSize: '14.5px',
            lineHeight: '1.65',
            color: 'rgba(210, 220, 240, 0.88)',
            maxWidth: '440px',
            fontFamily: 'var(--font-body)',
            fontWeight: '400',
            marginBottom: '0'
          }}
        >
          Bringing the world closer through reliable,<br />
          efficient and secure import &amp; export solutions.
        </p>

        {/* 4 Compact Gold-Icon Feature Highlights */}
        <HeroFeature />

        {/* CTA Buttons */}
        <CTAButtons
          onExploreServices={onExploreServices}
          onExploreProducts={onExploreProducts}
        />
      </div>
    </section>
  );
};
