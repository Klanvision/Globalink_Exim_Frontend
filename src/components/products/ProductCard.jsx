import React from 'react';
import { ArrowRight, Leaf, Sparkles, Shirt, Settings } from 'lucide-react';

export const ProductCard = ({ product, onViewDetails }) => {
  const { name, origin, destination, moq, image, badgeText, badgeBg, badgeTextColor, badgePosition, benefits } = product;

  // Render badge icon based on product
  const getBadgeIcon = () => {
    if (name.includes('Mangos')) return <Leaf size={12} color="#FFFFFF" />;
    if (name.includes('Decor')) return <Sparkles size={12} color="#FAAE2B" />;
    if (name.includes('Garments')) return <Shirt size={12} color="#FAAE2B" />;
    return <Settings size={12} color="#FFFFFF" />;
  };

  // Badge positioning style
  const getBadgePositionStyle = () => {
    switch (badgePosition) {
      case 'bottom-right':
        return { bottom: '12px', right: '12px' };
      case 'right':
        return { top: '16px', right: '12px' };
      default:
        return { top: '12px', left: '12px' };
    }
  };

  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #DDE1E6',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 3px 12px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}
      className="product-card"
    >
      {/* 220px Product Image Area with Overlay Badge */}
      <div style={{ width: '100%', height: '220px', position: 'relative', overflow: 'hidden' }}>
        <img
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />

        {/* Custom Overlay Badge */}
        {badgeText && (
          <div
            style={{
              position: 'absolute',
              ...getBadgePositionStyle(),
              background: badgeBg,
              color: badgeTextColor,
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '9.5px',
              fontWeight: '800',
              lineHeight: 1.15,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              letterSpacing: '0.04em',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
            }}
          >
            {getBadgeIcon()}
            <span style={{ whiteSpace: 'pre-line' }}>{badgeText}</span>
          </div>
        )}
      </div>

      {/* Card Body Information */}
      <div style={{ padding: '16px 14px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        {/* Product Name */}
        <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#082653', textAlign: 'center', marginBottom: '4px', lineHeight: 1.2 }}>
          {name}
        </h3>

        {/* Origin → Destination */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '18px', fontWeight: '600', color: '#082653', marginBottom: '4px' }}>
          <span>{origin}</span>
          <ArrowRight size={16} color="#FAAE2B" strokeWidth={3} />
          <span>{destination}</span>
        </div>

        {/* MOQ */}
        <div style={{ fontSize: '17px', fontWeight: '500', color: '#082653', marginBottom: '14px' }}>
          {moq}
        </div>

        {/* 3 Horizontal Product Benefits */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          width: '100%',
          gap: '4px',
          padding: '10px 0',
          borderTop: '1px solid #F0F2F5',
          borderBottom: '1px solid #F0F2F5',
          marginBottom: '16px'
        }}>
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
                <div style={{ color: '#FAAE2B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <span style={{ fontSize: '11px', fontWeight: '600', color: '#34445C', lineHeight: 1.15 }}>
                  {b.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Gold CTA Button */}
        <button
          onClick={onViewDetails}
          style={{
            height: '38px',
            width: '215px',
            background: '#E5A52A',
            color: '#082653',
            borderRadius: '6px',
            fontSize: '15px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 3px 10px rgba(229, 165, 42, 0.3)',
            transition: 'all 0.2s ease',
            marginTop: 'auto'
          }}
        >
          <span>View Details</span>
          <ArrowRight size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};
