import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  icon: Icon,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseClass = variant === 'icon' ? 'btn-icon' : `btn btn-${variant}`;
  return (
    <button
      type={type}
      className={`${baseClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};
