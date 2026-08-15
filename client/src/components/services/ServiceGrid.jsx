import React from 'react';
import { ServiceCard } from './ServiceCard';

export const ServiceGrid = ({ services, onCardClick }) => {
  return (
    <div
      className="global-services-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '14px',
        width: '100%',
        marginTop: '24px',
        marginBottom: '24px',
      }}
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onClick={() => onCardClick && onCardClick(service)}
        />
      ))}
    </div>
  );
};
