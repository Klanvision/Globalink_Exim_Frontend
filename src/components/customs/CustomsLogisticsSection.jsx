import React from 'react';
import { CustomsStatsCard } from './CustomsStatsCard';

export const CustomsLogisticsSection = ({ stats }) => {
  return (
    <div
      className="customs-lower-section"
      style={{
        position: 'relative',
        width: '100%',
        marginTop: '22px',
        minHeight: '210px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '14px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(240, 246, 252, 0.6) 0%, rgba(250, 251, 253, 0.9) 100%)',
        border: '1px solid #E2EAF2',
        padding: '12px 18px',
      }}
    >
      {/* Left Logistics Visual Composition */}
      <div
        className="customs-image-wrapper"
        style={{
          flex: '1 1 46%',
          maxWidth: '460px',
          height: '190px',
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
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
            background: 'linear-gradient(90deg, transparent 65%, rgba(250, 251, 253, 0.6) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Right White Rounded Statistics Card */}
      <div
        className="customs-stats-wrapper"
        style={{
          flex: '1 1 50%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <CustomsStatsCard stats={stats} />
      </div>
    </div>
  );
};
