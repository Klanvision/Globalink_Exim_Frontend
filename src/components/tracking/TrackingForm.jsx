import React, { useState } from 'react';
import { PackageSearch, ArrowRight } from 'lucide-react';

export const TrackingForm = ({ onTrack }) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      setErrorMsg('Please enter a shipment, container, AWB, or BL number.');
      return;
    }
    setErrorMsg('');
    if (onTrack) {
      onTrack(trackingNumber.trim());
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '580px', marginTop: '16px', marginBottom: '22px' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          boxShadow: '0 4px 14px rgba(15, 23, 42, 0.06)',
          borderRadius: '8px',
        }}
      >
        {/* Input Wrapper */}
        <div
          style={{
            flex: 1,
            height: '48px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #D3D8DF',
            borderRight: 'none',
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 14px',
            gap: '10px',
          }}
        >
          <PackageSearch size={22} color="#FF6F00" strokeWidth={1.8} />
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => {
              setTrackingNumber(e.target.value);
              if (errorMsg) setErrorMsg('');
            }}
            placeholder="Enter Shipment / Container / AWB / BL Number"
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: '13.5px',
              color: '#0F172A',
              fontFamily: 'var(--font-body)',
              backgroundColor: 'transparent',
            }}
          />
        </div>

        {/* Gold Track Now Button */}
        <button
          type="submit"
          className="track-now-btn"
          style={{
            height: '48px',
            width: '145px',
            backgroundColor: '#E8A52A',
            color: '#061F47',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            border: 'none',
            fontSize: '14.5px',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'all 0.2s ease',
            flexShrink: 0,
          }}
        >
          <span>Track Now</span>
          <ArrowRight size={16} strokeWidth={2.6} color="#061F47" />
        </button>
      </form>

      {/* Validation Message */}
      {errorMsg && (
        <p
          style={{
            color: '#D32F2F',
            fontSize: '12px',
            fontWeight: '500',
            marginTop: '6px',
            marginLeft: '4px',
          }}
        >
          {errorMsg}
        </p>
      )}
    </div>
  );
};
