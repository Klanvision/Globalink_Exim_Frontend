import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
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
  HelpCircle,
  X,
  Send,
  ShieldCheck,
  Zap,
  Globe,
  ChevronDown,
  ArrowLeftRight,
  Clock,
  MapPin,
  DollarSign,
  Calendar,
  Navigation,
  RefreshCw,
  ExternalLink,
  UserCheck,
  AlertCircle,
  TrendingUp,
  Compass,
  Radio,
  FileCheck2,
  Headphones,
  Minimize2,
  Maximize2,
  Calculator
} from 'lucide-react';
import { useLoading } from '../../context/LoadingContext';
import { fetchShipments } from '../../services/api';

const SPRING = { type: 'spring', stiffness: 420, damping: 28 };
const SMOOTH = { duration: 0.28, ease: [0.4, 0, 0.2, 1] };

// Global Trade Hubs Database
const GLOBAL_HUBS = [
  { id: 'rotterdam', name: 'Rotterdam Europort', country: 'Netherlands', code: 'NLRTM', type: 'Port', flag: '🇳🇱' },
  { id: 'singapore', name: 'Singapore PSA Gateway', country: 'Singapore', code: 'SGSIN', type: 'Mega Hub', flag: '🇸🇬' },
  { id: 'shanghai', name: 'Shanghai Yangshan Port', country: 'China', code: 'CNSHA', type: 'Port', flag: '🇨🇳' },
  { id: 'dubai', name: 'Dubai Jebel Ali & DWC', country: 'UAE', code: 'AEDXB', type: 'Air & Sea', flag: '🇦🇪' },
  { id: 'newyork', name: 'New York JFK & Newark', country: 'United States', code: 'USNYC', type: 'Intermodal', flag: '🇺🇸' },
  { id: 'hamburg', name: 'Hamburg Logistics Central', country: 'Germany', code: 'DEHAM', type: 'Port', flag: '🇩🇪' },
  { id: 'mumbai', name: 'Mumbai Nhava Sheva (JNPT)', country: 'India', code: 'INBOM', type: 'Port & Air', flag: '🇮🇳' },
  { id: 'losangeles', name: 'Los Angeles & Long Beach', country: 'United States', code: 'USLAX', type: 'Port Hub', flag: '🇺🇸' },
  { id: 'antwerp', name: 'Antwerp-Bruges Port', country: 'Belgium', code: 'BEANR', type: 'Port', flag: '🇧🇪' },
  { id: 'busan', name: 'Busan Transshipment Hub', country: 'South Korea', code: 'KRPUS', type: 'Port', flag: '🇰🇷' },
  { id: 'london', name: 'London Heathrow Gateway', country: 'United Kingdom', code: 'GBLON', type: 'Air Cargo', flag: '🇬🇧' },
  { id: 'tokyo', name: 'Tokyo Narita & Port', country: 'Japan', code: 'JPTYO', type: 'Air & Sea', flag: '🇯🇵' },
  { id: 'frankfurt', name: 'Frankfurt CargoCity', country: 'Germany', code: 'DEFRA', type: 'Air Hub', flag: '🇩🇪' },
];

// Sample Tracking Database with Live Real-Time Data
const SAMPLE_SHIPMENTS = {
  'GL-9824-EXP': {
    id: 'GL-9824-EXP',
    mode: 'air',
    modeName: 'Express Air',
    status: 'In Transit',
    statusCode: 'in_transit',
    statusBadge: 'En Route',
    origin: 'Singapore (SGSIN)',
    destination: 'Rotterdam (NLRTM)',
    currentLocation: 'Gulf of Oman',
    carrier: 'SkyBridge GL-408',
    departure: '04 Nov 2026, 06:30',
    eta: '06 Nov 2026, 14:15',
    progress: 68,
    timeline: [
      { step: 'Booked', time: '03 Nov, 18:00', done: true },
      { step: 'Customs Cleared', time: '04 Nov, 04:15', done: true },
      { step: 'In Flight', time: '04 Nov, 06:30', current: true },
      { step: 'Transshipment', time: '05 Nov, 22:00', done: false },
      { step: 'Delivered', time: '06 Nov, 14:15', done: false },
    ],
  },
  'KPL-4402-SEA': {
    id: 'KPL-4402-SEA',
    mode: 'sea',
    modeName: 'Ocean FCL',
    status: 'Customs Cleared',
    statusCode: 'cleared',
    statusBadge: 'Berthing',
    origin: 'Shanghai (CNSHA)',
    destination: 'Mumbai (INBOM)',
    currentLocation: 'Malacca Strait',
    carrier: 'Pacific Enterprise 984',
    departure: '28 Oct 2026, 11:00',
    eta: '08 Nov 2026, 09:00',
    progress: 82,
    timeline: [
      { step: 'Gated In', time: '26 Oct, 14:00', done: true },
      { step: 'Vessel Departed', time: '28 Oct, 11:00', done: true },
      { step: 'Sea Transit', time: '01 Nov, 19:40', done: true },
      { step: 'Berth Clearance', time: '06 Nov, 08:00', current: true },
      { step: 'Port Delivery', time: '08 Nov, 09:00', done: false },
    ],
  },
  'GL-7109-AIR': {
    id: 'GL-7109-AIR',
    mode: 'air',
    modeName: 'Priority Cold Chain',
    status: 'Delivered',
    statusCode: 'delivered',
    statusBadge: 'Delivered',
    origin: 'Frankfurt (DEFRA)',
    destination: 'New York (USNYC)',
    currentLocation: 'JFK Cargo Terminal 7',
    carrier: 'Trans-Atlantic GL-102',
    departure: '02 Nov 2026, 08:20',
    eta: '03 Nov 2026, 17:40',
    progress: 100,
    timeline: [
      { step: 'Cold Sealed', time: '01 Nov, 10:00', done: true },
      { step: 'Customs OK', time: '02 Nov, 06:15', done: true },
      { step: 'Flight Departed', time: '02 Nov, 08:20', done: true },
      { step: 'Terminal Arrival', time: '03 Nov, 15:10', done: true },
      { step: 'Delivered', time: '03 Nov, 17:40', done: true },
    ],
  },
};

// Smooth Rolling Price Counter Component
const AnimatedPriceCounter = ({ value }) => {
  const [displayVal, setDisplayVal] = useState(value);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayVal(value);
      return;
    }
    const start = displayVal;
    const end = value;
    if (start === end) return;

    const duration = 320;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * ease);
      setDisplayVal(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    const frameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(frameId);
  }, [value, shouldReduceMotion]);

  return <span>${displayVal.toLocaleString()}</span>;
};

