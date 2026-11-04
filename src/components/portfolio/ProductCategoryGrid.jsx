import React from 'react';
import { ProductCategoryCard } from './ProductCategoryCard';

export const ProductCategoryGrid = ({ categories, onCategoryClick, loading = false }) => {
  return (
    <div
      className="portfolio-category-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '18px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      {(loading ? Array.from({ length: 8 }) : categories).map((category, index) => (
        <ProductCategoryCard
          key={category ? category.id : index}
          category={category}
          index={index}
          loading={loading}
          onClick={onCategoryClick}
        />
      ))}
    </div>
  );
};
