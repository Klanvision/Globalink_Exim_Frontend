import React from 'react';
import { Package, Network, ShieldCheck, Leaf } from 'lucide-react';

export const ServiceHighlights = () => {
  const highlights = [
    {
      icon: Package,
      title: 'End-to-End Solutions',
      description: 'From sourcing to final delivery',
    },
    {
      icon: Network,
      title: 'Smart Logistics Network',
      description: 'Faster routes. Lower costs.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Compliant',
      description: 'Safe, legal & hassle-free',
    },
    {
      icon: Leaf,
      title: 'Sustainable Future',
      description: 'Responsible trade for tomorrow',
    },
  ];

  return (
    <div
      className="service-highlights-grid"
      style={{
        margin: '12px 28px 20px 28px',
        background: 'rgba(0, 18, 41, 0.6)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '12px 16px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        alignItems: 'center',
        gap: '12px'
      }}
    >
      {highlights.map((item, index) => {
        const Icon = item.icon;
        const isLast = index === highlights.length - 1;
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.12)',
              paddingRight: isLast ? '0' : '12px'
            }}
          >
            <div style={{
              color: 'var(--gold)',
              background: 'rgba(250, 174, 43, 0.1)',
              padding: '6px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Icon size={20} strokeWidth={1.5} />
            </div>

            <div>
              <div style={{
                fontSize: '11.5px',
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
                {item.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
