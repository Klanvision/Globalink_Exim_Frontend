import React from 'react';
import { BusinessGlobalCtaButtons } from './BusinessGlobalCtaButtons';

export const BusinessGlobalCTA = ({ onQuoteClick, onTradeClick, onPartnerClick }) => {
  return (
    <section
      id="business-global-cta"
      className="business-global-cta-section"
      style={{
        position: 'relative',
        background: `
          radial-gradient(circle at 78% 38%, rgba(18, 76, 140, 0.28), transparent 45%),
          linear-gradient(135deg, #02132F 0%, #031A3D 55%, #020F29 100%)
        `,
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid #1C3866',
        boxShadow: '0 10px 36px rgba(0, 0, 0, 0.35)',
        margin: '35px 28px 0 28px',
        padding: '48px 42px',
      }}
    >
      {/* Background World Network Matrix */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 10% 80%, rgba(242, 181, 47, 0.04) 0%, transparent 40%),
            linear-gradient(rgba(10, 76, 145, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10, 76, 145, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 36px 36px, 36px 36px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Subtle Glowing Network Nodes */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '8%',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#5AA8E8',
          boxShadow: '0 0 8px rgba(90, 168, 232, 0.8)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '22%',
          left: '42%',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#F2B52F',
          boxShadow: '0 0 12px rgba(242, 181, 47, 0.9)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '65%',
          left: '18%',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#5AA8E8',
          boxShadow: '0 0 8px rgba(90, 168, 232, 0.8)',
          pointerEvents: 'none',
        }}
      />

      {/* Main Split Layout: Left Content (55%) & Right Visual (45%) */}
      <div
        className="business-global-split-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          alignItems: 'center',
          gap: '36px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left Content Area */}
        <div className="business-global-left-content">
          {/* Two-Line Modern Display Heading */}
          <h2
            style={{
              fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              fontSize: '44px',
              fontWeight: '800',
              lineHeight: '1.1',
              letterSpacing: '-1px',
              marginBottom: '18px',
            }}
          >
            <span style={{ color: '#FFFFFF', display: 'block' }}>
              Ready to Take Your
            </span>
            <span style={{ color: '#F2B52F', display: 'block' }}>
              Business Global?
            </span>
          </h2>

          {/* Supporting Description */}
          <p
            style={{
              fontSize: '17px',
              lineHeight: '1.55',
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 0.92)',
              fontFamily: 'var(--font-body)',
              maxWidth: '560px',
              whiteSpace: 'pre-line',
            }}
          >
            {`Let’s connect your products with the right markets,\nbuyers and logistics network.`}
          </p>

          {/* 3 CTA Buttons */}
          <BusinessGlobalCtaButtons
            onQuoteClick={onQuoteClick}
            onTradeClick={onTradeClick}
            onPartnerClick={onPartnerClick}
          />
        </div>

        {/* Right Hero Visual: Handshake + Digital Earth Globe */}
        <div
          className="business-global-right-visual"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Subtle warm gold/blue backlight */}
          <div
            style={{
              position: 'absolute',
              inset: '-10%',
              background: 'radial-gradient(circle at 60% 40%, rgba(242, 181, 47, 0.18) 0%, rgba(10, 76, 145, 0.25) 40%, transparent 70%)',
              filter: 'blur(20px)',
              pointerEvents: 'none',
            }}
          />

          <img
            src="/handshake-globe-hero.jpg"
            alt="Business partnership handshake with global digital network"
            style={{
              width: '100%',
              maxWidth: '540px',
              height: 'auto',
              borderRadius: '14px',
              objectFit: 'cover',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.45)',
              border: '1px solid rgba(100, 160, 220, 0.25)',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
};
