import React from 'react';
import { DocumentationCategory } from './DocumentationCategory';

export const DocumentationGrid = ({ categories, onItemClick }) => {
  return (
    <div
      className="doc-categories-grid"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '24px',
        marginTop: '32px',
        marginBottom: '38px',
        flexWrap: 'wrap',
      }}
    >
      {categories.map((cat) => (
        <DocumentationCategory
          key={cat.id}
          item={cat}
          onClick={() => onItemClick && onItemClick(cat)}
        />
      ))}
    </div>
  );
};
