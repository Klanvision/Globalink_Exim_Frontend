import React from 'react';
import { ShieldCheck, Globe, Headphones } from 'lucide-react';

export const CorporateTrustBar = () => {
  return (
    <div
      className="corporate-trust-bar"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        padding: '24px 32px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
        marginTop: '20px',
        marginBottom: '20px',
        width: '100%',
      }}
    >
      <div
        className="trust-features-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        {/* Item 1: Secure Tracking */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#FFF3E6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EA580C',
              flexShrink: 0,
            }}
          >
            <ShieldCheck size={28} strokeWidth={2} />
          </div>
          <div>
            <div
              style={{
                fontSize: '15.5px',
                fontWeight: '700',
                color: '#0F172A',
                letterSpacing: '-0.01em',
                fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              Secure Tracking
            </div>
            <div
              style={{
                fontSize: '13px',
                color: '#64748B',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              Your shipments, our priority
            </div>
          </div>
        </div>

        {/* Item 2: Global Network */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            justifyContent: 'center',
            borderLeft: '1px solid #E2E8F0',
            borderRight: '1px solid #E2E8F0',
            padding: '0 12px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#FFF3E6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EA580C',
              flexShrink: 0,
            }}
          >
            <Globe size={28} strokeWidth={2} />
          </div>
          <div>
            <div
              style={{
                fontSize: '15.5px',
                fontWeight: '700',
                color: '#0F172A',
                letterSpacing: '-0.01em',
                fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              Global Network
            </div>
            <div
              style={{
                fontSize: '13px',
                color: '#64748B',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              Connecting you worldwide
            </div>
          </div>
        </div>

        {/* Item 3: 24/7 Support */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#FFF3E6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EA580C',
              flexShrink: 0,
            }}
          >
            <Headphones size={28} strokeWidth={2} />
          </div>
          <div>
            <div
              style={{
                fontSize: '15.5px',
                fontWeight: '700',
                color: '#0F172A',
                letterSpacing: '-0.01em',
                fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              24/7 Support
            </div>
            <div
              style={{
                fontSize: '13px',
                color: '#64748B',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              Always here for you
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

