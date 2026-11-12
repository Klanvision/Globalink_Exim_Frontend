import React from 'react';
import { ServiceCard } from './ServiceCard';

export const ServiceGrid = ({ services, onCardClick }) => {
  return (
    <div
      className="global-services-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '16px',
        width: '100%',
        marginTop: '22px',
        marginBottom: '22px',
      }}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
          onClick={() => onCardClick && onCardClick(service)}
        />
      ))}
    </div>
  );
};
