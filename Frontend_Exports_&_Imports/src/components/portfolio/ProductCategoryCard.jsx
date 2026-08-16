import React from 'react';

export const ProductCategoryCard = ({ category, onClick }) => {
  const Icon = category.icon;

  return (
    <div
      className="portfolio-category-card"
      onClick={() => onClick && onClick(category)}
      style={{
        position: 'relative',
        height: '240px',
        width: '100%',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 4px 14px rgba(8, 38, 83, 0.08)',
        cursor: 'pointer',
        transition: 'all 0.22s ease',
        backgroundColor: '#082653',
      }}
    >
      {/* Category Image */}
      <img
        src={category.image}
        alt={category.title}
        className="portfolio-card-img"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          transition: 'transform 0.3s ease',
        }}
      />

      {/* Dark Navy Bottom Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '66px',
          backgroundColor: '#082653',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: '12px',
          borderBottomLeftRadius: '14px',
          borderBottomRightRadius: '14px',
          zIndex: 2,
        }}
      >
        {/* Gold Icon */}
        <div
          style={{
            color: '#F5B73A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon size={28} strokeWidth={1.8} color="#F5B73A" />
        </div>

        {/* Title and Subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <h3
            style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#FFFFFF',
              lineHeight: '1.2',
              marginBottom: '2px',
              fontFamily: 'var(--font-body)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {category.title}
          </h3>
          <p
            style={{
              fontSize: '12px',
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.2',
              fontFamily: 'var(--font-body)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {category.description}
          </p>
        </div>
      </div>
    </div>
  );
};
