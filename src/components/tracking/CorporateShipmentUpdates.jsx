import React from 'react';
import { Check, Headphones, ChevronRight } from 'lucide-react';

export const CorporateShipmentUpdates = ({ updates, onContactSupport }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%',
      }}
    >
      {/* 1. Shipment Updates Card */}
      <div
        className="corporate-shipment-updates-card"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          padding: '22px 24px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
        }}
      >
        {/* Header with Orange Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '18px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '18px',
              backgroundColor: '#EA580C',
              borderRadius: '2px',
            }}
          />
          <h2
            style={{
              fontSize: '17px',
              fontWeight: '700',
              color: '#0F172A',
              margin: 0,
              letterSpacing: '-0.2px',
            }}
          >
            Shipment Updates
          </h2>
        </div>

        {/* Vertical Audit Timeline */}
        <div style={{ position: 'relative', paddingLeft: '8px' }}>
          {updates &&
            updates.map((item, index) => {
              const isLast = index === updates.length - 1;
              const isCurrent = item.isCurrent || index === 0;

              return (
                <div
                  key={item.id || index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    position: 'relative',
                    paddingBottom: isLast ? '0' : '20px',
                  }}
                >
                  {/* Vertical Connector Line */}
                  {!isLast && (
                    <div
                      style={{
                        position: 'absolute',
                        left: '9px',
                        top: '20px',
                        bottom: '0',
                        width: '2px',
                        backgroundColor: '#E2E8F0',
                        zIndex: 0,
                      }}
                    />
                  )}

                  {/* Indicator Dot / Circle */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      marginTop: '2px',
                      flexShrink: 0,
                    }}
                  >
                    {isCurrent ? (
                      /* Active Orange Pulse Dot */
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: '#EA580C',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 0 0 4px rgba(234, 88, 12, 0.18)',
                        }}
                      >
                        <div
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: '#FFFFFF',
                          }}
                        />
                      </div>
                    ) : (
                      /* Navy Check Circle */
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: '#0A1E3F',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Check size={12} color="#FFFFFF" strokeWidth={3} />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        color: '#0F172A',
                        lineHeight: '1.2',
                        marginBottom: '2px',
                      }}
                    >
                      {item.status}
                    </div>
                    <div
                      style={{
                        fontSize: '12.5px',
                        color: '#475569',
                        lineHeight: '1.3',
                        marginBottom: '2px',
                      }}
                    >
                      {item.description}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: '#94A3B8',
                        fontWeight: '500',
                      }}
                    >
                      {item.timestamp}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* 2. Need Assistance Card */}
      <div
        className="need-assistance-card"
        style={{
          backgroundColor: '#FFF5EA',
          border: '1px solid #FED7AA',
          borderRadius: '14px',
          padding: '16px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          boxShadow: '0 2px 10px rgba(234, 88, 12, 0.05)',
        }}
      >
        {/* Support Avatar Circle */}
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: '#EA580C',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            flexShrink: 0,
            boxShadow: '0 4px 10px rgba(234, 88, 12, 0.25)',
          }}
        >
          <Headphones size={22} strokeWidth={2.2} />
        </div>

        {/* Content & Action */}
        <div style={{ flex: 1 }}>
          <h4
            style={{
              fontSize: '14.5px',
              fontWeight: '700',
              color: '#0F172A',
              margin: '0 0 2px 0',
            }}
          >
            Need assistance?
          </h4>
          <p
            style={{
              fontSize: '12.5px',
              color: '#475569',
              margin: '0 0 8px 0',
            }}
          >
            Our support team is here to help.
          </p>
          <button
            type="button"
            onClick={onContactSupport}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              backgroundColor: '#EA580C',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 14px',
              fontSize: '12.5px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(234, 88, 12, 0.25)',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#C2410C';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#EA580C';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Contact Support</span>
            <ChevronRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

