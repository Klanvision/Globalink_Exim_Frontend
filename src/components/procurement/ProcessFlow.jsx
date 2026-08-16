import React from 'react';
import { ProcessStep } from './ProcessStep';

export const ProcessFlow = ({ steps }) => {
  return (
    <div className="procurement-flow-container">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <React.Fragment key={step.id}>
            <ProcessStep step={step} isLast={isLast} />
            
            {!isLast && (
              <div
                className="procurement-connector"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  width: '28px',
                  height: '108px',
                  flexShrink: 0,
                }}
              >
                {/* Gold Dashed Line with Arrowhead */}
                <svg
                  width="28"
                  height="12"
                  viewBox="0 0 28 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ overflow: 'visible' }}
                >
                  <line
                    x1="0"
                    y1="6"
                    x2="20"
                    y2="6"
                    stroke="#E3A026"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                  />
                  <polygon
                    points="18,2 26,6 18,10"
                    fill="#E3A026"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
