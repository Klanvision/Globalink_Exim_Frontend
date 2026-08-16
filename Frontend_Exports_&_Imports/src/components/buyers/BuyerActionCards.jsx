import React from 'react';
import { ArrowRight } from 'lucide-react';

export const BuyerActionCards = ({ actions, onActionClick }) => {
  return (
    <div
      className="buyer-actions-wrapper"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        width: '100%',
        margin: '10px auto 30px auto',
        flexWrap: 'wrap',
      }}
    >
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <div
            key={action.id}
            onClick={() => onActionClick && onActionClick(action.action)}
            className="buyer-action-card"
            style={{
              width: '450px',
              maxWidth: '100%',
              height: '84px',
              backgroundColor: '#E8A52A',
              borderRadius: '14px',
              boxShadow: '0 5px 14px rgba(0, 0, 0, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 24px',
              cursor: 'pointer',
              transition: 'all 0.22s ease',
            }}
          >
            {/* Left Content (Navy Icon Circle + Text) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Navy Circular Icon Container */}
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: '#082653',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                }}
              >
                <Icon size={22} strokeWidth={2.2} color="#FFFFFF" />
              </div>

              {/* Text Area */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#082653',
                    lineHeight: '1.2',
                    fontFamily: 'var(--font-body)',
                    marginBottom: '2px',
                  }}
                >
                  {action.title}
                </h4>
                <span
                  style={{
                    fontSize: '13.5px',
                    fontWeight: '500',
                    color: '#082653',
                    opacity: 0.9,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {action.subtitle}
                </span>
              </div>
            </div>

            {/* Right Dark Navy Arrow */}
            <div style={{ color: '#082653', display: 'flex', alignItems: 'center' }}>
              <ArrowRight size={24} strokeWidth={2.6} color="#082653" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
