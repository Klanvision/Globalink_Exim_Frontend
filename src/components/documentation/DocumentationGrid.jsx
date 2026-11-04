import React from 'react';
import { DocumentationCategory } from './DocumentationCategory';

export const DocumentationGrid = ({ categories, onItemClick, loading = false }) => {
  return (
    <div
      className="doc-categories-grid"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '16px',
        marginTop: '22px',
        marginBottom: '26px',
        flexWrap: 'wrap',
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
