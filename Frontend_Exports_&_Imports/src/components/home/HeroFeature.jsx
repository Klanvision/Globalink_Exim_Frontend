import React from 'react';
import { Globe2, ShieldCheck, Package, Clock3 } from 'lucide-react';

export const HeroFeature = () => {
  const features = [
    {
      icon: Globe2,
      title: 'Global Reach',
      subtitle: 'Business in 150+ Countries',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Network',
      subtitle: 'Verified Partners & Suppliers',
    },
    {
      icon: Package,
      title: 'End-to-End Solutions',
      subtitle: 'From Sourcing to Final Delivery',
    },
    {
      icon: Clock3,
      title: '24/7 Support',
      subtitle: 'Always here to support you',
    },
  ];

  return (
    <div
      className="hero-feature-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        margin: '22px 0',
        maxWidth: '640px'
      }}
    >
      {features.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
            }}
          >
            <div style={{
              color: 'var(--gold)',
              marginTop: '2px',
              flexShrink: 0
            }}>
              <Icon size={22} strokeWidth={1.5} />
            </div>
            <div>
              <div style={{
                fontSize: '11px',
                fontWeight: '700',
                color: 'var(--white)',
                lineHeight: 1.2
              }}>
                {item.title}
              </div>
              <div style={{
                fontSize: '9.5px',
                color: 'var(--text-muted)',
                lineHeight: 1.2,
                marginTop: '2px'
              }}>
                {item.subtitle}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
