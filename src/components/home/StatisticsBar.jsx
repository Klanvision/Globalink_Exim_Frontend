import React from 'react';
import { Globe2, Package, Ship, Handshake, Users, Clock3 } from 'lucide-react';

export const StatisticsBar = () => {
  const stats = [
    {
      icon: Globe2,
      number: '150+',
      line1: 'Countries',
      line2: 'Connected',
    },
    {
      icon: Package,
      number: '500+',
      line1: 'Products',
      line2: 'Traded',
    },
    {
      icon: Ship,
      number: '1,500+',
      line1: 'Shipments',
      line2: 'Managed',
    },
    {
      icon: Handshake,
      number: '250+',
      line1: 'Global',
      line2: 'Partners',
    },
    {
      icon: Users,
      number: '50+',
      line1: 'Trusted',
      line2: 'Suppliers',
    },
    {
      icon: Clock3,
      number: '98%',
      line1: 'On-Time',
      line2: 'Delivery',
    },
  ];

  return (
    <div style={{
      margin: '12px 28px 0 28px',
      background: 'var(--navy-panel)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      minHeight: '86px',
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      alignItems: 'center',
      padding: '12px 8px',
      boxShadow: '0 4px 18px rgba(0, 0, 0, 0.35)'
    }} className="statistics-grid">
      {stats.map((item, index) => {
        const Icon = item.icon;
        const isLast = index === stats.length - 1;
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.18)',
              padding: '0 8px'
            }}
          >
            {/* Gold Line Icon */}
            <div style={{ color: 'var(--gold)', flexShrink: 0 }}>
              <Icon size={28} strokeWidth={1.5} />
            </div>

            {/* Stat Number & Subtitles */}
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{
                fontSize: '24px',
                fontWeight: '700',
                fontFamily: 'var(--font-heading)',
                color: 'var(--white)',
                letterSpacing: '-0.5px'
              }}>
                {item.number}
              </span>
              <span style={{
                fontSize: '10px',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-body)',
                fontWeight: '400',
                marginTop: '1px'
              }}>
                {item.line1} {item.line2}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
