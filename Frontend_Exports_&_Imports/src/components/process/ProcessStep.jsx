import React from 'react';

export const ProcessStep = ({ step, onClick }) => {
  const Icon = step.icon;

  return (
    <div
      onClick={onClick}
      className="process-step-item"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        flex: 1,
        minWidth: 0,
        maxWidth: '140px',
        transition: 'all 0.2s ease',
      }}
    >
      {/* Circular Container */}
      <div
        className="process-step-circle"
        style={{
          width: '95px',
          height: '95px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid #E2E5EA',
          boxShadow: '0 4px 12px rgba(8, 38, 83, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#082653',
          marginBottom: '8px',
          transition: 'all 0.25s ease',
          flexShrink: 0,
        }}
      >
        <Icon size={38} strokeWidth={1.8} color="#082653" />
      </div>

      {/* Gold Number */}
      <span
        style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#D99A1E',
          lineHeight: '1.1',
          marginBottom: '4px',
          fontFamily: 'var(--font-heading)',
        }}
      >
        {step.number}
      </span>

      {/* Process Title */}
      <h3
        style={{
          fontSize: '16px',
          fontWeight: '700',
          color: '#082653',
          lineHeight: '1.2',
          marginBottom: '6px',
          fontFamily: 'var(--font-body)',
        }}
      >
        {step.title}
      </h3>

      {/* Thin Gray Line Separator */}
      <div
        style={{
          width: '55px',
          height: '1px',
          backgroundColor: '#D6DCE3',
          marginBottom: '8px',
        }}
      />

      {/* Process Description */}
      <p
        style={{
          fontSize: '12.5px',
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
