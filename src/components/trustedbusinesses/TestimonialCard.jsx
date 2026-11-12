import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonialsData as defaultTestimonials } from '../../data/trustedBusinessesData';

/**
 * Single Testimonial Comment Card
 */
export const SingleCommentCard = ({ testimonial }) => {
  if (!testimonial) return null;

  return (
    <div
      className="testimonial-comment-card"
      style={{
        height: '100%',
        minHeight: '230px',
        backgroundColor: '#FFFFFF',
        border: '1.5px solid rgba(255, 111, 0, 0.22)',
        borderRadius: '16px',
        padding: '24px 22px 20px 22px',
        boxShadow: '0 4px 20px rgba(255, 111, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        position: 'relative',
        transition: 'all 0.25s ease',
      }}
    >
      {/* Top Row: Quote Badge & 5-Star Rating */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '14px',
          }}
        >
          {/* Decorative Quote Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '999px',
              background: 'rgba(255, 111, 0, 0.08)',
              border: '1px solid rgba(255, 111, 0, 0.2)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                lineHeight: 1,
                color: '#FF6F00',
                fontWeight: '700',
              }}
            >
              “
            </span>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '700',
                color: '#FF6F00',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
              }}
            >
              VERIFIED CLIENT
            </span>
          </div>

          {/* 5 Radiant Orange Stars */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={15}
                fill="#FF6F00"
                color="#FF6F00"
                strokeWidth={0}
              />
            ))}
          </div>
        </div>

        {/* Comment / Quote Text */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13.5px',
            lineHeight: '1.58',
            fontWeight: '450',
            color: '#1E293B',
            textAlign: 'left',
            marginBottom: '16px',
            minHeight: '66px',
          }}
        >
          "{testimonial.quote.replace(/^"|"$/g, '')}"
        </p>
      </div>

      {/* Bottom Row: User Info & Location */}
      <div>
        {/* Subtle separator */}
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(255, 111, 0, 0.1)',
            marginBottom: '14px',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
            {/* Avatar Circle with Initials */}
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid rgba(255, 111, 0, 0.3)',
                boxShadow: '0 2px 8px rgba(255, 111, 0, 0.18)',
                background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                flexShrink: 0,
                fontWeight: '700',
                fontSize: '13.5px',
                fontFamily: 'var(--font-body)',
              }}
            >
              {testimonial.initials || (testimonial.name ? testimonial.name.charAt(0) : <User size={18} color="#FFFFFF" />)}
            </div>

            {/* Name & Role */}
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <span
                style={{
                  fontSize: '13.5px',
                  fontWeight: '700',
                  color: '#0F172A',
                  lineHeight: '1.2',
                  fontFamily: 'var(--font-body)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {testimonial.name}
              </span>
              <span
                style={{
                  fontSize: '11px',
                  color: '#64748B',
                  lineHeight: '1.3',
                  fontFamily: 'var(--font-body)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {testimonial.role}
              </span>
            </div>
          </div>

          {/* Location Badge */}
          {testimonial.location && (
            <span
              style={{
                display: 'inline-block',
                padding: '3px 8px',
                borderRadius: '999px',
                background: 'rgba(255, 111, 0, 0.08)',
                border: '1px solid rgba(255, 111, 0, 0.2)',
                color: '#FF6F00',
                fontSize: '10.5px',
                fontWeight: '700',
                fontFamily: 'var(--font-body)',
                flexShrink: 0,
              }}
            >
              {testimonial.location}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * 3-Comment Auto-Moving Testimonials Carousel
 */
export const TestimonialCarousel = ({
  testimonials = defaultTestimonials,
  loading = false,
  autoPlay = true,
  interval = 3800,
}) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const list = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;
  const N = list.length;

  // Triplicate the list for seamless infinite loop sliding
  const extendedList = [...list, ...list, ...list];
  const [currentIndex, setCurrentIndex] = useState(N); // Start at the middle set
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Measure container width on mount and window resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Determine number of visible cards based on container width
  const getCardsToShow = () => {
    if (!containerWidth) return 3;
    if (containerWidth < 640) return 1;
    if (containerWidth < 1024) return 2;
    return 3;
  };

  const cardsToShow = getCardsToShow();
  const gap = 20;
  const cardWidth = containerWidth > 0
    ? (containerWidth - (cardsToShow - 1) * gap) / cardsToShow
    : 320;

  // Autoplay timer
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, N]);

  // Seamless infinite loop wrapping
  const handleTransitionEnd = () => {
    if (currentIndex >= 2 * N) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - N);
    } else if (currentIndex < N) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + N);
    }
  };

  // Re-enable CSS transition after zero-delay index jump
  useEffect(() => {
    if (!isTransitioning) {
      const rafId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(rafId);
    }
  }, [isTransitioning]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const activeDot = ((currentIndex % N) + N) % N;

  if (loading) {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          width: '100%',
          margin: '20px 0',
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="premium-skeleton-card"
            style={{
              padding: '24px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.7)',
              border: '1.5px solid rgba(255, 111, 0, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="premium-skeleton-base" style={{ width: '80px', height: '22px', borderRadius: '999px' }} />
              <div className="premium-skeleton-base" style={{ width: '85px', height: '16px', borderRadius: '4px' }} />
            </div>
            <div className="premium-skeleton-base" style={{ width: '100%', height: '14px', borderRadius: '4px' }} />
            <div className="premium-skeleton-base" style={{ width: '85%', height: '14px', borderRadius: '4px' }} />
            <div className="premium-skeleton-base" style={{ width: '70%', height: '14px', borderRadius: '4px' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '12px' }}>
              <div className="premium-skeleton-base premium-skeleton-circle" style={{ width: '40px', height: '40px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div className="premium-skeleton-base" style={{ width: '110px', height: '14px', borderRadius: '4px' }} />
                <div className="premium-skeleton-base" style={{ width: '75px', height: '12px', borderRadius: '4px' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const offset = currentIndex * (cardWidth + gap);

  return (
    <div
      className="testimonial-auto-carousel-root"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        margin: '18px 0 10px 0',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Left Chevron Button */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: '#FFF5EB' }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePrev}
        aria-label="Previous testimonials"
        style={{
          position: 'absolute',
          left: '-16px',
          top: '46%',
          transform: 'translateY(-50%)',
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid rgba(255, 111, 0, 0.35)',
          color: '#FF6F00',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          boxShadow: '0 4px 14px rgba(255, 111, 0, 0.16)',
        }}
      >
        <ChevronLeft size={20} strokeWidth={2.4} />
      </motion.button>

      {/* Overflow-Hidden Viewport */}
      <div
        ref={containerRef}
        style={{
          overflow: 'hidden',
          width: '100%',
          padding: '6px 2px 14px 2px',
          boxSizing: 'border-box',
        }}
      >
        {/* Sliding Track */}
        <div
          style={{
            display: 'flex',
            gap: `${gap}px`,
            transform: `translateX(-${offset}px)`,
            transition: isTransitioning
              ? 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)'
              : 'none',
            willChange: 'transform',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedList.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              style={{
                flex: `0 0 ${cardWidth}px`,
                width: `${cardWidth}px`,
                boxSizing: 'border-box',
              }}
            >
              <SingleCommentCard testimonial={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Chevron Button */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: '#FFF5EB' }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
        aria-label="Next testimonials"
        style={{
          position: 'absolute',
          right: '-16px',
          top: '46%',
          transform: 'translateY(-50%)',
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid rgba(255, 111, 0, 0.35)',
          color: '#FF6F00',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          boxShadow: '0 4px 14px rgba(255, 111, 0, 0.16)',
        }}
      >
        <ChevronRight size={20} strokeWidth={2.4} />
      </motion.button>

      {/* Pagination Indicator Dots */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '16px',
        }}
      >
        {list.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(N + i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: activeDot === i ? '24px' : '8px',
              height: '8px',
              borderRadius: '999px',
              backgroundColor: activeDot === i ? '#FF6F00' : 'rgba(255, 111, 0, 0.22)',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
              boxShadow: activeDot === i ? '0 2px 8px rgba(255, 111, 0, 0.35)' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * Backwards-compatible export:
 * Can be used as `<TestimonialCard />` or `<TestimonialCarousel />`
 */
export const TestimonialCard = (props) => {
  // If invoked with a list of testimonials or as an auto-carousel:
  return <TestimonialCarousel {...props} />;
};
