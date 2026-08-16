import React from 'react';

export const Badge = ({ children, variant = 'info', icon: Icon }) => {
  return (
    <span className={`badge badge-${variant}`}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
};
