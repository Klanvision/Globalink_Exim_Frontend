import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CTAButtons = ({ onExploreServices, onExploreProducts }) => {
  return (
    <div
      className="cta-buttons-container"
      style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '16px' }}
    >
      {/* Primary Sunset CTA — Matching Navbar Luxury Action Style */}
      <motion.button
        className="shine-sweep-hover"
        whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 24px rgba(249, 115, 22, 0.45)' }}
        whileTap={{ scale: 0.96 }}
        onClick={onExploreServices}
        style={{
          height: '42px',
          borderRadius: '9999px',
          background: 'linear-gradient(135deg, #FF8C00 0%, #FF7A00 50%, #F57C00 100%)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: '#FFFFFF',
          fontWeight: '700',
          fontSize: '13px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '0 12px 0 20px',
          boxShadow: '0 4px 16px rgba(249, 115, 22, 0.32)',
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.25s ease',
          fontFamily: 'var(--font-body)',
        }}
      >
        <span>Explore Our Services</span>
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: '#FFFFFF',
            border: '1.5px solid rgba(255, 255, 255, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#EA580C',
            flexShrink: 0,
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
          }}
        >
          <ArrowRight size={13} strokeWidth={2.6} color="#EA580C" />
        </div>
      </motion.button>

      {/* Secondary Glassmorphic Gold CTA */}
      <motion.button
        className="shine-sweep-hover"
        whileHover={{
          scale: 1.04,
          y: -2,
          backgroundColor: 'rgba(255, 224, 130, 0.18)',
          borderColor: '#FFE082',
          boxShadow: '0 8px 24px rgba(255, 224, 130, 0.25)',
        }}
        whileTap={{ scale: 0.96 }}
        onClick={onExploreProducts}
        style={{
          height: '42px',
          borderRadius: '9999px',
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1.5px solid rgba(255, 224, 130, 0.65)',
          color: '#FFFFFF',
          fontWeight: '700',
          fontSize: '13px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '0 12px 0 20px',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.25s ease',
          fontFamily: 'var(--font-body)',
        }}
      >
        <span>Explore Products</span>
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'rgba(255, 224, 130, 0.25)',
            border: '1.5px solid rgba(255, 224, 130, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFE082',
            flexShrink: 0,
          }}
        >
          <ArrowRight size={13} strokeWidth={2.6} color="#FFE082" />
        </div>
      </motion.button>
    </div>
  );
};
