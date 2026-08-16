import React from 'react';
import { QualityProcessItem } from './QualityProcessItem';

export const QualityProcess = ({ steps, onItemClick }) => {
  return (
    <div
      className="quality-process-grid"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '28px',
        marginBottom: '32px',
        gap: '12px',
      }}
    >
      {steps.map((step) => (
        <QualityProcessItem
          key={step.id}
          step={step}
          onClick={() => onItemClick && onItemClick(step)}
        />
      ))}
    </div>
  );
};
