import React from 'react';
import { CustomsServiceItem } from './CustomsServiceItem';

export const CustomsServiceGrid = ({ services, onServiceClick }) => {
  return (
    <div
      className="customs-grid-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        margin: '24px auto 26px auto',
        padding: '8px 0',
      }}
    >
      {/* Subtle World Map Dotted Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(8, 38, 83, 0.07) 1.2px, transparent 1.2px)`,
          backgroundSize: '24px 24px',
          opacity: 0.65,
          pointerEvents: 'none',
          zIndex: 0,
          borderRadius: '16px',
        }}
      />

      {/* 6 Columns Grid with Vertical Dividers */}
      <div
        className="customs-services-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {services.map((service, index) => {
          const isLast = index === services.length - 1;

          return (
            <div
              key={service.id}
              style={{
                borderRight: isLast ? 'none' : '1px solid #D7DEE7',
                padding: '0 6px',
              }}
              className="customs-column-divider"
            >
              <CustomsServiceItem
                service={service}
                onClick={onServiceClick}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
