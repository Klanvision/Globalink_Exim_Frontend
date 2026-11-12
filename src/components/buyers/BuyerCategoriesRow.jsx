import React from 'react';
import { BuyerCategoryItem } from './BuyerCategoryItem';

export const BuyerCategoriesRow = ({ categories, onCategoryClick, loading = false }) => {
  return (
    <div
      className="buyer-categories-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        margin: '22px auto 26px auto',
        padding: '6px 0',
      }}
    >
      {/* 6 Buyer Categories Grid */}
      <div
        className="buyer-categories-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '14px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {(loading ? Array.from({ length: 6 }) : categories).map((category, index) => (
          <BuyerCategoryItem
            key={category ? category.id : index}
            category={category}
            loading={loading}
            index={index}
            onClick={onCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};
