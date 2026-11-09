import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { Search, ChevronDown, Menu, X, ArrowRight, ExternalLink, Globe, User, LogIn, Lock, MapPin, Briefcase, ArrowUpRight, ArrowDownLeft, Truck, Settings, Building, Ship, Package, Plane, Calendar, Shield, Route, ChevronRight, FileText, Handshake, Warehouse, Cpu, Layers, Snowflake, ShoppingBag, Network, HardHat, Leaf, Shirt, Store, FlaskConical, Car, Laptop, HeartPulse, Apple, Users, Megaphone, BarChart2, Star, Award, GraduationCap, TrendingUp, PieChart, GitBranch, Box, Coffee, Factory, Sparkles, Headphones } from 'lucide-react';
import kplLogo from '../../../Images/KPL_Logo.png';

const LuxuryLoginIcon = ({ size = 26, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), filter 0.25s ease', flexShrink: 0 }}
  >
    {/* Executive Shield Outer Shell */}
    <path
      d="M12 3.2L19 6.2V11.5C19 15.8 16 19.8 12 21C8 19.8 5 15.8 5 11.5V6.2L12 3.2Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    {/* Inner Keyhole Circle */}
    <circle cx="12" cy="10.2" r="2.2" fill={color} />
    {/* Inner Keyhole Slot */}
    <path d="M11.1 11.5H12.9L13.3 15H10.7L11.1 11.5Z" fill={color} />
    {/* Golden Accent Dot */}
    <circle cx="12" cy="6.2" r="1.4" fill="#FFE082" />
  </svg>
);

