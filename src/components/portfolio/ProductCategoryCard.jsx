import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Skeleton } from '../common/Skeleton';

export const ProductCategoryCard = ({ category, onClick, index = 0, loading = false }) => {
  if (loading || !category) {
    return (
      <div className="premium-skeleton-card" style={{ height: '240px', width: '100%', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
        <Skeleton variant="rectangular" width="100%" height="174px" />
        <div style={{ height: '66px', background: '#FFFFFF', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Skeleton variant="rounded" width={36} height={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
            <Skeleton variant="text" width="70%" height={14} />
            <Skeleton variant="text" width="50%" height={11} />
          </div>
        </div>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <motion.div
      className="portfolio-category-card"
      onClick={() => onClick && onClick(category)}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      style={{
        position: 'relative',
        height: '240px',
        width: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 18px rgba(15, 23, 42, 0.06)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Category Image with hover zoom */}
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
        <motion.img
          src={category.image}
          alt={category.title}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />

        {/* Ambient Gradient Overlay for text contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.04) 0%, rgba(15, 23, 42, 0.45) 60%, rgba(15, 23, 42, 0.85) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Top Floating Category Tag */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 111, 0, 0.3)',
            borderRadius: '999px',
            padding: '4px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
            zIndex: 2,
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
          <span style={{ fontSize: '11px', fontWeight: '700', color: '#FF6F00', letterSpacing: '0.04em' }}>
            VERIFIED
          </span>
        </div>
      </div>

      {/* Pure White Glassmorphic Bottom Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 14px',
          gap: '10px',
          borderTop: '1px solid #F1F5F9',
          zIndex: 3,
          boxShadow: '0 -4px 12px rgba(15, 23, 42, 0.04)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
          {/* Orange circular icon badge */}
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #FFF5EB 0%, #FFE8D6 100%)',
              border: '1px solid rgba(255, 111, 0, 0.28)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FF6F00',
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(255, 111, 0, 0.12)',
            }}
          >
            <Icon size={19} strokeWidth={2.2} color="#FF6F00" />
          </div>

          {/* Title and Subtitle */}
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <h3
              style={{
                fontSize: '14.5px',
                fontWeight: '700',
                color: '#0F172A',
                lineHeight: '1.2',
                marginBottom: '2px',
                fontFamily: 'var(--font-body)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {category.title}
            </h3>
            <p
              style={{
                fontSize: '11.5px',
                fontWeight: '500',
                color: '#64748B',
                lineHeight: '1.2',
                fontFamily: 'var(--font-body)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {category.description}
            </p>
          </div>
        </div>

        {/* Action arrow button */}
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'rgba(255, 111, 0, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FF6F00',
            flexShrink: 0,
            transition: 'background 0.2s ease',
          }}
        >
          <ArrowUpRight size={15} strokeWidth={2.4} color="#FF6F00" />
        </div>
      </div>
    </motion.div>
  );
};
