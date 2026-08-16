import React from 'react';
import { FileText, BarChart3, UsersRound } from 'lucide-react';

export const BusinessGlobalCtaButtons = ({ onQuoteClick, onTradeClick, onPartnerClick }) => {
  return (
    <div
      className="business-global-btn-group"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        flexWrap: 'wrap',
        marginTop: '32px',
      }}
    >
      {/* 1. Primary Gold Button: Get a Quote */}
      <button
        onClick={onQuoteClick}
        className="cta-btn-primary"
        style={{
          height: '52px',
          padding: '0 26px',
          backgroundColor: '#F2B52F',
          color: '#061A3A',
          border: 'none',
          borderRadius: '10px',
          fontSize: '16px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(242, 181, 47, 0.35)',
          transition: 'all 0.2s ease',
          fontFamily: 'var(--font-body)',
        }}
      >
        <FileText size={20} strokeWidth={2.2} color="#061A3A" />
        <span>Get a Quote</span>
      </button>

      {/* 2. Secondary Outlined Button: Start Trading With Us */}
      <button
        onClick={onTradeClick || onQuoteClick}
        className="cta-btn-secondary"
        style={{
          height: '52px',
          padding: '0 24px',
          backgroundColor: 'rgba(3, 27, 67, 0.65)',
          color: '#FFFFFF',
          border: '2px solid #F2B52F',
          borderRadius: '10px',
          fontSize: '15.5px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          fontFamily: 'var(--font-body)',
        }}
      >
        <BarChart3 size={20} strokeWidth={2.2} color="#F2B52F" />
        <span>Start Trading With Us</span>
      </button>

      {/* 3. Third Outlined Button: Become a Partner */}
      <button
        onClick={onPartnerClick || onQuoteClick}
        className="cta-btn-secondary"
        style={{
          height: '52px',
          padding: '0 24px',
          backgroundColor: 'rgba(3, 27, 67, 0.65)',
          color: '#FFFFFF',
          border: '2px solid #F2B52F',
          borderRadius: '10px',
          fontSize: '15.5px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          fontFamily: 'var(--font-body)',
        }}
      >
        <UsersRound size={20} strokeWidth={2.2} color="#F2B52F" />
        <span>Become a Partner</span>
      </button>
    </div>
  );
};