export const Header = ({ onTrackClick, onQuoteClick, currentRoute = 'home', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [portalDropdownOpen, setPortalDropdownOpen] = useState(false);
  const [sec1PortalDropdownOpen, setSec1PortalDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click-outside: close Portal Logins dropdown
  const portalDropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (portalDropdownRef.current && !portalDropdownRef.current.contains(e.target)) {
        setSec1PortalDropdownOpen(false);
      }
    };
    if (sec1PortalDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sec1PortalDropdownOpen]);

  const topSectionUtilities = [
    { label: 'Find a Service Point', icon: ExternalLink, action: () => handleNavClick('network') },
    { label: 'India', icon: Globe, action: () => handleNavClick('network') },
  ];

  const primaryNavItems = [
    { label: 'Home', route: 'home', hasDropdown: false },
    {
      label: 'Book',
      route: 'freight',
      hasDropdown: true,
      subItems: [
        { label: 'Air & Ocean Freight', route: 'freight' },
        { label: 'Track Cargo (Live Status)', route: 'track-shipment' },
        { label: 'Warehousing & Storage', route: 'track-shipment' },
      ],
    },
    {
      label: 'Enterprise Logistics Services',
      route: 'services',
      hasDropdown: true,
      subItems: [
        { label: 'End-to-End Trade Solutions', route: 'services' },
        { label: 'Global Procurement Services', route: 'procurement' },
        { label: 'Customs & Trade Compliance', route: 'customs-compliance' },
        { label: 'Quality Assurance & Audits', route: 'quality' },
      ],
    },
    { label: 'Products', route: 'products', hasDropdown: true, subItems: [] },
    { label: 'Buyers', route: 'buyers', hasDropdown: true, subItems: [] },
    {
      label: 'Resources & Compliance',
      route: 'documentation',
      hasDropdown: true,
      subItems: [
        { label: 'Documentation & Compliance', route: 'documentation' },
        { label: 'Quality Assurance', route: 'quality' },
        { label: 'Global Network Map', route: 'network' },
      ],
    },
    { label: 'Careers', route: 'careers', hasDropdown: true, subItems: [] },
    {
      label: 'Our Company',
      route: 'about',
      hasDropdown: true,
      subItems: [
        { label: 'How Global Link Works', route: 'how-it-works' },
        { label: 'Why Businesses Choose Us', route: 'why-choose-us' },
        { label: 'Trusted Businesses Worldwide', route: 'trusted-businesses' },
        { label: 'Contact Global Team', route: 'business-global' },
      ],
    },
  ];

  const handleNavClick = (route) => {
    setOpenDropdown(null);
    setPortalDropdownOpen(false);
    setSec1PortalDropdownOpen(false);
    if (onNavigate) {
      if (route === 'network' || route === 'global-network') {
        onNavigate('network');
      } else if (route === 'why-choose-us' || route === 'advantages') {
        onNavigate('why-choose-us');
      } else if (route === 'trusted-businesses' || route === 'testimonials') {
        onNavigate('trusted-businesses');
      } else if (route === 'business-global' || route === 'cta') {
        onNavigate('business-global');
      } else if (route === 'customs-compliance' || route === 'compliance') {
        onNavigate('customs-compliance');
      } else if (route === 'track-shipment' || route === 'track-cargo' || route === 'tracking' || route === 'warehousing') {
        onNavigate('track-shipment');
      } else if (route === 'buyers' || route === 'global-buyers') {
        onNavigate('buyers');
      } else if (route === 'how-it-works' || route === 'about') {
        onNavigate('how-it-works');
      } else if (route === 'quality' || route === 'quality-assurance') {
        onNavigate('quality');
      } else if (route === 'resources' || route === 'documentation') {
        onNavigate('documentation');
      } else if (route === 'procurement') {
        onNavigate('procurement');
      } else if (route === 'products' || route === 'portfolio') {
        onNavigate('products');
      } else if (route === 'freight') {
        onNavigate('freight');
      } else if (route === 'services' || route === 'services-overview') {
        onNavigate('services');
      } else if (
        route === 'client-access' ||
        route === 'strategic-partners' ||
        route === 'global-export' ||
        route === 'global-import' ||
        route === 'supplier-network' ||
        route === 'logistics-operations' ||
        route === 'enterprise-employee' ||
        route === 'careers'
      ) {
        onNavigate(route);
      } else {
        onNavigate('home');
      }
    }
  };

  const isItemActive = (item) => {
    if (item.route === 'home' && currentRoute === 'home') return true;
    if (item.route === 'products' && (currentRoute === 'products' || currentRoute === 'portfolio')) return true;
    if (item.route === 'buyers' && currentRoute === 'buyers') return true;
    if (item.route === 'track-shipment' && currentRoute === 'track-shipment') return true;
    if (item.route === 'freight' && currentRoute === 'freight') return true;
    if (item.route === 'services' && (currentRoute === 'services' || currentRoute === 'procurement' || currentRoute === 'customs-compliance')) return true;
    if (item.route === 'about' && (currentRoute === 'how-it-works' || currentRoute === 'why-choose-us' || currentRoute === 'trusted-businesses')) return true;
    if (item.route === 'careers' && currentRoute === 'careers') return true;
    return false;
  };

  return (
    <>
      {/* Fixed Header Height Spacer (76px Top Section + 48px Bottom Section = 124px) */}
      <div style={{ height: '124px', width: '100%', flexShrink: 0 }} />

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100vw',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: isScrolled ? '0 6px 24px rgba(15, 23, 42, 0.12)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.2s ease',
        }}
      >
        {/* SECTION 1: TOP UTILITY BAR (FULL WIDTH EDGE-TO-EDGE - LUXURY SUNSET ORANGE GRADIENT WITH KPL LOGO) */}
        <div
          style={{
            width: '100%',
            height: '76px',
            background: 'linear-gradient(135deg, #FF6F00 0%, #FF8C00 45%, #E65100 100%)',
            borderBottom: '1px solid rgba(230, 81, 0, 0.4)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 4px 18px rgba(255, 111, 0, 0.22)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 36px',
            boxSizing: 'border-box',
          }}
        >
          {/* Top Bar Left: Prominent KPL Brand Logo Image */}
          <div onClick={() => handleNavClick('home')} style={{ cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <img
              src={kplLogo}
              alt="KPL Logo"
              style={{
                height: '58px',
                width: 'auto',
                maxHeight: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 3px 8px rgba(0, 0, 0, 0.25))',
                transition: 'transform 0.2s ease, filter 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.04)';
                e.currentTarget.style.filter = 'drop-shadow(0 6px 14px rgba(0, 0, 0, 0.35))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'drop-shadow(0 3px 8px rgba(0, 0, 0, 0.25))';
              }}
            />
          </div>

          {/* Top Bar Right: Clean Icon Utilities matching Reference Design */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {/* 1. Register Utility */}
            <button
              onClick={() => handleNavClick('about')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '13.5px',
                fontWeight: '600',
                color: '#FFFFFF',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFE082';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.transform = 'scale(1.18) translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.transform = 'scale(1) translateY(0)';
              }}
              className="desktop-nav"
            >
              {/* Register Icon: User-Add — Person silhouette with gold plus badge */}
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.2s ease', flexShrink: 0 }}>
                {/* Head */}
                <circle cx="9.5" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.7" />
                {/* Body arc */}
                <path d="M2 20.5C2 16.91 5.36 14 9.5 14C11.03 14 12.46 14.43 13.66 15.17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                {/* Gold plus badge circle */}
                <circle cx="19" cy="18" r="4" fill="#FFE082" />
                {/* Plus cross */}
                <path d="M19 15.5V20.5M16.5 18H21.5" stroke="#E65100" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span>Register</span>
            </button>

            {/* 2. Track Cargo — moved from Section-2 */}
            <button
              onClick={() => handleNavClick('track-shipment')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '13.5px',
                fontWeight: '600',
                color: (currentRoute === 'track-shipment' || currentRoute === 'track-cargo') ? '#FFE082' : '#FFFFFF',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFE082';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.transform = 'scale(1.18) translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                if (currentRoute !== 'track-shipment' && currentRoute !== 'track-cargo') {
                  e.currentTarget.style.color = '#FFFFFF';
                }
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.transform = 'scale(1) translateY(0)';
              }}
              className="desktop-nav"
            >
              <MapPin size={22} color={(currentRoute === 'track-shipment' || currentRoute === 'track-cargo') ? '#FFE082' : 'currentColor'} style={{ transition: 'transform 0.2s ease', flexShrink: 0 }} />
              <span style={{ borderBottom: (currentRoute === 'track-shipment' || currentRoute === 'track-cargo') ? '1.5px solid #FFE082' : 'none', paddingBottom: '2px' }}>Track Cargo</span>
            </button>

            {/* 3. Support Utility */}
            <button
              onClick={() => handleNavClick('contact')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '13.5px',
                fontWeight: '600',
                color: '#FFFFFF',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFE082';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.transform = 'scale(1.18) translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.transform = 'scale(1) translateY(0)';
              }}
              className="desktop-nav"
            >
              {/* Support Icon: Headset with mic wave */}
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.2s ease', flexShrink: 0 }}>
                <path d="M12 4C8.13 4 5 7.13 5 11V16C5 16.55 5.45 17 6 17H7C7.55 17 8 16.55 8 16V12C8 11.45 7.55 11 7 11H6.07C6.56 8.19 9.03 6 12 6C14.97 6 17.44 8.19 17.93 11H17C16.45 11 16 11.45 16 12V16C16 16.55 16.45 17 17 17H18C18.55 17 19 16.55 19 16V11C19 7.13 15.87 4 12 4Z" fill="currentColor" />
                <path d="M9 20C9 20.55 9.45 21 10 21H14C14.55 21 15 20.55 15 20V19C15 18.45 14.55 18 14 18H10C9.45 18 9 18.45 9 19V20Z" fill="currentColor" opacity="0.7" />
                <circle cx="19.5" cy="9.5" r="2.5" fill="#FFE082" />
                <path d="M18.7 9.5H20.3" stroke="#E65100" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span>Support</span>
            </button>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle Navigation"
              style={{
                color: '#001229',
                padding: '4px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* SECTION 2: PRIMARY NAVIGATION BAR */}
        <div
          style={{
            width: '100%',
            height: '50px',
            background: (currentRoute === 'home' && !isScrolled) 
              ? 'rgba(255, 255, 255, 0.08)' 
              : 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
            backdropFilter: (currentRoute === 'home' && !isScrolled) ? 'blur(12px)' : 'none',
            WebkitBackdropFilter: (currentRoute === 'home' && !isScrolled) ? 'blur(12px)' : 'none',
            borderBottom: (currentRoute === 'home' && !isScrolled)
              ? '1px solid rgba(255, 255, 255, 0.15)'
              : '1px solid #E2E8F0',
            boxShadow: (currentRoute === 'home' && !isScrolled)
              ? 'none'
              : '0 4px 16px rgba(15, 23, 42, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 32px',
            boxSizing: 'border-box',
            position: 'relative',
          }}
        >
          {/* Section 2 Left: Primary Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginLeft: '100px',
            }}
            className="desktop-nav"
          >
            {primaryNavItems.map((item) => {
              const active = isItemActive(item);
              const isTransparent = currentRoute === 'home' && !isScrolled;

              return (
                <div
                  key={item.label}
                  onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
                  style={{
                    position: (item.label === 'Enterprise Logistics Services' || item.label === 'Our Company' || item.label === 'Careers') ? 'static' : 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    height: '44px',
                  }}
                >
                  <button
                    onClick={(e) => {
                      handleNavClick(item.route);
                    }}
                    className="nav-link-btn"
                    style={{
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      height: '100%',
                      padding: '0 2px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: active ? '700' : '500',
                      color: isTransparent 
                        ? (active ? '#FFE082' : '#FFFFFF') 
                        : (active ? '#D97706' : '#1E293B'),
                      fontFamily: 'var(--font-body)',
                      transition: 'color 0.15s ease',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        size={12}
                        color={isTransparent 
                          ? (active ? '#FFE082' : 'rgba(255, 255, 255, 0.7)') 
                          : (active ? '#D97706' : '#64748B')}
                        style={{
                          transform: openDropdown === item.label ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.18s ease',
                        }}
                      />
                    )}

                    {/* Active Underline Indicator */}
                    {active && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          backgroundColor: isTransparent ? '#FFE082' : '#D97706',
                          borderRadius: '2px 2px 0 0',
                        }}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && openDropdown === item.label && item.subItems && (
                    item.label === 'Book' ? (
                      <div
                        className="mega-dropdown-menu"
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '-100px',
                          width: '740px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderRadius: '16px',
                          boxShadow: '0 24px 48px rgba(15, 23, 42, 0.12), 0 4px 14px rgba(15, 23, 42, 0.04)',
                          zIndex: 1050,
                          display: 'flex',
                          overflow: 'hidden',
                          textAlign: 'left',
                        }}
                      >
                        {/* Section 1: Active Booking Tools & Features */}
                        <div style={{ display: 'flex', width: '100%' }}>
                          {/* Col 1A: Freight Booking Services */}
                          <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <h4 style={{ 
                              fontSize: '11px', 
                              fontWeight: '700', 
                              color: '#64748B', 
                              letterSpacing: '0.08em', 
                              textTransform: 'uppercase',
                              margin: '0 0 4px 0'
                            }}>
                              Freight Booking Services
                            </h4>
                            
                            {/* Option 1: Ocean Transport (Containers) */}
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleNavClick('freight'); }}
                              className="mega-menu-item"
                            >
                              <div className="mega-menu-icon-wrapper fcl-icon">
                                <Ship size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Ocean Transport (Containers)</div>
                                <div className="mega-menu-desc">Full container ocean shipments with custom inland routing.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            {/* Option 2: Less-than-Container-Load (LCL) */}
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleNavClick('freight'); }}
                              className="mega-menu-item"
                            >
                              <div className="mega-menu-icon-wrapper lcl-icon">
                                <Package size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Less-than-Container-Load (LCL)</div>
                                <div className="mega-menu-desc">Cost-efficient shared cargo options for smaller volumes.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            {/* Option 3: Air Freight */}
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleNavClick('freight'); }}
                              className="mega-menu-item"
                            >
                              <div className="mega-menu-icon-wrapper air-icon">
                                <Plane size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Express Air Cargo</div>
                                <div className="mega-menu-desc">Priority air freight transport with rapid customs dispatch.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                          </div>

                          {/* Col 1B: Logistics Features */}
                          <div style={{ 
                            width: '340px', 
                            backgroundColor: '#F8FAFC', 
                            padding: '24px', 
                            borderLeft: '1px solid #E2E8F0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px'
                          }}>
                            <h4 style={{ 
                              fontSize: '11px', 
                              fontWeight: '700', 
                              color: '#64748B', 
                              letterSpacing: '0.08em', 
                              textTransform: 'uppercase',
                              margin: '0 0 4px 0'
                            }}>
                              Logistics Features
                            </h4>

                            <div className="mega-feature-item">
                              <Calendar size={16} className="feature-icon" />
                              <div>
                                <div className="feature-title">Instant Digital Booking</div>
                                <div className="feature-desc">Schedule and finalize your shipping orders online.</div>
                              </div>
                            </div>

                            <div className="mega-feature-item">
                              <Route size={16} className="feature-icon" />
                              <div>
                                <div className="feature-title">Integrated Customs & Inland</div>
                                <div className="feature-desc">Seamless customs clearance and land carriage.</div>
                              </div>
                            </div>

                            <div className="mega-feature-item">
                              <Shield size={16} className="feature-icon" />
                              <div>
                                <div className="feature-title">Premium Cargo Protection</div>
                                <div className="feature-desc">Comprehensive value protection and container tracking.</div>
                              </div>
                            </div>

                            {/* Actions Footer */}
                            <div style={{ 
                              display: 'flex', 
                              gap: '10px', 
                              marginTop: 'auto',
                              paddingTop: '16px',
                              borderTop: '1px solid #E2E8F0'
                            }}>
                              <button 
                                onClick={(e) => { e.stopPropagation(); handleNavClick('about'); }}
                                className="mega-action-btn register-btn"
                              >
                                Register Now
                              </button>
                              <button 
                                onClick={(e) => { e.stopPropagation(); handleNavClick('client-access'); }}
                                className="mega-action-btn login-btn"
                              >
                                Client Login
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : item.label === 'Enterprise Logistics Services' ? (
                      <div
                        className="mega-dropdown-menu"
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          right: 0,
                          width: '100%',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderTop: 'none',
                          borderRadius: '0 0 16px 16px',
                          boxShadow: '0 24px 48px rgba(15, 23, 42, 0.12), 0 4px 14px rgba(15, 23, 42, 0.04)',
                          zIndex: 1050,
                          display: 'flex',
                          flexDirection: 'column',
                          overflow: 'hidden',
                          textAlign: 'left',
                        }}
                      >
                        {/* 4 Columns Wrapper */}
                        <div className="ent-scroll-container" style={{ display: 'flex', padding: '28px', gap: '24px', maxHeight: '55vh', overflowY: 'auto' }}>
                          {/* Col 1: Transport */}
                          <div className="ent-col">
                            <h4 className="ent-col-title">
                              <Truck size={14} className="ent-header-icon" />
                              <span>Transport Services</span>
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              <button onClick={(e) => { e.stopPropagation(); handleNavClick('freight'); }} className="mega-menu-item">
                                <div className="mega-menu-icon-wrapper fcl-icon">
                                  <Ship size={16} />
                                </div>
                                <div className="mega-menu-text">
                                  <div className="mega-menu-title">Ocean Freight Forwarding</div>
                                  <div className="mega-menu-desc">High-capacity shipping routes with guaranteed container allocations.</div>
                                </div>
                                <ChevronRight size={12} className="mega-menu-arrow" />
                              </button>

                              <button onClick={(e) => { e.stopPropagation(); handleNavClick('freight'); }} className="mega-menu-item">
                                <div className="mega-menu-icon-wrapper air-icon">
                                  <Route size={16} />
                                </div>
                                <div className="mega-menu-text">
                                  <div className="mega-menu-title">Intermodal Inland Carrier</div>
                                  <div className="mega-menu-desc">Seamless transit connecting global marine ports to inland networks.</div>
                                </div>
                                <ChevronRight size={12} className="mega-menu-arrow" />
                              </button>

                              <button onClick={(e) => { e.stopPropagation(); handleNavClick('freight'); }} className="mega-menu-item">
                                <div className="mega-menu-icon-wrapper lcl-icon">
                                  <Package size={16} />
                                </div>
                                <div className="mega-menu-text">
                                  <div className="mega-menu-title">LCL Cargo Consolidation</div>
                                  <div className="mega-menu-desc">Cost-efficient shared container shipping for smaller freight volumes.</div>
                                </div>
                                <ChevronRight size={12} className="mega-menu-arrow" />
                              </button>

                              <button onClick={(e) => { e.stopPropagation(); handleNavClick('freight'); }} className="mega-menu-item">
                                <div className="mega-menu-icon-wrapper teal-icon">
                                  <Plane size={16} />
                                </div>
                                <div className="mega-menu-text">
                                  <div className="mega-menu-title">Express Air Freight</div>
                                  <div className="mega-menu-desc">Priority air cargo options for time-critical global delivery.</div>
                                </div>
                                <ChevronRight size={12} className="mega-menu-arrow" />
                              </button>

                              <button onClick={(e) => { e.stopPropagation(); handleNavClick('freight'); }} className="mega-menu-item">
                                <div className="mega-menu-icon-wrapper indigo-icon">
                                  <Truck size={16} />
                                </div>
                                <div className="mega-menu-text">
                                  <div className="mega-menu-title">KPL Ground Transportation</div>
                                  <div className="mega-menu-desc">Fully optimized Full Truckload (FTL) and Less-than-Truckload (LTL) services.</div>
                                </div>
                                <ChevronRight size={12} className="mega-menu-arrow" />
                              </button>
                            </div>
                          </div>

                          {/* Col 2: Storage & Compliance */}
                          <div className="ent-col">
                            <h4 className="ent-col-title">
                              <Warehouse size={14} className="ent-header-icon" />
                              <span>Store & Protect</span>
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              <button onClick={(e) => { e.stopPropagation(); handleNavClick('track-shipment'); }} className="mega-menu-item">
                                <div className="mega-menu-icon-wrapper fcl-icon">
                                  <Warehouse size={16} />
                                </div>
                                <div className="mega-menu-text">
                                  <div className="mega-menu-title">Contract Warehousing</div>
                                  <div className="mega-menu-desc">Scalable storage networks, sorting, and end-to-end cargo distribution.</div>
                                </div>
                                <ChevronRight size={12} className="mega-menu-arrow" />
                              </button>

                              <button onClick={(e) => { e.stopPropagation(); handleNavClick('track-shipment'); }} className="mega-menu-item">
                                <div className="mega-menu-icon-wrapper lcl-icon" style={{ backgroundColor: 'rgba(63, 81, 181, 0.1)', color: '#3f51b5' }}>
                                  <Building size={16} />
                                </div>
                                <div className="mega-menu-text">
                                  <div className="mega-menu-title">Consolidation Hub Depots</div>
                                  <div className="mega-menu-desc">Strategic regional transit stops to optimize logistics routes.</div>
                                </div>
                                <ChevronRight size={12} className="mega-menu-arrow" />
                              </button>

                              <button onClick={(e) => { e.stopPropagation(); handleNavClick('track-shipment'); }} className="mega-menu-item">
                                <div className="mega-menu-icon-wrapper air-icon" style={{ backgroundColor: 'rgba(0, 188, 212, 0.1)', color: '#00bcd4' }}>
                                  <Snowflake size={16} />
                                </div>
                                <div className="mega-menu-text">
                                  <div className="mega-menu-title">Cold Storage Networks</div>
                                  <div className="mega-menu-desc">Advanced climate-controlled warehouses preserving product integrity.</div>
                                </div>
                                <ChevronRight size={12} className="mega-menu-arrow" />
                              </button>
                              
                              <div style={{ borderTop: '1px solid #F1F5F9', marginTop: '4px', paddingTop: '12px' }}>
                                <h5 style={{ fontSize: '10.5px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.04em' }}>Clear & Protect</h5>
                                <button onClick={(e) => { e.stopPropagation(); handleNavClick('customs-compliance'); }} className="mega-menu-item" style={{ marginBottom: '8px' }}>
                                  <div className="mega-menu-icon-wrapper lcl-icon">
                                    <FileText size={16} />
                                  </div>
                                  <div className="mega-menu-text">
                                    <div className="mega-menu-title">KPL Customs Brokerage</div>
                                    <div className="mega-menu-desc">Accelerate global clearances using local trade regulation compliance.</div>
                                  </div>
                                  <ChevronRight size={12} className="mega-menu-arrow" />
                                </button>
                                <button onClick={(e) => { e.stopPropagation(); handleNavClick('customs-compliance'); }} className="mega-menu-item">
                                  <div className="mega-menu-icon-wrapper air-icon">
                                    <Shield size={16} />
                                  </div>
                                  <div className="mega-menu-text">
                                    <div className="mega-menu-title">Transit Risk Management</div>
                                    <div className="mega-menu-desc">Premium transit coverage options safeguarding against shipping losses.</div>
                                  </div>
                                  <ChevronRight size={12} className="mega-menu-arrow" />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Col 3: Logistics Management */}
                          <div className="ent-col">
                            <h4 className="ent-col-title">
                              <Cpu size={14} className="ent-header-icon" />
                              <span>Logistics Management</span>
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              <button onClick={(e) => { e.stopPropagation(); handleNavClick('services'); }} className="mega-menu-item">
                                <div className="mega-menu-icon-wrapper fcl-icon" style={{ backgroundColor: 'rgba(0, 150, 136, 0.1)', color: '#009688' }}>
                                  <Cpu size={16} />
                                </div>
                                <div className="mega-menu-text">
                                  <div className="mega-menu-title">Unified Digital Portal</div>
                                  <div className="mega-menu-desc">Online dashboard for real-time tracking and multi-carrier bookings.</div>
                                </div>
                                <ChevronRight size={12} className="mega-menu-arrow" />
                              </button>

                              <button onClick={(e) => { e.stopPropagation(); handleNavClick('services'); }} className="mega-menu-item">
                                <div className="mega-menu-icon-wrapper lcl-icon" style={{ backgroundColor: 'rgba(156, 39, 176, 0.1)', color: '#9c27b0' }}>
                                  <ShoppingBag size={16} />
                                </div>
                                <div className="mega-menu-text">
                                  <div className="mega-menu-title">KPL E-Commerce Logistics</div>
                                  <div className="mega-menu-desc">Direct factory-to-door fulfillment and scalable cross-border parcel delivery.</div>
                                </div>
                                <ChevronRight size={12} className="mega-menu-arrow" />
                              </button>

                              <button onClick={(e) => { e.stopPropagation(); handleNavClick('services'); }} className="mega-menu-item">
                                <div className="mega-menu-icon-wrapper air-icon" style={{ backgroundColor: 'rgba(0, 188, 212, 0.1)', color: '#00bcd4' }}>
                                  <Truck size={16} />
                                </div>
                                <div className="mega-menu-text">
                                  <div className="mega-menu-title">Cold Chain Logistics</div>
                                  <div className="mega-menu-desc">End-to-end refrigerated transport for perishable pharmaceutical goods.</div>
                                </div>
                                <ChevronRight size={12} className="mega-menu-arrow" />
                              </button>

                              <button onClick={(e) => { e.stopPropagation(); handleNavClick('services'); }} className="mega-menu-item">
                                <div className="mega-menu-icon-wrapper fcl-icon" style={{ backgroundColor: 'rgba(100, 116, 139, 0.1)', color: '#64748b' }}>
                                  <Network size={16} />
                                </div>
                                <div className="mega-menu-text">
                                  <div className="mega-menu-title">Lead Supply Chain (4PL) Partner</div>
                                  <div className="mega-menu-desc">Fully outsourced planning, execution, and tracking of business supply chains.</div>
                                </div>
                                <ChevronRight size={12} className="mega-menu-arrow" />
                              </button>

                              <button onClick={(e) => { e.stopPropagation(); handleNavClick('services'); }} className="mega-menu-item">
                                <div className="mega-menu-icon-wrapper lcl-icon" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', color: '#ffc107' }}>
                                  <HardHat size={16} />
                                </div>
                                <div className="mega-menu-text">
                                  <div className="mega-menu-title">KPL Project Cargo Logistics</div>
                                  <div className="mega-menu-desc">Specialized logistics management for heavy industrial projects.</div>
                                </div>
                                <ChevronRight size={12} className="mega-menu-arrow" />
                              </button>

                              <button onClick={(e) => { e.stopPropagation(); handleNavClick('services'); }} className="mega-menu-item">
                                <div className="mega-menu-icon-wrapper air-icon">
                                  <Leaf size={16} />
                                </div>
                                <div className="mega-menu-text">
                                  <div className="mega-menu-title">Sustainable Logistics Systems</div>
                                  <div className="mega-menu-desc">Carbon tracking and optimized routing models to reduce global emissions.</div>
                                </div>
                                <ChevronRight size={12} className="mega-menu-arrow" />
                              </button>
                            </div>
                          </div>

                          {/* Col 4: By Industry */}
                          <div className="ent-col" style={{ width: '280px', flex: 'none' }}>
                            <h4 className="ent-col-title">
                              <Layers size={14} className="ent-header-icon" />
                              <span>By Industry Focus</span>
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {[
                                { title: 'Consumer Goods (FMCG)', desc: 'Fast-moving inventory solutions and agile distribution.', icon: ShoppingBag, color: '#f57c00', bg: 'rgba(245, 124, 0, 0.1)' },
                                { title: 'Fashion & Apparel', desc: 'Garment-on-hanger and seasonal retail supply chains.', icon: Shirt, color: '#9c27b0', bg: 'rgba(156, 39, 176, 0.1)' },
                                { title: 'Retail & Distribution', desc: 'End-to-end retail fulfillment and omnichannel logistics.', icon: Store, color: '#0277bd', bg: 'rgba(2, 119, 189, 0.1)' },
                                { title: 'Chemical Cargo Handling', desc: 'Safe transit of hazardous and specialized chemicals.', icon: FlaskConical, color: '#2e7d32', bg: 'rgba(46, 125, 50, 0.1)' },
                                { title: 'Automotive Logistics', desc: 'Just-in-time delivery for vehicle parts and manufacturing.', icon: Car, color: '#3f51b5', bg: 'rgba(63, 81, 181, 0.1)' },
                                { title: 'Technology & Electronics', desc: 'Secure transit for high-value sensitive electronics.', icon: Laptop, color: '#009688', bg: 'rgba(0, 150, 136, 0.1)' },
                                { title: 'Pharma & Healthcare', desc: 'Temperature-controlled compliant healthcare transport.', icon: HeartPulse, color: '#00bcd4', bg: 'rgba(0, 188, 212, 0.1)' },
                                { title: 'Perishable Shipments', desc: 'Cold-chain solutions for fresh and frozen consumables.', icon: Apple, color: '#d84315', bg: 'rgba(216, 67, 21, 0.1)' },
                              ].map((ind) => (
                                <button
                                  key={ind.title}
                                  onClick={(e) => { e.stopPropagation(); handleNavClick('why-choose-us'); }}
                                  className="mega-menu-item"
                                >
                                  <div className="mega-menu-icon-wrapper industry-icon" style={{ '--base-bg': ind.bg, '--base-color': ind.color, width: '32px', height: '32px', borderRadius: '8px' }}>
                                    <ind.icon size={14} />
                                  </div>
                                  <div className="mega-menu-text">
                                    <div className="mega-menu-title" style={{ fontSize: '13px', fontWeight: '700', whiteSpace: 'nowrap' }}>{ind.title}</div>
                                    <div className="mega-menu-desc">{ind.desc}</div>
                                  </div>
                                  <ChevronRight size={12} className="mega-menu-arrow" />
                                </button>
                              ))}
                            </div>
                            
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleNavClick('services'); }}
                              className="ent-all-services-link"
                              style={{
                                background: 'none',
                                border: 'none',
                                textAlign: 'left',
                                fontSize: '12.5px',
                                fontWeight: '700',
                                color: '#e65100',
                                cursor: 'pointer',
                                padding: '16px 0 16px 0',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                borderTop: '1px solid #F1F5F9',
                                marginTop: '12px',
                                fontFamily: 'var(--font-body)',
                              }}
                            >
                              <span>View all logistics services</span>
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        </div>

                        {/* Professional Animated Scroll Indicator */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '12px 0',
                          background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.4) 0%, #F1F5F9 100%)',
                          borderTop: '1px solid #E2E8F0',
                          borderBottom: '1px solid #E2E8F0',
                          cursor: 'pointer'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, transparent, rgba(230, 81, 0, 0.4))' }}></div>
                            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <ChevronDown size={16} color="#e65100" className="scroll-chevron-bounce" style={{ animationDelay: '0ms' }} />
                              <span className="scroll-indicator-text">Scroll to explore all solutions</span>
                              <ChevronDown size={16} color="#e65100" className="scroll-chevron-bounce" style={{ animationDelay: '200ms' }} />
                            </span>
                            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(270deg, transparent, rgba(230, 81, 0, 0.4))' }}></div>
                          </div>
                        </div>

                        {/* Bottom Featured Banner */}
                        <div className="ent-banner">
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
                            <h5 style={{ fontSize: '13.5px', fontWeight: '800', margin: 0, fontFamily: 'var(--font-body)', letterSpacing: '-0.2px' }}>
                              <span style={{ color: '#0f172a' }}>Empower Your Supply Chain:</span> <span style={{ color: '#e65100' }}>Next-Gen Intermodal Connectivity</span>
                            </h5>
                            <p style={{ fontSize: '11.5px', fontWeight: '500', color: '#64748b', margin: 0, fontFamily: 'var(--font-body)' }}>
                              Connect your cargo seamlessly across land routes via road, rail, or river barge directly to key distribution markets.
                            </p>
                          </div>
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleNavClick('freight'); }}
                            className="ent-banner-btn"
                          >
                            <span>Explore KPL Intermodal Solutions</span>
                            <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                          </button>
                        </div>
                      </div>
                    ) : item.label === 'Buyers' ? (
                      <div
                        className="mega-dropdown-menu"
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '-20px',
                          width: '740px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderRadius: '16px',
                          boxShadow: '0 24px 48px rgba(15, 23, 42, 0.12), 0 4px 14px rgba(15, 23, 42, 0.04)',
                          zIndex: 1050,
                          display: 'flex',
                          overflow: 'hidden',
                          textAlign: 'left',
                        }}
                      >
                        <div style={{ display: 'flex', width: '100%' }}>
                          {/* Col 1: Buyer Programs & Sourcing */}
                          <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <h4 style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 4px 0' }}>Global Sourcing</h4>
                            
                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('buyers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper teal-icon">
                                <Globe size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Global Supplier Network</div>
                                <div className="mega-menu-desc">Access fully vetted international suppliers.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('procurement'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper indigo-icon">
                                <Search size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Custom Procurement</div>
                                <div className="mega-menu-desc">Tailored sourcing for enterprise needs.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('buyers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper lcl-icon">
                                <Package size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Volume Purchasing</div>
                                <div className="mega-menu-desc">Bulk order management and discounts.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                            
                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('buyers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper fcl-icon">
                                <FlaskConical size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Sample Fulfillment</div>
                                <div className="mega-menu-desc">Fast-track sample delivery and testing.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                          </div>

                          {/* Col 2: Buyer Support & Finance */}
                          <div style={{ flex: 1, backgroundColor: '#F8FAFC', padding: '24px', borderLeft: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <h4 style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 4px 0' }}>Support & Finance</h4>
                            
                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('quality'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper teal-icon">
                                <Shield size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Buyer Protection Plan</div>
                                <div className="mega-menu-desc">Secure payments and escrow services.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('services'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper fcl-icon">
                                <Briefcase size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Trade Financing</div>
                                <div className="mega-menu-desc">Flexible credit lines for global buyers.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('track-shipment'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper indigo-icon">
                                <Truck size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Logistics Integration</div>
                                <div className="mega-menu-desc">End-to-end door delivery solutions.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                            
                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('business-global'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper lcl-icon">
                                <Headphones size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Dedicated Account Manager</div>
                                <div className="mega-menu-desc">24/7 personalized buyer support.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : item.label === 'Products' ? (
                      <div
                        className="mega-dropdown-menu"
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '-20px',
                          width: '740px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderRadius: '16px',
                          boxShadow: '0 24px 48px rgba(15, 23, 42, 0.12), 0 4px 14px rgba(15, 23, 42, 0.04)',
                          zIndex: 1050,
                          display: 'flex',
                          overflow: 'hidden',
                          textAlign: 'left',
                        }}
                      >
                        <div style={{ display: 'flex', width: '100%' }}>
                          {/* Col 1: Export Commodities */}
                          <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <h4 style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 4px 0' }}>Premium Export Commodities</h4>
                            
                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('products'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper air-icon">
                                <Leaf size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Agriculture & Organics</div>
                                <div className="mega-menu-desc">Certified fresh produce and organic grains.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('products'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper indigo-icon">
                                <Shirt size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Textiles & Apparel</div>
                                <div className="mega-menu-desc">High-quality fabrics and fashion garments.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('products'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper lcl-icon">
                                <Sparkles size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Heritage Handicrafts</div>
                                <div className="mega-menu-desc">Artisan crafts and handmade decor goods.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                            
                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('products'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper fcl-icon">
                                <Coffee size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Beverages & Spices</div>
                                <div className="mega-menu-desc">Premium roasted coffee and exotic spices.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                          </div>

                          {/* Col 2: Industrial & Tech Imports */}
                          <div style={{ flex: 1, backgroundColor: '#F8FAFC', padding: '24px', borderLeft: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <h4 style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 4px 0' }}>Industrial & Tech Imports</h4>
                            
                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('products'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper teal-icon">
                                <Car size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Automobiles & Vehicles</div>
                                <div className="mega-menu-desc">Commercial vehicles and auto parts.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('products'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper fcl-icon">
                                <Factory size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Industrial Machinery</div>
                                <div className="mega-menu-desc">Heavy equipment and manufacturing tools.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('products'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper indigo-icon">
                                <Cpu size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Consumer Electronics</div>
                                <div className="mega-menu-desc">Smart devices and high-tech components.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                            
                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('products'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper lcl-icon">
                                <Package size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">FMCG & Retail Goods</div>
                                <div className="mega-menu-desc">Fast-moving consumer bulk imports.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : item.label === 'Resources & Compliance' ? (
                      <div
                        className="mega-dropdown-menu"
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '-20px',
                          width: '740px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderRadius: '16px',
                          boxShadow: '0 24px 48px rgba(15, 23, 42, 0.12), 0 4px 14px rgba(15, 23, 42, 0.04)',
                          zIndex: 1050,
                          display: 'flex',
                          overflow: 'hidden',
                          textAlign: 'left',
                        }}
                      >
                        <div style={{ display: 'flex', width: '100%' }}>
                          {/* Col 1: Trade Compliance */}
                          <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <h4 style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 4px 0' }}>Trade Compliance</h4>
                            
                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('customs-compliance'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper teal-icon">
                                <Shield size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Customs Regulations</div>
                                <div className="mega-menu-desc">Navigate complex global trade laws.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('documentation'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper indigo-icon">
                                <FileText size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Documentation Hub</div>
                                <div className="mega-menu-desc">Export and import filing templates.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('documentation'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper lcl-icon">
                                <Globe size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Global Trade Sanctions</div>
                                <div className="mega-menu-desc">Real-time screening and updates.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                            
                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('quality'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper fcl-icon">
                                <Award size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Quality Assurance</div>
                                <div className="mega-menu-desc">Certifications and audit protocols.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                          </div>

                          {/* Col 2: Supply Chain Resources */}
                          <div style={{ flex: 1, backgroundColor: '#F8FAFC', padding: '24px', borderLeft: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <h4 style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 4px 0' }}>Supply Chain Resources</h4>
                            
                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('network'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper teal-icon">
                                <MapPin size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Global Network Map</div>
                                <div className="mega-menu-desc">Interactive route and port planner.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('documentation'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper fcl-icon">
                                <Layers size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Incoterms Guide</div>
                                <div className="mega-menu-desc">Official rules for international trade.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('track-shipment'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper indigo-icon">
                                <Truck size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Cargo Tracking Portal</div>
                                <div className="mega-menu-desc">Live shipment visibility system.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                            
                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('services'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper lcl-icon">
                                <BarChart2 size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Market Insights</div>
                                <div className="mega-menu-desc">Data-driven supply chain trends.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : item.label === 'Careers' ? (
                      <div
                        className="mega-dropdown-menu"
                        style={{
                          position: 'absolute',
                          top: '100%',
                          right: '32px',
                          width: '740px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderRadius: '16px',
                          boxShadow: '0 24px 48px rgba(15, 23, 42, 0.12), 0 4px 14px rgba(15, 23, 42, 0.04)',
                          zIndex: 1050,
                          display: 'flex',
                          overflow: 'hidden',
                          textAlign: 'left',
                        }}
                      >
                        <div style={{ display: 'flex', width: '100%' }}>
                          {/* Col 1: Life at KPL */}
                          <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <h4 style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 4px 0' }}>Life at KPL</h4>
                            
                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('careers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper teal-icon">
                                <Search size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Explore Opportunities</div>
                                <div className="mega-menu-desc">Find your next role and apply online.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('careers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper fcl-icon">
                                <Users size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Meet the Team</div>
                                <div className="mega-menu-desc">Discover the minds shaping our global network.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('careers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper lcl-icon">
                                <Star size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Core Principles</div>
                                <div className="mega-menu-desc">Learn the values driving our success and culture.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('careers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper indigo-icon">
                                <Award size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Why Choose Us</div>
                                <div className="mega-menu-desc">Experience a rewarding environment for growth.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('careers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper air-icon">
                                <GraduationCap size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Trainee Program</div>
                                <div className="mega-menu-desc">Launch your logistics journey with our programs.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                          </div>

                          {/* Col 2: Job Areas */}
                          <div style={{ flex: 1, backgroundColor: '#F8FAFC', padding: '24px', borderLeft: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <h4 style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 4px 0' }}>Job Areas</h4>
                            
                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('careers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper fcl-icon">
                                <Ship size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Global Freight Forwarding</div>
                                <div className="mega-menu-desc">Manage sea, air, and land cargo operations.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('careers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper teal-icon">
                                <Cpu size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Technology & Innovation</div>
                                <div className="mega-menu-desc">Build tools that power smart supply chains.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('careers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper lcl-icon">
                                <TrendingUp size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Commercial & Sales</div>
                                <div className="mega-menu-desc">Drive growth and manage client partnerships.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('careers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper air-icon">
                                <PieChart size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Finance & Administration</div>
                                <div className="mega-menu-desc">Handle accounts, billing, and business planning.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('careers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper indigo-icon">
                                <Briefcase size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Leadership & Management</div>
                                <div className="mega-menu-desc">Guide our teams and shape company strategy.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('careers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper fcl-icon">
                                <GitBranch size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Supply Chain Optimization</div>
                                <div className="mega-menu-desc">Design faster and smarter logistics networks.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            <button onClick={(e) => { e.stopPropagation(); handleNavClick('careers'); }} className="mega-menu-item">
                              <div className="mega-menu-icon-wrapper lcl-icon">
                                <Box size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Warehouse & Distribution</div>
                                <div className="mega-menu-desc">Oversee storage, inventory, and delivery.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : item.label === 'Our Company' ? (
                      <div
                        className="mega-dropdown-menu"
                        style={{
                          position: 'absolute',
                          top: '100%',
                          right: '32px',
                          width: '740px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderRadius: '16px',
                          boxShadow: '0 24px 48px rgba(15, 23, 42, 0.12), 0 4px 14px rgba(15, 23, 42, 0.04)',
                          zIndex: 1050,
                          display: 'flex',
                          overflow: 'hidden',
                          textAlign: 'left',
                        }}
                      >
                        {/* Section 1: Active Profile & News */}
                        <div style={{ display: 'flex', width: '100%' }}>
                          {/* Col 1A: Who We Are & Careers */}
                          <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <h4 style={{ 
                              fontSize: '11px', 
                              fontWeight: '700', 
                              color: '#64748B', 
                              letterSpacing: '0.08em', 
                              textTransform: 'uppercase',
                              margin: '0 0 4px 0'
                            }}>
                              Corporate Profile
                            </h4>
                            
                            {/* Option 1: About Us */}
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleNavClick('about'); }}
                              className="mega-menu-item"
                            >
                              <div className="mega-menu-icon-wrapper fcl-icon">
                                <Globe size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">About Our Company</div>
                                <div className="mega-menu-desc">Discover KPL's global mission, leadership team, and corporate values.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            {/* Option 2: Careers */}
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleNavClick('why-choose-us'); }}
                              className="mega-menu-item"
                            >
                              <div className="mega-menu-icon-wrapper lcl-icon" style={{ backgroundColor: 'rgba(63, 81, 181, 0.1)', color: '#3f51b5' }}>
                                <Users size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Careers & Culture</div>
                                <div className="mega-menu-desc">Explore professional pathways and join KPL's global team.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            {/* Option 3: Press */}
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleNavClick('how-it-works'); }}
                              className="mega-menu-item"
                            >
                              <div className="mega-menu-icon-wrapper air-icon" style={{ backgroundColor: 'rgba(156, 39, 176, 0.1)', color: '#9c27b0' }}>
                                <Megaphone size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Press & Newsroom</div>
                                <div className="mega-menu-desc">Read our latest press releases, news updates, and media kits.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                          </div>

                          {/* Col 1B: Responsibility & Investors */}
                          <div style={{ 
                            width: '340px', 
                            backgroundColor: '#F8FAFC', 
                            padding: '24px', 
                            borderLeft: '1px solid #E2E8F0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                          }}>
                            <h4 style={{ 
                              fontSize: '11px', 
                              fontWeight: '700', 
                              color: '#64748B', 
                              letterSpacing: '0.08em', 
                              textTransform: 'uppercase',
                              margin: '0 0 4px 0'
                            }}>
                              Corporate Responsibility
                            </h4>

                            {/* Option 4: Responsibility */}
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleNavClick('why-choose-us'); }}
                              className="mega-menu-item"
                            >
                              <div className="mega-menu-icon-wrapper air-icon">
                                <Leaf size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Sustainability & CSR</div>
                                <div className="mega-menu-desc">Our dedication to eco-friendly, carbon-efficient supply chains.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            {/* Option 5: Investor Relations */}
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleNavClick('why-choose-us'); }}
                              className="mega-menu-item"
                            >
                              <div className="mega-menu-icon-wrapper fcl-icon" style={{ backgroundColor: 'rgba(0, 150, 136, 0.1)', color: '#009688' }}>
                                <BarChart2 size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Investor Relations</div>
                                <div className="mega-menu-desc">Explore financial reports, corporate governance, and disclosures.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>

                            {/* Option 6: Your cargo, our promise */}
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleNavClick('why-choose-us'); }}
                              className="mega-menu-item"
                            >
                              <div className="mega-menu-icon-wrapper lcl-icon">
                                <Handshake size={18} />
                              </div>
                              <div className="mega-menu-text">
                                <div className="mega-menu-title">Our Quality Promise</div>
                                <div className="mega-menu-desc">"Your cargo, our promise" – KPL's dedication to service excellence.</div>
                              </div>
                              <ChevronRight size={14} className="mega-menu-arrow" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          minWidth: '220px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderRadius: '0 0 8px 8px',
                          padding: '8px 0',
                          boxShadow: '0 12px 28px rgba(15, 23, 42, 0.12)',
                          zIndex: 1050,
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        {item.subItems.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavClick(sub.route);
                            }}
                            className="dropdown-item-btn"
                            style={{
                              background: 'none',
                              border: 'none',
                              padding: '9px 18px',
                              textAlign: 'left',
                              fontSize: '12.5px',
                              fontWeight: '500',
                              color: '#334155',
                              fontFamily: 'var(--font-body)',
                              cursor: 'pointer',
                              whiteSpace: 'nowrap',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )
                  )}
                </div>
              );
            })}
          </nav>

          {/* Section 2 Right: Nav Tabs */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>

            {/* Portal Logins Dropdown — moved from Section-1 */}
            <div
              ref={portalDropdownRef}
              style={{ position: 'relative' }}
            >
              <button
                onClick={() => setSec1PortalDropdownOpen(!sec1PortalDropdownOpen)}
                className="sec2-quote-btn sec2-portal-match"
              >
                <span>Portal Logins</span>
                <div className="arrow-circle-icon">
                  <ChevronDown
                    size={12}
                    strokeWidth={2.5}
                    color="currentColor"
                    style={{
                      transform: sec1PortalDropdownOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.25s ease',
                    }}
                  />
                </div>
              </button>

              {sec1PortalDropdownOpen && (
                <div className="sec1-dropdown-menu">
                  <button onClick={() => handleNavClick('client-access')} className="sec1-dropdown-item">
                    <User size={15} className="item-icon" />
                    <span>Customer Access Portal</span>
                    <ArrowRight size={14} className="redirect-arrow" />
                  </button>
                  <button onClick={() => handleNavClick('strategic-partners')} className="sec1-dropdown-item">
                    <Briefcase size={15} className="item-icon" />
                    <span>Strategic Partners Login</span>
                    <ArrowRight size={14} className="redirect-arrow" />
                  </button>
                  <button onClick={() => handleNavClick('global-export')} className="sec1-dropdown-item">
                    <ArrowUpRight size={15} className="item-icon" />
                    <span>Global Export Portal</span>
                    <ArrowRight size={14} className="redirect-arrow" />
                  </button>
                  <button onClick={() => handleNavClick('global-import')} className="sec1-dropdown-item">
                    <ArrowDownLeft size={15} className="item-icon" />
                    <span>Global Import Portal</span>
                    <ArrowRight size={14} className="redirect-arrow" />
                  </button>
                  <button onClick={() => handleNavClick('supplier-network')} className="sec1-dropdown-item">
                    <Truck size={15} className="item-icon" />
                    <span>Supplier & Vendor Network</span>
                    <ArrowRight size={14} className="redirect-arrow" />
                  </button>
                  <button onClick={() => handleNavClick('logistics-operations')} className="sec1-dropdown-item">
                    <Settings size={15} className="item-icon" />
                    <span>Logistics Operations</span>
                    <ArrowRight size={14} className="redirect-arrow" />
                  </button>
                  <button onClick={() => handleNavClick('enterprise-employee')} className="sec1-dropdown-item">
                    <Building size={15} className="item-icon" />
                    <span>Enterprise Employee Portal</span>
                    <ArrowRight size={14} className="redirect-arrow" />
                  </button>
                </div>
              )}
            </div>

            {/* Get a Quote */}
            <button onClick={onQuoteClick} className="sec2-quote-btn">
              <span>Get a Quote</span>
              <div className="arrow-circle-icon">
                <ArrowRight size={12} strokeWidth={2.5} color="currentColor" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(6px)',
            zIndex: 110000,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: '300px',
              height: '100%',
              background: '#FFFFFF',
              borderLeft: '1px solid #E2E8F0',
              padding: '20px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #E2E8F0',
                paddingBottom: '14px',
              }}
            >
              <Logo />
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748B',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                overflowY: 'auto',
                flex: 1,
              }}
            >
              {primaryNavItems.map((item) => {
                const active = isItemActive(item);

                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      handleNavClick(item.route);
                      setMobileMenuOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: active ? '700' : '500',
                      color: active ? '#D97706' : '#0F172A',
                      background: active ? '#FEF3C7' : '#F8FAFC',
                      border: active ? '1px solid #FDE68A' : '1px solid #F1F5F9',
                      textAlign: 'left',
                      fontFamily: 'var(--font-body)',
                      cursor: 'pointer',
                    }}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={13} color={active ? '#D97706' : '#94A3B8'} />
                  </button>
                );
              })}
            </nav>

            <div
              style={{
                borderTop: '1px solid #E2E8F0',
                paddingTop: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <button
                onClick={() => {
                  handleNavClick('track-shipment');
                  setMobileMenuOpen(false);
                }}
                style={{
                  height: '36px',
                  borderRadius: '6px',
                  background: (currentRoute === 'track-shipment' || currentRoute === 'track-cargo') ? '#FEF3C7' : '#F1F5F9',
                  border: (currentRoute === 'track-shipment' || currentRoute === 'track-cargo') ? '1px solid #FDE68A' : '1px solid #CBD5E1',
                  color: (currentRoute === 'track-shipment' || currentRoute === 'track-cargo') ? '#D97706' : '#0F172A',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Track Cargo
              </button>
              <button
                onClick={() => {
                  onQuoteClick();
                  setMobileMenuOpen(false);
                }}
                style={{
                  height: '36px',
                  borderRadius: '6px',
                  background: '#0F172A',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
