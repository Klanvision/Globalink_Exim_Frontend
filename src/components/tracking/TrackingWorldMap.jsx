import React, { useState } from 'react';
import { Ship, Plane, Truck, Navigation, Anchor, Radio, Info, Layers, Compass, Plus, Minus } from 'lucide-react';

export const TrackingWorldMap = ({ shipment }) => {
  const [mapType, setMapType] = useState('map'); // 'map' or 'satellite'
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const mode = (shipment?.mode || shipment?.type || '').toLowerCase();
  const isAir = mode.includes('air') || mode.includes('plane') || mode.includes('flight');
  const isInland = mode.includes('inland') || mode.includes('road') || mode.includes('truck') || mode.includes('rail');

  // Exact geographic SVG coordinate anchors (viewBox: 0 0 920 380)
  // Chennai, India: (610, 218)
  // Arabian Sea / Gulf of Aden midpoint: (518, 185)
  // Red Sea / Suez Canal: (472, 142)
  // Mediterranean / Strait of Gibraltar: (415, 122)
  // Rotterdam, Netherlands: (432, 90)
  const chennaiCoords = { x: 610, y: 218 };
  const rotterdamCoords = { x: 432, y: 90 };
  const vesselCoords = { x: 522, y: 182 };

  // Realistic shipping route via Arabian Sea, Bab-el-Mandeb, Red Sea, Suez Canal, Mediterranean, to Rotterdam
  const routePath = `M ${chennaiCoords.x} ${chennaiCoords.y} 
    C 575 228, 545 208, ${vesselCoords.x} ${vesselCoords.y} 
    C 495 155, 465 142, 452 128 
    C 438 114, 420 102, ${rotterdamCoords.x} ${rotterdamCoords.y}`;

  return (
    <div
      className="google-real-map-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        height: '340px',
        backgroundColor: mapType === 'satellite' ? '#0F1E2E' : '#AADAFF',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #CBD5E1',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.08)',
        userSelect: 'none',
        fontFamily: 'Roboto, Arial, sans-serif',
      }}
    >
      {/* Scoped Keyframes for Google Maps Water Wake & Ship Motion */}
      <style>{`
        @keyframes kpl-wake-churn {
          0% {
            opacity: 0.8;
            transform: scale(0.92);
          }
          50% {
            opacity: 0.35;
            transform: scale(1.15);
          }
          100% {
            opacity: 0.8;
            transform: scale(0.92);
          }
        }
        @keyframes kpl-ship-underway {
          0%, 100% {
            transform: translate(0px, 0px) rotate(-14deg);
          }
          50% {
            transform: translate(-1px, -2px) rotate(-12.5deg);
          }
        }
        @keyframes kpl-route-flow {
          0% {
            stroke-dashoffset: 40;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes kpl-marker-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
      `}</style>

      {/* SVG Canvas — Google Real Map Projection */}
      <svg
        viewBox="0 0 920 380"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          transform: `scale(${zoomLevel})`,
          transformOrigin: 'center center',
          transition: 'transform 0.3s ease',
        }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Google Maps Ocean Gradient */}
          <linearGradient id="gmapOcean" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={mapType === 'satellite' ? '#0B1D2F' : '#A9DAFC'} />
            <stop offset="50%" stopColor={mapType === 'satellite' ? '#0D2338' : '#A2D5FA'} />
            <stop offset="100%" stopColor={mapType === 'satellite' ? '#081726' : '#9BCEF7'} />
          </linearGradient>

          {/* Google Maps Coastal Bathymetry Shelf */}
          <linearGradient id="coastalShelf" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0)" />
          </linearGradient>

          {/* Google Maps Route Blue Outer Glow */}
          <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#1A73E8" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* 1. Ocean Background */}
        <rect width="920" height="380" fill="url(#gmapOcean)" />

        {/* 2. Google Maps Landmass Vector Layer (Warm Sand-Beige #F5F3EF / Green-Gray satellite) */}
        <g
          fill={mapType === 'satellite' ? '#1E3224' : '#F5F3EF'}
          stroke={mapType === 'satellite' ? '#2A4332' : '#DAD6CD'}
          strokeWidth="1.2"
          strokeLinejoin="round"
        >
          {/* North America */}
          <path d="M 80 40 Q 150 25, 210 45 Q 235 85, 215 130 Q 185 160, 150 175 Q 120 195, 110 210 Q 95 185, 80 140 Q 65 100, 80 40 Z" />

          {/* Greenland */}
          <path d="M 285 20 Q 330 15, 350 35 Q 340 68, 305 72 Q 280 50, 285 20 Z" />

          {/* Europe & Scandinavia (Rotterdam Target Area) */}
          <path d="M 400 55 Q 460 40, 485 70 Q 500 95, 470 115 Q 435 125, 415 110 Q 398 90, 400 55 Z" />
          <path d="M 435 25 Q 465 20, 470 48 Q 448 60, 435 45 Z" fill={mapType === 'satellite' ? '#182C1E' : '#EFECE5'} />
          <path d="M 390 68 Q 405 62, 400 82 Q 388 85, 390 68 Z" fill={mapType === 'satellite' ? '#182C1E' : '#EFECE5'} />

          {/* Africa */}
          <path d="M 410 130 Q 480 130, 495 168 Q 508 215, 490 270 Q 465 315, 440 305 Q 415 270, 410 220 Q 390 170, 410 130 Z" />

          {/* Middle East & Arabian Peninsula */}
          <path d="M 495 135 Q 545 135, 555 165 Q 538 200, 508 195 Q 492 170, 495 135 Z" fill={mapType === 'satellite' ? '#2A3C2E' : '#FAF8F3'} />

          {/* Asia / Eurasia */}
          <path d="M 490 65 Q 580 50, 680 60 Q 770 75, 800 125 Q 780 170, 720 185 Q 660 170, 630 180 Q 600 230, 570 210 Q 545 180, 520 160 Q 485 145, 490 65 Z" />

          {/* India Subcontinent (Chennai Origin Area) */}
          <path d="M 570 168 Q 620 168, 630 198 Q 608 250, 578 215 Q 560 190, 570 168 Z" fill={mapType === 'satellite' ? '#23392A' : '#FAF7F0'} />

          {/* Sri Lanka */}
          <ellipse cx="616" cy="242" rx="6" ry="9" />

          {/* Southeast Asia Archipelago */}
          <path d="M 660 192 Q 700 198, 710 225 Q 685 235, 655 210 Z" />
          <circle cx="705" cy="245" r="7" />
          <circle cx="735" cy="250" r="6" />

          {/* Australia */}
          <path d="M 725 255 Q 805 245, 830 280 Q 820 330, 765 335 Q 725 320, 720 280 Z" />
        </g>

        {/* 3. Google Maps Marine Bathymetry & Coastal Wave Depth Contours */}
        <g stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.5" fill="none">
          <path d="M 565 165 Q 618 165, 634 195 Q 612 254, 575 218 Z" opacity="0.6" />
          <path d="M 405 125 Q 480 125, 498 165 Q 512 215, 494 272 Z" opacity="0.4" />
        </g>

        {/* 4. Google Maps Navigation Grid (Very subtle 10° lat/long lines) */}
        <g stroke={mapType === 'satellite' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(100, 150, 200, 0.2)'} strokeWidth="0.8" strokeDasharray="3 4">
          <line x1="0" y1="128" x2="920" y2="128" />
          <line x1="0" y1="230" x2="920" y2="230" />
          <line x1="230" y1="0" x2="230" y2="380" />
          <line x1="460" y1="0" x2="460" y2="380" />
          <line x1="690" y1="0" x2="690" y2="380" />
        </g>

        {/* 5. Geographic Text Labels in Google Maps Font Style */}
        <g
          fontFamily="Roboto, Arial, sans-serif"
          fontSize="9"
          fontWeight="600"
          fill={mapType === 'satellite' ? 'rgba(255, 255, 255, 0.65)' : '#49769B'}
          letterSpacing="1.8px"
          style={{ textTransform: 'uppercase', pointerEvents: 'none' }}
        >
          <text x="640" y="270">INDIAN OCEAN</text>
          <text x="515" y="235">ARABIAN SEA</text>
          <text x="455" y="172" fontSize="7.5" letterSpacing="1px">RED SEA</text>
          <text x="430" y="142" fontSize="7.5" letterSpacing="1px">MEDITERRANEAN</text>
          <text x="350" y="85" fontSize="8">NORTH SEA</text>
        </g>

        {/* 6. GOOGLE MAPS TRANSIT ROUTE (Authentic Royal Blue + High-Visibility Orange Telemetry) */}
        {/* Outer Route Border */}
        <path
          d={routePath}
          fill="none"
          stroke="#1A73E8"
          strokeWidth="6"
          strokeLinecap="round"
          strokeOpacity="0.4"
        />

        {/* Main Solid Route Line */}
        <path
          d={routePath}
          fill="none"
          stroke="#EA580C"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Google Maps Animated Forward Directional Chevrons */}
        <path
          d={routePath}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeDasharray="6 10"
          strokeLinecap="round"
          style={{ animation: 'kpl-route-flow 2s linear infinite' }}
        />

        {/* 7. REALISTIC HIGH-FIDELITY CONTAINER SHIP ICON WITH BOW WAKE */}
        <g
          transform={`translate(${vesselCoords.x}, ${vesselCoords.y})`}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() => setActiveTooltip('ship')}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          {/* Churning White Foam Water Wake trailing behind the vessel */}
          <g style={{ animation: 'kpl-wake-churn 2.6s ease-in-out infinite' }}>
            {/* Port & Starboard Foam V-Wake */}
            <path
              d="M -6 -4 L -38 -18 M -6 4 L -38 18"
              stroke="rgba(255, 255, 255, 0.85)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M -12 -2 L -50 -10 M -12 2 L -50 10"
              stroke="rgba(255, 255, 255, 0.55)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Propeller churning bubble foam */}
            <ellipse cx="-16" cy="0" rx="12" ry="4" fill="rgba(255, 255, 255, 0.5)" />
          </g>

          {/* 3D Modern Container Ship Hull & Superstructure */}
          <g style={{ animation: 'kpl-ship-underway 4.5s ease-in-out infinite' }}>
            {/* Hull Keel Red Waterline Strip */}
            <polygon
              points="28,0 20,8 -24,8 -28,4 -28,-4 -24,-8 20,-8"
              fill="#B91C1C"
              stroke="#7F1D1D"
              strokeWidth="0.8"
            />

            {/* Main Navy Steel Hull Deck */}
            <polygon
              points="26,0 18,7 -22,7 -26,3 -26,-3 -22,-7 18,-7"
              fill="#0F172A"
              stroke="#1E293B"
              strokeWidth="0.8"
            />

            {/* Foredeck / Bow Crane Mast */}
            <circle cx="21" cy="0" r="1.5" fill="#E2E8F0" />

            {/* Multi-tier Colorful Shipping Containers on Deck */}
            {/* Row 1 (Fore) */}
            <rect x="8" y="-5.5" width="7" height="4.5" fill="#EA580C" rx="0.5" stroke="#9A3412" strokeWidth="0.4" />
            <rect x="8" y="1" width="7" height="4.5" fill="#0284C7" rx="0.5" stroke="#0369A1" strokeWidth="0.4" />

            {/* Row 2 (Midships) */}
            <rect x="-1" y="-5.5" width="7.5" height="4.5" fill="#F59E0B" rx="0.5" stroke="#B45309" strokeWidth="0.4" />
            <rect x="-1" y="1" width="7.5" height="4.5" fill="#10B981" rx="0.5" stroke="#047857" strokeWidth="0.4" />

            {/* Row 3 (Aft Container Stack) */}
            <rect x="-10" y="-5.5" width="7.5" height="4.5" fill="#EA580C" rx="0.5" stroke="#9A3412" strokeWidth="0.4" />
            <rect x="-10" y="1" width="7.5" height="4.5" fill="#38BDF8" rx="0.5" stroke="#0284C7" strokeWidth="0.4" />

            {/* Bridge Superstructure (White Cabin Tower) */}
            <rect x="-18" y="-4.5" width="5.5" height="9" fill="#FFFFFF" rx="0.8" stroke="#CBD5E1" strokeWidth="0.5" />
            {/* Navigation Bridge Windows */}
            <rect x="-16.5" y="-3.5" width="2" height="7" fill="#0284C7" rx="0.3" />
            {/* Radar Mast & Twin Smokestack Funnels */}
            <rect x="-21" y="-2" width="2.5" height="4" fill="#EA580C" rx="0.3" />
            <circle cx="-16" cy="0" r="1" fill="#EA580C" />
          </g>
        </g>

        {/* 8. GOOGLE MAPS OFFICIAL TEARDROP LOCATION PINS */}
        {/* Origin: Chennai, India */}
        <g
          transform={`translate(${chennaiCoords.x}, ${chennaiCoords.y})`}
          style={{ cursor: 'pointer', animation: 'kpl-marker-bounce 3s ease-in-out infinite' }}
          onMouseEnter={() => setActiveTooltip('chennai')}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          {/* Ground Contact Shadow */}
          <ellipse cx="0" cy="2" rx="7" ry="2.5" fill="rgba(0, 0, 0, 0.28)" />

          {/* Authentic Google Maps Red Pin */}
          <path
            d="M 0 -22 C -6.5 -22 -11 -17.5 -11 -11 C -11 -4 0 0 0 0 C 0 0 11 -4 11 -11 C 11 -17.5 6.5 -22 0 -22 Z"
            fill="#EA4335"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.25))"
          />
          {/* White Inner Dot */}
          <circle cx="0" cy="-11" r="4.2" fill="#FFFFFF" />
          <circle cx="0" cy="-11" r="2.2" fill="#EA4335" />

          {/* Google Maps White Label Placard */}
          <g transform="translate(14, -22)">
            <rect x="0" y="0" width="82" height="20" rx="3" fill="#FFFFFF" filter="drop-shadow(0 1px 3px rgba(0,0,0,0.2))" />
            <text x="8" y="14" fill="#202124" fontSize="9.5" fontWeight="700">Chennai, IN</text>
          </g>
        </g>

        {/* Destination: Rotterdam, Netherlands */}
        <g
          transform={`translate(${rotterdamCoords.x}, ${rotterdamCoords.y})`}
          style={{ cursor: 'pointer', animation: 'kpl-marker-bounce 3s ease-in-out infinite 1.5s' }}
          onMouseEnter={() => setActiveTooltip('rotterdam')}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          {/* Ground Contact Shadow */}
          <ellipse cx="0" cy="2" rx="7" ry="2.5" fill="rgba(0, 0, 0, 0.28)" />

          {/* Authentic Google Maps Destination Green/Orange Pin */}
          <path
            d="M 0 -22 C -6.5 -22 -11 -17.5 -11 -11 C -11 -4 0 0 0 0 C 0 0 11 -4 11 -11 C 11 -17.5 6.5 -22 0 -22 Z"
            fill="#1E8E3E"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.25))"
          />
          {/* White Inner Dot with Star / Flag */}
          <circle cx="0" cy="-11" r="4.2" fill="#FFFFFF" />
          <circle cx="0" cy="-11" r="2.2" fill="#1E8E3E" />

          {/* Google Maps White Label Placard */}
          <g transform="translate(-104, -22)">
            <rect x="0" y="0" width="96" height="20" rx="3" fill="#FFFFFF" filter="drop-shadow(0 1px 3px rgba(0,0,0,0.2))" />
            <text x="8" y="14" fill="#202124" fontSize="9.5" fontWeight="700">Rotterdam, NL</text>
          </g>
        </g>
      </svg>

      {/* =========================================================================
          GOOGLE MAPS AUTHENTIC FLOATING CONTROLS & OVERLAYS
          ========================================================================= */}

      {/* Top Left: Google Maps "Map | Satellite" Mode Switcher */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          overflow: 'hidden',
          zIndex: 5,
        }}
      >
        <button
          type="button"
          onClick={() => setMapType('map')}
          style={{
            padding: '6px 12px',
            fontSize: '12px',
            fontWeight: mapType === 'map' ? '700' : '500',
            color: mapType === 'map' ? '#1A73E8' : '#3C4043',
            backgroundColor: mapType === 'map' ? '#FFFFFF' : '#FFFFFF',
            border: 'none',
            borderRight: '1px solid #DADCE0',
            cursor: 'pointer',
          }}
        >
          Map
        </button>
        <button
          type="button"
          onClick={() => setMapType('satellite')}
          style={{
            padding: '6px 12px',
            fontSize: '12px',
            fontWeight: mapType === 'satellite' ? '700' : '500',
            color: mapType === 'satellite' ? '#1A73E8' : '#3C4043',
            backgroundColor: '#FFFFFF',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Satellite
        </button>
      </div>

      {/* Bottom Left: Authentic "Google" Watermark Logo */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 5,
        }}
      >
        {/* Google Iconic Logo Watermark */}
        <div
          style={{
            fontSize: '16px',
            fontWeight: '600',
            fontFamily: '"Product Sans", Roboto, Arial, sans-serif',
            color: mapType === 'satellite' ? 'rgba(255, 255, 255, 0.85)' : '#5F6368',
            letterSpacing: '-0.3px',
            display: 'flex',
            alignItems: 'center',
            gap: '1px',
            userSelect: 'none',
          }}
        >
          <span style={{ color: '#4285F4' }}>G</span>
          <span style={{ color: '#EA4335' }}>o</span>
          <span style={{ color: '#FBBC05' }}>o</span>
          <span style={{ color: '#4285F4' }}>g</span>
          <span style={{ color: '#34A853' }}>l</span>
          <span style={{ color: '#EA4335' }}>e</span>
        </div>

        {/* Live AIS Telemetry Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            padding: '4px 10px',
            backgroundColor: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(6px)',
            borderRadius: '16px',
            border: '1px solid #D9E4EF',
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.12)',
            fontSize: '11px',
            fontWeight: '600',
            color: '#1E293B',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.25)',
            }}
          />
          <span style={{ color: '#EA580C', fontWeight: '700' }}>
            {shipment?.vesselName || 'MV Global Pioneer'}
          </span>
          <span style={{ color: '#94A3B8' }}>•</span>
          <span style={{ color: '#475569' }}>Speed {shipment?.speedKnots || '18.4'} kts</span>
        </div>
      </div>

      {/* Bottom Right: Google Maps Zoom & Legend Controls */}
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '8px',
          zIndex: 5,
        }}
      >
        {/* Google Zoom Controls (+ / -) */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '4px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.28)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <button
            type="button"
            onClick={() => setZoomLevel((prev) => Math.min(prev + 0.15, 1.45))}
            style={{
              width: '32px',
              height: '32px',
              border: 'none',
              background: '#FFFFFF',
              color: '#3C4043',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              borderBottom: '1px solid #E8EAED',
            }}
            title="Zoom in"
          >
            <Plus size={16} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={() => setZoomLevel((prev) => Math.max(prev - 0.15, 0.85))}
            style={{
              width: '32px',
              height: '32px',
              border: 'none',
              background: '#FFFFFF',
              color: '#3C4043',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            title="Zoom out"
          >
            <Minus size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Google Maps Scale & Legal Line */}
        <div
          style={{
            fontSize: '10px',
            color: mapType === 'satellite' ? 'rgba(255, 255, 255, 0.8)' : '#5F6368',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            padding: '2px 6px',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <div style={{ width: '28px', height: '2px', backgroundColor: '#3C4043' }} />
            <span>1,000 km</span>
          </div>
          <span>•</span>
          <span>Map data ©2026 Google</span>
        </div>
      </div>

      {/* Interactive Tooltip Popups */}
      {activeTooltip && (
        <div
          style={{
            position: 'absolute',
            top: activeTooltip === 'chennai' ? '145px' : activeTooltip === 'rotterdam' ? '65px' : '105px',
            left: activeTooltip === 'chennai' ? '66%' : activeTooltip === 'rotterdam' ? '46%' : '56%',
            transform: 'translateX(-50%)',
            backgroundColor: '#202124',
            color: '#FFFFFF',
            padding: '8px 12px',
            borderRadius: '6px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.35)',
            fontSize: '11.5px',
            pointerEvents: 'none',
            zIndex: 20,
            whiteSpace: 'nowrap',
          }}
        >
          {activeTooltip === 'chennai' && (
            <div>
              <div style={{ fontWeight: '700', color: '#F97316' }}>Port of Origin</div>
              <div>{shipment?.originPort || 'Port of Chennai (INMAA)'}</div>
              <div style={{ color: '#94A3B8', fontSize: '10px' }}>Departed: 07 Nov 2026</div>
            </div>
          )}
          {activeTooltip === 'rotterdam' && (
            <div>
              <div style={{ fontWeight: '700', color: '#F97316' }}>Destination Port</div>
              <div>{shipment?.destinationPort || 'Port of Rotterdam (NLRTM)'}</div>
              <div style={{ color: '#94A3B8', fontSize: '10px' }}>Estimated: {shipment?.estimatedDelivery || '18 Nov 2026'}</div>
            </div>
          )}
          {activeTooltip === 'ship' && (
            <div>
              <div style={{ fontWeight: '700', color: '#F97316' }}>
                {shipment?.vesselName || 'MV Global Pioneer'} (Voyage {shipment?.voyageNumber || 'GP-402W'})
              </div>
              <div>Speed: {shipment?.speedKnots || '18.4'} kts • Heading: {shipment?.heading || '295° NW'}</div>
              <div style={{ color: '#94A3B8', fontSize: '10px' }}>Location: {shipment?.currentLocationName || 'Arabian Sea / Gulf of Aden'}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
