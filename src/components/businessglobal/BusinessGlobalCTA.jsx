import React from 'react';
import { BusinessGlobalCtaButtons } from './BusinessGlobalCtaButtons';
import { Sparkles, Globe2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const BusinessGlobalCTA = ({ onQuoteClick, onTradeClick, onPartnerClick, loading = false }) => {
  if (loading) {
    return (
      <div
        className="premium-skeleton-card"
        style={{
          width: '100%',
          padding: '42px 28px',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div className="premium-skeleton-base" style={{ width: '220px', height: '28px', borderRadius: '999px', marginBottom: '16px' }} />
        <div className="premium-skeleton-base" style={{ width: '60%', height: '32px', marginBottom: '10px', borderRadius: '6px' }} />
        <div className="premium-skeleton-base" style={{ width: '45%', height: '16px', marginBottom: '24px', borderRadius: '4px' }} />
        <div style={{ display: 'flex', gap: '14px' }}>
          <div className="premium-skeleton-base" style={{ width: '160px', height: '44px', borderRadius: '999px' }} />
          <div className="premium-skeleton-base" style={{ width: '160px', height: '44px', borderRadius: '999px' }} />
        </div>
      </div>
    );
  }
  return (
    <section
      id="business-global-cta"
      className="business-global-cta-section"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 50%, #FFF5EB 100%)',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1.5px solid rgba(255, 111, 0, 0.25)',
        boxShadow: '0 10px 36px rgba(255, 111, 0, 0.08)',
        margin: '0 0 28px 0',
        padding: '42px 28px',
      }}
    >
      {/* Background Subtle Orange Ambient Discs */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          right: '10%',
          width: '260px',
          height: '260px',
          background: 'radial-gradient(circle, rgba(255, 111, 0, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(255, 168, 0, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '820px',
          margin: '0 auto',
        }}
      >
        {/* Eyebrow Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            borderRadius: '999px',
            background: 'rgba(255, 111, 0, 0.08)',
            border: '1px solid rgba(255, 111, 0, 0.25)',
            marginBottom: '10px',
          }}
        >
          <Sparkles size={12} color="#FF6F00" />
          <span
            style={{
              fontSize: '11px',
              fontWeight: '700',
              color: '#FF6F00',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-body)',
            }}
          >
            START YOUR GLOBAL JOURNEY TODAY
          </span>
        </div>

        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(24px, 2.4vw, 34px)',
            fontWeight: '800',
            color: '#0F172A',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            fontFamily: 'var(--font-body)',
            marginBottom: '8px',
          }}
        >
          Ready to Take Your <span style={{ color: '#FF6F00' }}>Business Global?</span>
        </h2>

        {/* Glowing Gradient Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #FF6F00)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
          <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #FF6F00, transparent)' }} />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '14.5px',
            fontWeight: '400',
            color: '#475569',
            lineHeight: '1.5',
            fontFamily: 'var(--font-body)',
            maxWidth: '680px',
            marginBottom: '16px',
          }}
        >
          Partner with Global Link for streamlined import-export operations, certified quality, compliant customs clearance, and global freight solutions.
        </p>

        {/* 3 Quick Value Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            margin: '6px 0 16px 0',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0F172A', fontSize: '12px', fontWeight: '600' }}>
            <Globe2 size={16} color="#FF6F00" />
            <span>120+ Trade Hubs</span>
          </div>
          <span style={{ color: '#FF6F00' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0F172A', fontSize: '12px', fontWeight: '600' }}>
            <ShieldCheck size={16} color="#FF6F00" />
            <span>100% Customs Compliant</span>
          </div>
          <span style={{ color: '#FF6F00' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0F172A', fontSize: '12px', fontWeight: '600' }}>
            <Zap size={16} color="#FF6F00" />
            <span>Instant Quote Delivery</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <BusinessGlobalCtaButtons
          onQuoteClick={onQuoteClick}
          onTradeClick={onTradeClick}
          onPartnerClick={onPartnerClick}
        />
      </div>
    </section>
  );
};
