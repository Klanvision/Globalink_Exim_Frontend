import React from 'react';
import { Globe, ShieldCheck, Clock3, Headphones, Leaf } from 'lucide-react';

export const TrustBar = ({ style = {} }) => {
  const items = [
    {
      icon: Globe,
      iconColor: '#092554',
      title: 'GLOBAL NETWORK',
      desc: 'Across 120+ Countries',
    },
    {
      icon: ShieldCheck,
      iconColor: '#092554',
      title: 'SAFE & SECURE',
      desc: 'Your Cargo, Our Responsibility',
    },
    {
      icon: Clock3,
      iconColor: '#092554',
      title: 'ON-TIME DELIVERY',
      desc: 'Because Time Matters',
    },
    {
      icon: Headphones,
      iconColor: '#092554',
      title: '24/7 CUSTOMER SUPPORT',
      desc: "We're Here, Anytime",
    },
    {
      icon: Leaf,
      iconColor: '#10B981', // Subtle green tone for sustainable leaf icon
      title: 'SUSTAINABLE LOGISTICS',
      desc: 'Moving Forward Responsibly',
    },
  ];

  return (
    <div
      className="trust-bar-container"
      style={{
        margin: '25px 0 0 0',
        padding: '18px 25px',
        border: '1px solid #D9E0E8',
        borderRadius: '14px',
        background: '#FFFFFF',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        alignItems: 'center',
        boxShadow: '0 4px 16px rgba(9, 37, 84, 0.04)',
        ...style
      }}
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        const isLast = index === items.length - 1;
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              borderRight: isLast ? 'none' : '1px solid #D9E0E8',
              paddingRight: isLast ? '0' : '16px',
              paddingLeft: index === 0 ? '0' : '16px'
            }}
          >
            <div style={{ color: item.iconColor, flexShrink: 0 }}>
              <Icon size={26} strokeWidth={1.75} />
            </div>

            <div>
              <div
                style={{
                  fontSize: '13.5px',
                  fontWeight: '700',
                  color: '#092554',
                  letterSpacing: '0.03em',
                  fontFamily: 'var(--font-body)'
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: '11.5px',
                  color: '#53647A',
                  marginTop: '1px',
                  fontWeight: '400'
                }}
              >
                {item.desc}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
