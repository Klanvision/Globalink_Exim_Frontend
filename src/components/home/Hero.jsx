import React from 'react';
import { HeroFeature } from './HeroFeature';
import { CTAButtons } from './CTAButtons';

export const Hero = ({ onExploreServices, onExploreProducts }) => {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '380px',
        margin: '16px 28px 0 28px',
        padding: '32px 28px 20px 28px',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(90deg, 
          rgba(0, 18, 41, 1) 0%, 
          rgba(0, 18, 41, 0.94) 34%, 
          rgba(0, 18, 41, 0.55) 62%, 
          rgba(0, 18, 41, 0.15) 100%), 
          url('/hero-logistics.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '1px solid var(--border)'
      }}
    >
      {/* Hero Text & Heading Container */}
      <div style={{ maxWidth: '520px', zIndex: 2 }}>
        <h1
          className="hero-heading"
          style={{
            fontSize: '44px',
            fontWeight: '700',
            lineHeight: '1.08',
            letterSpacing: '-0.5px',
            fontFamily: 'var(--font-heading)',
            color: 'var(--white)',
            marginBottom: '10px'
          }}
        >
          Bridging Global Markets.<br />
          <span style={{ color: 'var(--gold)' }}>Empowering Trade.</span>
        </h1>

        {/* Decorative Gold Line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '14px' }}>
          <div style={{
            width: '50px',
            height: '3px',
            backgroundColor: 'var(--gold)',
            borderRadius: '1.5px'
          }} />
          <div style={{
            width: '15px',
            height: '3px',
            backgroundColor: 'rgba(250, 174, 43, 0.4)',
            borderRadius: '1.5px'
          }} />
        </div>

        {/* Hero Description */}
        <p
          className="hero-description"
          style={{
            fontSize: '14.5px',
            lineHeight: '1.55',
            color: 'var(--text-secondary)',
            maxWidth: '430px',
            fontFamily: 'var(--font-body)',
            fontWeight: '400'
          }}
        >
          We connect trusted exporters and importers across the world with smart logistics, reliable network and end-to-end trade solutions that deliver more than expectations.
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
