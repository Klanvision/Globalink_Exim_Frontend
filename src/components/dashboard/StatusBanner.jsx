import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';
import { Button } from '../common/Button';

export const StatusBanner = ({ onNewShipmentClick }) => {
  return (
    <div style={{
      padding: '1.75rem 2rem',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.2))',
      border: '1px solid rgba(59, 130, 246, 0.3)',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1.5rem',
      marginBottom: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '650px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-blue)', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
          <ShieldCheck size={18} />
          GLOBAL TRADE MANAGEMENT SYSTEM
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
          Seamless Import & Export Logistics Engine
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Track international customs, automate freight documentation, and process real-time cargo manifests with high-speed Express API backend.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <Button variant="primary" icon={Zap} onClick={onNewShipmentClick}>
          Create Freight Manifest
        </Button>
      </div>
    </div>
  );
};
