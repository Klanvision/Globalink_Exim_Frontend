import React from 'react';
import { motion } from 'framer-motion';
import { HeroFeature } from './HeroFeature';
import { CTAButtons } from './CTAButtons';
import { InteractiveLogisticsHub } from './InteractiveLogisticsHub';

export const HeroBanner = ({
  onExploreServices,
  onExploreProducts,
  onSearch,
  onNavigate,
  onQuote,
  onTrack,
}) => {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '100vw',
        margin: '-50px 0 0 0',
        padding: '0',
        overflow: 'hidden',
        display: 'block',
        position: 'relative',
        background: '#020816',
      }}
    >
      {/* ── Image area with gradient + text overlay ── */}
      <div style={{ position: 'relative', minHeight: '560px', lineHeight: '0', fontSize: '0' }}>
        {/* Full-width Banner Image */}
        <img
          src="/hero-section-banner-v2.png"
          alt="GlobalLink Exim – Bridging Global Trade"
          style={{
            width: '100%',
            minHeight: '560px',
            height: 'auto',
            display: 'block',
            objectFit: 'cover',
            objectPosition: 'center center',
            transform: 'translateZ(0)',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            imageRendering: 'high-quality',
          }}
        />

        {/* Left-to-right gradient overlay for text readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(to right,
              rgba(2, 8, 22, 0.97) 0%,
              rgba(2, 8, 22, 0.93) 22%,
              rgba(2, 10, 28, 0.82) 38%,
              rgba(3, 14, 36, 0.55) 52%,
              rgba(4, 18, 45, 0.22) 68%,
              rgba(4, 18, 45, 0.04) 84%,
              rgba(0, 0, 0, 0) 100%)`,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Text Content Overlay — left-aligned over the dark gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            padding: '24px var(--section-horizontal-padding, 132px) 76px var(--section-horizontal-padding, 132px)',
            boxSizing: 'border-box',
            fontSize: 'initial',
            lineHeight: 'initial',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ maxWidth: '840px', width: '100%' }}
          >
            {/* Main Brand Name — orange-to-yellow gradient, bold */}
            <h1
              className="hero-heading"
              style={{
                fontSize: 'clamp(34px, 4vw, 56px)',
                fontWeight: '900',
                lineHeight: '1.1',
                letterSpacing: '-0.5px',
                fontFamily: 'var(--font-heading)',
                background: 'linear-gradient(90deg, #FF6B00 0%, #FF8C00 28%, #FFA800 52%, #FFD000 78%, #FFE566 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0px',
                display: 'block',
              }}
            >
              <span style={{ display: 'block', fontSize: 'clamp(30px, 3vw, 48px)', fontWeight: '900', letterSpacing: '-0.4px', whiteSpace: 'nowrap' }}>
                Connecting Markets
              </span>
              <span style={{ display: 'block', fontSize: 'clamp(18px, 1.8vw, 26px)', fontWeight: '700', letterSpacing: '-0.1px', opacity: 0.88 }}>
                Delivering Global Trade with Trust.
              </span>
            </h1>

            {/* Decorative separator bars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '16px', marginBottom: '18px' }}>
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ width: '54px', height: '3.5px', background: 'linear-gradient(90deg, #FF8C00, #FFD000)', borderRadius: '2px' }}
              />
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                style={{ width: '18px', height: '3.5px', background: 'linear-gradient(90deg, #FFD000, rgba(255,208,0,0.2))', borderRadius: '2px' }}
              />
            </div>

            {/* Description */}
            <p
              className="hero-description"
              style={{
                fontSize: '14.5px',
                lineHeight: '1.68',
                color: 'rgba(210, 220, 240, 0.90)',
                maxWidth: '430px',
                fontFamily: 'var(--font-body)',
                fontWeight: '400',
                marginBottom: '0',
              }}
            >
              Bringing the world closer through reliable,<br />
              efficient and secure import &amp; export solutions.
            </p>

            {/* Feature Highlights */}
            <HeroFeature />

            {/* CTA Buttons */}
            <CTAButtons
              onExploreServices={onExploreServices}
              onExploreProducts={onExploreProducts}
            />
          </motion.div>
        </div>
      </div>

      {/* ── Interactive 3-Column Logistics Hub (Self-Service Enterprise Suite) ── */}
      <div
        className="hero-logistics-hub-wrapper"
        style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '0 var(--section-horizontal-padding, 132px) 28px var(--section-horizontal-padding, 132px)',
          position: 'relative',
          zIndex: 10,
          marginTop: '-58px',
          fontSize: 'initial',
          lineHeight: 'initial',
        }}
      >
        <InteractiveLogisticsHub
          onNavigate={onNavigate}
          onTrack={onTrack || onSearch}
          onQuote={onQuote || onExploreServices}
        />
      </div>
    </section>
  );
};
