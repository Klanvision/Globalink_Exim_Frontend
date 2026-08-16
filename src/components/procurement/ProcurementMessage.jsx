import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const ProcurementMessage = () => {
  return (
    <div
      className="procurement-message-pill"
      style={{
        width: '100%',
        maxWidth: '760px',
        height: '50px',
        backgroundColor: '#082653',
        borderRadius: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '0 24px',
        margin: '26px auto 0 auto',
        color: '#FFFFFF',
        boxShadow: '0 4px 16px rgba(8, 38, 83, 0.25)',
      }}
    >
      <ShieldCheck size={24} color="#F2A922" strokeWidth={2.2} style={{ flexShrink: 0 }} />
      <span
        style={{
          fontSize: '17px',
          fontWeight: '500',
          color: '#FFFFFF',
          letterSpacing: '-0.2px',
          textAlign: 'center',
        }}
      >
        We manage your procurement process so you can focus on growing your business.
      </span>
    </div>
  );
};
