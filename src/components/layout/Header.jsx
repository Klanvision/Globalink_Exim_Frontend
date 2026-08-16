import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Search, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export const Header = ({ onTrackClick, onQuoteClick, currentRoute = 'home', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', route: 'home', hasDropdown: false },
    {
      label: 'About Us',
      route: 'about',
      hasDropdown: true,
      subItems: [
        { label: 'How Global Link Works', route: 'how-it-works' },
        { label: 'Why Businesses Choose Us', route: 'why-choose-us' },
        { label: 'Trusted by Businesses Worldwide', route: 'trusted-businesses' },
      ],
    },
    {
      label: 'Services',
      route: 'services',
      hasDropdown: true,
      subItems: [
        { label: 'End-to-End Trade Solutions', route: 'services' },
        { label: 'Freight Services', route: 'freight' },
        { label: 'Customs & Trade Compliance', route: 'customs-compliance' },
        { label: 'Tracking & Warehousing', route: 'track-shipment' },
      ],
    },
    { label: 'Products', route: 'products', hasDropdown: false },
    { label: 'Buyers', route: 'buyers', hasDropdown: false },
    { label: 'Procurement', route: 'procurement', hasDropdown: false },
    { label: 'Quality', route: 'quality', hasDropdown: false },
    { label: 'Global Network', route: 'network', hasDropdown: false },
    {
      label: 'Resources',
      route: 'resources',
      hasDropdown: true,
      subItems: [
        { label: 'Documentation & Compliance', route: 'documentation' },
        { label: 'Quality Assurance', route: 'quality' },
        { label: 'Business Global CTA', route: 'business-global' },
      ],
    },
    { label: 'Contact Us', route: 'business-global', hasDropdown: false },
  ];

  const handleNavClick = (route) => {
    setOpenDropdown(null);
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
      } else if (route === 'track-shipment' || route === 'tracking' || route === 'warehousing') {
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
      } else {
        onNavigate('home');
      }
    }
  };

  const isItemActive = (item) => {
    if (item.route === 'home' && currentRoute === 'home') return true;
    if (item.route === 'products' && (currentRoute === 'products' || currentRoute === 'portfolio')) return true;
    if (item.route === 'buyers' && currentRoute === 'buyers') return true;
    if (item.route === 'procurement' && currentRoute === 'procurement') return true;
    if (item.route === 'quality' && currentRoute === 'quality') return true;
    if (item.route === 'network' && currentRoute === 'network') return true;
    if (item.route === 'about' && (currentRoute === 'how-it-works' || currentRoute === 'why-choose-us' || currentRoute === 'trusted-businesses')) return true;
    if (item.route === 'services' && (currentRoute === 'services' || currentRoute === 'freight' || currentRoute === 'customs-compliance' || currentRoute === 'track-shipment')) return true;
    if (item.route === 'resources' && (currentRoute === 'documentation' || currentRoute === 'quality' || currentRoute === 'business-global')) return true;
    return false;
  };

  return (
    <>
      {/* Spacer to prevent layout shift under fixed navbar */}
      <div style={{ height: '62px', width: '100%', flexShrink: 0 }} />

      <header
        className={`global-link-header-fixed ${isScrolled ? 'header-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '62px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isScrolled ? 'rgba(2, 15, 38, 0.98)' : 'rgba(2, 19, 47, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(83, 137, 197, 0.45)' : '1px solid rgba(83, 137, 197, 0.28)',
          zIndex: 99999,
          boxShadow: isScrolled ? '0 6px 25px rgba(0, 0, 0, 0.65)' : '0 4px 20px rgba(0, 0, 0, 0.35)',
          transition: 'all 0.22s ease',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
          }}
        >
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer', flexShrink: 0 }}
          >
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => {
              const active = isItemActive(item);

              return (
                <div
                  key={item.label}
                  onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <button
                    onClick={() => handleNavClick(item.route)}
                    className="nav-link-btn"
                    style={{
                      background: 'none',
                      border: 'none',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '3px',
                      padding: '8px 2px',
                      cursor: 'pointer',
                      fontSize: '11.5px',
                      fontWeight: active ? '600' : '400',
                      color: active ? '#F2B52F' : 'rgba(255, 255, 255, 0.90)',
                      letterSpacing: '0.2px',
                      fontFamily: 'var(--font-body)',
                      transition: 'all 0.18s ease',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        size={10}
                        color={active ? '#F2B52F' : 'rgba(255, 255, 255, 0.65)'}
                        style={{
                          transform: openDropdown === item.label ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    )}

                    {/* Active Gold Underline */}
                    {active && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          left: 0,
                          right: 0,
                          height: '2px',
                          backgroundColor: '#F2B52F',
                          borderRadius: '1px',
                        }}
                      />
                    )}
                  </button>

                  {/* Submenu Dropdown */}
                  {item.hasDropdown && openDropdown === item.label && item.subItems && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        minWidth: '200px',
                        backgroundColor: 'rgba(4, 24, 58, 0.98)',
                        border: '1px solid rgba(83, 137, 197, 0.38)',
                        borderRadius: '8px',
                        padding: '6px 0',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.50)',
                        backdropFilter: 'blur(14px)',
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
                            padding: '7px 14px',
                            textAlign: 'left',
                            fontSize: '11px',
                            fontWeight: '400',
                            color: 'rgba(255, 255, 255, 0.88)',
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
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            {/* Search Icon Button */}
            <button
              onClick={() => handleNavClick('products')}
              aria-label="Search"
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'color 0.18s ease',
              }}
            >
              <Search size={14} />
            </button>

            {/* Track Shipment Outlined Button */}
            <button
              onClick={onTrackClick}
              style={{
                height: '30px',
                padding: '0 9px',
                fontSize: '10.5px',
                fontWeight: '600',
                color: '#FFFFFF',
                background: 'rgba(10, 33, 71, 0.8)',
                border: '1px solid #F2B52F',
                borderRadius: '5px',
                display: 'inline-flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.18s ease',
              }}
            >
              Track Shipment
            </button>

            {/* Get a Quote Filled Gold Button */}
            <button
              onClick={onQuoteClick}
              style={{
                height: '30px',
                padding: '0 10px',
                fontSize: '10.5px',
                fontWeight: '700',
                color: '#03132D',
                background: '#F2B52F',
                border: 'none',
                borderRadius: '5px',
                display: 'inline-flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                boxShadow: '0 2px 8px rgba(242, 181, 47, 0.25)',
                transition: 'all 0.18s ease',
              }}
            >
              Get Quote
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle Mobile Menu"
              style={{
                color: '#F2B52F',
                padding: '5px',
                borderRadius: '4px',
                border: '1px solid rgba(83, 137, 197, 0.35)',
                background: 'rgba(10, 33, 71, 0.8)',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '2px',
                cursor: 'pointer',
              }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 10, 25, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 1100,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: '280px',
              height: '100%',
              background: '#041B3D',
              borderLeft: '1px solid rgba(83, 137, 197, 0.35)',
              padding: '20px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.6)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                paddingBottom: '12px',
              }}
            >
              <Logo />
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.7)',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                overflowY: 'auto',
                flex: 1,
              }}
            >
              {navItems.map((item) => {
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
                      padding: '8px 10px',
                      borderRadius: '5px',
                      fontSize: '12px',
                      fontWeight: active ? '700' : '400',
                      color: active ? '#F2B52F' : '#FFFFFF',
                      background: active ? 'rgba(242, 181, 47, 0.12)' : 'transparent',
                      border: active ? '1px solid rgba(242, 181, 47, 0.3)' : 'none',
                      textAlign: 'left',
                      fontFamily: 'var(--font-body)',
                      cursor: 'pointer',
                    }}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={12} opacity={0.5} />
                  </button>
                );
              })}
            </nav>

            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                paddingTop: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <button
                onClick={() => {
                  onTrackClick();
                  setMobileMenuOpen(false);
                }}
                style={{
                  height: '34px',
                  borderRadius: '5px',
                  background: '#061B43',
                  border: '1px solid #F2B52F',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Track Shipment
              </button>
              <button
                onClick={() => {
                  onQuoteClick();
                  setMobileMenuOpen(false);
                }}
                style={{
                  height: '34px',
                  borderRadius: '5px',
                  background: '#F2B52F',
                  color: '#03132D',
                  fontSize: '11px',
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
