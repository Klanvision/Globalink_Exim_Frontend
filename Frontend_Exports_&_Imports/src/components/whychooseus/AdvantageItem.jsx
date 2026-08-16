import React from 'react';

export const AdvantageItem = ({ item, onClick }) => {
  const Icon = item.icon;

  return (
    <div
      className="advantage-item"
      onClick={() => onClick && onClick(item)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 8px',
        cursor: 'pointer',
        transition: 'transform 0.22s ease',
        height: '100%',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Circular Gold Icon Container */}
      <div
        className="advantage-circle"
        style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          backgroundColor: 'rgba(3, 24, 59, 0.65)',
          border: '2px solid #E8A52A',
          boxShadow: '0 0 14px rgba(232, 165, 42, 0.32)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F5B73A',
          marginBottom: '14px',
          transition: 'all 0.22s ease',
          flexShrink: 0,
        }}
      >
        <Icon size={40} strokeWidth={1.8} color="#F5B73A" />
      </div>

      {/* 2-Line Serif Title */}
      <h3
        style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: '16.5px',
          fontWeight: '600',
          color: '#FFFFFF',
          lineHeight: '1.25',
          marginBottom: '6px',
          whiteSpace: 'pre-line',
          minHeight: '42px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {item.title}
      </h3>

      {/* Small Gold Underline */}
      <div
        style={{
          width: '36px',
          height: '2.5px',
          backgroundColor: '#E8A52A',
          borderRadius: '1.5px',
          margin: '0 auto 10px auto',
        }}
      />

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12.5px',
          lineHeight: '1.42',
          color: 'rgba(255, 255, 255, 0.90)',
          textAlign: 'center',
          whiteSpace: 'pre-line',
          maxWidth: '185px',
        }}
      >
        {item.description}
      </p>
    </div>
  );
};
