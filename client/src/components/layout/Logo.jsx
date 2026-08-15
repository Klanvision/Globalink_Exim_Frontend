import React from 'react';
import { Globe } from 'lucide-react';

export const Logo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}>
      {/* Brand Icon Mark */}
      <div style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: '1.5px solid var(--gold)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(250, 174, 43, 0.1)',
        position: 'relative',
        boxShadow: '0 0 12px rgba(250, 174, 43, 0.2)'
      }}>
        <Globe size={20} color="var(--gold)" strokeWidth={1.75} />
      </div>

      {/* Brand Text */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
        <span style={{
          fontSize: '15px',
          fontWeight: '800',
          letterSpacing: '0.04em',
          color: 'var(--white)',
          fontFamily: 'var(--font-body)'
        }}>
          GLOBAL LINK
        </span>
        <span style={{
          fontSize: '8.5px',
          fontWeight: '700',
          letterSpacing: '0.18em',
          color: 'var(--gold)',
          textTransform: 'uppercase',
          marginTop: '2px',
          fontFamily: 'var(--font-heading)'
        }}>
          TRADE SOLUTIONS
        </span>
      </div>
    </div>
  );
};
