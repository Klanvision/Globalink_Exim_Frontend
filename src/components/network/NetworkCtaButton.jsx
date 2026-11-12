import React from 'react';
import { Globe2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const NetworkCtaButton = ({ onClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        margin: '0 auto 10px auto',
      }}
    >
      <motion.button
        whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(255, 111, 0, 0.35)' }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className="network-primary-cta"
        style={{
          padding: '11px 28px',
          borderRadius: '999px',
          background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
          boxShadow: '0 4px 16px rgba(255, 111, 0, 0.28)',
          color: '#FFFFFF',
          fontSize: '14.5px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
        }}
      >
        <Globe2 size={18} strokeWidth={2.2} color="#FFFFFF" />
        <span>Explore Our Network</span>
        <ArrowRight size={18} strokeWidth={2.4} color="#FFFFFF" />
      </motion.button>
    </div>
  );
};
