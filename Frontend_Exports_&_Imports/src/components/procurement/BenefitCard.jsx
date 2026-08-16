import React from 'react';

export const BenefitCard = ({ benefit }) => {
  const Icon = benefit.icon;
  const isNavy = benefit.theme === 'navy';
  const circleBg = isNavy ? '#082653' : '#F2A922';

  return (
    <div
      className="procurement-benefit-card"
      style={{
        width: '100%',
        maxWidth: '182px',
        height: '185px',
        borderRadius: '12px',
        border: '1px solid #DDE3EA',
        background: 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(6px)',
        boxShadow: '0 4px 14px rgba(8, 38, 83, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 12px',
        textAlign: 'center',
        transition: 'all 0.25s ease',
        cursor: 'default',
      }}
    >
      {/* Icon Circle */}
      <div
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          backgroundColor: circleBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          marginBottom: '12px',
          flexShrink: 0,
          boxShadow: isNavy
            ? '0 3px 10px rgba(8, 38, 83, 0.2)'
            : '0 3px 10px rgba(242, 169, 34, 0.25)',
        }}
      >
        <Icon size={30} strokeWidth={2} color="#FFFFFF" />
      </div>

      {/* Benefit Title */}
      <h4
        style={{
          fontSize: '15.5px',
          fontWeight: '700',
          color: '#082653',
          lineHeight: '1.2',
          marginBottom: '6px',
        }}
      >
        {benefit.title}
      </h4>

      {/* Benefit Description */}
      <p
        style={{
          fontSize: '12.5px',
          lineHeight: '1.4',
          color: '#40516D',
          whiteSpace: 'pre-line',
          fontWeight: '400',
        }}
      >
        {benefit.description}
      </p>
    </div>
  );
};
