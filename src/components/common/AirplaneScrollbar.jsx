import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  PlaneTakeoff, 
  PlaneLanding, 
  Radio
} from 'lucide-react';
import './AirplaneScrollbar.css';

export function AirplaneScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isLanding, setIsLanding] = useState(false);
  const [flightPhase, setFlightPhase] = useState('TAKEOFF');
  const [altitudeText, setAltitudeText] = useState('FL380');
  const [showTooltip, setShowTooltip] = useState(false);

  const trackRef = useRef(null);
  const tooltipTimeoutRef = useRef(null);
  const isDraggingRef = useRef(false);

  // Sync scroll metrics
  const updateScrollProgress = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      setScrollProgress(0);
      return;
    }

    const currentScroll = window.scrollY;
    const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
    setScrollProgress(progress);

    // Flight phase calculation
    if (progress < 0.1) {
      setFlightPhase('TAKEOFF');
      setAltitudeText('CLIMB 8,000 FT');
      setIsLanding(false);
    } else if (progress < 0.75) {
      setFlightPhase('EN-ROUTE');
      const fl = Math.round(280 + (progress - 0.1) * 150);
      setAltitudeText(`CRUISE FL${fl}`);
      setIsLanding(false);
    } else if (progress < 0.94) {
      setFlightPhase('DESCENT');
      const alt = Math.round(15000 * (1 - (progress - 0.75) / 0.19));
      setAltitudeText(`DESCENT ${alt} FT`);
      setIsLanding(false);
    } else {
      setFlightPhase('TOUCHDOWN');
      setAltitudeText('RUNWAY 09L • 0 FT');
      setIsLanding(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, [updateScrollProgress]);

  // Flash telemetry tooltip during active scroll
  useEffect(() => {
    setShowTooltip(true);
    if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    tooltipTimeoutRef.current = setTimeout(() => {
      if (!isDraggingRef.current) {
        setShowTooltip(false);
      }
    }, 1500);

    return () => {
      if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    };
  }, [scrollProgress]);

  // Calculate scroll position from mouse Y coordinate (accounting for track inset)
  const scrollToClientY = useCallback((clientY) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const inset = 16;
    const usableHeight = Math.max(rect.height - inset * 2, 1);
    const offsetY = clientY - rect.top - inset;
    const ratio = Math.min(Math.max(offsetY / usableHeight, 0), 1);
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({
      top: ratio * totalHeight,
      behavior: 'auto'
    });
  }, []);

  const handleTrackClick = (e) => {
    scrollToClientY(e.clientY);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    isDraggingRef.current = true;
    document.body.classList.add('aviation-scrollbar-dragging');

    const handleMouseMove = (moveEvent) => {
      scrollToClientY(moveEvent.clientY);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      isDraggingRef.current = false;
      document.body.classList.remove('aviation-scrollbar-dragging');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      setShowTooltip(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const scrollToTop = (e) => {
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = (e) => {
    e.stopPropagation();
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth' 
    });
  };

  // Multiple radar checkpoint dots along international flight route
  const waypoints = [
    { pos: 0.16, label: 'Export Port Clearance' },
    { pos: 0.36, label: 'Air Freight Corridors' },
    { pos: 0.56, label: 'Trans-Pacific Flight' },
    { pos: 0.76, label: 'Customs & Inspection' },
    { pos: 0.92, label: 'Arrival Runway Approach' }
  ];

  const handleWaypointClick = (e, pos) => {
    e.stopPropagation();
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: pos * totalHeight,
      behavior: 'smooth'
    });
  };

  const percentDisplay = Math.round(scrollProgress * 100);

  return (
    <div 
      className={`airplane-scroll-hud-edge ${isHovered ? 'hud-active' : ''} ${isDragging ? 'is-dragging' : ''} ${isLanding ? 'hud-touchdown' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        if (!isDragging) setIsHovered(false);
      }}
      aria-label="Aviation Flight Path Scrollbar"
    >
      {/* Top Departure Node */}
      <button 
        type="button"
        className="flight-edge-node origin-node"
        onClick={scrollToTop}
        title="Origin Airport (Start / Top)"
      >
        <PlaneTakeoff size={11} className="node-ico" />
        <span className="node-beacon-ring" />
      </button>

      {/* Full-Height Flight Track Corridor */}
      <div 
        className="flight-edge-track" 
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onClick={handleTrackClick}
      >
        {/* Animated Flowing Centerline Dotted Corridor */}
        <div className="track-centerline" />

        {/* Dynamic Flight Progress Line */}
        <div 
          className="track-progress-fill"
          style={{ height: `calc(16px + ${scrollProgress} * (100% - 32px))` }}
        />

        {/* Route Waypoint Dots with Radiant Blinking & Sonar Wave Animations */}
        {waypoints.map((wp, idx) => {
          const crossed = scrollProgress >= wp.pos;
          const isNextTarget = !crossed && (idx === 0 || scrollProgress >= waypoints[idx - 1].pos);
          
          return (
            <div
              key={idx}
              className={`edge-waypoint ${crossed ? 'waypoint-crossed' : isNextTarget ? 'waypoint-targeting' : 'waypoint-dormant'}`}
              style={{ top: `calc(16px + ${wp.pos} * (100% - 32px))` }}
              onClick={(e) => handleWaypointClick(e, wp.pos)}
              title={wp.label}
            >
              {/* Multi-tier animated radar pulse rings */}
              <span className="waypoint-radar-ring outer" />
              <span className="waypoint-radar-ring inner" />
              
              {/* Core blinking jewel beacon */}
              <span className="waypoint-pip">
                <span className="waypoint-glow-sparkle" />
              </span>
            </div>
          );
        })}

        {/* Prominent Large Moving Airplane Thumb */}
        <div 
          className={`flight-airplane-thumb ${isLanding ? 'thumb-landing' : ''}`}
          style={{ top: `calc(16px + ${scrollProgress} * (100% - 32px))` }}
          onMouseDown={handleMouseDown}
        >
          {/* Contrail / Jet Exhaust Sparkles */}
          <div className="plane-exhaust-trail">
            <span className="exhaust-dot e1" />
            <span className="exhaust-dot e2" />
            <span className="exhaust-dot e3" />
          </div>

          {/* Large High-Detail 3D Vector Cargo Jet */}
          <div className="plane-svg-container">
            <svg 
              className="cargo-plane-svg" 
              viewBox="0 0 36 36" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="planeFuselage" x1="18" y1="2" x2="18" y2="34" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="40%" stopColor="#0369a1" />
                  <stop offset="70%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <linearGradient id="planeWing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <filter id="planeShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#0284c7" floodOpacity="0.4"/>
                </filter>
              </defs>

              {/* Contrail Wing Vapor */}
              <path d="M 4 18 L 1 26" stroke="rgba(56, 189, 248, 0.8)" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 32 18 L 35 26" stroke="rgba(56, 189, 248, 0.8)" strokeWidth="1.2" strokeLinecap="round" />

              {/* Main Wings */}
              <path 
                d="M18 12 L33 21 C34 21.5 33.5 22.8 32 22.8 L21.5 19.5 L18 31 L14.5 19.5 L4 22.8 C2.5 22.8 2 21.5 3 21 L18 12 Z" 
                fill="url(#planeWing)" 
                stroke="#ffffff" 
                strokeWidth="0.8"
              />

              {/* Turbines */}
              <ellipse cx="10.5" cy="18.5" rx="1.8" ry="3.2" fill="#0f172a" stroke="#ffffff" strokeWidth="0.5" />
              <ellipse cx="25.5" cy="18.5" rx="1.8" ry="3.2" fill="#0f172a" stroke="#ffffff" strokeWidth="0.5" />

              {/* Fuselage */}
              <path 
                d="M18 2 C20 2 21.2 7 21.2 16 C21.2 25 19.5 32 18 34 C16.5 32 14.8 25 14.8 16 C14.8 7 16 2 18 2 Z" 
                fill="url(#planeFuselage)" 
                stroke="#ffffff" 
                strokeWidth="1"
                filter="url(#planeShadow)"
              />

              {/* Cockpit */}
              <ellipse cx="18" cy="6" rx="1.4" ry="2.2" fill="#38bdf8" />

              {/* Tail Elevators */}
              <path d="M18 27 L25 32.5 C25.8 33.2 25.2 34 24 34 L18 31.5 L12 34 C10.8 34 10.2 33.2 11 32.5 L18 27 Z" fill="#0284c7" stroke="#ffffff" strokeWidth="0.5" />
            </svg>

            {/* Touchdown Landing Halo */}
            {isLanding && (
              <div className="landing-touchdown-halo" />
            )}
          </div>

          {/* Telemetry Floating HUD Readout */}
          <div className={`flight-hud-popup ${isHovered || isDragging || showTooltip ? 'hud-popup-visible' : ''}`}>
            <div className="hud-popup-header">
              <span className="hud-popup-phase">
                <Radio size={9} className="pulse-icon" />
                {flightPhase}
              </span>
              <span className="hud-popup-pct">{percentDisplay}%</span>
            </div>
            <div className="hud-popup-alt">{altitudeText}</div>
            <div className="hud-popup-route">EXIM AIR CARGO • INT'L</div>
          </div>
        </div>
      </div>

      {/* Bottom Destination Runway Node */}
      <button 
        type="button" 
        className={`flight-edge-node destination-node ${isLanding ? 'runway-active' : ''}`}
        onClick={scrollToBottom}
        title="Destination Runway 09L (End / Touchdown)"
      >
        <PlaneLanding size={11} className="node-ico" />
        <span className="node-beacon-ring runway" />
        <div className="runway-edge-lights">
          <span className="edge-light" />
          <span className="edge-light green" />
          <span className="edge-light" />
        </div>
      </button>
    </div>
  );
}

export default AirplaneScrollbar;
