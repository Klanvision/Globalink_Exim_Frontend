import React, { useState } from 'react';
import { X, Search, ShieldCheck } from 'lucide-react';
import { fetchShipments } from '../../services/api';

export const TrackModal = ({ isOpen, onClose, defaultType = 'track' }) => {
  const [activeTab, setActiveTab] = useState(defaultType);
  const [trackingId, setTrackingId] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleTrackSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetchShipments();
    if (res && res.success) {
      const match = res.data.find(
        (s) => s.id.toLowerCase() === trackingId.trim().toLowerCase()
      ) || res.data[0];
      setResult(match);
    }
    setLoading(false);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 10, 25, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '16px'
    }} onClick={onClose}>
      <div style={{
        width: '100%',
        maxWidth: '500px',
        background: 'var(--navy-panel)',
        border: '1px solid var(--border-bright)',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
        position: 'relative'
      }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={20} color="var(--gold)" />
            <h3 style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'var(--font-heading)', color: 'var(--white)' }}>
              {activeTab === 'track' ? 'Track Global Shipment' : 'Request Trade Quote'}
            </h3>
          </div>
          <button onClick={onClose} style={{ color: 'var(--text-muted)' }}>
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        {activeTab === 'track' ? (
          <form onSubmit={handleTrackSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Enter Tracking Number or Manifest ID
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  placeholder="e.g. EXP-1092 or IMP-8821"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  style={{
                    flex: 1,
                    height: '38px',
                    padding: '0 12px',
                    borderRadius: '6px',
                    background: 'var(--navy)',
                    border: '1px solid var(--border)',
                    color: 'var(--white)',
                    fontSize: '12px',
                    outline: 'none'
                  }}
                />
                <button type="submit" style={{
                  height: '38px',
                  padding: '0 16px',
                  borderRadius: '6px',
                  background: 'var(--gold)',
                  color: 'var(--navy)',
                  fontWeight: '700',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Search size={14} />
                  {loading ? 'Searching...' : 'Track'}
                </button>
              </div>
            </div>

            {result && (
              <div style={{
                marginTop: '12px',
                padding: '14px',
                background: 'rgba(0, 18, 41, 0.8)',
                borderRadius: '8px',
                border: '1px solid var(--border)'
              }}>
                <div style={{ fontSize: '11px', color: 'var(--gold)', fontWeight: '700' }}>MANIFEST RECORD FOUND</div>
                <div style={{ fontSize: '14px', fontWeight: '700', marginTop: '2px' }}>{result.title}</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '10px', fontSize: '11px', color: 'var(--text-secondary)' }}>
                  <div><strong>ID:</strong> {result.id}</div>
                  <div><strong>Status:</strong> <span style={{ color: 'var(--gold)' }}>{result.status}</span></div>
                  <div><strong>Destination:</strong> {result.destination}</div>
                  <div><strong>Value:</strong> {result.value}</div>
                </div>
              </div>
            )}
          </form>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              Submit your trade parameters and our global logistics partners will generate a customized quote within 2 hours.
            </p>
            <input
              type="text"
              placeholder="Company Name"
              style={{ height: '36px', padding: '0 12px', borderRadius: '5px', background: 'var(--navy)', border: '1px solid var(--border)', color: 'var(--white)', fontSize: '12px' }}
            />
            <input
              type="email"
              placeholder="Business Email"
              style={{ height: '36px', padding: '0 12px', borderRadius: '5px', background: 'var(--navy)', border: '1px solid var(--border)', color: 'var(--white)', fontSize: '12px' }}
            />
            <button onClick={onClose} style={{ height: '38px', borderRadius: '6px', background: 'var(--gold)', color: 'var(--navy)', fontWeight: '700', fontSize: '12px', marginTop: '8px' }}>
              Submit Quote Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
