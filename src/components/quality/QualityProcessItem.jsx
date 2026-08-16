import React from 'react';

export const QualityProcessItem = ({ step, onClick }) => {
  const Icon = step.icon;

  return (
    <div
      onClick={onClick}
      className="quality-process-item"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        flex: 1,
        minWidth: 0,
        maxWidth: '150px',
        transition: 'all 0.2s ease',
      }}
    >
      {/* Circular Container */}
      <div
        className="quality-process-circle"
        style={{
          width: '95px',
          height: '95px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: step.isSpecial ? '2px solid #E8A52A' : '1px solid #DDE3EA',
          boxShadow: step.isSpecial
            ? '0 4px 14px rgba(232, 165, 42, 0.25)'
            : '0 4px 12px rgba(8, 38, 83, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#082653',
          marginBottom: '12px',
          transition: 'all 0.25s ease',
          flexShrink: 0,
        }}
      >
        <Icon size={40} strokeWidth={1.6} color="#082653" />
      </div>

      {/* Process Title */}
      <h3
        style={{
          fontSize: '15px',
          fontWeight: '700',
          color: '#082653',
          lineHeight: '1.25',
          marginBottom: '6px',
          whiteSpace: 'pre-line',
          minHeight: '38px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-body)',
        }}
      >
        {step.title}
      </h3>

      {/* Process Description */}
      <p
        style={{
          fontSize: '13px',
          lineHeight: '1.4',
          color: '#40516D',
          whiteSpace: 'pre-line',
          fontWeight: '400',
          fontFamily: 'var(--font-body)',
        }}
      >
        {step.description}
      </p>
    </div>
  );
};
