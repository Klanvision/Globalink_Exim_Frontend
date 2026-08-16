import React from 'react';

export const ProcessStep = ({ step, isLast }) => {
  const Icon = step.icon;

  return (
    <div
      className="procurement-step-item"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        flex: 1,
        minWidth: 0,
        position: 'relative',
      }}
    >
      {/* Circle Container */}
      <div
        className="procurement-step-circle"
        style={{
          width: '108px',
          height: '108px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid #E8D8BA',
          boxShadow: '0 4px 14px rgba(8, 38, 83, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#082653',
          marginBottom: '14px',
          transition: 'all 0.25s ease',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        <Icon size={46} strokeWidth={1.6} color="#082653" />
      </div>

      {/* Step Title */}
      <h3
        style={{
          fontSize: '16px',
          fontWeight: '700',
          color: '#082653',
          lineHeight: '1.2',
          marginBottom: '6px',
          whiteSpace: 'pre-line',
          minHeight: '38px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {step.title}
      </h3>

      {/* Step Description */}
      <p
        style={{
          fontSize: '13px',
          lineHeight: '1.4',
          color: '#40516D',
          whiteSpace: 'pre-line',
          fontWeight: '400',
        }}
      >
        {step.description}
      </p>
    </div>
  );
};
