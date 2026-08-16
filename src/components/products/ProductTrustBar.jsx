import React from 'react';
import { Globe, ShieldCheck, Package, Truck, Headphones } from 'lucide-react';

export const ProductTrustBar = () => {
  const trustItems = [
    {
      icon: Globe,
      title: 'Global Sourcing',
      desc: 'Trusted suppliers worldwide',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assurance',
      desc: 'Strict quality checks & standards',
    },
    {
      icon: Package,
      title: 'Secure Packaging',
      desc: 'Safe & durable packaging',
    },
    {
      icon: Truck,
      title: 'On-time Delivery',
      desc: 'Reliable & timely shipments',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      desc: "We're here to help you anytime",
    },
  ];

  return (
    <div
      className="product-trust-container"
      style={{
        margin: '20px 0 0 0',
        padding: '18px 24px',
        borderRadius: '14px',
        background: '#FFFFFF',
        border: '1px solid #E0E3E8',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.07)',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        alignItems: 'center'
      }}
    >
      {trustItems.map((item, index) => {
        const Icon = item.icon;
        const isLast = index === trustItems.length - 1;
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              borderRight: isLast ? 'none' : '1px solid #E0E3E8',
              paddingRight: isLast ? '0' : '16px',
              paddingLeft: index === 0 ? '0' : '16px'
            }}
          >
            <div style={{ color: '#082653', flexShrink: 0 }}>
              <Icon size={26} strokeWidth={1.75} />
            </div>

            <div>
              <div
                style={{
                  fontSize: '13.5px',
                  fontWeight: '700',
                  color: '#082653',
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
