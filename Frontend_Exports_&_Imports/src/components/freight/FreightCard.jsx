import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FreightCard = ({
  title,
  subtitle,
  icon: Icon,
  bullets = [],
  image,
  buttonText,
  onExplore,
}) => {
  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #D9E0E8',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 6px 20px rgba(9, 37, 84, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        height: '555px',
        position: 'relative',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease'
      }}
      className="freight-card"
    >
      {/* Top Content Area */}
      <div
        style={{
          padding: '22px 22px 14px 22px',
          position: 'relative',
          zIndex: 2,
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(4px)'
        }}
      >
        {/* Gold Transport Icon Top Right */}
        <div style={{ position: 'absolute', top: '22px', right: '22px', color: '#F5AD24' }}>
          <Icon size={38} strokeWidth={1.5} />
        </div>

        {/* Card Title */}
        <h3
          style={{
            fontSize: '19.5px',
            fontWeight: '800',
            color: '#092554',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            fontFamily: 'var(--font-body)',
            maxWidth: '82%',
            lineHeight: 1.2
          }}
        >
          {title}
        </h3>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '14.5px',
            fontWeight: '600',
            color: '#0066CC',
            marginTop: '6px',
            marginBottom: '12px'
          }}
        >
          {subtitle}
        </div>

        {/* 5 Bullet Points */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {bullets.map((bullet, idx) => (
            <li
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                lineHeight: '1.85',
                color: '#172B4D',
                fontWeight: '500'
              }}
            >
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: '#092554',
                  display: 'inline-block',
                  flexShrink: 0
                }}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Large Logistics Background Image & CTA Button Area */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '220px'
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block'
          }}
        />

        {/* Soft upper gradient transition overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '40px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0) 100%)'
          }}
        />

        {/* Gold CTA Button Overlay */}
        <button
          onClick={onExplore}
          style={{
            position: 'absolute',
            bottom: '18px',
            left: '18px',
            height: '38px',
            padding: '0 16px',
            background: '#F5AD24',
            color: '#001E4A',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: '700',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.2s ease',
            zIndex: 3
          }}
        >
          <span>{buttonText}</span>
          <ArrowRight size={15} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};
