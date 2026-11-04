import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Truck,
  Plane,
  Ship,
  Warehouse,
  CheckCircle2,
  ArrowRight,
  Search,
  Bot,
  MessageSquare,
  Sparkles,
  HelpCircle,
  X,
  Send,
  ShieldCheck,
  Zap,
  Globe,
  ChevronDown
} from 'lucide-react';
import { useLoading } from '../../context/LoadingContext';

const SPRING = { type: 'spring', stiffness: 440, damping: 26 };

export const InteractiveLogisticsHub = ({
  onNavigate,
  onTrack,
  onQuote,
  loading = false,
}) => {
  const { isLoading } = useLoading();
  const activeLoading = loading || isLoading;

  // Active freight mode tab
  const [activeTab, setActiveTab] = useState('road'); // 'road', 'air', 'sea', 'contract'

  // Quote form state
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [fromPostal, setFromPostal] = useState('');
  const [toPostal, setToPostal] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quoteResult, setQuoteResult] = useState(null);

  // Tracking field state
  const [trackingId, setTrackingId] = useState('');

  // Virtual Chatbot state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am Global Link AI Trade Assistant. How can I help you today?',
      time: 'Just now',
    },
  ]);
  const [chatInput, setChatInput] = useState('');

  const globalHubs = [
    { value: '', label: 'Select Location' },
    { value: 'rotterdam', label: 'Rotterdam, Netherlands (Port / Hub)' },
    { value: 'singapore', label: 'Singapore, Singapore (Global Hub)' },
    { value: 'shanghai', label: 'Shanghai, China (Port of Shanghai)' },
    { value: 'dubai', label: 'Dubai, UAE (Jebel Ali / DWC)' },
    { value: 'newyork', label: 'New York, USA (JFK / Newark)' },
    { value: 'hamburg', label: 'Hamburg, Germany (Hub Europe)' },
    { value: 'mumbai', label: 'Mumbai, India (Nhava Sheva / BOM)' },
    { value: 'losangeles', label: 'Los Angeles, USA (Port of LA)' },
    { value: 'antwerp', label: 'Antwerp, Belgium (Port Hub)' },
    { value: 'busan', label: 'Busan, South Korea (Port Hub)' },
  ];

  const freightModes = [
    { id: 'road', label: 'Road Freight', icon: Truck },
    { id: 'air', label: 'Air Freight', icon: Plane },
    { id: 'sea', label: 'Sea Freight', icon: Ship },
    { id: 'contract', label: 'Contract Logistics', icon: Warehouse },
  ];

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!fromLocation || !toLocation) {
      return;
    }

    // Calculate instant indicative price
    const baseRates = {
      road: { min: 450, max: 920, days: '2-4 Days' },
      air: { min: 1450, max: 2800, days: '24-48 Hours' },
      sea: { min: 680, max: 1350, days: '14-22 Days' },
      contract: { min: 890, max: 1950, days: 'Custom SLA' },
    };
    const rate = baseRates[activeTab] || baseRates.road;
    setQuoteResult({
      mode: activeTab,
      from: fromLocation,
      to: toLocation,
      price: `$${rate.min} - $${rate.max}`,
      duration: rate.days,
    });
  };

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    if (onTrack) {
      onTrack(trackingId.trim());
    }
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput.trim();
    setChatMessages((prev) => [
      ...prev,
      { sender: 'user', text: userMsg, time: 'Just now' },
    ]);
    setChatInput('');

    // Intelligent auto-response simulation
    setTimeout(() => {
      let botReply =
        "Thank you! Our automated logistics engine is calculating live routes. An executive agent can also assist you directly at support@globallinkexim.com.";
      const lower = userMsg.toLowerCase();
      if (lower.includes('track') || lower.includes('id') || lower.includes('where')) {
        botReply =
          'To track any shipment in real time, please enter your Global Link tracking ID (e.g. GL-8842-EX) in the tracking box on this dashboard.';
      } else if (lower.includes('quote') || lower.includes('price') || lower.includes('rate')) {
        botReply =
          'You can get an instant freight quote right now in the center panel by choosing your transport mode and locations!';
      } else if (lower.includes('customs') || lower.includes('duty') || lower.includes('clearance')) {
        botReply =
          'Our Customs & Compliance desk handles HS code classification, duty optimization, and port clearance across 140+ countries.';
      }

      setChatMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botReply, time: 'Just now' },
      ]);
    }, 550);
  };

  // High-Premium Skeleton Fallback
  if (activeLoading) {
    return (
      <div
        className="interactive-logistics-hub-skeleton"
        style={{
          width: '100%',
          background: '#FFFFFF',
          borderRadius: '16px',
          border: '1.5px solid rgba(255, 111, 0, 0.2)',
          boxShadow: '0 8px 30px rgba(15, 23, 42, 0.06)',
          padding: '24px',
          boxSizing: 'border-box',
          margin: '0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {/* Left Skeleton */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="premium-skeleton-card" style={{ padding: '20px' }}>
            <div className="premium-skeleton-base" style={{ width: '130px', height: '18px', marginBottom: '10px', borderRadius: '4px' }} />
            <div className="premium-skeleton-base" style={{ width: '90%', height: '12px', marginBottom: '16px', borderRadius: '4px' }} />
            <div className="premium-skeleton-base" style={{ width: '90px', height: '36px', borderRadius: '8px' }} />
          </div>
          <div className="premium-skeleton-card" style={{ padding: '20px' }}>
            <div className="premium-skeleton-base" style={{ width: '140px', height: '18px', marginBottom: '14px', borderRadius: '4px' }} />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="premium-skeleton-base" style={{ width: '80%', height: '12px', marginBottom: '8px', borderRadius: '4px' }} />
            ))}
            <div className="premium-skeleton-base" style={{ width: '110px', height: '36px', borderRadius: '8px', marginTop: '12px' }} />
          </div>
        </div>

        {/* Center Skeleton */}
        <div className="premium-skeleton-card" style={{ padding: '24px' }}>
          <div className="premium-skeleton-base" style={{ width: '140px', height: '22px', marginBottom: '18px', borderRadius: '4px' }} />
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="premium-skeleton-base" style={{ flex: 1, height: '40px', borderRadius: '8px' }} />
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
            <div className="premium-skeleton-base" style={{ height: '42px', borderRadius: '8px' }} />
            <div className="premium-skeleton-base" style={{ height: '42px', borderRadius: '8px' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
            <div className="premium-skeleton-base" style={{ height: '42px', borderRadius: '8px' }} />
            <div className="premium-skeleton-base" style={{ height: '42px', borderRadius: '8px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="premium-skeleton-base" style={{ width: '180px', height: '14px', borderRadius: '4px' }} />
            <div className="premium-skeleton-base" style={{ width: '100px', height: '40px', borderRadius: '8px' }} />
          </div>
        </div>

        {/* Right Skeleton */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="premium-skeleton-card" style={{ padding: '20px' }}>
            <div className="premium-skeleton-base" style={{ width: '150px', height: '18px', marginBottom: '12px', borderRadius: '4px' }} />
            <div className="premium-skeleton-base" style={{ height: '42px', borderRadius: '8px', marginBottom: '12px' }} />
            <div className="premium-skeleton-base" style={{ width: '90px', height: '36px', borderRadius: '8px', marginLeft: 'auto' }} />
          </div>
          <div className="premium-skeleton-card" style={{ padding: '20px' }}>
            <div className="premium-skeleton-base" style={{ width: '120px', height: '18px', marginBottom: '10px', borderRadius: '4px' }} />
            <div className="premium-skeleton-base" style={{ width: '90%', height: '12px', marginBottom: '16px', borderRadius: '4px' }} />
            <div className="premium-skeleton-base" style={{ width: '130px', height: '36px', borderRadius: '8px' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="interactive-logistics-hub-root"
      style={{
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        margin: '0',
        background: '#FFFFFF',
        borderRadius: '16px',
        border: '1.5px solid rgba(255, 111, 0, 0.22)',
        boxShadow: '0 12px 36px rgba(15, 23, 42, 0.08), 0 2px 8px rgba(255, 111, 0, 0.04)',
        padding: '24px 20px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'var(--font-body)',
      }}
    >
      {/* Top subtle radiant accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #FF6F00 0%, #FFA800 50%, #FFD54F 100%)',
        }}
      />

      {/* 3-Column Responsive Grid */}
      <div
        className="logistics-hub-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(250px, 1fr) minmax(360px, 2fr) minmax(250px, 1fr)',
          gap: '24px',
          alignItems: 'stretch',
        }}
      >
        {/* =========================================================================
            COLUMN 1: EXISTING CUSTOMER & NEW REGISTRATION
            ========================================================================= */}
        <div
          className="hub-col hub-col-customer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRight: '1px solid #E2E8F0',
            paddingRight: '22px',
          }}
        >
          {/* Card 1: Existing Customer */}
          <div style={{ marginBottom: '26px' }}>
            <h2
              style={{
                fontSize: '20px',
                fontWeight: '800',
                color: '#082653',
                margin: '0 0 8px 0',
                letterSpacing: '-0.3px',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Existing customer
            </h2>
            <p
              style={{
                fontSize: '13.5px',
                color: '#475569',
                lineHeight: '1.5',
                margin: '0 0 16px 0',
                fontWeight: '400',
              }}
            >
              Log in to your account to see your current logistic or keep track of your orders
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  if (onNavigate) onNavigate('client-access');
                }}
                style={{
                  background: '#082653',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 24px',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(8, 38, 83, 0.22)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                Login
              </motion.button>
            </div>
          </div>

          <div style={{ height: '1px', background: '#E2E8F0', margin: '0 0 24px 0' }} />

          {/* Card 2: New to Global Link? */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h2
              style={{
                fontSize: '19px',
                fontWeight: '800',
                color: '#082653',
                margin: '0 0 14px 0',
                letterSpacing: '-0.2px',
                fontFamily: 'var(--font-heading)',
              }}
            >
              New to Global Link?
            </h2>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {[
                'Price, book, track – in one place',
                'Faster offers for verified users',
                'Full visibility & history',
                'Self service, 24/7',
                'Frequent shipment tariff quote',
              ].map((text, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px', color: '#334155', fontWeight: '500' }}>
                  <CheckCircle2 size={15} color="#FF6F00" strokeWidth={2.4} style={{ flexShrink: 0 }} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-start' }}>
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  if (onQuote) onQuote();
                  else if (onNavigate) onNavigate('client-access');
                }}
                style={{
                  background: 'linear-gradient(135deg, #FF6F00 0%, #FFA800 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 22px',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(255, 111, 0, 0.28)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                Register now
              </motion.button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            COLUMN 2: GET A QUOTE (INTERACTIVE FREIGHT ENGINE)
            ========================================================================= */}
        <div
          className="hub-col hub-col-quote"
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingRight: '12px',
          }}
        >
          {/* Section Heading */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <h2
              style={{
                fontSize: '22px',
                fontWeight: '900',
                color: '#082653',
                margin: 0,
                letterSpacing: '-0.3px',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Get a quote
            </h2>
            <span
              style={{
                fontSize: '11.5px',
                fontWeight: '700',
                color: '#FF6F00',
                background: 'rgba(255, 111, 0, 0.08)',
                padding: '3px 10px',
                borderRadius: '999px',
                border: '1px solid rgba(255, 111, 0, 0.25)',
              }}
            >
              ⚡ Instant Pricing Engine
            </span>
          </div>

          {/* 4 Mode Selector Tabs */}
          <div
            className="quote-mode-tabs"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '6px',
              marginBottom: '20px',
            }}
          >
            {freightModes.map((mode) => {
              const Icon = mode.icon;
              const isActive = activeTab === mode.id;

              return (
                <button
                  key={mode.id}
                  onClick={() => {
                    setActiveTab(mode.id);
                    setQuoteResult(null);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '7px',
                    padding: '10px 6px',
                    borderRadius: '7px',
                    border: isActive ? '1.5px solid #082653' : '1px solid #CBD5E1',
                    background: isActive ? '#082653' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#334155',
                    fontSize: '12.5px',
                    fontWeight: isActive ? '700' : '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    boxShadow: isActive ? '0 4px 12px rgba(8, 38, 83, 0.16)' : 'none',
                  }}
                >
                  <Icon size={16} strokeWidth={isActive ? 2.4 : 1.8} color={isActive ? '#FFA800' : '#64748B'} />
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Quote Route Form */}
          <form onSubmit={handleQuoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
            {/* Row 1: From & To Locations */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {/* From Field */}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#082653', marginBottom: '6px' }}>
                  From
                </label>
                <div style={{ position: 'relative' }}>
                  <select
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    style={{
                      width: '100%',
                      height: '42px',
                      padding: '0 32px 0 12px',
                      borderRadius: '7px',
                      border: formSubmitted && !fromLocation ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                      background: '#FFFFFF',
                      fontSize: '13px',
                      color: fromLocation ? '#0F172A' : '#94A3B8',
                      appearance: 'none',
                      outline: 'none',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                    }}
                  >
                    {globalHubs.map((h, i) => (
                      <option key={i} value={h.value} disabled={i === 0}>
                        {h.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} color="#64748B" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                </div>
                {formSubmitted && !fromLocation && (
                  <span style={{ fontSize: '11px', color: '#EF4444', fontWeight: '600', marginTop: '3px', display: 'block' }}>
                    Is required
                  </span>
                )}
              </div>

              {/* To Field */}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#082653', marginBottom: '6px' }}>
                  To
                </label>
                <div style={{ position: 'relative' }}>
                  <select
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    style={{
                      width: '100%',
                      height: '42px',
                      padding: '0 32px 0 12px',
                      borderRadius: '7px',
                      border: formSubmitted && !toLocation ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                      background: '#FFFFFF',
                      fontSize: '13px',
                      color: toLocation ? '#0F172A' : '#94A3B8',
                      appearance: 'none',
                      outline: 'none',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                    }}
                  >
                    {globalHubs.map((h, i) => (
                      <option key={i} value={h.value} disabled={i === 0}>
                        {h.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} color="#64748B" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                </div>
                {formSubmitted && !toLocation && (
                  <span style={{ fontSize: '11px', color: '#EF4444', fontWeight: '600', marginTop: '3px', display: 'block' }}>
                    Is required
                  </span>
                )}
              </div>
            </div>

            {/* Row 2: Postal / City Codes */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <input
                  type="text"
                  placeholder="Provide City or Postal code"
                  value={fromPostal}
                  onChange={(e) => setFromPostal(e.target.value)}
                  style={{
                    width: '100%',
                    height: '40px',
                    padding: '0 12px',
                    borderRadius: '7px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    color: '#0F172A',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Provide City or Postal code"
                  value={toPostal}
                  onChange={(e) => setToPostal(e.target.value)}
                  style={{
                    width: '100%',
                    height: '40px',
                    padding: '0 12px',
                    borderRadius: '7px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    color: '#0F172A',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Optional Quote Estimate Calculation Result Box */}
            <AnimatePresence>
              {quoteResult && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    background: 'linear-gradient(135deg, #FFF9F2 0%, #FFF3E6 100%)',
                    border: '1.5px solid rgba(255, 111, 0, 0.35)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '4px',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#FF6F00', letterSpacing: '0.05em' }}>
                      Calculated Estimate ({quoteResult.duration})
                    </span>
                    <div style={{ fontSize: '17px', fontWeight: '800', color: '#082653', marginTop: '2px' }}>
                      {quoteResult.price} <span style={{ fontSize: '12px', fontWeight: '500', color: '#64748B' }}>/ standard shipment</span>
                    </div>
                  </div>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                      if (onQuote) onQuote();
                    }}
                    style={{
                      background: '#082653',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 14px',
                      fontSize: '12.5px',
                      fontWeight: '700',
                      cursor: 'pointer',
                    }}
                  >
                    Lock Rate
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Row: Instant price note & Next button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'auto',
                paddingTop: '10px',
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  color: '#475569',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Zap size={14} color="#FF6F00" />
                Get instant price – no registration needed
              </span>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  background: '#082653',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '7px',
                  padding: '11px 28px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(8, 38, 83, 0.25)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>Next</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </form>
        </div>

        {/* =========================================================================
            COLUMN 3: TRACK SHIPMENT & NEED HELP CHATBOT
            ========================================================================= */}
        <div
          className="hub-col hub-col-track"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: '1px solid #E2E8F0',
            paddingLeft: '22px',
          }}
        >
          {/* Top Card: Track Your Shipment */}
          <div style={{ marginBottom: '26px' }}>
            <h2
              style={{
                fontSize: '20px',
                fontWeight: '800',
                color: '#082653',
                margin: '0 0 12px 0',
                letterSpacing: '-0.3px',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Track your shipment
            </h2>

            <form onSubmit={handleTrackSubmit}>
              <div style={{ position: 'relative', marginBottom: '14px' }}>
                <input
                  type="text"
                  placeholder="Enter ID number"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  style={{
                    width: '100%',
                    height: '42px',
                    padding: '0 12px',
                    borderRadius: '7px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    color: '#0F172A',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    background: '#082653',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 24px',
                    fontSize: '13.5px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(8, 38, 83, 0.22)',
                  }}
                >
                  Track
                </motion.button>
              </div>
            </form>
          </div>

          <div style={{ height: '1px', background: '#E2E8F0', margin: '0 0 24px 0' }} />

          {/* Bottom Card: Need help? Chatbot */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h2
              style={{
                fontSize: '19px',
                fontWeight: '800',
                color: '#082653',
                margin: '0 0 8px 0',
                letterSpacing: '-0.2px',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Need help?
            </h2>

            <p
              style={{
                fontSize: '13.5px',
                color: '#475569',
                lineHeight: '1.5',
                margin: '0 0 16px 0',
                fontWeight: '400',
              }}
            >
              Chat with our virtual assistant, and get the help you need right away.
            </p>

            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-start' }}>
              <motion.button
                type="button"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsChatOpen(true)}
                style={{
                  background: '#082653',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '7px',
                  padding: '10px 20px',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(8, 38, 83, 0.22)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Bot size={17} color="#FFA800" />
                <span>Ask our chatbot</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE AI CHATBOT MODAL / DRAWER
          ========================================================================= */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(2, 8, 22, 0.55)',
              backdropFilter: 'blur(5px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={SPRING}
              style={{
                width: '100%',
                maxWidth: '440px',
                background: '#FFFFFF',
                borderRadius: '18px',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '520px',
              }}
            >
              {/* Chat Header */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #082653 0%, #0F3775 100%)',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#FFFFFF',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255, 111, 0, 0.2)',
                      border: '1.5px solid #FF6F00',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Bot size={20} color="#FFA800" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: '700', margin: 0 }}>
                      Global Link Trade Assistant
                    </h3>
                    <span style={{ fontSize: '11px', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                      Online • 24/7 Virtual Support
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsChatOpen(false)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    padding: '4px',
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chat Body */}
              <div
                style={{
                  flex: 1,
                  padding: '16px',
                  overflowY: 'auto',
                  background: '#F8FAFC',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    style={{
                      alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                      maxWidth: '82%',
                      background: msg.sender === 'user' ? '#082653' : '#FFFFFF',
                      color: msg.sender === 'user' ? '#FFFFFF' : '#0F172A',
                      padding: '10px 14px',
                      borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                      boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
                      fontSize: '13px',
                      lineHeight: '1.45',
                    }}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Quick Prompt Suggestions */}
              <div
                style={{
                  padding: '8px 12px',
                  background: '#FFFFFF',
                  borderTop: '1px solid #E2E8F0',
                  display: 'flex',
                  gap: '6px',
                  overflowX: 'auto',
                }}
              >
                {['Track shipment', 'Check sea rates', 'Customs duty inquiry'].map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setChatInput(prompt);
                    }}
                    style={{
                      whiteSpace: 'nowrap',
                      background: 'rgba(255, 111, 0, 0.08)',
                      border: '1px solid rgba(255, 111, 0, 0.25)',
                      borderRadius: '999px',
                      padding: '4px 10px',
                      fontSize: '11px',
                      color: '#FF6F00',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Chat Input Bar */}
              <form
                onSubmit={handleSendChat}
                style={{
                  padding: '12px 16px',
                  background: '#FFFFFF',
                  borderTop: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <input
                  type="text"
                  placeholder="Type your question..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  style={{
                    flex: 1,
                    height: '38px',
                    padding: '0 12px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: '#FF6F00',
                    border: 'none',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

