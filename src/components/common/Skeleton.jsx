import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Loader2, ShieldCheck, Activity, Globe, ArrowRight, Truck, Ship, Plane } from 'lucide-react';
import { useLoading } from '../../context/LoadingContext';

/**
 * High-Premium Base Skeleton Block
 * Supports variants: 'text', 'rectangular', 'rounded', 'circle', 'pill', 'badge'
 */
export const Skeleton = ({
  variant = 'rectangular',
  width = '100%',
  height = '18px',
  borderRadius,
  style = {},
  className = '',
  children,
}) => {
  let computedRadius = borderRadius;
  if (!computedRadius) {
    if (variant === 'circle') computedRadius = '50%';
    else if (variant === 'pill' || variant === 'badge') computedRadius = '999px';
    else if (variant === 'rounded') computedRadius = '14px';
    else if (variant === 'text') computedRadius = '6px';
    else computedRadius = '10px';
  }

  return (
    <div
      className={`premium-skeleton-base ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: computedRadius,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * Multi-Line Text Skeleton
 */
export const SkeletonText = ({ lines = 3, gap = 8, lastLineWidth = '65%', height = 14, style = {} }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: `${gap}px`, width: '100%', ...style }}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          height={height}
          width={i === lines - 1 ? lastLineWidth : '100%'}
        />
      ))}
    </div>
  );
};

/**
 * Eyebrow Pill Badge Skeleton
 */
export const SkeletonBadge = ({ width = 180, height = 26, style = {} }) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 8px',
        borderRadius: '999px',
        border: '1px solid rgba(255, 111, 0, 0.2)',
        background: 'rgba(255, 111, 0, 0.04)',
        boxShadow: '0 2px 8px rgba(255, 111, 0, 0.05)',
        ...style,
      }}
    >
      <Skeleton variant="pill" width={width} height={height - 8} />
    </div>
  );
};

/**
 * Button Skeleton
 */
export const SkeletonButton = ({ width = 160, height = 44, style = {} }) => {
  return (
    <Skeleton
      variant="pill"
      width={width}
      height={height}
      style={{
        background: 'linear-gradient(135deg, #FFE8D6 0%, #FFF5EB 100%)',
        border: '1px solid rgba(255, 111, 0, 0.25)',
        boxShadow: '0 4px 12px rgba(255, 111, 0, 0.08)',
        ...style,
      }}
    />
  );
};

/**
 * High-Premium Section Header Skeleton
 */
export const SectionHeaderSkeleton = ({ style = {} }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: '26px',
        width: '100%',
        ...style,
      }}
    >
      <SkeletonBadge width={170} height={26} style={{ marginBottom: '12px' }} />
      <Skeleton variant="text" width="clamp(220px, 32vw, 380px)" height={32} style={{ marginBottom: '10px' }} />
      {/* Glowing Divider */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto 12px auto' }}>
        <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, rgba(255, 111, 0, 0.4))' }} />
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255, 111, 0, 0.5)' }} />
        <div style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, rgba(255, 111, 0, 0.4), transparent)' }} />
      </div>
      <Skeleton variant="text" width="clamp(180px, 45vw, 480px)" height={14} />
    </div>
  );
};

/**
 * High-Premium Product Card Skeleton
 */
export const ProductCardSkeleton = () => {
  return (
    <div
      className="premium-skeleton-card"
      style={{
        padding: '14px',
        height: '490px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image Block */}
      <Skeleton
        variant="rounded"
        height={210}
        style={{ marginBottom: '14px' }}
      />

      {/* Category Pill & Code */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <Skeleton variant="pill" width={75} height={18} />
        <Skeleton variant="text" width={55} height={14} />
      </div>

      {/* Title & Subtitle */}
      <Skeleton variant="text" width="85%" height={18} style={{ marginBottom: '6px' }} />
      <Skeleton variant="text" width="60%" height={13} style={{ marginBottom: '12px' }} />

      {/* Specs Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
        <Skeleton variant="rounded" height={36} />
        <Skeleton variant="rounded" height={36} />
      </div>

      {/* Price & MOQ */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', marginBottom: '12px' }}>
        <Skeleton variant="text" width={80} height={18} />
        <Skeleton variant="pill" width={70} height={16} />
      </div>

      {/* CTA Button */}
      <SkeletonButton width="100%" height={40} />
    </div>
  );
};

/**
 * High-Premium Freight Card Skeleton
 */
export const FreightCardSkeleton = () => {
  return (
    <div
      className="premium-skeleton-card"
      style={{
        padding: '22px 18px',
        height: '490px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Icon Circle */}
      <Skeleton
        variant="circle"
        width={56}
        height={56}
        style={{ margin: '0 auto 14px auto', border: '1.5px solid rgba(255, 111, 0, 0.2)' }}
      />

      {/* Title & Subtitle */}
      <Skeleton variant="text" width="70%" height={18} style={{ margin: '0 auto 6px auto' }} />
      <Skeleton variant="text" width="50%" height={13} style={{ margin: '0 auto 18px auto' }} />

      {/* 5 Bullet Points */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Skeleton variant="circle" width={16} height={16} />
            <Skeleton variant="text" width={`${65 + (i % 3) * 12}%`} height={12} />
          </div>
        ))}
      </div>

      {/* Image Preview Thumbnail */}
      <Skeleton variant="rounded" height={80} style={{ marginBottom: '16px' }} />

      {/* CTA Button */}
      <div style={{ marginTop: 'auto' }}>
        <SkeletonButton width="100%" height={40} />
      </div>
    </div>
  );
};

/**
 * High-Premium Header Skeleton
 */
export const HeaderSkeleton = () => {
  return (
    <header
      style={{
        width: '100%',
        height: '70px',
        background: '#FFFFFF',
        borderBottom: '1px solid rgba(255, 111, 0, 0.16)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        boxSizing: 'border-box',
        boxShadow: '0 2px 12px rgba(15, 23, 42, 0.04)',
      }}
    >
      {/* Logo & Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Skeleton variant="circle" width={38} height={38} style={{ border: '1.5px solid rgba(255, 111, 0, 0.25)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Skeleton variant="text" width={110} height={16} />
          <Skeleton variant="text" width={75} height={10} />
        </div>
      </div>

      {/* Center Nav Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }} className="desktop-only-stat">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} variant="pill" width={70} height={20} />
        ))}
      </div>

      {/* Right Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Skeleton variant="pill" width={110} height={36} />
        <Skeleton variant="pill" width={120} height={36} style={{ background: 'linear-gradient(135deg, #FFE8D6 0%, #FFF5EB 100%)', border: '1px solid rgba(255, 111, 0, 0.3)' }} />
      </div>
    </header>
  );
};

/**
 * High-Premium Hero Banner Skeleton
 */
export const HeroBannerSkeleton = () => {
  return (
    <div
      style={{
        width: '100%',
        padding: '28px 24px 34px 24px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 50%, #FFF8F0 100%)',
        borderRadius: '16px',
        margin: '12px 0 28px 0',
        border: '1px solid rgba(255, 111, 0, 0.18)',
        boxShadow: '0 8px 30px rgba(255, 111, 0, 0.06)',
        boxSizing: 'border-box',
      }}
    >
      {/* Eyebrow Badge */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
        <SkeletonBadge width={220} height={28} />
      </div>

      {/* Big Hero Title */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '22px' }}>
        <Skeleton variant="text" width="min(600px, 85%)" height={40} />
        <Skeleton variant="text" width="min(450px, 70%)" height={32} />
      </div>

      {/* 3-Column Interactive Logistics Hub Skeleton */}
      <div
        className="premium-skeleton-card"
        style={{
          width: '100%',
          padding: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          background: '#FFFFFF',
        }}
      >
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <Skeleton variant="text" width={140} height={18} style={{ marginBottom: '10px' }} />
            <Skeleton variant="text" width="90%" height={12} style={{ marginBottom: '16px' }} />
            <Skeleton variant="pill" width={90} height={36} />
          </div>
          <div style={{ height: '1px', background: '#E2E8F0' }} />
          <div>
            <Skeleton variant="text" width={150} height={18} style={{ marginBottom: '14px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} variant="text" width={`${75 + (i % 3) * 10}%`} height={12} />
              ))}
            </div>
            <Skeleton variant="pill" width={110} height={36} />
          </div>
        </div>

        {/* Center Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Skeleton variant="text" width={130} height={22} />
            <Skeleton variant="pill" width={140} height={22} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} variant="rounded" height={38} />
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <Skeleton variant="rounded" height={42} />
            <Skeleton variant="rounded" height={42} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <Skeleton variant="rounded" height={40} />
            <Skeleton variant="rounded" height={40} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
            <Skeleton variant="text" width={200} height={13} />
            <Skeleton variant="pill" width={100} height={40} />
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <Skeleton variant="text" width={160} height={18} style={{ marginBottom: '12px' }} />
            <Skeleton variant="rounded" height={42} style={{ marginBottom: '12px' }} />
            <Skeleton variant="pill" width={85} height={36} style={{ marginLeft: 'auto' }} />
          </div>
          <div style={{ height: '1px', background: '#E2E8F0' }} />
          <div>
            <Skeleton variant="text" width={120} height={18} style={{ marginBottom: '10px' }} />
            <Skeleton variant="text" width="90%" height={12} style={{ marginBottom: '16px' }} />
            <Skeleton variant="pill" width={140} height={38} />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * High-Premium Network Map Skeleton
 */
export const MapSkeleton = () => {
  return (
    <div
      className="premium-skeleton-card"
      style={{
        width: '100%',
        minHeight: '440px',
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top HUD */}
      <div style={{ height: '48px', borderBottom: '1px solid #E2E8F0', padding: '0 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Skeleton variant="pill" width={220} height={22} />
        <div style={{ display: 'flex', gap: '8px' }}>
          <Skeleton variant="pill" width={80} height={22} />
          <Skeleton variant="pill" width={80} height={22} />
        </div>
      </div>
      {/* Map Body Placeholder */}
      <div style={{ flex: 1, minHeight: '340px', background: '#F8FAFC', position: 'relative' }}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </div>
      {/* Bottom Bar */}
      <div style={{ height: '42px', borderTop: '1px solid #E2E8F0', padding: '0 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '14px' }}>
          <Skeleton variant="text" width={100} height={12} />
          <Skeleton variant="text" width={100} height={12} />
        </div>
        <Skeleton variant="text" width={140} height={12} />
      </div>
    </div>
  );
};

/**
 * Full Page Luxury Skeleton
 */
export const PageSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      style={{
        width: '100%',
        maxWidth: '100%',
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <HeaderSkeleton />

      <main style={{ padding: '0 24px', boxSizing: 'border-box', width: '100%' }}>
        {/* Hero Banner Skeleton */}
        <HeroBannerSkeleton />

        {/* Freight Services Section Skeleton */}
        <section
          style={{
            margin: '0 0 28px 0',
            padding: '38px 20px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 111, 0, 0.16)',
          }}
        >
          <SectionHeaderSkeleton />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '18px',
            }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <FreightCardSkeleton key={i} />
            ))}
          </div>
        </section>

        {/* Featured Products Section Skeleton */}
        <section
          style={{
            margin: '0 0 28px 0',
            padding: '38px 20px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF8F0 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 111, 0, 0.16)',
          }}
        >
          <SectionHeaderSkeleton />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '18px',
            }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </section>

        {/* Global Network Map Section Skeleton */}
        <section
          style={{
            margin: '0 0 28px 0',
            padding: '38px 20px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F7FAFE 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 111, 0, 0.16)',
          }}
        >
          <SectionHeaderSkeleton />
          <MapSkeleton />
        </section>
      </main>
      <FooterSkeleton />
    </motion.div>
  );
};

/**
 * High-Premium Footer Skeleton
 */
export const FooterSkeleton = ({ isDark = false }) => {
  return (
    <footer
      style={{
        width: '100%',
        background: isDark
          ? 'linear-gradient(180deg, #020C24 0%, #01081A 100%)'
          : '#0F172A',
        padding: '48px 24px 28px 24px',
        borderTop: '1px solid rgba(255, 111, 0, 0.25)',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top 4 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px',
            marginBottom: '36px',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <Skeleton variant="circle" width={38} height={38} style={{ border: '1.5px solid rgba(255, 111, 0, 0.3)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Skeleton variant="text" width={110} height={16} />
                <Skeleton variant="text" width={75} height={10} />
              </div>
            </div>
            <SkeletonText lines={3} gap={6} height={12} lastLineWidth="80%" />
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} variant="circle" width={28} height={28} />
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <Skeleton variant="text" width={90} height={16} style={{ marginBottom: '14px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} variant="text" width={`${70 + (i % 3) * 10}%`} height={12} />
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <Skeleton variant="text" width={110} height={16} style={{ marginBottom: '14px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} variant="text" width={`${65 + (i % 3) * 12}%`} height={12} />
              ))}
            </div>
          </div>

          {/* Newsletter Box */}
          <div>
            <Skeleton variant="text" width={130} height={16} style={{ marginBottom: '10px' }} />
            <Skeleton variant="text" width="85%" height={12} style={{ marginBottom: '14px' }} />
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <Skeleton variant="rounded" height={36} style={{ flex: 1 }} />
              <SkeletonButton width={80} height={36} />
            </div>
            <Skeleton variant="text" width="60%" height={10} />
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <Skeleton variant="text" width={240} height={12} />
          <div style={{ display: 'flex', gap: '16px' }}>
            <Skeleton variant="pill" width={60} height={14} />
            <Skeleton variant="pill" width={75} height={14} />
            <Skeleton variant="pill" width={80} height={14} />
          </div>
        </div>
      </div>
    </footer>
  );
};

/**
 * Top Real-Time Micro Progress Bar
 */
export const TopProgressBar = () => {
  const { isLoading } = useLoading();
  if (!isLoading) return null;
  return <div className="realtime-top-progress-bar" />;
};

/**
 * Live Real-Time Telemetry HUD Badge
 */
export const LiveTelemetryBadge = () => {
  const { isLoading, loadingRoute } = useLoading();
  const [latency, setLatency] = useState(34);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 8) + 30);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: '12px',
        right: '18px',
        zIndex: 10001,
        background: 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 111, 0, 0.3)',
        boxShadow: '0 4px 18px rgba(255, 111, 0, 0.12)',
        padding: '5px 13px',
        borderRadius: '999px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '11px',
        fontWeight: '700',
        color: '#0F172A',
        fontFamily: 'var(--font-body)',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      <span className="telemetry-radar-dot" />
      <span style={{ color: '#FF6F00' }}>Live Telemetry</span>
      <span style={{ color: '#CBD5E1' }}>•</span>
      <span style={{ color: '#334155' }}>{latency}ms</span>
      {isLoading && (
        <>
          <span style={{ color: '#CBD5E1' }}>•</span>
          <span style={{ color: '#FF6F00', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Loader2 size={11} className="animate-spin" />
            <span style={{ textTransform: 'capitalize' }}>
              Syncing {loadingRoute ? loadingRoute.replace(/-/g, ' ') : 'System'}...
            </span>
          </span>
        </>
      )}
    </div>
  );
};

/**
 * High-Premium Freight Page Skeleton
 */
export const FreightPageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#FAFBFD' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        <SectionHeaderSkeleton />
        {/* 4 Freight Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <FreightCardSkeleton key={i} />
          ))}
        </div>
        {/* Trust Bar Skeleton */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '20px 24px',
            border: '1px solid rgba(255, 111, 0, 0.18)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Skeleton variant="circle" width={38} height={38} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                <Skeleton variant="text" width="80%" height={14} />
                <Skeleton variant="text" width="55%" height={10} />
              </div>
            </div>
          ))}
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
};

/**
 * High-Premium Featured Products Page Skeleton
 */
export const FeaturedProductsPageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#FAF8F3' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        <SectionHeaderSkeleton />
        {/* Search & Category Filter Bar */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '14px',
            padding: '14px 20px',
            border: '1px solid rgba(255, 111, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px',
            marginBottom: '28px',
            flexWrap: 'wrap',
          }}
        >
          <Skeleton variant="rounded" width="clamp(220px, 40%, 360px)" height={38} />
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} variant="pill" width={75} height={28} />
            ))}
          </div>
        </div>
        {/* 4 Product Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
};

/**
 * High-Premium Products (Global Portfolio) Page Skeleton
 */
export const ProductsPageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#FAFBFD' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        <SectionHeaderSkeleton />
        {/* Search Bar Skeleton */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
          <Skeleton variant="rounded" width="min(600px, 90%)" height={44} style={{ borderRadius: '12px' }} />
        </div>
        {/* 8 Product Categories Grid (2 rows of 4) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px',
            marginBottom: '36px',
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="premium-skeleton-card"
              style={{
                padding: '20px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                minHeight: '230px',
              }}
            >
              <Skeleton variant="circle" width={56} height={56} style={{ marginBottom: '14px', border: '1.5px solid rgba(255, 111, 0, 0.25)' }} />
              <Skeleton variant="text" width="70%" height={16} style={{ marginBottom: '8px' }} />
              <SkeletonText lines={2} gap={6} height={11} lastLineWidth="60%" style={{ marginBottom: '14px' }} />
              <Skeleton variant="pill" width={90} height={22} style={{ marginTop: 'auto' }} />
            </div>
          ))}
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
};

/**
 * High-Premium Procurement Page Skeleton
 */
export const ProcurementPageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#FFFFFF' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        <SectionHeaderSkeleton />
        {/* 5 Step Circles Flow */}
        <div
          style={{
            background: '#FFFDF9',
            borderRadius: '20px',
            border: '1.5px solid rgba(255, 111, 0, 0.2)',
            padding: '34px 20px',
            marginBottom: '36px',
            boxShadow: '0 6px 24px rgba(255, 111, 0, 0.06)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '16px',
              textAlign: 'center',
            }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Skeleton variant="circle" width={68} height={68} style={{ marginBottom: '12px', border: '2px solid rgba(255, 111, 0, 0.3)' }} />
                <Skeleton variant="text" width={60} height={14} style={{ marginBottom: '6px' }} />
                <Skeleton variant="text" width={100} height={12} />
              </div>
            ))}
          </div>
        </div>

        {/* 4 Benefit Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px',
            marginBottom: '36px',
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="premium-skeleton-card" style={{ padding: '20px' }}>
              <Skeleton variant="circle" width={44} height={44} style={{ marginBottom: '12px' }} />
              <Skeleton variant="text" width="60%" height={16} style={{ marginBottom: '8px' }} />
              <SkeletonText lines={3} gap={6} height={11} lastLineWidth="70%" />
            </div>
          ))}
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
};

/**
 * High-Premium Documentation Page Skeleton
 */
export const DocumentationPageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#FAFBFC' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        <SectionHeaderSkeleton />
        {/* 6 Category Circles */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '32px',
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Skeleton variant="circle" width={56} height={56} style={{ border: '1.5px solid rgba(255, 111, 0, 0.25)' }} />
              <Skeleton variant="text" width={65} height={12} />
            </div>
          ))}
        </div>

        {/* 6 Document Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '18px',
            marginBottom: '36px',
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="premium-skeleton-card" style={{ padding: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <Skeleton variant="rounded" width={42} height={42} />
                <div style={{ flex: 1 }}>
                  <Skeleton variant="text" width="70%" height={15} style={{ marginBottom: '4px' }} />
                  <Skeleton variant="text" width="40%" height={10} />
                </div>
              </div>
              <SkeletonText lines={2} gap={6} height={11} style={{ marginBottom: '14px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Skeleton variant="pill" width={70} height={20} />
                <SkeletonButton width={90} height={30} />
              </div>
            </div>
          ))}
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
};

/**
 * High-Premium Customs Compliance Page Skeleton
 */
export const CustomsCompliancePageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#FAFBFD' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        <SectionHeaderSkeleton />
        {/* 6 Service Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="premium-skeleton-card" style={{ padding: '22px' }}>
              <Skeleton variant="circle" width={48} height={48} style={{ marginBottom: '14px', border: '1.5px solid rgba(255, 111, 0, 0.25)' }} />
              <Skeleton variant="text" width="75%" height={16} style={{ marginBottom: '8px' }} />
              <SkeletonText lines={3} gap={6} height={11} style={{ marginBottom: '16px' }} />
              <Skeleton variant="pill" width={110} height={22} />
            </div>
          ))}
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
};

/**
 * High-Premium Quality Assurance Page Skeleton
 */
export const QualityPageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#FAFBFD' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        <SectionHeaderSkeleton />
        {/* 5 Quality Process Steps */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid rgba(255, 111, 0, 0.2)',
            padding: '30px 20px',
            marginBottom: '36px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              textAlign: 'center',
            }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Skeleton variant="circle" width={60} height={60} style={{ marginBottom: '10px' }} />
                <Skeleton variant="text" width={70} height={14} style={{ marginBottom: '4px' }} />
                <Skeleton variant="text" width={100} height={11} />
              </div>
            ))}
          </div>
        </div>

        {/* 5 Assurance Feature Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '36px',
          }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="premium-skeleton-card" style={{ padding: '18px' }}>
              <Skeleton variant="circle" width={40} height={40} style={{ marginBottom: '10px' }} />
              <Skeleton variant="text" width="70%" height={15} style={{ marginBottom: '6px' }} />
              <SkeletonText lines={2} gap={6} height={11} />
            </div>
          ))}
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
};

/**
 * High-Premium Services Page Skeleton
 */
export const ServicesPageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#FAFBFD' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        <SectionHeaderSkeleton />
        {/* 10 Services Grid (2x5) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px',
            marginBottom: '36px',
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="premium-skeleton-card"
              style={{
                padding: '20px 16px',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '210px',
              }}
            >
              <Skeleton variant="circle" width={46} height={46} style={{ marginBottom: '12px' }} />
              <Skeleton variant="text" width="80%" height={16} style={{ marginBottom: '8px' }} />
              <SkeletonText lines={2} gap={6} height={11} style={{ marginBottom: '14px' }} />
              <Skeleton variant="pill" width={90} height={20} style={{ marginTop: 'auto' }} />
            </div>
          ))}
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
};

/**
 * High-Premium How It Works Page Skeleton
 */
export const HowItWorksPageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#FAFBFD' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        <SectionHeaderSkeleton />
        {/* 6 Process Steps with Arrows */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid rgba(255, 111, 0, 0.2)',
            padding: '32px 20px',
            marginBottom: '36px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '16px',
              textAlign: 'center',
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Skeleton variant="circle" width={64} height={64} style={{ marginBottom: '10px' }} />
                <Skeleton variant="text" width={75} height={14} style={{ marginBottom: '4px' }} />
                <Skeleton variant="text" width={110} height={11} />
              </div>
            ))}
          </div>
        </div>

        {/* 4 Trust Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px',
            marginBottom: '36px',
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="premium-skeleton-card" style={{ padding: '18px' }}>
              <Skeleton variant="circle" width={40} height={40} style={{ marginBottom: '10px' }} />
              <Skeleton variant="text" width="70%" height={15} style={{ marginBottom: '6px' }} />
              <SkeletonText lines={2} gap={6} height={11} />
            </div>
          ))}
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
};

/**
 * High-Premium Tracking & Warehousing Page Skeleton
 */
export const TrackingPageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#FAFBFD' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        <SectionHeaderSkeleton />

        {/* Big Tracking Form Card */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1.5px solid rgba(255, 111, 0, 0.25)',
            boxShadow: '0 8px 30px rgba(255, 111, 0, 0.08)',
            padding: '28px',
            marginBottom: '32px',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Skeleton variant="rounded" height={48} style={{ flex: '2 1 280px' }} />
            <Skeleton variant="rounded" height={48} style={{ flex: '1 1 180px' }} />
            <SkeletonButton width={160} height={48} />
          </div>
        </div>

        {/* 7-Stage Tracking Timeline Card */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid rgba(255, 111, 0, 0.18)',
            padding: '30px 24px',
            marginBottom: '32px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <Skeleton variant="text" width={180} height={18} />
            <Skeleton variant="pill" width={110} height={26} />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '12px',
              textAlign: 'center',
            }}
          >
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Skeleton variant="circle" width={38} height={38} style={{ marginBottom: '8px' }} />
                <Skeleton variant="text" width={65} height={12} style={{ marginBottom: '4px' }} />
                <Skeleton variant="text" width={80} height={10} />
              </div>
            ))}
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px',
            marginBottom: '36px',
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="premium-skeleton-card" style={{ padding: '18px' }}>
              <Skeleton variant="circle" width={42} height={42} style={{ marginBottom: '12px' }} />
              <Skeleton variant="text" width="65%" height={16} style={{ marginBottom: '8px' }} />
              <SkeletonText lines={2} gap={6} height={11} />
            </div>
          ))}
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
};

/**
 * High-Premium Buyers Page Skeleton
 */
export const BuyersPageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#FAFBFD' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        <SectionHeaderSkeleton />
        {/* 6 Buyer Category Circles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '16px',
            marginBottom: '36px',
            textAlign: 'center',
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Skeleton variant="circle" width={64} height={64} style={{ marginBottom: '10px' }} />
              <Skeleton variant="text" width={85} height={14} style={{ marginBottom: '4px' }} />
              <Skeleton variant="text" width={110} height={10} />
            </div>
          ))}
        </div>

        {/* 2 Big Action Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '36px',
          }}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="premium-skeleton-card"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '260px',
              }}
            >
              <Skeleton variant="circle" width={52} height={52} style={{ marginBottom: '14px' }} />
              <Skeleton variant="text" width="70%" height={20} style={{ marginBottom: '8px' }} />
              <SkeletonText lines={3} gap={8} height={12} style={{ marginBottom: '20px' }} />
              <SkeletonButton width={160} height={42} style={{ marginTop: 'auto' }} />
            </div>
          ))}
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
};

/**
 * High-Premium Global Network Page Skeleton
 */
export const GlobalNetworkPageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#F7FAFE' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        <SectionHeaderSkeleton />
        {/* World Map Skeleton with Animated Radar sweeps */}
        <MapSkeleton />
        {/* 4 Stats Circular Badges */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '18px',
            margin: '32px 0',
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="premium-skeleton-card"
              style={{
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <Skeleton variant="circle" width={48} height={48} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                <Skeleton variant="text" width={65} height={20} />
                <Skeleton variant="text" width={90} height={12} />
              </div>
            </div>
          ))}
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
};

/**
 * High-Premium Why Businesses Choose Us Page Skeleton
 */
export const WhyChooseUsPageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: 'linear-gradient(180deg, #020F2D 0%, #03183B 50%, #061B43 100%)' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        <SectionHeaderSkeleton />
        {/* 6 Advantage Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 111, 0, 0.25)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Skeleton variant="circle" width={48} height={48} style={{ marginBottom: '14px' }} />
              <Skeleton variant="text" width="70%" height={18} style={{ marginBottom: '8px' }} />
              <SkeletonText lines={3} gap={6} height={12} />
            </div>
          ))}
        </div>
      </main>
      <FooterSkeleton isDark={true} />
    </div>
  );
};

/**
 * High-Premium Trusted Businesses Page Skeleton
 */
export const TrustedBusinessesPageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: 'linear-gradient(180deg, #020F2D 0%, #03183B 52%, #02132F 100%)' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        <SectionHeaderSkeleton />
        {/* Large Testimonial Card */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1.5px solid rgba(255, 111, 0, 0.3)',
            borderRadius: '20px',
            padding: '36px',
            maxWidth: '820px',
            margin: '0 auto 36px auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* 5 Stars */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} variant="rounded" width={22} height={22} />
            ))}
          </div>
          <SkeletonText lines={3} gap={8} height={16} lastLineWidth="75%" style={{ marginBottom: '24px' }} />
          <Skeleton variant="circle" width={56} height={56} style={{ marginBottom: '10px' }} />
          <Skeleton variant="text" width={140} height={16} style={{ marginBottom: '4px' }} />
          <Skeleton variant="text" width={100} height={12} />
        </div>

        {/* 7 Partner Logos Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '36px',
          }}
        >
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} variant="pill" width={120} height={36} />
          ))}
        </div>
      </main>
      <FooterSkeleton isDark={true} />
    </div>
  );
};

/**
 * High-Premium Business Global CTA Page Skeleton
 */
export const BusinessGlobalPageSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#02132F' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 24px', boxSizing: 'border-box' }}>
        {/* Glowing Ambient Banner */}
        <div
          style={{
            background: 'linear-gradient(180deg, rgba(255, 111, 0, 0.12) 0%, rgba(2, 19, 47, 0.7) 100%)',
            border: '1.5px solid rgba(255, 111, 0, 0.35)',
            borderRadius: '24px',
            padding: '48px 24px',
            textAlign: 'center',
            marginBottom: '36px',
            boxShadow: '0 0 50px rgba(255, 111, 0, 0.15)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <SkeletonBadge width={220} height={28} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <Skeleton variant="text" width="min(600px, 85%)" height={38} />
            <Skeleton variant="text" width="min(450px, 70%)" height={24} />
          </div>
          {/* 3 Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <SkeletonButton width={180} height={46} />
            <SkeletonButton width={180} height={46} style={{ background: 'transparent', border: '1.5px solid rgba(255, 255, 255, 0.25)' }} />
          </div>
        </div>
      </main>
      <FooterSkeleton isDark={true} />
    </div>
  );
};

/**
 * High-Premium Portal Login Skeleton
 */
export const PortalLoginSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#FAFBFD' }}>
      <HeaderSkeleton />
      <main
        style={{
          maxWidth: '520px',
          margin: '48px auto',
          padding: '0 20px',
          boxSizing: 'border-box',
        }}
      >
        <div
          className="premium-skeleton-card"
          style={{
            padding: '36px 28px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0 12px 36px rgba(255, 111, 0, 0.1)',
          }}
        >
          {/* Security Shield */}
          <Skeleton
            variant="circle"
            width={64}
            height={64}
            style={{ marginBottom: '16px', border: '2px solid rgba(255, 111, 0, 0.3)' }}
          />
          <Skeleton variant="text" width={200} height={22} style={{ marginBottom: '8px' }} />
          <Skeleton variant="text" width={260} height={14} style={{ marginBottom: '26px' }} />

          {/* Form Inputs */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
            <Skeleton variant="rounded" height={44} />
            <Skeleton variant="rounded" height={44} />
          </div>

          {/* MFA Prompt */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '22px' }}>
            <Skeleton variant="pill" width={110} height={16} />
            <Skeleton variant="pill" width={90} height={16} />
          </div>

          {/* Login Button */}
          <SkeletonButton width="100%" height={46} style={{ marginBottom: '16px' }} />
          <Skeleton variant="text" width={180} height={12} />
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
};

/**
 * High-Premium Dashboard Skeleton
 */
export const DashboardSkeleton = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#F8FAFC' }}>
      <HeaderSkeleton />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px', boxSizing: 'border-box' }}>
        {/* 4 Metrics Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px',
            marginBottom: '28px',
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="premium-skeleton-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <Skeleton variant="text" width={90} height={14} />
                <Skeleton variant="circle" width={32} height={32} />
              </div>
              <Skeleton variant="text" width={110} height={26} style={{ marginBottom: '8px' }} />
              <Skeleton variant="pill" width={70} height={16} />
            </div>
          ))}
        </div>

        {/* DataGrid Table Skeleton */}
        <div className="premium-skeleton-card" style={{ padding: '20px', minHeight: '340px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px' }}>
            <Skeleton variant="text" width={160} height={18} />
            <Skeleton variant="pill" width={100} height={28} />
          </div>
          {/* Table Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <Skeleton variant="rounded" width={80} height={32} />
                <Skeleton variant="rounded" height={32} style={{ flex: 1 }} />
                <Skeleton variant="pill" width={90} height={24} />
                <Skeleton variant="rounded" width={70} height={32} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

/**
 * Universal Page Skeleton Router
 * Automatically maps any current or incoming route to its exact specialized high-premium layout!
 */
export const UniversalPageSkeleton = ({ route = 'home' }) => {
  const normRoute = (route || 'home').toLowerCase().trim();

  // Portal login routes
  const portalRoutes = [
    'client-access',
    'strategic-partners',
    'global-export',
    'global-import',
    'supplier-network',
    'logistics-operations',
    'enterprise-employee',
    'portal',
    'login',
  ];

  if (portalRoutes.some((p) => normRoute.includes(p))) {
    return <PortalLoginSkeleton />;
  }

  switch (normRoute) {
    case 'freight':
      return <FreightPageSkeleton />;
    case 'featured-products':
      return <FeaturedProductsPageSkeleton />;
    case 'products':
    case 'portfolio':
      return <ProductsPageSkeleton />;
    case 'procurement':
      return <ProcurementPageSkeleton />;
    case 'documentation':
    case 'resources':
      return <DocumentationPageSkeleton />;
    case 'customs-compliance':
    case 'compliance':
    case 'services/customs-compliance':
      return <CustomsCompliancePageSkeleton />;
    case 'quality':
    case 'quality-assurance':
      return <QualityPageSkeleton />;
    case 'services':
    case 'services-overview':
      return <ServicesPageSkeleton />;
    case 'how-it-works':
    case 'how-global-link-works':
      return <HowItWorksPageSkeleton />;
    case 'track-shipment':
    case 'tracking':
    case 'warehousing':
      return <TrackingPageSkeleton />;
    case 'buyers':
    case 'global-buyers':
      return <BuyersPageSkeleton />;
    case 'network':
    case 'global-network':
      return <GlobalNetworkPageSkeleton />;
    case 'why-choose-us':
    case 'advantages':
      return <WhyChooseUsPageSkeleton />;
    case 'trusted-businesses':
    case 'testimonials':
      return <TrustedBusinessesPageSkeleton />;
    case 'business-global':
    case 'cta':
      return <BusinessGlobalPageSkeleton />;
    case 'dashboard':
      return <DashboardSkeleton />;
    case 'analytics':
      return <DashboardSkeleton />;
    case 'home':
    default:
      return <PageSkeleton />;
  }
};

/**
 * Floating Interactive Skeleton Toggle
 * Allows one-click preview and admiration of the skeleton loading state!
 */
export const SkeletonPreviewToggle = () => {
  const { isSkeletonDemo, toggleSkeletonDemo } = useLoading();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleSkeletonDemo}
      aria-label="Toggle Skeleton Loading Preview"
      style={{
        position: 'fixed',
        bottom: '22px',
        left: '22px',
        zIndex: 9999,
        padding: '8px 14px',
        borderRadius: '999px',
        background: isSkeletonDemo
          ? 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)'
          : '#FFFFFF',
        color: isSkeletonDemo ? '#FFFFFF' : '#0F172A',
        border: '1.5px solid rgba(255, 111, 0, 0.35)',
        boxShadow: isSkeletonDemo
          ? '0 6px 20px rgba(255, 111, 0, 0.35)'
          : '0 4px 16px rgba(15, 23, 42, 0.1)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        fontSize: '12px',
        fontWeight: '700',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {isSkeletonDemo ? (
        <>
          <Loader2 size={14} className="animate-spin" />
          <span>Skeleton Active</span>
        </>
      ) : (
        <>
          <Sparkles size={14} color="#FF6F00" />
          <span>Preview Skeleton</span>
        </>
      )}
    </motion.button>
  );
};

