import React from 'react';
import { CustomsStatsCard } from './CustomsStatsCard';

export const CustomsLogisticsSection = ({ stats }) => {
  return (
    <div
      className="customs-lower-section"
      style={{
        position: 'relative',
        width: '100%',
        marginTop: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 50%, #FFF5EB 100%)',
        border: '1px solid rgba(255, 111, 0, 0.18)',
        padding: '14px 18px',
        boxSizing: 'border-box',
        gap: '18px',
        flexWrap: 'wrap',
      }}
    >
      {/* Left Logistics Visual Composition */}
      <div
        className="customs-image-wrapper"
        style={{
          flex: '1 1 360px',
          height: '170px',
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 14px rgba(15, 23, 42, 0.08)',
        }}
      >
        <img
          src="/global-trade-hero.jpg"
          alt="Customs and Trade Compliance Logistics"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
        {/* Soft edge blending overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, transparent 65%, rgba(255, 255, 255, 0.4) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Right White Rounded Statistics Card */}
      <div
        className="customs-stats-wrapper"
        style={{
          flex: '1 1 420px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CustomsStatsCard stats={stats} />
      </div>
    </div>
  );
};
