import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Activity, Globe, Compass, ShieldCheck, Zap } from 'lucide-react';
import { networkHubs } from '../../data/globalNetworkData';
import { MapSkeleton } from '../common/Skeleton';

export const NetworkMapGraphic = ({ loading = false }) => {
  if (loading) {
    return <MapSkeleton />;
  }
  const [activeHub, setActiveHub] = useState(null);
  const [corridorMode, setCorridorMode] = useState('all'); // 'all', 'air', 'ocean', 'express'

  // Major trade routes defined as quadratic bezier paths on a 1000x550 coordinate grid
  const tradeRoutes = [
    {
      id: 'transatlantic',
      type: 'air',
      name: 'Transatlantic Air-Sea Corridor',
      d: 'M 240 198 Q 375 110 510 165',
      from: 'North America',
      to: 'Rotterdam',
      speed: '4.5s',
    },
    {
      id: 'europe-mideast',
      type: 'express',
      name: 'Euro-Gulf Express Corridor',
      d: 'M 510 165 Q 570 175 620 231',
      from: 'Rotterdam',
      to: 'Dubai',
      speed: '3.8s',
    },
    {
      id: 'mideast-india',
      type: 'ocean',
      name: 'Arabian Sea Maritime Route',
      d: 'M 620 231 Q 645 220 670 253',
      from: 'Dubai',
      to: 'Mumbai',
      speed: '3.2s',
    },
    {
      id: 'india-asean',
      type: 'ocean',
      name: 'Bay of Bengal Maritime Lane',
      d: 'M 670 253 Q 700 290 750 308',
      from: 'Mumbai',
      to: 'Singapore',
      speed: '3.6s',
    },
    {
      id: 'asean-eastasia',
      type: 'express',
      name: 'South China Sea Corridor',
      d: 'M 750 308 Q 795 250 820 209',
      from: 'Singapore',
      to: 'Shanghai',
      speed: '3.4s',
    },
    {
      id: 'asean-oceania',
      type: 'ocean',
      name: 'Trans-Oceanic Freight Lane',
      d: 'M 750 308 Q 825 380 880 429',
      from: 'Singapore',
      to: 'Sydney',
      speed: '4.8s',
    },
    {
      id: 'mideast-africa',
      type: 'ocean',
      name: 'East African Trade Corridor',
      d: 'M 620 231 Q 600 320 540 407',
      from: 'Dubai',
      to: 'Cape Town',
      speed: '4.2s',
    },
    {
      id: 'na-sa',
      type: 'air',
      name: 'Pan-American Flight Route',
      d: 'M 240 198 Q 270 280 320 374',
      from: 'New York',
      to: 'Santos',
      speed: '4.0s',
    },
    {
      id: 'transamerica',
      type: 'express',
      name: 'Trans-Continental Freight Corridor',
      d: 'M 160 220 Q 200 190 240 198',
      from: 'Los Angeles',
      to: 'New York',
      speed: '3.0s',
    },
    {
      id: 'mediterranean',
      type: 'ocean',
      name: 'Mediterranean Express Link',
      d: 'M 480 209 Q 550 210 620 231',
      from: 'Valencia',
      to: 'Dubai',
      speed: '3.9s',
    },
    {
      id: 'south-atlantic',
      type: 'ocean',
      name: 'South Atlantic Freight Link',
      d: 'M 320 374 Q 430 420 540 407',
      from: 'Santos',
      to: 'Cape Town',
      speed: '5.2s',
    },
  ];

  const filteredRoutes = corridorMode === 'all'
    ? tradeRoutes
    : tradeRoutes.filter((r) => r.type === corridorMode);

  return (
    <div
      className="network-map-container"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        margin: '18px auto 26px auto',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 10px 36px rgba(255, 111, 0, 0.08), 0 2px 10px rgba(15, 23, 42, 0.04)',
        background: '#FFFFFF',
        border: '1.5px solid rgba(255, 111, 0, 0.22)',
        boxSizing: 'border-box',
      }}
    >
      {/* ── TOP HUD CONTROL BAR ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '12px 18px',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.75) 85%, transparent 100%)',
          backdropFilter: 'blur(8px)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          borderBottom: '1px solid rgba(255, 111, 0, 0.12)',
        }}
      >
        {/* Left: Live Telemetry Status Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '999px',
              background: '#FFF5EB',
              border: '1px solid rgba(255, 111, 0, 0.3)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#FF6F00',
                boxShadow: '0 0 8px #FF6F00',
                display: 'inline-block',
                animation: 'pulse 1.8s infinite',
              }}
            />
            <span
              style={{
                fontSize: '11px',
                fontWeight: '700',
                color: '#FF6F00',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
              }}
            >
              LIVE TELEMETRY: 150+ COUNTRIES • 500+ PORTS
            </span>
          </div>

          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '4px',
              fontSize: '11px',
              color: '#64748B',
              fontWeight: '500',
            }}
            className="desktop-only-stat"
          >
            <span>• Active Corridors: {filteredRoutes.length}</span>
          </div>
        </div>

        {/* Right: Interactive Mode Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Corridors' },
            { id: 'air', label: 'Air Routes' },
            { id: 'ocean', label: 'Maritime Lanes' },
            { id: 'express', label: 'Express Links' },
          ].map((mode) => {
            const isActive = corridorMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setCorridorMode(mode.id)}
                style={{
                  padding: '4px 11px',
                  borderRadius: '999px',
                  border: isActive ? '1px solid #FF6F00' : '1px solid #E2E8F0',
                  background: isActive ? '#FF6F00' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#475569',
                  fontSize: '11px',
                  fontWeight: isActive ? '700' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 2px 8px rgba(255, 111, 0, 0.25)' : 'none',
                }}
              >
                {mode.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── MAP CONTAINER WITH OVERLAYS ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#07162C', // Deep map contrast background
          minHeight: '380px',
        }}
      >
        {/* Real High-Resolution World Network Map */}
        <img
          src="/world-network-map.jpg"
          alt="Global Link Connected Trade Network Map"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '520px',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            filter: 'brightness(0.96) contrast(1.08)',
          }}
        />

        {/* Subtle Ambient Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(7, 22, 44, 0.4) 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* ── HIGH-TECH RADAR SCANNER BEAM SWEEP ── */}
        <motion.div
          animate={{ left: ['-12%', '112%'] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '80px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 111, 0, 0.08) 40%, rgba(255, 168, 0, 0.22) 70%, rgba(255, 255, 255, 0.4) 95%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* ── SVG LAYER FOR ANIMATED TRADE ROUTES & CORRIDORS ── */}
        <svg
          viewBox="0 0 1000 550"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        >
          <defs>
            {/* Glowing Orange Filter */}
            <filter id="corridor-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Radiant Photon Glow */}
            <filter id="photon-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Render Trade Route Curves */}
          {filteredRoutes.map((route, idx) => (
            <g key={route.id}>
              {/* Outer Glow Path */}
              <path
                d={route.d}
                fill="none"
                stroke="#FF6F00"
                strokeWidth="2.5"
                strokeOpacity="0.28"
                filter="url(#corridor-glow)"
              />

              {/* Glowing Dashed Path */}
              <path
                d={route.d}
                fill="none"
                stroke="#FFA800"
                strokeWidth="1.6"
                strokeDasharray="4 5"
                strokeOpacity="0.75"
              />

              {/* Animated Moving Photon Blip */}
              <circle r="4" fill="#FFFFFF" stroke="#FF6F00" strokeWidth="2" filter="url(#photon-glow)">
                <animateMotion
                  path={route.d}
                  dur={route.speed}
                  repeatCount="indefinite"
                  begin={`${idx * 0.45}s`}
                />
              </circle>

              {/* Trailing Secondary Blip */}
              <circle r="2.5" fill="#FFA800" opacity="0.8">
                <animateMotion
                  path={route.d}
                  dur={route.speed}
                  repeatCount="indefinite"
                  begin={`${idx * 0.45 + 0.6}s`}
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* ── INTERACTIVE RADAR BEACON NODES (AT HUB COORDINATES) ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 4,
          }}
        >
          {networkHubs.map((hub, index) => {
            const isHovered = activeHub?.id === hub.id;

            return (
              <div
                key={hub.id}
                onMouseEnter={() => setActiveHub(hub)}
                onMouseLeave={() => setActiveHub(null)}
                style={{
                  position: 'absolute',
                  left: `${hub.x}%`,
                  top: `${hub.y}%`,
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Outward Pulsing Radar Ripple 1 */}
                <motion.div
                  animate={{
                    scale: [1, 2.6, 3.4],
                    opacity: [0.75, 0.25, 0],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: (index % 4) * 0.4,
                  }}
                  style={{
                    position: 'absolute',
                    width: hub.major ? '22px' : '16px',
                    height: hub.major ? '22px' : '16px',
                    borderRadius: '50%',
                    border: '1.5px solid #FF6F00',
                    pointerEvents: 'none',
                  }}
                />

                {/* Outward Pulsing Radar Ripple 2 */}
                <motion.div
                  animate={{
                    scale: [1, 1.8],
                    opacity: [0.9, 0],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: (index % 4) * 0.4 + 0.8,
                  }}
                  style={{
                    position: 'absolute',
                    width: hub.major ? '20px' : '14px',
                    height: hub.major ? '20px' : '14px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 111, 0, 0.35)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Solid Core Beacon Pin */}
                <motion.div
                  whileHover={{ scale: 1.45 }}
                  style={{
                    position: 'relative',
                    width: hub.major ? '12px' : '9px',
                    height: hub.major ? '12px' : '9px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FFA800 0%, #FF6F00 100%)',
                    border: '2px solid #FFFFFF',
                    boxShadow: '0 0 10px #FF6F00, 0 2px 6px rgba(0, 0, 0, 0.4)',
                    zIndex: 2,
                  }}
                />

                {/* Always-visible Mini Label for Major Hubs */}
                {hub.major && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(15, 23, 42, 0.82)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255, 111, 0, 0.35)',
                      borderRadius: '4px',
                      padding: '1px 5px',
                      color: '#FFFFFF',
                      fontSize: '9.5px',
                      fontWeight: '700',
                      letterSpacing: '0.02em',
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {hub.name.split(' (')[0]}
                  </div>
                )}

                {/* ── INTERACTIVE HOVER TELEMETRY CARD ── */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                      style={{
                        position: 'absolute',
                        bottom: '22px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#FFFFFF',
                        border: '1.5px solid rgba(255, 111, 0, 0.35)',
                        borderRadius: '12px',
                        padding: '10px 14px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25), 0 0 16px rgba(255, 111, 0, 0.2)',
                        zIndex: 20,
                        width: '210px',
                        pointerEvents: 'none',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6F00' }} />
                        <span style={{ fontSize: '10px', fontWeight: '700', color: '#FF6F00', textTransform: 'uppercase' }}>
                          {hub.major ? 'Primary Strategic Hub' : 'Regional Gateway'}
                        </span>
                      </div>
                      <h4
                        style={{
                          fontSize: '12.5px',
                          fontWeight: '700',
                          color: '#0F172A',
                          margin: '0 0 4px 0',
                          lineHeight: '1.25',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {hub.name}
                      </h4>
                      <div
                        style={{
                          fontSize: '10.5px',
                          color: '#64748B',
                          lineHeight: '1.3',
                          borderTop: '1px solid #F1F5F9',
                          paddingTop: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>Telemetry Status:</span>
                        <span style={{ color: '#0F172A', fontWeight: '700' }}>Active 24/7</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── BOTTOM TELEMETRY FOOTER BAR ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 50%, #FFF5EB 100%)',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          borderTop: '1px solid rgba(255, 111, 0, 0.16)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#0F172A', fontWeight: '600' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF6F00', display: 'inline-block' }} />
            <span>Strategic Hubs Active</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#0F172A', fontWeight: '600' }}>
            <span style={{ width: '16px', height: '2px', background: '#FFA800', display: 'inline-block' }} />
            <span>Multi-Modal Corridors</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#0F172A', fontWeight: '600' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFFFFF', border: '1.5px solid #FF6F00', display: 'inline-block' }} />
            <span>Live Cargo Telemetry</span>
          </div>
        </div>

        <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '500' }}>
          Hover over any node for hub operations telemetry
        </div>
      </div>
    </div>
  );
};
