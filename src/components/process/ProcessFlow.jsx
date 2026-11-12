import React from 'react';
import { ProcessStep } from './ProcessStep';
import { ArrowRight } from 'lucide-react';

export const ProcessFlow = ({ steps, onStepClick, loading = false }) => {
  return (
    <div
      className="process-flow-container"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        marginTop: '22px',
        marginBottom: '26px',
        gap: '8px',
        flexWrap: 'wrap',
      }}
    >
      {(loading ? Array.from({ length: 6 }) : steps).map((step, index) => {
        const isLast = index === (loading ? 5 : steps.length - 1);

        return (
          <React.Fragment key={step ? step.id : index}>
            <ProcessStep
              step={step}
              loading={loading}
              index={index}
              onClick={() => onStepClick && onStepClick(step)}
            />

            {/* Radiant Orange Arrow between Steps */}
            {!isLast && (
              <div
                className="process-step-arrow"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF6F00',
                  paddingTop: '26px',
                  flexShrink: 0,
                }}
              >
                <ArrowRight size={20} strokeWidth={2.4} color="#FF6F00" />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
