import React from 'react';
import { motion } from 'framer-motion';

export const ServicesBenefitsBanner = ({ benefits }) => {
  return (
    <section
      className="clay-benefits-banner"
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 50%, #FFF5EB 100%)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 111, 0, 0.22)',
        borderTop: '3px solid #FF6F00',
        boxShadow: '0 6px 24px rgba(255, 111, 0, 0.08)',
        margin: '26px 0 0 0',
        padding: '22px 18px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="services-benefits-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          alignItems: 'flex-start',
          gap: '16px',
        }}
      >
        {benefits.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === benefits.length - 1;

          return (
            <motion.div
              key={item.id}
              className="services-benefit-item"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '4px 12px',
                borderRight: isLast ? 'none' : '1px solid rgba(226, 232, 240, 0.8)',
                height: '100%',
              }}
            >
              {/* Radiant Orange Icon Orb */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
                  boxShadow: '0 3px 10px rgba(255, 111, 0, 0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  marginBottom: '10px',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} strokeWidth={2.2} color="#FFFFFF" />
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: '13.5px',
                  fontWeight: '700',
                  color: '#0F172A',
                  lineHeight: '1.25',
                  marginBottom: '4px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  fontSize: '11.5px',
                  lineHeight: '1.35',
                  color: '#64748B',
                  fontWeight: '400',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
