import React from 'react';
import { DocumentationCategory } from './DocumentationCategory';

export const DocumentationGrid = ({ categories, onItemClick, loading = false }) => {
  return (
    <div
      className="doc-categories-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        alignItems: 'stretch',
        justifyContent: 'center',
        gap: '24px 18px',
        marginTop: '22px',
        marginBottom: '26px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {(loading ? Array.from({ length: 6 }) : categories).map((cat, index) => (
        <DocumentationCategory
          key={cat ? cat.id : index}
          item={cat}
          loading={loading}
          index={index}
          onClick={() => onItemClick && onItemClick(cat)}
        />
      ))}
    </div>
  );
};
