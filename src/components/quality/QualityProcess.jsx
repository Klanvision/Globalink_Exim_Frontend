import React from 'react';
import { QualityProcessItem } from './QualityProcessItem';

export const QualityProcess = ({ steps, onItemClick, loading = false }) => {
  return (
    <div
      className="quality-process-grid"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        marginTop: '22px',
        marginBottom: '26px',
        gap: '24px',
        flexWrap: 'wrap',
      }}
    >
      {(loading ? Array.from({ length: 5 }) : steps).map((step, index) => (
        <QualityProcessItem
          key={step ? step.id : index}
          step={step}
          loading={loading}
          index={index}
          onClick={() => onItemClick && onItemClick(step)}
        />
      ))}
    </div>
  );
};
