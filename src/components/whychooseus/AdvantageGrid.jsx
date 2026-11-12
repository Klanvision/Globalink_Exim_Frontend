import React from 'react';
import { AdvantageItem } from './AdvantageItem';

export const AdvantageGrid = ({ advantages, onAdvantageClick }) => {
  return (
    <div
      className="advantage-grid-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        margin: '22px auto 26px auto',
        padding: '10px 0',
      }}
    >
      {/* 6 Advantages Grid */}
      <div
        className="advantage-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '14px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {advantages.map((item, index) => (
          <AdvantageItem
            key={item.id}
            item={item}
            index={index}
            onClick={onAdvantageClick}
          />
        ))}
      </div>
    </div>
  );
};
