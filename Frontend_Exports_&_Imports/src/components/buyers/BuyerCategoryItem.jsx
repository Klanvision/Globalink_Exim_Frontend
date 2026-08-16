import React from 'react';

export const BuyerCategoryItem = ({ category, onClick }) => {
  const Icon = category.icon;

  return (
    <div
      className="buyer-category-item"
      onClick={() => onClick && onClick(category)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        flex: 1,
        minWidth: 0,
        padding: '0 8px',
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
      }}
    >
      {/* Large Circular Icon Container */}
      <div
        className="buyer-circle-container"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '2px solid #B9C6D7',
          boxShadow: '0 3px 10px rgba(8, 38, 83, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#082653',
          marginBottom: '16px',
          transition: 'all 0.22s ease',
          flexShrink: 0,
        }}
      >
        <Icon size={48} strokeWidth={1.7} color="#082653" />
      </div>

      {/* Category Title */}
      <h3
        style={{
          fontSize: '17.5px',
          fontWeight: '600',
          color: '#082653',
          fontFamily: 'var(--font-body)',
          marginBottom: '6px',
        }}
      >
        {category.title}
      </h3>

      {/* Short Gold Underline */}
      <div
        style={{
          width: '42px',
          height: '3px',
          backgroundColor: '#E8A52A',
          borderRadius: '2px',
          margin: '0 auto 10px auto',
        }}
      />

      {/* Description (approx 3 lines) */}
      <p
        style={{
          fontSize: '13px',
          lineHeight: '1.42',
          color: '#29364B',
          textAlign: 'center',
          whiteSpace: 'pre-line',
          fontFamily: 'var(--font-body)',
          maxWidth: '200px',
        }}
      >
        {category.description}
      </p>
    </div>
  );
};
