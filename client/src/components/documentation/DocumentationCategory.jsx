import React from 'react';

export const DocumentationCategory = ({ item, onClick }) => {
  const Icon = item.icon;

  return (
    <div
      onClick={onClick}
      className="doc-category-item"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      {/* Circular Container */}
      <div
        className="doc-category-circle"
        style={{
          width: '95px',
          height: '95px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: item.isDots ? '1.5px dashed #C8D1DC' : '1px solid #E1E5EA',
          boxShadow: '0 4px 14px rgba(8, 38, 83, 0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#082653',
          marginBottom: '12px',
          transition: 'all 0.25s ease',
          flexShrink: 0,
        }}
      >
        <Icon size={item.isDots ? 36 : 42} strokeWidth={1.6} color="#082653" />
      </div>

      {/* Category Title */}
      <h3
        style={{
          fontSize: '14.5px',
          fontWeight: '600',
          color: '#082653',
          lineHeight: '1.25',
          whiteSpace: 'pre-line',
          fontFamily: 'var(--font-body)',
        }}
      >
        {item.title}
      </h3>
    </div>
  );
};