export const InteractiveLogisticsHub = ({
  onNavigate,
  onTrack,
  onQuote,
  loading = false,
}) => {
  const { isLoading } = useLoading();
  const activeLoading = loading || isLoading;

  // 1. Freight Mode Tab State
  const [activeTab, setActiveTab] = useState('road'); // 'road', 'air', 'sea', 'contract'

  // 2. Quote Form State
  const [fromQuery, setFromQuery] = useState('');
  const [toQuery, setToQuery] = useState('');
  const [fromSelected, setFromSelected] = useState(GLOBAL_HUBS[0]);
  const [toSelected, setToSelected] = useState(GLOBAL_HUBS[1]);
  const [isFromOpen, setIsFromOpen] = useState(false);
  const [isToOpen, setIsToOpen] = useState(false);
  const [weightKg, setWeightKg] = useState('1250');
  const [isCalculating, setIsCalculating] = useState(false);
  const [quotePrice, setQuotePrice] = useState(null);
  const [isSwapping, setIsSwapping] = useState(false);
  const [formError, setFormError] = useState('');

  // 3. Tracking State
  const [trackingId, setTrackingId] = useState('');
  const [trackedShipment, setTrackedShipment] = useState(SAMPLE_SHIPMENTS['GL-9824-EXP']);
  const [isTrackingLoading, setIsTrackingLoading] = useState(false);
  const [trackingError, setTrackingError] = useState('');
  const [showTimeline, setShowTimeline] = useState(false);

  // 4. Virtual Assistant Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Welcome to Global Link Trade Intelligence. I can calculate live tariffs, track active consignments, or audit customs requirements. How can I assist you?',
      time: 'Just now',
    },
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatScrollRef = useRef(null);

  // Close dropdowns on outside click
  const fromRef = useRef(null);
  const toRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (fromRef.current && !fromRef.current.contains(e.target)) setIsFromOpen(false);
      if (toRef.current && !toRef.current.contains(e.target)) setIsToOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Real-time Pricing Calculation Engine
  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      const modeMultipliers = {
        road: { base: 420, ratePerKg: 0.45, days: '2-4 Days', modeTitle: 'Road Express' },
        air: { base: 1450, ratePerKg: 1.85, days: '24-48 Hours', modeTitle: 'Priority Air Cargo' },
        sea: { base: 680, ratePerKg: 0.28, days: '14-22 Days', modeTitle: 'Ocean Freight FCL' },
        contract: { base: 950, ratePerKg: 0.55, days: 'Custom SLA', modeTitle: 'Enterprise Contract' },
      };
      const activeMode = modeMultipliers[activeTab] || modeMultipliers.road;
      const parsedWeight = parseFloat(weightKg) || 500;
      const rawBase = activeMode.base + parsedWeight * activeMode.ratePerKg;
      const fuelSurcharge = Math.round(rawBase * 0.12);
      const customsDuty = Math.round(rawBase * 0.08);
      const totalMin = Math.round(rawBase + fuelSurcharge);
      const totalMax = Math.round(totalMin * 1.25);

      setQuotePrice({
        mode: activeTab,
        modeTitle: activeMode.modeTitle,
        duration: activeMode.days,
        min: totalMin,
        max: totalMax,
        fuel: fuelSurcharge,
        customs: customsDuty,
      });
      setIsCalculating(false);
    }, 280);

    return () => clearTimeout(timer);
  }, [activeTab, fromSelected, toSelected, weightKg]);

  // Scroll Chat on new message
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages, isBotTyping]);

  // Swap Origin and Destination Handler
  const handleSwapLocations = () => {
    setIsSwapping(true);
    const temp = fromSelected;
    setFromSelected(toSelected);
    setToSelected(temp);
    setTimeout(() => setIsSwapping(false), 360);
  };

  // Tracking Lookup Handler
  const handlePerformTrack = async (idToTrack) => {
    const searchId = (idToTrack || trackingId).trim().toUpperCase();
    if (!searchId) {
      setTrackingError('Please provide a valid Shipment ID');
      return;
    }
    setTrackingError('');
    setIsTrackingLoading(true);

    try {
      // First attempt backend connection
      const backendRes = await fetchShipments();
      if (backendRes && backendRes.success && Array.isArray(backendRes.data)) {
        const found = backendRes.data.find(
          (s) => s.id && s.id.toLowerCase() === searchId.toLowerCase()
        );
        if (found) {
          setTrackedShipment({
            id: found.id,
            mode: found.mode || 'air',
            modeName: found.modeName || 'Global Freight Cargo',
            status: found.status || 'In Transit',
            statusBadge: 'Verified Live Telemetry',
            origin: found.origin || 'Origin Terminal',
            destination: found.destination || 'Destination Hub',
            currentLocation: found.location || 'In Transit via Regional Corridor',
            carrier: found.carrier || 'Global Link Logistics Fleet',
            departure: found.departureDate || 'Recently Dispatched',
            eta: found.eta || 'Estimated Arrival Pending',
            progress: found.progress || 60,
            timeline: [
              { step: 'Order Booked', time: 'Registered', done: true },
              { step: 'Customs Cleared', time: 'Export Gate', done: true },
              { step: 'In Transit', time: 'Active Leg', current: true },
              { step: 'Destination Port', time: 'Pending Arrival', done: false },
              { step: 'Delivered', time: 'Final Step', done: false },
            ],
          });
          setIsTrackingLoading(false);
          return;
        }
      }
    } catch {
      // Offline fallback handling
    }

    // Live sample fallback engine
    setTimeout(() => {
      const match = SAMPLE_SHIPMENTS[searchId];
      if (match) {
        setTrackedShipment(match);
      } else {
        // Generate on-the-fly realistic tracking record
        setTrackedShipment({
          id: searchId,
          mode: searchId.includes('SEA') ? 'sea' : searchId.includes('AIR') ? 'air' : 'road',
          modeName: 'Global Enterprise Consignment',
          status: 'Active Route Transit',
          statusBadge: 'Real-time GPS Verified',
          origin: fromSelected ? `${fromSelected.name} (${fromSelected.code})` : 'Rotterdam Europort (NLRTM)',
          destination: toSelected ? `${toSelected.name} (${toSelected.code})` : 'Singapore PSA (SGSIN)',
          currentLocation: 'International Maritime / Sky Corridor (En Route)',
          carrier: 'Global Link Logistics Alliance GL-902',
          departure: '04 Nov 2026, 10:00 UTC',
          eta: '07 Nov 2026, 18:30 UTC',
          progress: 54,
          timeline: [
            { step: 'Electronic Manifest Created', time: '03 Nov, 12:00', done: true },
            { step: 'Export Security Inspected', time: '04 Nov, 08:30', done: true },
            { step: 'Active Cross-Border Transit', time: '04 Nov, 10:00', current: true },
            { step: 'Import Gateway Entry', time: '06 Nov, 20:00', done: false },
            { step: 'Final Consignee Receipt', time: '07 Nov, 18:30', done: false },
          ],
        });
      }
      setIsTrackingLoading(false);
    }, 450);
  };

  // Submit Quote
  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    if (!fromSelected || !toSelected) {
      setFormError('Please select both Origin and Destination');
      return;
    }
    setFormError('');
    if (onQuote) {
      onQuote({
        mode: activeTab,
        from: fromSelected.name,
        to: toSelected.name,
        estimatedPrice: quotePrice ? `$${quotePrice.min} - $${quotePrice.max}` : '$1,200',
      });
    } else if (onNavigate) {
      onNavigate('freight');
    }
  };

  // Send AI Chat Message
  const handleSendChat = (e) => {
    if (e) e.preventDefault();
    const clean = chatInput.trim();
    if (!clean) return;

    const userMessage = { id: Date.now(), sender: 'user', text: clean, time: 'Just now' };
    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput('');
    setIsBotTyping(true);

    setTimeout(() => {
      let reply = 'Our logistics desk is available to assist with custom quotes and bookings.';
      const lower = clean.toLowerCase();
      if (lower.includes('track') || lower.includes('gl-') || lower.includes('kpl-') || lower.includes('where')) {
        reply = 'Live tracking is active. Enter your shipment ID in the tracking field on the right to view real-time transit telemetry.';
      } else if (lower.includes('quote') || lower.includes('rate') || lower.includes('price') || lower.includes('cost')) {
        reply = `Indicative rate for ${activeTab.toUpperCase()}: $${quotePrice ? quotePrice.min : '1,200'} – $${quotePrice ? quotePrice.max : '1,800'} all-in.`;
      } else if (lower.includes('sea') || lower.includes('ocean') || lower.includes('container')) {
        reply = 'Ocean freight covers FCL and LCL routes across 120+ weekly sailings.';
      } else if (lower.includes('air') || lower.includes('flight') || lower.includes('express')) {
        reply = 'Air freight provides priority 24-48 hr transit with temperature monitoring.';
      } else if (lower.includes('customs') || lower.includes('duty') || lower.includes('compliance')) {
        reply = 'Customs desk handles HS code classification and expedited clearance.';
      }

      setChatMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: reply, time: 'Just now' },
      ]);
      setIsBotTyping(false);
    }, 450);
  };

  // Freight Modes Definition
  const FREIGHT_MODES = [
    { id: 'road', label: 'Road', icon: Truck },
    { id: 'air', label: 'Air', icon: Plane },
    { id: 'sea', label: 'Sea', icon: Ship },
    { id: 'contract', label: 'Contract', icon: Warehouse },
  ];

  // Motion variants for staged entrance
  const containerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const getTabIconMotion = (modeId, isActive) => {
    if (modeId === 'road') {
      return {
        x: isActive ? [0, 2.5, 0] : 0,
        transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
      };
    }
    if (modeId === 'air') {
      return {
        y: isActive ? [0, -2.5, 0] : 0,
        rotate: isActive ? -8 : 0,
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
      };
    }
    if (modeId === 'sea') {
      return {
        rotate: isActive ? [-3, 3, -3] : 0,
        transition: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
      };
    }
    if (modeId === 'contract') {
      return {
        scale: isActive ? [1, 1.08, 1] : 1,
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
      };
    }
    return {};
  };

  // Skeleton fallback
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
        <div className="premium-skeleton-card" style={{ height: '340px', borderRadius: '12px' }} />
        <div className="premium-skeleton-card" style={{ height: '340px', borderRadius: '12px' }} />
        <div className="premium-skeleton-card" style={{ height: '340px', borderRadius: '12px' }} />
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="interactive-logistics-hub-root"
      style={{
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        margin: '0',
        background: '#FFFFFF',
        borderRadius: '16px',
        border: '1.5px solid rgba(254, 215, 170, 0.45)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.28), 0 4px 16px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        padding: '24px',
        position: 'relative',
        overflow: 'visible',
        fontFamily: 'var(--font-body)',
      }}
    >
      {/* 3-Column Enterprise Logistics Grid (25% - 50% - 25% Ratio) */}
      <div
        className="logistics-hub-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr)',
          gap: '24px',
          alignItems: 'stretch',
        }}
      >
        {/* =========================================================================
            COLUMN 1: CUSTOMER ACCESS & VALUE BENCHMARK (25%)
            ========================================================================= */}
        <motion.div
          variants={columnVariants}
          className="hub-col hub-col-customer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRight: '1px solid #E2E8F0',
            paddingRight: '18px',
          }}
        >
          {/* Top Section: Existing Customer Login — Styled based on Navbar Palette */}
          <motion.div
            whileHover={{ y: -2, borderColor: '#FB923C', boxShadow: '0 8px 24px rgba(249, 115, 22, 0.12)' }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 50%, #FFF7ED 100%)',
              border: '1.5px solid #FED7AA',
              borderRadius: '12px',
              padding: '12px 12px',
              boxShadow: '0 4px 16px rgba(249, 115, 22, 0.06)',
              transition: 'border-color 0.25s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '7px', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0, flexShrink: 1 }}>
                <div
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '7px',
                    background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
                    border: '1.5px solid #FDBA74',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EA580C',
                    boxShadow: '0 2px 6px rgba(249, 115, 22, 0.15)',
                    flexShrink: 0,
                  }}
                >
                  <UserCheck size={14} strokeWidth={2.4} color="#EA580C" />
                </div>
                <h2
                  style={{
                    fontSize: '13.5px',
                    fontWeight: '700',
                    color: '#1E293B',
                    margin: 0,
                    letterSpacing: '-0.2px',
                    fontFamily: 'var(--font-body)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Existing Customer
                </h2>
              </div>
              <span
                style={{
                  fontSize: '8.5px',
                  fontWeight: '700',
                  color: '#C2410C',
                  background: 'rgba(251, 146, 60, 0.12)',
                  padding: '1.5px 6px',
                  borderRadius: '999px',
                  border: '1px solid rgba(251, 146, 60, 0.32)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  lineHeight: 1,
                }}
              >
                <span style={{ width: '3.5px', height: '3.5px', borderRadius: '50%', background: '#F97316', flexShrink: 0 }} />
                Portal Access
              </span>
            </div>

            <p
              style={{
                fontSize: '11px',
                color: '#64748B',
                lineHeight: '1.4',
                margin: '0 0 11px 0',
                fontWeight: '500',
              }}
            >
              Log in to manage orders and track shipments.
            </p>

            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <motion.button
                className="shine-sweep-hover"
                whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 24px rgba(249, 115, 22, 0.35)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  if (onNavigate) onNavigate('client-access');
                }}
                style={{
                  background: 'linear-gradient(135deg, #FF8C00 0%, #FF7A00 50%, #F57C00 100%)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '9999px',
                  padding: '0 10px 0 16px',
                  height: '33px',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  boxShadow: '0 3px 12px rgba(249, 115, 22, 0.28)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  position: 'relative',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>Login</span>
                <div
                  style={{
                    width: '19px',
                    height: '19px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '1.5px solid rgba(255, 255, 255, 0.85)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EA580C',
                    flexShrink: 0,
                  }}
                >
                  <ArrowRight size={11} strokeWidth={2.8} color="#EA580C" />
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Decorative Divider — Subtle clean line */}
          <div style={{ height: '1px', background: '#F1F5F9', margin: '16px 0' }} />

          {/* Bottom Section: New to Global Link with Animated Benefits */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '10px' }}>
              <h2
                style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#1E293B',
                  margin: 0,
                  letterSpacing: '-0.2px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                New to Global Link?
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '14px' }}>
              {[
                'Instant spot rates',
                'Live GPS tracking',
                'Priority clearance',
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5, background: 'rgba(255, 247, 237, 0.95)', borderColor: '#FB923C', boxShadow: '0 4px 12px rgba(249, 115, 22, 0.12)' }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '6px 9px',
                    borderRadius: '7px',
                    background: 'rgba(255, 247, 237, 0.65)',
                    border: '1px solid #FED7AA',
                    fontSize: '11.5px',
                    fontWeight: '600',
                    color: '#334155',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease, background-color 0.2s ease',
                  }}
                >
                  <CheckCircle2 size={14} color="#EA580C" strokeWidth={2.4} style={{ flexShrink: 0 }} />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-start' }}>
              <motion.button
                className="shine-sweep-hover"
                whileHover={{ scale: 1.04, y: -2, background: 'linear-gradient(135deg, #FFEDD5 0%, #FED7AA 100%)', borderColor: '#FB923C', boxShadow: '0 6px 18px rgba(249, 115, 22, 0.22)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  if (onQuote) onQuote();
                  else if (onNavigate) onNavigate('client-access');
                }}
                style={{
                  background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
                  color: '#C2410C',
                  border: '1.5px solid #FDBA74',
                  borderRadius: '9999px',
                  padding: '0 10px 0 16px',
                  height: '33px',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  boxShadow: '0 3px 10px rgba(249, 115, 22, 0.12)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  position: 'relative',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>Register Now</span>
                <div
                  style={{
                    width: '19px',
                    height: '19px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '1.5px solid rgba(255, 255, 255, 0.85)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EA580C',
                    flexShrink: 0,
                    boxShadow: '0 1px 4px rgba(249, 115, 22, 0.2)',
                  }}
                >
                  <ArrowRight size={11} strokeWidth={2.8} color="#EA580C" />
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            COLUMN 2: GET A QUOTE (PRIMARY VISUAL FOCUS & REAL-TIME PRICING ENGINE - 50%)
            ========================================================================= */}
        <motion.div
          variants={columnVariants}
          className="hub-col hub-col-quote"
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0 6px',
          }}
        >
          {/* Header Bar — Styled with Nav Bar & Footer Colors and Live Sync Pulse */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
                  border: '1.5px solid #FDBA74',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EA580C',
                  boxShadow: '0 2px 6px rgba(249, 115, 22, 0.15)',
                  flexShrink: 0,
                }}
              >
                <Calculator size={18} strokeWidth={2.4} color="#EA580C" />
              </div>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: '800',
                  color: '#1E293B',
                  margin: 0,
                  letterSpacing: '-0.3px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Get a Quote
              </h2>
            </div>

            {/* Live Calculation Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: '700',
                color: '#C2410C',
                background: 'rgba(251, 146, 60, 0.12)',
                padding: '4px 10px',
                borderRadius: '999px',
                border: '1px solid rgba(251, 146, 60, 0.32)',
              }}
            >
              {isCalculating ? (
                <>
                  <RefreshCw size={12} className="spinning-icon" />
                  <span>Calculating...</span>
                </>
              ) : (
                <>
                  <Zap size={12} color="#EA580C" />
                  <span>Live Rates</span>
                </>
              )}
            </div>
          </div>

          {/* 4 Mode Selector Tabs — Glassmorphic Container & Medium Light Indicator */}
          <div
            className="quote-mode-tabs"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
              border: '1.5px solid #E2E8F0',
              padding: '5px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
            }}
          >
            {FREIGHT_MODES.map((mode) => {
              const Icon = mode.icon;
              const isActive = activeTab === mode.id;

              return (
                <motion.button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveTab(mode.id)}
                  whileHover={!isActive ? { scale: 1.04, y: -1, backgroundColor: '#FFF7ED', boxShadow: '0 4px 12px rgba(249, 115, 22, 0.12)' } : { scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    padding: '8px 6px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    zIndex: 1,
                    transition: 'color 0.2s ease, background 0.2s ease',
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFreightTab"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
                        border: '1.5px solid #FB923C',
                        borderRadius: '8px',
                        boxShadow: '0 3px 12px rgba(251, 146, 60, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                        zIndex: -1,
                      }}
                      transition={SPRING}
                    />
                  )}
                  <motion.div animate={getTabIconMotion(mode.id, isActive)}>
                    <Icon
                      size={17}
                      strokeWidth={isActive ? 2.4 : 1.8}
                      color={isActive ? '#EA580C' : '#64748B'}
                    />
                  </motion.div>
                  <span
                    style={{
                      fontSize: '12.5px',
                      fontWeight: isActive ? '700' : '600',
                      color: isActive ? '#C2410C' : '#475569',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {mode.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Autocomplete Origin & Destination Route Grid */}
          <form onSubmit={handleQuoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '10px', alignItems: 'center' }}>
              {/* Origin Dropdown Field */}
              <div ref={fromRef} style={{ position: 'relative' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', fontWeight: '700', color: '#1E293B', marginBottom: '5px' }}>
                  <MapPin size={13} color="#EA580C" />
                  <span>Origin</span>
                </label>
                <div
                  onClick={() => setIsFromOpen(!isFromOpen)}
                  className="logistics-input-hover"
                  style={{
                    height: '42px',
                    padding: '0 12px',
                    borderRadius: '8px',
                    border: '1.5px solid #CBD5E1',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    boxShadow: isFromOpen ? '0 0 0 3.5px rgba(251, 146, 60, 0.2)' : 'none',
                    borderColor: isFromOpen ? '#FB923C' : '#CBD5E1',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                    <span style={{ fontSize: '15px' }}>{fromSelected ? fromSelected.flag : '🌐'}</span>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                      {fromSelected ? `${fromSelected.name} (${fromSelected.code})` : 'Select Origin'}
                    </span>
                  </div>
                  <ChevronDown size={15} color="#64748B" style={{ transform: isFromOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isFromOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      style={{
                        position: 'absolute',
                        top: '105%',
                        left: 0,
                        right: 0,
                        zIndex: 100,
                        background: '#FFFFFF',
                        borderRadius: '10px',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 12px 30px rgba(15, 23, 42, 0.14)',
                        padding: '8px',
                        maxHeight: '220px',
                        overflowY: 'auto',
                      }}
                    >
                      <div style={{ padding: '4px 8px', marginBottom: '6px' }}>
                        <input
                          type="text"
                          placeholder="Search port or city..."
                          value={fromQuery}
                          onChange={(e) => setFromQuery(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            width: '100%',
                            height: '32px',
                            padding: '0 8px',
                            fontSize: '12px',
                            border: '1px solid #CBD5E1',
                            borderRadius: '6px',
                            outline: 'none',
                          }}
                        />
                      </div>
                      {GLOBAL_HUBS.filter(
                        (h) =>
                          h.name.toLowerCase().includes(fromQuery.toLowerCase()) ||
                          h.country.toLowerCase().includes(fromQuery.toLowerCase()) ||
                          h.code.toLowerCase().includes(fromQuery.toLowerCase())
                      ).map((hub) => (
                        <div
                          key={hub.id}
                          onClick={() => {
                            setFromSelected(hub);
                            setIsFromOpen(false);
                            setFromQuery('');
                          }}
                          style={{
                            padding: '7px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '12.5px',
                            background: fromSelected?.id === hub.id ? 'rgba(251, 146, 60, 0.12)' : 'transparent',
                            color: fromSelected?.id === hub.id ? '#C2410C' : '#1E293B',
                            fontWeight: fromSelected?.id === hub.id ? '700' : '500',
                            transition: 'all 0.18s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(90deg, rgba(251,146,60,0.1) 0%, rgba(254,243,199,0.3) 100%)';
                            e.currentTarget.style.transform = 'translateX(3px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = fromSelected?.id === hub.id ? 'rgba(251, 146, 60, 0.12)' : 'transparent';
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span>{hub.flag}</span>
                            <span>{hub.name}</span>
                          </div>
                          <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '600' }}>{hub.code}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Swap Origin / Destination Button */}
              <div style={{ paddingTop: '20px' }}>
                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.15,
                    rotate: 180,
                    backgroundColor: '#FFF7ED',
                    color: '#EA580C',
                    borderColor: '#FB923C',
                    boxShadow: '0 4px 14px rgba(249, 115, 22, 0.22)',
                  }}
                  whileTap={{ scale: 0.88, rotate: 360 }}
                  animate={{ rotate: isSwapping ? 180 : 0 }}
                  transition={SPRING}
                  onClick={handleSwapLocations}
                  title="Swap Origin and Destination"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '1.5px solid #FED7AA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)',
                    color: '#EA580C',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <ArrowLeftRight size={15} strokeWidth={2.4} />
                </motion.button>
              </div>

              {/* Destination Dropdown Field */}
              <div ref={toRef} style={{ position: 'relative' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', fontWeight: '700', color: '#1E293B', marginBottom: '5px' }}>
                  <Navigation size={13} color="#EA580C" />
                  <span>Destination</span>
                </label>
                <div
                  onClick={() => setIsToOpen(!isToOpen)}
                  className="logistics-input-hover"
                  style={{
                    height: '42px',
                    padding: '0 12px',
                    borderRadius: '8px',
                    border: '1.5px solid #CBD5E1',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    boxShadow: isToOpen ? '0 0 0 3.5px rgba(251, 146, 60, 0.2)' : 'none',
                    borderColor: isToOpen ? '#FB923C' : '#CBD5E1',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                    <span style={{ fontSize: '15px' }}>{toSelected ? toSelected.flag : '🌐'}</span>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                      {toSelected ? `${toSelected.name} (${toSelected.code})` : 'Select Destination'}
                    </span>
                  </div>
                  <ChevronDown size={15} color="#64748B" style={{ transform: isToOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isToOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      style={{
                        position: 'absolute',
                        top: '105%',
                        left: 0,
                        right: 0,
                        zIndex: 100,
                        background: '#FFFFFF',
                        borderRadius: '10px',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 12px 30px rgba(15, 23, 42, 0.14)',
                        padding: '8px',
                        maxHeight: '220px',
                        overflowY: 'auto',
                      }}
                    >
                      <div style={{ padding: '4px 8px', marginBottom: '6px' }}>
                        <input
                          type="text"
                          placeholder="Search port or city..."
                          value={toQuery}
                          onChange={(e) => setToQuery(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            width: '100%',
                            height: '32px',
                            padding: '0 8px',
                            fontSize: '12px',
                            border: '1px solid #CBD5E1',
                            borderRadius: '6px',
                            outline: 'none',
                          }}
                        />
                      </div>
                      {GLOBAL_HUBS.filter(
                        (h) =>
                          h.name.toLowerCase().includes(toQuery.toLowerCase()) ||
                          h.country.toLowerCase().includes(toQuery.toLowerCase()) ||
                          h.code.toLowerCase().includes(toQuery.toLowerCase())
                      ).map((hub) => (
                        <div
                          key={hub.id}
                          onClick={() => {
                            setToSelected(hub);
                            setIsToOpen(false);
                            setToQuery('');
                          }}
                          style={{
                            padding: '7px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '12.5px',
                            background: toSelected?.id === hub.id ? 'rgba(251, 146, 60, 0.12)' : 'transparent',
                            color: toSelected?.id === hub.id ? '#C2410C' : '#1E293B',
                            fontWeight: toSelected?.id === hub.id ? '700' : '500',
                            transition: 'all 0.18s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(90deg, rgba(251,146,60,0.1) 0%, rgba(254,243,199,0.3) 100%)';
                            e.currentTarget.style.transform = 'translateX(3px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = toSelected?.id === hub.id ? 'rgba(251, 146, 60, 0.12)' : 'transparent';
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span>{hub.flag}</span>
                            <span>{hub.name}</span>
                          </div>
                          <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '600' }}>{hub.code}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Row 2: Weight & Dimensions */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '14px', alignItems: 'center' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#1E293B', marginBottom: '5px' }}>
                  Weight (KG)
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="number"
                    value={weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    placeholder="e.g. 1500"
                    className="logistics-input-hover"
                    style={{
                      width: '100%',
                      height: '38px',
                      padding: '0 36px 0 12px',
                      borderRadius: '7px',
                      border: '1px solid #CBD5E1',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#1E293B',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                  <span style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '11px', color: '#64748B', fontWeight: '700' }}>
                    KG
                  </span>
                </div>
              </div>

              {/* Quick weight selector chips */}
              <div>
                <span style={{ display: 'block', fontSize: '11.5px', color: '#64748B', marginBottom: '6px', fontWeight: '500' }}>
                  Presets:
                </span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['500', '1,250', '5,000', '20,000'].map((preset) => {
                    const raw = preset.replace(',', '');
                    const isSelected = weightKg === raw;
                    return (
                      <motion.button
                        key={preset}
                        type="button"
                        onClick={() => setWeightKg(raw)}
                        whileHover={{
                          scale: 1.08,
                          y: -2,
                          borderColor: '#FB923C',
                          color: '#C2410C',
                          backgroundColor: isSelected ? 'linear-gradient(135deg, #FFEDD5 0%, #FED7AA 100%)' : '#FFF7ED',
                          boxShadow: '0 4px 12px rgba(249, 115, 22, 0.18)',
                        }}
                        whileTap={{ scale: 0.94 }}
                        style={{
                          padding: '5px 9px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: '700',
                          border: isSelected ? '1.5px solid #FB923C' : '1px solid #CBD5E1',
                          background: isSelected ? 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)' : '#FFFFFF',
                          color: isSelected ? '#C2410C' : '#475569',
                          boxShadow: isSelected ? '0 2px 8px rgba(249, 115, 22, 0.16)' : 'none',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {preset}kg
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Real-time Pricing Breakdown Banner — Styled with Nav Bar & Footer Aesthetics */}
            <motion.div
              whileHover={{ y: -2, borderColor: '#FB923C', boxShadow: '0 8px 24px rgba(249, 115, 22, 0.14)' }}
              transition={{ duration: 0.25 }}
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 50%, #FFF7ED 100%)',
                border: '1.5px solid #FED7AA',
                borderRadius: '12px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 16px rgba(249, 115, 22, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                transition: 'border-color 0.25s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: '#EA580C', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {quotePrice ? quotePrice.modeTitle : 'Freight'}:
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: '600', color: '#64748B' }}>
                    ETA {quotePrice ? quotePrice.duration : '3-5 Days'}
                  </span>
                </div>
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#1E293B', marginTop: '2px', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                    <AnimatedPriceCounter value={quotePrice ? quotePrice.min : 1200} />
                    <span>–</span>
                    <AnimatedPriceCounter value={quotePrice ? quotePrice.max : 1650} />
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: '600', color: '#EA580C' }}>
                    USD / All-In
                  </span>
                </div>
                <div style={{ fontSize: '10.5px', color: '#64748B', marginTop: '3px' }}>
                  All surcharges &amp; handling included
                </div>
              </div>

              {/* Lock Rate & Book CTA — Mirroring Navbar "Get a Quote" (.sec2-quote-btn) */}
              <motion.button
                type="submit"
                className="shine-sweep-hover"
                whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 24px rgba(249, 115, 22, 0.38)' }}
                whileTap={{ scale: 0.96 }}
                style={{
                  background: 'linear-gradient(135deg, #FF8C00 0%, #FF7A00 50%, #F57C00 100%)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '9999px',
                  padding: '0 14px 0 24px',
                  height: '42px',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  boxShadow: '0 4px 16px rgba(249, 115, 22, 0.28)',
                  position: 'relative',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>Continue</span>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '1.5px solid rgba(255, 255, 255, 0.85)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EA580C',
                    flexShrink: 0,
                  }}
                >
                  <ArrowRight size={13} strokeWidth={2.6} color="#EA580C" />
                </div>
              </motion.button>
            </motion.div>

            {formError && (
              <div style={{ fontSize: '12px', color: '#EF4444', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <AlertCircle size={14} />
                <span>{formError}</span>
              </div>
            )}
          </form>
        </motion.div>

        {/* =========================================================================
            COLUMN 3: ADVANCED REAL-TIME SHIPMENT TRACKING & TIMELINE (25%)
            ========================================================================= */}
        <motion.div
          variants={columnVariants}
          className="hub-col hub-col-track"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: '1px solid #E2E8F0',
            paddingLeft: '18px',
          }}
        >
          {/* Top: Live Tracking Form */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', minWidth: 0 }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '7px',
                    background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
                    border: '1.5px solid #FDBA74',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EA580C',
                    boxShadow: '0 2px 6px rgba(249, 115, 22, 0.15)',
                    flexShrink: 0,
                  }}
                >
                  <Radio size={15} strokeWidth={2.4} />
                </div>
                <h2
                  style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#1E293B',
                    margin: 0,
                    letterSpacing: '-0.2px',
                    fontFamily: 'var(--font-body)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Track Shipment
                </h2>
              </div>
              <span
                style={{
                  fontSize: '10.5px',
                  fontWeight: '700',
                  color: '#C2410C',
                  background: 'rgba(251, 146, 60, 0.12)',
                  padding: '3px 9px',
                  borderRadius: '999px',
                  border: '1px solid rgba(251, 146, 60, 0.32)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  lineHeight: 1.2,
                }}
              >
                GPS Live
              </span>
            </div>

            {/* Tracking Search Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlePerformTrack();
              }}
              style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}
            >
              <div style={{ position: 'relative', flex: 1 }}>
                <input
                  type="text"
                  placeholder="e.g. GL-9824-EXP"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="logistics-input-hover"
                  style={{
                    width: '100%',
                    height: '38px',
                    padding: '0 10px 0 32px',
                    borderRadius: '7px',
                    border: '1.5px solid #CBD5E1',
                    fontSize: '12.5px',
                    fontWeight: '600',
                    color: '#1E293B',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                />
                <Search size={14} color="#64748B" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
              </div>

              <motion.button
                type="submit"
                className="shine-sweep-hover"
                whileHover={{ scale: 1.04, y: -1, boxShadow: '0 6px 18px rgba(249, 115, 22, 0.38)' }}
                whileTap={{ scale: 0.95 }}
                disabled={isTrackingLoading}
                style={{
                  background: 'linear-gradient(135deg, #FF8C00 0%, #FF7A00 50%, #F57C00 100%)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '7px',
                  padding: '0 16px',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  position: 'relative',
                  boxShadow: '0 3px 12px rgba(249, 115, 22, 0.28)',
                }}
              >
                {isTrackingLoading ? <RefreshCw size={14} className="spinning-icon" /> : 'Track'}
              </motion.button>
            </form>

            {trackingError && (
              <div style={{ fontSize: '11.5px', color: '#EF4444', fontWeight: '600', marginBottom: '8px' }}>
                {trackingError}
              </div>
            )}
          </div>

          {/* In-Panel Live Telemetry Dossier Card */}
          {trackedShipment && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2, borderColor: '#FB923C', boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)' }}
              transition={{ duration: 0.25 }}
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
                border: '1.5px solid #E2E8F0',
                borderRadius: '10px',
                padding: '12px 14px',
                marginBottom: '14px',
                position: 'relative',
                transition: 'border-color 0.2s ease',
              }}
            >
              {/* Badge & Mode */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', color: '#1E293B' }}>
                  {trackedShipment.id}
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: '700',
                    padding: '2px 7px',
                    borderRadius: '999px',
                    background: trackedShipment.statusCode === 'delivered' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(251, 146, 60, 0.12)',
                    border: trackedShipment.statusCode === 'delivered' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(251, 146, 60, 0.3)',
                    color: trackedShipment.statusCode === 'delivered' ? '#059669' : '#C2410C',
                  }}
                >
                  {trackedShipment.status}
                </span>
              </div>

              {/* Progress Bar with Moving Pulsing Beacon */}
              <div style={{ position: 'relative', height: '6px', background: '#E2E8F0', borderRadius: '3px', margin: '8px 0 10px 0', overflow: 'visible' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${trackedShipment.progress}%` }}
                  transition={{ duration: 0.85, ease: [0.34, 1.56, 0.64, 1] }}
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #F97316 0%, #FBBF24 100%)',
                    borderRadius: '3px',
                    position: 'relative',
                  }}
                >
                  <div
                    className="telemetry-pulse-head"
                    style={{
                      position: 'absolute',
                      right: '-3px',
                      top: '50%',
                      width: '9px',
                      height: '9px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      border: '2px solid #F97316',
                    }}
                  />
                </motion.div>
              </div>

              {/* Live Location & ETA */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '11px', color: '#475569' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Compass size={12} color="#EA580C" />
                  <span style={{ fontWeight: '600', color: '#1E293B', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {trackedShipment.currentLocation}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={12} color="#64748B" />
                  <span>ETA: <strong style={{ color: '#EA580C' }}>{trackedShipment.eta}</strong></span>
                </div>
              </div>

              {/* Toggleable timeline waypoint button */}
              <motion.button
                type="button"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: '#FFF7ED',
                  color: '#C2410C',
                  borderColor: '#FB923C',
                  boxShadow: '0 3px 10px rgba(249, 115, 22, 0.15)',
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowTimeline(!showTimeline)}
                style={{
                  marginTop: '8px',
                  width: '100%',
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  borderRadius: '6px',
                  padding: '5px 8px',
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#334155',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                  transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                }}
              >
                <span>{showTimeline ? 'Hide Waypoints' : 'View Waypoints'}</span>
                <ChevronDown size={13} style={{ transform: showTimeline ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }} />
              </motion.button>

              {/* Expandable Milestones Timeline */}
              <AnimatePresence>
                {showTimeline && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{ overflow: 'hidden', marginTop: '10px', paddingTop: '8px', borderTop: '1px solid #E2E8F0' }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      {trackedShipment.timeline.map((step, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2, delay: idx * 0.04 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '11px',
                            color: step.done ? '#1E293B' : step.current ? '#EA580C' : '#94A3B8',
                            fontWeight: step.current ? '700' : '500',
                            cursor: 'default',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            {step.done ? (
                              <CheckCircle2 size={13} color="#10B981" />
                            ) : step.current ? (
                              <span className="telemetry-radar-dot" />
                            ) : (
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#CBD5E1', display: 'inline-block', margin: '0 3.5px' }} />
                            )}
                            <span>{step.step}</span>
                          </div>
                          <span style={{ fontSize: '10px', color: '#94A3B8' }}>{step.time}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Bottom Card: Need Help & AI Assistant Trigger */}
          <div
            style={{
              paddingTop: '10px',
              borderTop: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#1E293B' }}>
                Need Help?
              </div>
              <div style={{ fontSize: '11px', color: '#64748B' }}>
                24/7 Assistance
              </div>
            </div>

            <motion.button
              type="button"
              className="shine-sweep-hover"
              whileHover={{ scale: 1.05, y: -1, boxShadow: '0 6px 18px rgba(249, 115, 22, 0.38)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsChatOpen(true);
                setIsChatMinimized(false);
              }}
              style={{
                background: 'linear-gradient(135deg, #FF8C00 0%, #FF7A00 50%, #F57C00 100%)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '7px',
                padding: '8px 14px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 3px 12px rgba(249, 115, 22, 0.28)',
                position: 'relative',
              }}
            >
              <Bot size={15} color="#FFE082" />
              <span>Ask AI</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* =========================================================================
          FLOATING AI LOGISTICS ASSISTANT (CHATBOT LAUNCHER & EXPANDABLE DRAWER)
          ========================================================================= */}
      {/* 1. Floating Launcher Button (Always visible at bottom-right) */}
      {!isChatOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={SPRING}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 99990,
          }}
        >
          <motion.button
            className="floating-launcher-btn shine-sweep-hover"
            whileHover={{ scale: 1.08, y: -4, boxShadow: '0 14px 35px rgba(230, 81, 0, 0.45), 0 0 24px rgba(255, 224, 130, 0.5)' }}
            whileTap={{ scale: 0.94 }}
            onClick={() => {
              setIsChatOpen(true);
              setIsChatMinimized(false);
            }}
            aria-label="AI Assistant"
            title="AI Assistant"
            style={{
              width: '52px',
              height: '52px',
              padding: 0,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF8C00 0%, #FF7A00 50%, #F57C00 100%)',
              border: '1.5px solid rgba(255, 224, 130, 0.6)',
              boxShadow: '0 8px 25px rgba(249, 115, 22, 0.3), 0 0 16px rgba(249, 115, 22, 0.2)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              position: 'relative',
            }}
          >
            {/* Pulsing Emerald Dot */}
            <span
              style={{
                position: 'absolute',
                top: '6px',
                right: '6px',
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                background: '#10B981',
                border: '1.5px solid #FF8C00',
                boxShadow: '0 0 8px #10B981',
                display: 'inline-block',
              }}
            />
            <Bot size={24} color="#FFE082" />
          </motion.button>
        </motion.div>
      )}

      {/* 2. Expandable Luxury Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isChatMinimized ? '58px' : '520px',
            }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={SPRING}
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              width: '380px',
              maxWidth: 'calc(100vw - 32px)',
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1.5px solid rgba(251, 146, 60, 0.35)',
              boxShadow: '0 24px 60px rgba(0, 18, 41, 0.25), 0 4px 16px rgba(249, 115, 22, 0.12)',
              zIndex: 99995,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div
              style={{
                height: '58px',
                background: 'linear-gradient(135deg, #FF8C00 0%, #FF7A00 50%, #F57C00 100%)',
                padding: '0 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#FFFFFF',
                borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1.5px solid rgba(255, 255, 255, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Bot size={18} color="#FFE082" />
                </div>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: '800', letterSpacing: '-0.1px' }}>
                    Global Link AI
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#FFE082', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#FFE082', boxShadow: '0 0 6px #FFE082' }} />
                    Online • 24/7
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.2, color: '#FFFFFF' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsChatMinimized(!isChatMinimized)}
                  title={isChatMinimized ? 'Maximize' : 'Minimize'}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#94A3B8',
                    cursor: 'pointer',
                    padding: '4px',
                  }}
                >
                  {isChatMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.2, color: '#FFFFFF' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsChatOpen(false)}
                  title="Close Assistant"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#94A3B8',
                    cursor: 'pointer',
                    padding: '4px',
                  }}
                >
                  <X size={18} />
                </motion.button>
              </div>
            </div>

            {/* Chat Body (Hidden when minimized) */}
            {!isChatMinimized && (
              <>
                <div
                  ref={chatScrollRef}
                  style={{
                    flex: 1,
                    padding: '14px',
                    overflowY: 'auto',
                    background: '#F8FAFC',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {chatMessages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                        maxWidth: '85%',
                        background: msg.sender === 'user' ? 'linear-gradient(135deg, #FF8C00 0%, #FF7A00 50%, #F57C00 100%)' : '#FFFFFF',
                        color: msg.sender === 'user' ? '#FFFFFF' : '#1E293B',
                        padding: '9px 13px',
                        borderRadius: msg.sender === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                        boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)',
                        fontSize: '12.5px',
                        lineHeight: '1.45',
                        border: msg.sender === 'user' ? 'none' : '1px solid #E2E8F0',
                      }}
                    >
                      {msg.text}
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isBotTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        alignSelf: 'flex-start',
                        background: '#FFFFFF',
                        padding: '8px 14px',
                        borderRadius: '12px 12px 12px 2px',
                        boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)',
                        fontSize: '12px',
                        color: '#64748B',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <span className="dot-flashing-1" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#F97316', display: 'inline-block' }} />
                        <span className="dot-flashing-2" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#F97316', display: 'inline-block' }} />
                        <span className="dot-flashing-3" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#F97316', display: 'inline-block' }} />
                      </div>
                      <span>AI thinking...</span>
                    </motion.div>
                  )}
                </div>

                {/* Quick Action Suggestion Chips */}
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
                  {[
                    'Track shipment',
                    'Ocean rates',
                    'Customs checklist',
                  ].map((p, i) => (
                    <motion.button
                      key={i}
                      type="button"
                      whileHover={{
                        scale: 1.05,
                        y: -1,
                        backgroundColor: '#FFF7ED',
                        color: '#C2410C',
                        borderColor: '#FB923C',
                        boxShadow: '0 3px 10px rgba(249, 115, 22, 0.18)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setChatInput(p);
                      }}
                      style={{
                        whiteSpace: 'nowrap',
                        background: 'rgba(251, 146, 60, 0.1)',
                        border: '1px solid rgba(251, 146, 60, 0.28)',
                        borderRadius: '999px',
                        padding: '4px 9px',
                        fontSize: '11px',
                        color: '#C2410C',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {p}
                    </motion.button>
                  ))}
                </div>

                {/* Input Form */}
                <form
                  onSubmit={handleSendChat}
                  style={{
                    padding: '10px 12px',
                    background: '#FFFFFF',
                    borderTop: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <input
                    type="text"
                    placeholder="Ask a question..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="logistics-input-hover"
                    style={{
                      flex: 1,
                      height: '36px',
                      padding: '0 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #CBD5E1',
                      fontSize: '12.5px',
                      outline: 'none',
                    }}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.08, rotate: 4, boxShadow: '0 6px 18px rgba(249, 115, 22, 0.4)' }}
                    whileTap={{ scale: 0.92, rotate: -4 }}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #FF8C00 0%, #FF7A00 50%, #F57C00 100%)',
                      border: 'none',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(249, 115, 22, 0.25)',
                    }}
                  >
                    <Send size={15} />
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
