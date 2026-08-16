import React from 'react';
import { ArrowRight } from 'lucide-react';

export const WarehousingCapabilities = ({ capabilities, onExploreClick }) => {
  return (
    <div style={{ width: '100%' }}>
      {/* 5 Capabilities Row */}
      <div
        className="warehousing-capabilities-grid"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '8px',
          marginTop: '14px',
          marginBottom: '20px',
        }}
      >
        {capabilities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="warehousing-capability-item"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                flex: 1,
                minWidth: 0,
                maxWidth: '120px',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onClick={onExploreClick}
            >
              {/* Circular Container */}
              <div
                className="warehousing-circle"
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: item.isHighlight ? '2px solid #E8A52A' : '1px solid #C9D2DE',
                  boxShadow: item.isHighlight
                    ? '0 4px 12px rgba(232, 165, 42, 0.22)'
                    : '0 3px 8px rgba(8, 38, 83, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#082653',
                  marginBottom: '8px',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
              >
                <Icon size={28} strokeWidth={1.8} color="#082653" />
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#082653',
                  lineHeight: '1.2',
                  marginBottom: '4px',
                  whiteSpace: 'pre-line',
                  minHeight: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  fontSize: '11px',
                  lineHeight: '1.35',
                  color: '#40516D',
                  whiteSpace: 'pre-line',
                  fontWeight: '400',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Explore Warehousing CTA */}
      <button
        onClick={onExploreClick}
        className="warehousing-cta-btn"
        style={{
          width: '250px',
          height: '42px',
          backgroundColor: '#082653',
          borderRadius: '7px',
          color: '#FFFFFF',
          fontSize: '14px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 18px',
          boxShadow: '0 4px 14px rgba(8, 38, 83, 0.2)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          border: 'none',
        }}
      >
        <span>Explore Warehousing</span>
        <ArrowRight size={16} strokeWidth={2.5} color="#E8A52A" />
      </button>
    </div>
  );
};
