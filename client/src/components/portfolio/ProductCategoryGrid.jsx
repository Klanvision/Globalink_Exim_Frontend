import React from 'react';
import { ProductCategoryCard } from './ProductCategoryCard';

export const ProductCategoryGrid = ({ categories, onCategoryClick }) => {
  return (
    <div
      className="portfolio-category-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '18px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      {categories.map((category) => (
        <ProductCategoryCard
          key={category.id}
          category={category}
          onClick={onCategoryClick}
        />
      ))}
    </div>
  );
};
