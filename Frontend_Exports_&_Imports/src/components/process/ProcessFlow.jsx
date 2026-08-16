import React from 'react';
import { ProcessStep } from './ProcessStep';
import { ArrowRight } from 'lucide-react';

export const ProcessFlow = ({ steps, onStepClick }) => {
  return (
    <div
      className="process-flow-container"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        marginTop: '28px',
        marginBottom: '32px',
        gap: '6px',
      }}
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={step.id}>
            <ProcessStep
              step={step}
              onClick={() => onStepClick && onStepClick(step)}
            />

            {/* Gold Arrow between Steps */}
            {!isLast && (
              <div
                className="process-step-arrow"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E8A52A',
                  paddingTop: '32px',
                  flexShrink: 0,
                }}
              >
                <ArrowRight size={26} strokeWidth={2.4} color="#E8A52A" />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
