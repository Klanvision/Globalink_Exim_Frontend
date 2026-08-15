import React from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

export const TestimonialCard = ({
  testimonial,
  onPrev,
  onNext,
}) => {
  return (
    <div
      className="testimonial-carousel-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1060px',
        margin: '28px auto 24px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Left Chevron Previous Button */}
      <button
        onClick={onPrev}
        aria-label="Previous testimonial"
        className="carousel-nav-btn prev-btn"
        style={{
          position: 'absolute',
          left: '-26px',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: 'rgba(20, 50, 90, 0.85)',
          border: '1px solid rgba(100, 150, 210, 0.35)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.30)',
          transition: 'all 0.2s ease',
        }}
      >
        <ChevronLeft size={22} strokeWidth={2.4} />
      </button>

      {/* Dark Glass Testimonial Card */}
      <div
        className="testimonial-glass-card"
        style={{
          width: '100%',
          backgroundColor: 'rgba(10, 33, 71, 0.90)',
          border: '1px solid rgba(83, 137, 197, 0.42)',
          borderRadius: '16px',
          padding: '22px 28px 18px 28px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.30)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Large Decorative Gold Quotation Mark */}
        <div
          style={{
            position: 'absolute',
            top: '6px',
            left: '22px',
            fontFamily: 'Georgia, serif',
            fontSize: '56px',
            lineHeight: '1',
            color: '#F2B52F',
            opacity: 0.9,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          “
        </div>

        {/* Testimonial Quote Text */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14.5px',
            lineHeight: '1.45',
            fontWeight: '400',
            color: '#FFFFFF',
            textAlign: 'left',
            paddingLeft: '38px',
            marginBottom: '14px',
            minHeight: '44px',
          }}
        >
          {`"${testimonial.quote.replace(/^"|"$/g, '')}"`}
        </p>

        {/* Thin Horizontal Divider */}
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            marginBottom: '14px',
          }}
        />

        {/* Customer Information & Star Rating Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Left: Avatar + Details */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            {/* Circular Avatar Container */}
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '2.5px solid rgba(255, 255, 255, 0.85)',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.25)',
                overflow: 'hidden',
                backgroundColor: '#0F2C59',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #1A4480 0%, #0D264D 100%)',
                  color: '#F2B52F',
                  fontWeight: '700',
                  fontSize: '16px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {testimonial.initials || <User size={24} color="#FFFFFF" />}
              </div>
            </div>

            {/* Name, Role & Location */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#F2B52F',
                  lineHeight: '1.2',
                  fontFamily: 'var(--font-body)',
                  marginBottom: '1px',
                }}
              >
                {testimonial.name}
              </span>
              <span
                style={{
                  fontSize: '12px',
                  color: '#FFFFFF',
                  lineHeight: '1.3',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {testimonial.role} • <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{testimonial.location}</span>
              </span>
            </div>
          </div>

          {/* Right: Exactly 5 Gold Stars */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
            }}
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={17}
                fill="#F2B52F"
                color="#F2B52F"
                strokeWidth={1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Chevron Next Button */}
      <button
        onClick={onNext}
        aria-label="Next testimonial"
        className="carousel-nav-btn next-btn"
        style={{
          position: 'absolute',
          right: '-26px',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: 'rgba(20, 50, 90, 0.85)',
          border: '1px solid rgba(100, 150, 210, 0.35)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.30)',
          transition: 'all 0.2s ease',
        }}
      >
        <ChevronRight size={22} strokeWidth={2.4} />
      </button>
    </div>
  );
};
