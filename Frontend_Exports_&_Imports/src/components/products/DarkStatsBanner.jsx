import React from 'react';
import { Globe2, Users, Package, Award, BarChart3 } from 'lucide-react';

export const DarkStatsBanner = () => {
  const stats = [
    {
      icon: Globe2,
      number: '50+',
      label: 'Countries Served',
    },
    {
      icon: Users,
      number: '1,000+',
      label: 'Happy Clients',
    },
    {
      icon: Package,
      number: '5,000+',
      label: 'Products Delivered',
    },
    {
      icon: Award,
      number: '99%',
      label: 'Client Satisfaction',
    },
    {
      icon: BarChart3,
      number: '10+',
      label: 'Years of Excellence',
    },
  ];

  return (
    <div
      style={{
        margin: '20px 0 0 0',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '110px',
        backgroundImage: `linear-gradient(90deg, 
          #071F49 0%, 
          rgba(7, 31, 73, 0.92) 40%, 
          rgba(7, 31, 73, 0.45) 75%, 
          rgba(7, 31, 73, 0.15) 100%), 
          url('/hero-logistics.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        alignItems: 'center',
        padding: '20px 16px',
        boxShadow: '0 6px 20px rgba(7, 31, 73, 0.4)',
        border: '1px solid rgba(232, 165, 42, 0.25)'
      }}
      className="dark-stats-grid"
    >
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
              gap: '12px',
              borderRight: isLast ? 'none' : '1px solid rgba(232, 165, 42, 0.25)',
              padding: '0 10px',
              zIndex: 2
            }}
          >
            {/* Gold Icon */}
            <div style={{ color: '#E8A52A', flexShrink: 0 }}>
              <Icon size={32} strokeWidth={1.5} />
            </div>

            {/* Stat Number & Label */}
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span
                style={{
                  fontSize: '34px',
                  fontWeight: '800',
                  color: '#E8A52A',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.5px'
                }}
              >
                {item.number}
              </span>
              <span
                style={{
                  fontSize: '13.5px',
                  fontWeight: '500',
                  color: '#FFFFFF',
                  marginTop: '2px',
                  fontFamily: 'var(--font-body)'
                }}
              >
                {item.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
