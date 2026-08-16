import React from 'react';

export const Card = ({ children, className = '', header, footer, ...props }) => {
  return (
    <div className={`glass-panel ${className}`} {...props}>
      {header && (
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
          {header}
        </div>
      )}
      <div style={{ padding: '1.5rem' }}>{children}</div>
      {footer && (
        <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid var(--border-color)' }}>
          {footer}
        </div>
      )}
    </div>
  );
};
