import React from 'react';
import { Check } from 'lucide-react';

export const CorporateShipmentDetails = ({ shipment }) => {
  const mode = (shipment?.mode || shipment?.type || '').toLowerCase();
  const isAir = mode.includes('air') || mode.includes('plane') || mode.includes('flight');
  const isInland = mode.includes('inland') || mode.includes('road') || mode.includes('truck') || mode.includes('rail');

  const originCity = shipment?.origin?.split(',')[0] || 'Chennai';
  const destCity = shipment?.destination?.split(',')[0] || 'Rotterdam';
  const activeStep =
    shipment?.activeStep ||
    (shipment?.status === 'Booking Confirmed'
      ? 1
      : shipment?.status === 'Delivered'
      ? 4
      : 3);

  const milestones = [
    {
      id: 1,
      title: activeStep === 1 ? 'Booking confirmed · current' : 'Booking confirmed',
      details: `${originCity} · 07 Nov 2026, 14:10 UTC`,
      status: activeStep === 1 ? 'current' : 'completed',
    },
    {
      id: 2,
      title: isAir
        ? 'Cargo gate-in at airport terminal'
        : isInland
        ? 'Gate-in at inland freight depot'
        : 'Gate-in at origin terminal',
      details:
        activeStep === 1
          ? 'Pending dispatch gate-in'
          : 'Customs export cleared · 08 Nov 2026, 10:15 UTC',
      status: activeStep === 1 ? 'upcoming' : 'completed',
    },
    {
      id: 3,
      title: isAir
        ? 'Loaded on aircraft'
        : isInland
        ? 'Loaded on truck'
        : 'Loaded on vessel',
      details:
        activeStep === 1
          ? 'Scheduled transport loading'
          : `Departed ${originCity} · 10 Nov 2026, 16:20 UTC`,
      status: activeStep === 1 ? 'upcoming' : 'completed',
    },
    {
      id: 4,
      title: activeStep === 3 ? 'In transit · current' : 'In transit',
      details:
        activeStep === 1
          ? 'Pending route departure'
          : activeStep === 4
          ? 'Route transit completed successfully'
          : `Position updated 14 Nov 2026, 08:30 UTC · Speed ${shipment?.speedKnots || '18.4'} kts · ${shipment?.currentLocationName || 'Corridor Transit'}`,
      status:
        activeStep === 1 ? 'upcoming' : activeStep === 3 ? 'current' : 'completed',
    },
    {
      id: 5,
      title: isAir
        ? 'Arrival at destination airport'
        : isInland
        ? 'Arrival at destination freight hub'
        : 'Arrival at destination port',
      details:
        activeStep === 4
          ? `${destCity} · Safely arrived & discharged`
          : `${destCity} · Expected ${shipment?.estimatedDelivery || '18 Nov 2026'}`,
      status: activeStep === 4 ? 'completed' : 'upcoming',
    },
    {
      id: 6,
      title: 'Import customs clearance',
      details:
        activeStep === 4
          ? 'Customs EDI import duty cleared & released'
          : 'Pending arrival & manifest submission',
      status: activeStep === 4 ? 'completed' : 'upcoming',
    },
    {
      id: 7,
      title:
        activeStep === 4
          ? 'Delivered to consignee · completed'
          : 'Delivered to consignee',
      details:
        activeStep === 4
          ? 'Consignee received & signed off delivery · Proof of Delivery (POD) archived'
          : 'Proof of delivery available on completion',
      status: activeStep === 4 ? 'current' : 'upcoming',
    },
  ];

  return (
    <div
      className="corporate-shipment-updates-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        padding: '24px 28px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      {/* Scoped Executive Keyframe Animations — High-End Corporate Telemetry */}
      <style>{`
        @keyframes kpl-corporate-sonar-1 {
          0% {
            transform: scale(0.92);
            opacity: 0.85;
          }
          50% {
            opacity: 0.35;
          }
          100% {
            transform: scale(1.85);
            opacity: 0;
          }
        }
        @keyframes kpl-corporate-sonar-2 {
          0% {
            transform: scale(0.92);
            opacity: 0.65;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
        @keyframes kpl-dot-heartbeat {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 4px rgba(234, 88, 12, 0.4);
          }
          50% {
            transform: scale(1.25);
            box-shadow: 0 0 10px rgba(255, 122, 0, 0.85);
          }
        }
        @keyframes kpl-live-pill-ping {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          70%, 100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
        @keyframes kpl-segment-laser-flow {
          0% {
            top: -24px;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            top: calc(100% + 12px);
            opacity: 0;
          }
        }
      `}</style>

      {/* Card Header matching exact corporate reference style */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '22px',
        }}
      >
        <h2
          style={{
            fontSize: '19px',
            fontWeight: '800',
            color: '#0A1E3F',
            margin: 0,
            letterSpacing: '-0.02em',
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          Shipment Updates
        </h2>
      </div>

      {/* Milestone Updates Timeline (Matching Image 2 Reference with Corporate Animations) */}
      <div
        className="milestone-timeline-container"
        style={{
          position: 'relative',
          paddingLeft: '6px',
        }}
      >
        {milestones.map((milestone, idx) => {
          const isCompleted = milestone.status === 'completed';
          const isCurrent = milestone.status === 'current';
          const isUpcoming = milestone.status === 'upcoming';
          const isLast = idx === milestones.length - 1;

          return (
            <div
              key={milestone.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                position: 'relative',
                paddingBottom: isLast ? '0' : '22px',
                transition: 'transform 0.18s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              {/* Vertical Connector Line */}
              {!isLast && (
                <div
                  style={{
                    position: 'absolute',
                    left: '11px',
                    top: '24px',
                    bottom: '0',
                    width: '2px',
                    background:
                      isCompleted
                        ? 'linear-gradient(180deg, #EA580C 0%, #FF8C00 50%, #EA580C 100%)'
                        : 'transparent',
                    borderLeft: !isCompleted ? '2px dashed #CBD5E1' : 'none',
                    zIndex: 0,
                    overflow: 'hidden',
                  }}
                >
                  {/* Executive Optical Telemetry Stream Photon */}
                  {isCompleted && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-24px',
                        left: '-1px',
                        width: '4px',
                        height: '24px',
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 60%, #FF9E40 100%)',
                        boxShadow: '0 0 8px #FF7A00, 0 0 14px rgba(234, 88, 12, 0.9)',
                        borderRadius: '2px',
                        animation: `kpl-segment-laser-flow 3.4s cubic-bezier(0.4, 0, 0.2, 1) infinite ${idx * 0.9}s`,
                      }}
                    />
                  )}
                </div>
              )}

              {/* Milestone Node Icon matching Image 2 */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  flexShrink: 0,
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {isCompleted && (
                  /* Solid Orange Circle with White Check */
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: '#EA580C',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 6px rgba(234, 88, 12, 0.35)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <Check size={12} color="#FFFFFF" strokeWidth={3.5} />
                  </div>
                )}

                {isCurrent && (
                  /* Active Corporate Telemetry Beacon matching Reference Image 3 (ZERO black inside) */
                  <div
                    style={{
                      position: 'relative',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Concentric Soft Radar Wave 1 */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: '-4px',
                        borderRadius: '50%',
                        border: '2px solid rgba(234, 88, 12, 0.75)',
                        animation: 'kpl-corporate-sonar-1 2.8s cubic-bezier(0.2, 0.6, 0.35, 1) infinite',
                        pointerEvents: 'none',
                      }}
                    />
                    {/* Concentric Soft Radar Wave 2 */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: '-4px',
                        borderRadius: '50%',
                        border: '2px solid rgba(255, 140, 0, 0.45)',
                        animation: 'kpl-corporate-sonar-2 2.8s cubic-bezier(0.2, 0.6, 0.35, 1) infinite 1.4s',
                        pointerEvents: 'none',
                      }}
                    />
                    {/* Node Core: Clean pure White ring with Vibrant Orange Glowing Center (NO black inside!) */}
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        border: '2.5px solid #EA580C',
                        boxSizing: 'border-box',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 0 3px rgba(234, 88, 12, 0.2), 0 3px 10px rgba(234, 88, 12, 0.35)',
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      <div
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: '#EA580C',
                          animation: 'kpl-dot-heartbeat 2.4s ease-in-out infinite',
                        }}
                      />
                    </div>
                  </div>
                )}

                {isUpcoming && (
                  /* Hollow Slate Ring */
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #94A3B8',
                      boxSizing: 'border-box',
                    }}
                  />
                )}
              </div>

              {/* Milestone Details */}
              <div style={{ flex: 1, paddingTop: '1px' }}>
                {/* Title */}
                <div
                  style={{
                    fontSize: '15px',
                    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontWeight: isCurrent ? '800' : isCompleted ? '700' : '600',
                    color: isCurrent ? '#EA580C' : isCompleted ? '#0F172A' : '#334155',
                    lineHeight: '1.3',
                    letterSpacing: '-0.01em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span>{milestone.title}</span>
                  {isCurrent && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '11px',
                        fontWeight: '800',
                        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        backgroundColor: '#FFF7ED',
                        border: '1px solid #FED7AA',
                        color: '#EA580C',
                        padding: '2px 9px',
                        borderRadius: '12px',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        boxShadow: '0 1px 4px rgba(234, 88, 12, 0.12)',
                      }}
                    >
                      <span
                        style={{
                          position: 'relative',
                          width: '8px',
                          height: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            inset: '-2px',
                            borderRadius: '50%',
                            backgroundColor: '#EA580C',
                            animation: 'kpl-live-pill-ping 2.2s cubic-bezier(0, 0, 0.2, 1) infinite',
                          }}
                        />
                        <span
                          style={{
                            position: 'relative',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#EA580C',
                          }}
                        />
                      </span>
                      Live
                    </span>
                  )}
                </div>

                {/* Subtitle / Timestamp */}
                <div
                  style={{
                    fontSize: '13px',
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    color: '#64748B',
                    lineHeight: '1.45',
                    marginTop: '3px',
                    fontWeight: '400',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {milestone.details}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
