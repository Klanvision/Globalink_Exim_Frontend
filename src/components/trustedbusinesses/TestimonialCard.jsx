import React from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TestimonialCard = ({
  testimonial,
  onPrev,
  onNext,
  loading = false,
}) => {
  if (loading) {
    return (
      <div
        className="premium-skeleton-card"
        style={{
          width: '100%',
          maxWidth: '780px',
          margin: '22px auto 20px auto',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1.5px solid rgba(255, 111, 0, 0.3)',
        }}
      >
        <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="premium-skeleton-base" style={{ width: '20px', height: '20px', borderRadius: '4px' }} />
          ))}
        </div>
        <div className="premium-skeleton-base" style={{ width: '85%', height: '16px', marginBottom: '8px', borderRadius: '4px' }} />
        <div className="premium-skeleton-base" style={{ width: '70%', height: '14px', marginBottom: '16px', borderRadius: '4px' }} />
        <div className="premium-skeleton-base premium-skeleton-circle" style={{ width: '48px', height: '48px', marginBottom: '8px' }} />
        <div className="premium-skeleton-base" style={{ width: '120px', height: '14px', borderRadius: '4px' }} />
      </div>
    );
  }
  return (
    <div
      className="testimonial-carousel-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        margin: '22px auto 20px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Left Chevron Previous Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPrev}
        aria-label="Previous testimonial"
        className="carousel-nav-btn prev-btn"
        style={{
          position: 'absolute',
          left: '-14px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(255, 111, 0, 0.35)',
          color: '#FF6F00',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          boxShadow: '0 4px 14px rgba(255, 111, 0, 0.18)',
        }}
      >
        <ChevronLeft size={20} strokeWidth={2.4} />
      </motion.button>

      {/* Pure White & Radiant Orange Testimonial Card */}
      <div
        className="testimonial-glass-card"
        style={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid rgba(255, 111, 0, 0.22)',
          borderRadius: '16px',
          padding: '22px 26px 18px 26px',
          boxShadow: '0 8px 28px rgba(255, 111, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Large Decorative Orange Quotation Mark */}
        <div
          style={{
            position: 'absolute',
            top: '4px',
            left: '20px',
            fontFamily: 'Georgia, serif',
            fontSize: '52px',
            lineHeight: '1',
            color: '#FF6F00',
            opacity: 0.35,
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
            fontSize: '14px',
            lineHeight: '1.5',
            fontWeight: '400',
            color: '#0F172A',
            textAlign: 'left',
            paddingLeft: '32px',
            marginBottom: '12px',
            minHeight: '40px',
          }}
        >
          {`"${testimonial.quote.replace(/^"|"$/g, '')}"`}
        </p>

        {/* Thin Horizontal Divider */}
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#F1F5F9',
            marginBottom: '12px',
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
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '2px solid rgba(255, 111, 0, 0.3)',
                boxShadow: '0 2px 8px rgba(255, 111, 0, 0.15)',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  fontWeight: '700',
                  fontSize: '14px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {testimonial.initials || <User size={20} color="#FFFFFF" />}
              </div>
            </div>

            {/* Name, Role & Location */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#0F172A',
                  lineHeight: '1.2',
                  fontFamily: 'var(--font-body)',
                  marginBottom: '1px',
                }}
              >
                {testimonial.name}
              </span>
              <span
                style={{
                  fontSize: '11.5px',
                  color: '#64748B',
                  lineHeight: '1.3',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {testimonial.role} • <span>{testimonial.location}</span>
              </span>
            </div>
          </div>

          {/* Right: Exactly 5 Radiant Orange Stars */}
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
                size={16}
                fill="#FF6F00"
                color="#FF6F00"
                strokeWidth={1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Chevron Next Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        aria-label="Next testimonial"
        className="carousel-nav-btn next-btn"
        style={{
          position: 'absolute',
          right: '-14px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(255, 111, 0, 0.35)',
          color: '#FF6F00',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          boxShadow: '0 4px 14px rgba(255, 111, 0, 0.18)',
        }}
      >
        <ChevronRight size={20} strokeWidth={2.4} />
      </motion.button>
    </div>
  );
};
