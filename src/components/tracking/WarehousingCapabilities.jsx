import React from 'react';
import { motion } from 'framer-motion';

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
          marginTop: '12px',
          marginBottom: '16px',
        }}
      >
        {capabilities.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              className="warehousing-capability-item"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                flex: 1,
                minWidth: 0,
                maxWidth: '120px',
                cursor: 'pointer',
              }}
              onClick={onExploreClick}
            >
              {/* Circular Container with Radiant Orange Theme */}
              <div
                className="warehousing-circle"
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: item.isHighlight ? '2px solid #FF6F00' : '1px solid rgba(255, 111, 0, 0.25)',
                  boxShadow: item.isHighlight
                    ? '0 4px 14px rgba(255, 111, 0, 0.25)'
                    : '0 2px 8px rgba(15, 23, 42, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF6F00',
                  marginBottom: '6px',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
              >
                <Icon size={24} strokeWidth={1.9} color="#FF6F00" />
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: '11.5px',
                  fontWeight: '700',
                  color: '#0F172A',
                  lineHeight: '1.25',
                  marginBottom: '2px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  fontSize: '10px',
                  lineHeight: '1.3',
                  color: '#64748B',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
