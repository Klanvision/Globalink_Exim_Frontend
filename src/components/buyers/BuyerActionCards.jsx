import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const BuyerActionCards = ({ actions, onActionClick }) => {
  return (
    <div
      className="buyer-actions-wrapper"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '18px',
        width: '100%',
        margin: '10px auto 24px auto',
        flexWrap: 'wrap',
      }}
    >
      {actions.map((action, index) => {
        const Icon = action.icon;

        return (
          <motion.div
            key={action.id}
            onClick={() => onActionClick && onActionClick(action.action)}
            className="buyer-action-card"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={{
              width: '420px',
              maxWidth: '100%',
              minHeight: '74px',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1.5px solid rgba(255, 111, 0, 0.25)',
              boxShadow: '0 6px 20px rgba(255, 111, 0, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 20px',
              cursor: 'pointer',
              boxSizing: 'border-box',
            }}
          >
            {/* Left Content (Orange Icon Circle + Text) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              {/* Radiant Orange Circular Icon Container */}
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
                  boxShadow: '0 4px 12px rgba(255, 111, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} strokeWidth={2.2} color="#FFFFFF" />
              </div>

              {/* Text Area */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#0F172A',
                    lineHeight: '1.25',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {action.title}
                </span>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: '500',
                    color: '#64748B',
                    lineHeight: '1.25',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {action.subtitle}
                </span>
              </div>
            </div>

            {/* Right Arrow Icon */}
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 111, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FF6F00',
                flexShrink: 0,
              }}
            >
              <ArrowRight size={16} strokeWidth={2.4} color="#FF6F00" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
