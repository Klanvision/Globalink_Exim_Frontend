import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const ProcurementMessage = () => {
  return (
    <div
      className="procurement-message-pill"
      style={{
        width: '100%',
        maxWidth: '680px',
        height: '44px',
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(255, 111, 0, 0.28)',
        borderRadius: '999px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '0 20px',
        margin: '22px auto 0 auto',
        color: '#0F172A',
        boxShadow: '0 4px 16px rgba(255, 111, 0, 0.08)',
        boxSizing: 'border-box',
      }}
    >
      <ShieldCheck size={20} color="#FF6F00" strokeWidth={2.2} style={{ flexShrink: 0 }} />
      <span
        style={{
          fontSize: '13.5px',
          fontWeight: '600',
          color: '#0F172A',
          letterSpacing: '-0.2px',
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
        }}
      >
        We manage your procurement process so you can focus on growing your business.
      </span>
    </div>
  );
};
