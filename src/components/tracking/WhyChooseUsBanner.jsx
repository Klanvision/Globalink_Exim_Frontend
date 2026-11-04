import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChooseUsBanner = ({ items }) => {
  return (
    <div
      className="why-choose-us-banner"
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 50%, #FFF5EB 100%)',
        borderRadius: '14px',
        border: '1px solid rgba(255, 111, 0, 0.2)',
        boxShadow: '0 4px 16px rgba(255, 111, 0, 0.08)',
        padding: '12px 10px 10px 10px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Radiant Orange Title */}
      <h4
        style={{
          fontSize: '13px',
          fontWeight: '700',
          color: '#FF6F00',
          textAlign: 'center',
          marginBottom: '8px',
          fontFamily: 'var(--font-body)',
        }}
      >
        Why Choose Us?
      </h4>

      {/* 5 Horizontal Items */}
      <div
        className="why-choose-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          alignItems: 'center',
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2px 4px',
                borderRight: isLast ? 'none' : '1px solid rgba(226, 232, 240, 0.8)',
              }}
            >
              {/* Radiant Orange Check Circle */}
              <div style={{ color: '#FF6F00', marginBottom: '3px' }}>
                <CheckCircle2 size={15} strokeWidth={2.4} color="#FF6F00" />
              </div>

              {/* Title */}
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  color: '#0F172A',
                  lineHeight: '1.25',
                  fontFamily: 'var(--font-body)',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.title}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
