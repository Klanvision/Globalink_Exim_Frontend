import React from 'react';
import { CustomsServiceItem } from './CustomsServiceItem';

export const CustomsServiceGrid = ({ services, onServiceClick, loading = false }) => {
  return (
    <div
      className="customs-services-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
        gap: '16px',
        width: '100%',
        margin: '20px auto 0 auto',
      }}
    >
      {(loading ? Array.from({ length: 6 }) : services).map((service, index) => (
        <CustomsServiceItem
          key={service ? service.id : index}
          service={service}
          loading={loading}
          index={index}
          onClick={onServiceClick}
        />
      ))}
    </div>
  );
};
