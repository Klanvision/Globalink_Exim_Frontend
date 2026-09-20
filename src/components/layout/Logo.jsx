import React from 'react';
import logoImg from '../../../Images/KPL_Logo2.png';

export const Logo = ({ lightText = false }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', cursor: 'pointer' }}>
      {/* Brand Icon Mark */}
      <img
        src={logoImg}
        alt="KPL Logo"
        style={{
          height: '56px',
          width: 'auto',
          objectFit: 'contain',
          filter: lightText ? 'brightness(0) invert(1)' : 'none'
        }}
      />
    </div>
  );
};
