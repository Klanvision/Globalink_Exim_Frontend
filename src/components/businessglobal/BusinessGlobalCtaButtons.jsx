import React from 'react';
import { FileText, BarChart3, UsersRound } from 'lucide-react';
import { motion } from 'framer-motion';

export const BusinessGlobalCtaButtons = ({ onQuoteClick, onTradeClick, onPartnerClick }) => {
  return (
    <div
      className="business-global-btn-group"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        flexWrap: 'wrap',
        marginTop: '24px',
      }}
    >
      {/* 1. Primary Radiant Orange Button: Get a Quote */}
      <motion.button
        whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(255, 111, 0, 0.35)' }}
        whileTap={{ scale: 0.98 }}
        onClick={onQuoteClick}
        className="cta-btn-primary"
        style={{
          height: '46px',
          padding: '0 24px',
          background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '999px',
          fontSize: '14.5px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(255, 111, 0, 0.28)',
          fontFamily: 'var(--font-body)',
        }}
      >
        <FileText size={18} strokeWidth={2.2} color="#FFFFFF" />
        <span>Get a Quote</span>
      </motion.button>

      {/* 2. Secondary Outlined Button: Start Trading With Us */}
      <motion.button
        whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 111, 0, 0.08)' }}
        whileTap={{ scale: 0.98 }}
        onClick={onTradeClick || onQuoteClick}
        className="cta-btn-secondary"
        style={{
          height: '46px',
          padding: '0 22px',
          backgroundColor: '#FFFFFF',
          color: '#FF6F00',
          border: '2px solid #FF6F00',
          borderRadius: '999px',
          fontSize: '14px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
        }}
      >
        <BarChart3 size={18} strokeWidth={2.2} color="#FF6F00" />
        <span>Start Trading With Us</span>
      </motion.button>

      {/* 3. Third Outlined Button: Become a Partner */}
      <motion.button
        whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 111, 0, 0.08)' }}
        whileTap={{ scale: 0.98 }}
        onClick={onPartnerClick || onQuoteClick}
        className="cta-btn-secondary"
        style={{
          height: '46px',
          padding: '0 22px',
          backgroundColor: '#FFFFFF',
          color: '#FF6F00',
          border: '1.5px solid rgba(255, 111, 0, 0.35)',
          borderRadius: '999px',
          fontSize: '14px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
        }}
      >
        <UsersRound size={18} strokeWidth={2.2} color="#FF6F00" />
        <span>Become a Partner</span>
      </motion.button>
    </div>
  );
};
