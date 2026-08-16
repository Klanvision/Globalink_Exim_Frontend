import React from 'react';
import { BuyerCategoryItem } from './BuyerCategoryItem';

export const BuyerCategoriesRow = ({ categories, onCategoryClick }) => {
  return (
    <div
      className="buyer-categories-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        margin: '28px auto 32px auto',
        padding: '10px 0',
      }}
    >
      {/* Subtle World Map Dotted Pattern Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(8, 38, 83, 0.08) 1.2px, transparent 1.2px)`,
          backgroundSize: '24px 24px',
          opacity: 0.7,
          pointerEvents: 'none',
          zIndex: 0,
          borderRadius: '16px',
        }}
      />

      {/* 6 Buyer Categories Grid */}
      <div
        className="buyer-categories-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '14px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {categories.map((category) => (
          <BuyerCategoryItem
            key={category.id}
            category={category}
            onClick={onCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};
