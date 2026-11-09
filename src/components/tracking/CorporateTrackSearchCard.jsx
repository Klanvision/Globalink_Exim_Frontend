import React, { useState, useEffect } from 'react';
import {
  Search,
  ChevronDown,
  ChevronRight,
  Check,
  Ship,
  Plane,
  Truck,
  Loader2,
  FileCheck,
  PackageCheck,
  MapPin,
  Flag,
  Calendar,
  Box,
  Info,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

export const CorporateTrackSearchCard = ({
  shipment,
  onSearch,
  onSelectExample,
  isLoading,
  hasSearched,
  onResetSearch,
}) => {
  const [inputValue, setInputValue] = useState(shipment?.trackingId || '');
  const [filterType, setFilterType] = useState('All');
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    if (shipment?.trackingId) {
      setInputValue(shipment.trackingId);
      setInputError(false);
    } else if (!hasSearched) {
      setInputValue('');
    }
  }, [shipment, hasSearched]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const clean = inputValue.trim();
    if (clean) {
      setInputError(false);
      onSearch(clean, filterType);
    } else {
      // If no ID is entered, do not show cargo details, documents, or updates.
      // Retain or reset to the exact initial open-page view.
      setInputError(true);
      if (onResetSearch) {
        onResetSearch();
      }
    }
  };

  const handleExampleClick = (exampleCode) => {
    setInputError(false);
    setInputValue(exampleCode);
    if (onSelectExample) {
      onSelectExample(exampleCode);
    } else {
      onSearch(exampleCode, filterType);
    }
  };

  const currentStep = shipment?.activeStep || 3;

  const getModeInfo = (modeStr) => {
    const m = (modeStr || '').toLowerCase();
    if (m.includes('air') || m.includes('plane') || m.includes('flight')) {
      return {
        icon: Plane,
        label: 'Air Freight',
        sublabel: 'Flight En Route',
        type: 'air',
      };
    }
    if (m.includes('inland') || m.includes('road') || m.includes('truck') || m.includes('rail')) {
      return {
        icon: Truck,
        label: 'Inland Freight',
        sublabel: 'Truck in Transit',
        type: 'inland',
      };
    }
    return {
      icon: Ship,
      label: 'Ocean Freight',
      sublabel: 'Vessel En Route',
      type: 'ocean',
    };
  };

  const modeInfo = getModeInfo(shipment?.mode || shipment?.type);

  const stepsConfig = [
    {
      id: 1,
      label: 'Booking Confirmed',
      sublabel: 'Order Verified',
      icon: FileCheck,
    },
    {
      id: 2,
      label: 'Picked Up',
      sublabel: 'Origin Dispatched',
      icon: PackageCheck,
    },
    {
      id: 3,
      label: 'In Transit',
      sublabel: modeInfo.sublabel,
      icon: modeInfo.icon,
    },
    {
      id: 4,
      label: 'Delivered',
      sublabel: 'Port of Discharge',
      icon: MapPin,
    },
  ];

  return (
    <div
      className="corporate-track-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '14px',
        padding: '24px 28px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
        width: '100%',
        marginBottom: '20px',
        marginTop: '-40px',
      }}
    >
      {/* Card Header with Orange Vertical Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '16px',
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
          Track your cargo
        </h2>
      </div>

      {/* Search Input Bar Row */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
        }}
      >
        {/* Main Search Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flex: '1 1 auto',
            height: '46px',
            backgroundColor: '#FFFFFF',
            border: inputError ? '1.5px solid #EA580C' : '1px solid #CBD5E1',
            borderRadius: '8px',
            padding: '0 14px',
            boxShadow: inputError ? '0 0 0 3px rgba(234, 88, 12, 0.15)' : 'none',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <Search size={18} color={inputError ? '#EA580C' : '#64748B'} style={{ flexShrink: 0 }} />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (inputError) setInputError(false);
            }}
            placeholder={
              inputError
                ? 'Please enter tracking number / Bill of Lading / AWB'
                : 'Enter tracking number / Bill of Lading / AWB'
            }
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: '14px',
              color: '#0F172A',
              backgroundColor: 'transparent',
              fontFamily: 'var(--font-body)',
            }}
          />
        </div>

        {/* Filter Type Dropdown */}
        <div
          style={{
            position: 'relative',
            flex: '0 0 120px',
          }}
        >
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            style={{
              width: '100%',
              height: '46px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #CBD5E1',
              borderRadius: '8px',
              padding: '0 28px 0 14px',
              fontSize: '13.5px',
              fontWeight: '500',
              color: '#1E293B',
              outline: 'none',
              cursor: 'pointer',
              appearance: 'none',
              WebkitAppearance: 'none',
            }}
          >
            <option value="All">All</option>
            <option value="Container">Container No</option>
            <option value="BOL">Bill of Lading</option>
            <option value="AWB">Air Waybill</option>
            <option value="Booking">Booking Ref</option>
          </select>
          <ChevronDown
            size={14}
            color="#64748B"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Primary Track Button */}
        <button
          type="submit"
          disabled={isLoading}
          style={{
            height: '46px',
            padding: '0 24px',
            backgroundColor: '#F97316',
            backgroundImage: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: '700',
            borderRadius: '8px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            cursor: isLoading ? 'wait' : 'pointer',
            boxShadow: '0 2px 10px rgba(234, 88, 12, 0.28)',
            flexShrink: 0,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(234, 88, 12, 0.38)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(234, 88, 12, 0.28)';
            }
          }}
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Tracking...</span>
            </>
          ) : (
            <>
              <span>Track Shipment</span>
              <ChevronRight size={16} strokeWidth={2.5} />
            </>
          )}
        </button>
      </form>

      {/* Test Sample Quick-Access Telemetry Pills (Ocean, Air, Inland) */}
      <div
        style={{
          marginTop: '12px',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          fontSize: '12.5px',
        }}
      >
        <span style={{ color: '#64748B', fontWeight: '600', marginRight: '4px' }}>
          Test Mode IDs:
        </span>

        {/* 1. Ocean Freight Test Pill */}
        <button
          type="button"
          onClick={() => handleExampleClick('KPL-EXP-2026-008421')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            backgroundColor: modeInfo.type === 'ocean' ? '#FFF7ED' : '#FFFFFF',
            border: modeInfo.type === 'ocean' ? '1.5px solid #EA580C' : '1px solid #CBD5E1',
            borderRadius: '6px',
            color: modeInfo.type === 'ocean' ? '#C2410C' : '#334155',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '12px',
            transition: 'all 0.15s ease',
            boxShadow: modeInfo.type === 'ocean' ? '0 1px 3px rgba(234, 88, 12, 0.15)' : 'none',
          }}
          title="Click to load Ocean Freight test data"
        >
          <Ship size={13} color="#EA580C" strokeWidth={2.4} />
          <span>Ocean:</span>
          <span style={{ fontFamily: 'monospace', fontWeight: '700' }}>KPL-EXP-2026-008421</span>
        </button>

        {/* 2. Air Freight Test Pill */}
        <button
          type="button"
          onClick={() => handleExampleClick('KPL-AIR-2026-119402')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            backgroundColor: modeInfo.type === 'air' ? '#FFF7ED' : '#FFFFFF',
            border: modeInfo.type === 'air' ? '1.5px solid #EA580C' : '1px solid #CBD5E1',
            borderRadius: '6px',
            color: modeInfo.type === 'air' ? '#C2410C' : '#334155',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '12px',
            transition: 'all 0.15s ease',
            boxShadow: modeInfo.type === 'air' ? '0 1px 3px rgba(234, 88, 12, 0.15)' : 'none',
          }}
          title="Click to load Air Freight test data"
        >
          <Plane size={13} color="#EA580C" strokeWidth={2.4} />
          <span>Air:</span>
          <span style={{ fontFamily: 'monospace', fontWeight: '700' }}>KPL-AIR-2026-119402</span>
        </button>

        {/* 3. Inland Freight Test Pill */}
        <button
          type="button"
          onClick={() => handleExampleClick('KPL-TRK-2026-552910')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            backgroundColor: modeInfo.type === 'inland' ? '#FFF7ED' : '#FFFFFF',
            border: modeInfo.type === 'inland' ? '1.5px solid #EA580C' : '1px solid #CBD5E1',
            borderRadius: '6px',
            color: modeInfo.type === 'inland' ? '#C2410C' : '#334155',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '12px',
            transition: 'all 0.15s ease',
            boxShadow: modeInfo.type === 'inland' ? '0 1px 3px rgba(234, 88, 12, 0.15)' : 'none',
          }}
          title="Click to load Inland Freight test data"
        >
          <Truck size={13} color="#EA580C" strokeWidth={2.4} />
          <span>Inland:</span>
          <span style={{ fontFamily: 'monospace', fontWeight: '700' }}>KPL-TRK-2026-552910</span>
        </button>

        {/* Reset / Clear Button */}
        {hasSearched && (
          <button
            type="button"
            onClick={() => {
              setInputValue('');
              if (onResetSearch) onResetSearch();
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '4px 10px',
              backgroundColor: '#F1F5F9',
              border: '1px solid #CBD5E1',
              borderRadius: '6px',
              color: '#475569',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '12px',
              transition: 'all 0.15s ease',
              marginLeft: 'auto',
            }}
            title="Reset search to overview"
          >
            <RotateCcw size={12} strokeWidth={2.4} />
            <span>Reset View</span>
          </button>
        )}
      </div>

      {/* When hasSearched is true: Render 4-Stage Stepper & Live Telemetry Monitor */}
      {hasSearched && shipment && (
        <div style={{ animation: 'kpl-fade-slide-up 0.35s cubic-bezier(0.16, 1, 0.3, 1)' }}>
          {/* 4-Stage Horizontal Stepper with Corporate Precision & Fluid Animations */}
          <div
            className="tracking-stepper-container"
            style={{
              position: 'relative',
              marginTop: '28px',
              padding: '0 8px',
            }}
          >
            {/* Scoped Corporate Keyframes — Executive Fiber-Optic Laser Pulse */}
            <style>{`
              @keyframes kpl-fade-slide-up {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              @keyframes kpl-laser-pulse {
            0% {
              left: -40px;
              opacity: 0;
            }
            15% {
              opacity: 1;
            }
            85% {
              opacity: 1;
            }
            100% {
              left: calc(100% - 20px);
              opacity: 0;
            }
          }
          @keyframes kpl-line-radiance {
            0%, 100% {
              box-shadow: 0 0 8px rgba(234, 88, 12, 0.4), 0 0 16px rgba(234, 88, 12, 0.2);
            }
            50% {
              box-shadow: 0 0 14px rgba(234, 88, 12, 0.65), 0 0 24px rgba(255, 122, 0, 0.35);
            }
          }
          @keyframes kpl-tip-flare {
            0%, 100% {
              transform: translateY(-50%) scale(1);
              box-shadow: 0 0 6px #FFFFFF, 0 0 12px #EA580C;
            }
            50% {
              transform: translateY(-50%) scale(1.3);
              box-shadow: 0 0 10px #FFFFFF, 0 0 18px #FF7A00;
            }
          }
          @keyframes kpl-sonar-orange-1 {
            0% {
              transform: scale(0.94);
              opacity: 0.85;
            }
            50% {
              opacity: 0.35;
            }
            100% {
              transform: scale(1.65);
              opacity: 0;
            }
          }
          @keyframes kpl-sonar-orange-2 {
            0% {
              transform: scale(0.94);
              opacity: 0.65;
            }
            50% {
              opacity: 0.2;
            }
            100% {
              transform: scale(1.9);
              opacity: 0;
            }
          }
          @keyframes kpl-vessel-float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-2px) rotate(-1.2deg);
            }
            75% {
              transform: translateY(1.2px) rotate(0.8deg);
            }
          }
          @keyframes kpl-plane-flight {
            0%, 100% {
              transform: translateY(0px) rotate(-3deg);
            }
            50% {
              transform: translateY(-2.5px) rotate(3deg);
            }
          }
          @keyframes kpl-truck-cruise {
            0%, 100% {
              transform: translateX(0px) translateY(0px);
            }
            50% {
              transform: translateX(1.5px) translateY(-1px);
            }
          }
          @keyframes kpl-active-orange-pulse {
            0%, 100% {
              box-shadow: 0 0 0 4px rgba(234, 88, 12, 0.25), 0 0 14px rgba(234, 88, 12, 0.35);
            }
            50% {
              box-shadow: 0 0 0 6px rgba(249, 115, 22, 0.38), 0 0 22px rgba(234, 88, 12, 0.55);
            }
          }
          @keyframes kpl-pulse-dot {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.3);
              opacity: 0.55;
            }
          }
        `}</style>

        {/* Progress Connecting Line: Starts EXACTLY at center of "Booking Confirmed" (12.5%) and ends at center of "Delivered" (87.5%) */}
        <div
          style={{
            position: 'absolute',
            top: '23px',
            left: '12.5%',
            width: '75%',
            height: '4px',
            transform: 'translateY(-50%)',
            zIndex: 0,
          }}
        >
          {/* Base Inactive Track: Solid Executive Slate Track */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#E2E8F0',
              borderRadius: '999px',
            }}
          />

          {/* Active Progress Track: Solid Signature Corporate Orange with Ambient Radiance */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width:
                currentStep >= 4
                  ? '100%'
                  : currentStep === 3
                    ? '66.666%'
                    : currentStep === 2
                      ? '33.333%'
                      : '0%',
              borderRadius: '999px',
              backgroundColor: '#EA580C',
              animation: 'kpl-line-radiance 3.2s ease-in-out infinite',
              transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              overflow: 'hidden',
            }}
          >
            {/* Smooth Traveling Fiber-Optic Laser Pulse */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '-40px',
                width: '60px',
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 25%, #FFFFFF 70%, #FFE082 90%, transparent 100%)',
                boxShadow: '0 0 10px #FFFFFF, 0 0 16px #FF9100',
                borderRadius: '999px',
                animation: 'kpl-laser-pulse 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Precision Glowing Arrival Beacon directly at current active node connection */}
          <div
            style={{
              position: 'absolute',
              left:
                currentStep >= 4
                  ? '100%'
                  : currentStep === 3
                    ? '66.666%'
                    : currentStep === 2
                      ? '33.333%'
                      : '0%',
              top: '50%',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '2px solid #EA580C',
              animation: 'kpl-tip-flare 2.6s ease-in-out infinite',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* 4 Steps Columns: Equal 25% Grid ensures exact centering with 12.5%, 37.5%, 62.5%, 87.5% */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {stepsConfig.map((step, idx) => {
            const stepNum = idx + 1;
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;
            const isPending = stepNum > currentStep;
            const StepIcon = step.icon;

            return (
              <div
                key={step.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  padding: '0 6px',
                  cursor: 'default',
                }}
              >
                {/* Step Circle Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '46px',
                    height: '46px',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Radar Sonar Ping Waves for Active Stage — Matches Orange & White Palette with Calm Breathing Rhythm */}
                  {isCurrent && (
                    <>
                      <div
                        style={{
                          position: 'absolute',
                          inset: '-5px',
                          borderRadius: '50%',
                          border: '2px solid rgba(234, 88, 12, 0.7)',
                          boxShadow: '0 0 10px rgba(255, 111, 0, 0.35)',
                          animation:
                            'kpl-sonar-orange-1 3.8s cubic-bezier(0.2, 0.6, 0.35, 1) infinite',
                          pointerEvents: 'none',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: '-5px',
                          borderRadius: '50%',
                          border: '2px solid rgba(255, 165, 0, 0.45)',
                          animation:
                            'kpl-sonar-orange-2 3.8s cubic-bezier(0.2, 0.6, 0.35, 1) infinite 1.9s',
                          pointerEvents: 'none',
                        }}
                      />
                    </>
                  )}

                  {/* Node Circle */}
                  <div
                    style={{
                      width: isCurrent ? '46px' : '42px',
                      height: isCurrent ? '46px' : '42px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 2,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      background: isCurrent
                        ? 'linear-gradient(135deg, #FF6F00 0%, #FF8C00 45%, #EA580C 100%)'
                        : isCompleted
                          ? 'linear-gradient(135deg, #FF781F 0%, #EA580C 100%)'
                          : '#FFFFFF',
                      border: isCurrent
                        ? '3px solid #FFFFFF'
                        : isCompleted
                          ? '2.5px solid #FFFFFF'
                          : '2px dashed #CBD5E1',
                      animation: isCurrent
                        ? 'kpl-active-orange-pulse 3.8s ease-in-out infinite'
                        : 'none',
                      boxShadow: isCurrent
                        ? '0 0 0 4px rgba(234, 88, 12, 0.3), 0 6px 18px rgba(234, 88, 12, 0.4)'
                        : isCompleted
                          ? '0 0 0 2.5px rgba(234, 88, 12, 0.22), 0 4px 12px rgba(234, 88, 12, 0.28)'
                          : '0 2px 6px rgba(15, 23, 42, 0.04)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    }}
                  >
                    {/* Icon Rendering */}
                    {isCurrent ? (
                      <div
                        style={{
                          animation:
                            modeInfo.type === 'air'
                              ? 'kpl-plane-flight 3.5s ease-in-out infinite'
                              : modeInfo.type === 'inland'
                              ? 'kpl-truck-cruise 2.4s ease-in-out infinite'
                              : 'kpl-vessel-float 5s ease-in-out infinite',
                          display: 'flex',
                          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
                        }}
                      >
                        <StepIcon size={21} color="#FFFFFF" strokeWidth={2.4} />
                      </div>
                    ) : isCompleted ? (
                      <StepIcon size={19} color="#FFFFFF" strokeWidth={2.4} />
                    ) : (
                      <StepIcon size={18} color="#94A3B8" strokeWidth={2} />
                    )}

                    {/* Small Completed Check Badge */}
                    {isCompleted && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '-2px',
                          right: '-2px',
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          backgroundColor: '#16A34A',
                          border: '1.5px solid #FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                        }}
                      >
                        <Check size={10} color="#FFFFFF" strokeWidth={3.5} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Step Primary Label */}
                <span
                  style={{
                    fontSize: '13.5px',
                    fontWeight: isCurrent ? '800' : isCompleted ? '700' : '600',
                    color: isCurrent ? '#EA580C' : isCompleted ? '#0F172A' : '#64748B',
                    letterSpacing: '-0.2px',
                    lineHeight: '1.25',
                    marginBottom: '3px',
                  }}
                >
                  {step.label}
                </span>

                {/* Step Sublabel / Status Indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {isCurrent ? (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '11px',
                        fontWeight: '700',
                        color: '#EA580C',
                        backgroundColor: '#FFF7ED',
                        border: '1px solid #FFEDD5',
                        borderRadius: '10px',
                        padding: '2px 9px',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        marginTop: '2px',
                        boxShadow: '0 1px 3px rgba(234, 88, 12, 0.08)',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#EA580C',
                          animation: 'kpl-pulse-dot 2.8s ease-in-out infinite',
                        }}
                      />
                      Live Status
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: '11.5px',
                        fontWeight: '500',
                        color: isCompleted ? '#64748B' : '#94A3B8',
                      }}
                    >
                      {step.sublabel}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Integrated Single-Line Shipment Details with Attractive Middle Divider Lines */}
      <div
        className="single-line-shipment-details-strip"
        style={{
          marginTop: '24px',
          padding: '12px 18px',
          backgroundColor: '#F8FAFC',
          borderRadius: '10px',
          border: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          boxShadow: 'inset 0 1px 2px rgba(15, 23, 42, 0.02)',
        }}
      >
        {/* 1. Origin */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '7px',
              backgroundColor: '#FFF7ED',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EA580C',
              flexShrink: 0,
            }}
          >
            <MapPin size={15} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{ fontSize: '10.5px', color: '#64748B', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Origin
            </div>
            <div style={{ fontSize: '13px', color: '#0F172A', fontWeight: '700', whiteSpace: 'nowrap' }}>
              {shipment?.origin || 'Chennai, India'}
            </div>
          </div>
        </div>

        {/* Middle Attractive Divider Line */}
        <div
          style={{
            width: '1px',
            height: '28px',
            background: 'linear-gradient(180deg, rgba(203, 213, 225, 0.2) 0%, rgba(203, 213, 225, 0.9) 30%, rgba(203, 213, 225, 0.9) 70%, rgba(203, 213, 225, 0.2) 100%)',
            flexShrink: 0,
            margin: '0 8px',
          }}
        />

        {/* 2. Destination */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '7px',
              backgroundColor: '#FFF7ED',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EA580C',
              flexShrink: 0,
            }}
          >
            <Flag size={15} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{ fontSize: '10.5px', color: '#64748B', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Destination
            </div>
            <div style={{ fontSize: '13px', color: '#0F172A', fontWeight: '700', whiteSpace: 'nowrap' }}>
              {shipment?.destination || 'Rotterdam, Netherlands'}
            </div>
          </div>
        </div>

        {/* Middle Attractive Divider Line */}
        <div
          style={{
            width: '1px',
            height: '28px',
            background: 'linear-gradient(180deg, rgba(203, 213, 225, 0.2) 0%, rgba(203, 213, 225, 0.9) 30%, rgba(203, 213, 225, 0.9) 70%, rgba(203, 213, 225, 0.2) 100%)',
            flexShrink: 0,
            margin: '0 8px',
          }}
        />

        {/* 3. Estimated Delivery */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '7px',
              backgroundColor: '#FFF7ED',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EA580C',
              flexShrink: 0,
            }}
          >
            <Calendar size={15} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{ fontSize: '10.5px', color: '#64748B', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Est. Delivery
            </div>
            <div style={{ fontSize: '13px', color: '#0F172A', fontWeight: '700', whiteSpace: 'nowrap' }}>
              {shipment?.estimatedDelivery || '18 Nov 2026'}
            </div>
          </div>
        </div>

        {/* Middle Attractive Divider Line */}
        <div
          style={{
            width: '1px',
            height: '28px',
            background: 'linear-gradient(180deg, rgba(203, 213, 225, 0.2) 0%, rgba(203, 213, 225, 0.9) 30%, rgba(203, 213, 225, 0.9) 70%, rgba(203, 213, 225, 0.2) 100%)',
            flexShrink: 0,
            margin: '0 8px',
          }}
        />

        {/* 4. Mode (Dynamic Icon) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '7px',
              backgroundColor: '#FFF7ED',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EA580C',
              flexShrink: 0,
            }}
          >
            <modeInfo.icon size={15} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{ fontSize: '10.5px', color: '#64748B', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Mode
            </div>
            <div style={{ fontSize: '13px', color: '#0F172A', fontWeight: '700', whiteSpace: 'nowrap' }}>
              {shipment?.mode || modeInfo.label}
            </div>
          </div>
        </div>

        {/* Middle Attractive Divider Line */}
        <div
          style={{
            width: '1px',
            height: '28px',
            background: 'linear-gradient(180deg, rgba(203, 213, 225, 0.2) 0%, rgba(203, 213, 225, 0.9) 30%, rgba(203, 213, 225, 0.9) 70%, rgba(203, 213, 225, 0.2) 100%)',
            flexShrink: 0,
            margin: '0 8px',
          }}
        />

        {/* 5. Container ID */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '7px',
              backgroundColor: '#FFF7ED',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EA580C',
              flexShrink: 0,
            }}
          >
            <Box size={15} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{ fontSize: '10.5px', color: '#64748B', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Container / Ref
            </div>
            <div style={{ fontSize: '13px', color: '#0F172A', fontWeight: '700', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
              {shipment?.containerId || 'KPLU 482019-6'}
            </div>
          </div>
        </div>

        {/* Middle Attractive Divider Line */}
        <div
          style={{
            width: '1px',
            height: '28px',
            background: 'linear-gradient(180deg, rgba(203, 213, 225, 0.2) 0%, rgba(203, 213, 225, 0.9) 30%, rgba(203, 213, 225, 0.9) 70%, rgba(203, 213, 225, 0.2) 100%)',
            flexShrink: 0,
            margin: '0 8px',
          }}
        />

        {/* 6. Status Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '7px',
              backgroundColor: '#FFF7ED',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EA580C',
              flexShrink: 0,
            }}
          >
            <Info size={15} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{ fontSize: '10.5px', color: '#64748B', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Status
            </div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '12px',
                fontWeight: '700',
                color: '#C2410C',
                backgroundColor: '#FFF7ED',
                border: '1px solid #FFEDD5',
                padding: '2px 8px',
                borderRadius: '6px',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#EA580C',
                }}
              />
              {shipment?.status || 'In Transit'}
            </span>
          </div>
        </div>
      </div>
        </div>
      )}
    </div>
  );
};

