import React, { useEffect, useState } from 'react';
import { User, Briefcase, ArrowUpRight, ArrowDownLeft, Truck, Settings, Building, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

const portalConfig = {
  'client-access': {
    title: 'Customer Access Portal',
    subtitle: 'Manage your logistics and track global shipments securely.',
    icon: User,
    color: '#FF6F00',
    bgGradient: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)'
  },
  'strategic-partners': {
    title: 'Strategic Partners Login',
    subtitle: 'Collaborate and align on global supply chain strategies.',
    icon: Briefcase,
    color: '#0277BD',
    bgGradient: 'linear-gradient(135deg, #E1F5FE 0%, #B3E5FC 100%)'
  },
  'global-export': {
    title: 'Global Export Portal',
    subtitle: 'Streamline your international export documentation and operations.',
    icon: ArrowUpRight,
    color: '#2E7D32',
    bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)'
  },
  'global-import': {
    title: 'Global Import Portal',
    subtitle: 'Track inbound shipments and manage customs compliance.',
    icon: ArrowDownLeft,
    color: '#1565C0',
    bgGradient: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)'
  },
  'supplier-network': {
    title: 'Supplier & Vendor Network',
    subtitle: 'Manage inventory, purchase orders, and vendor performance.',
    icon: Truck,
    color: '#F57C00',
    bgGradient: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)'
  },
  'logistics-operations': {
    title: 'Logistics Operations',
    subtitle: 'Internal tools for routing, freight management, and dispatch.',
    icon: Settings,
    color: '#455A64',
    bgGradient: 'linear-gradient(135deg, #ECEFF1 0%, #CFD8DC 100%)'
  },
  'enterprise-employee': {
    title: 'Enterprise Employee Portal',
    subtitle: 'Secure access to corporate resources and HR systems.',
    icon: Building,
    color: '#6A1B9A',
    bgGradient: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)'
  }
};

export const PortalLogin = ({ type = 'client-access' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [type]);

  const config = portalConfig[type] || portalConfig['client-access'];
  const IconComponent = config.icon;

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: '#F8FAFC',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '20px'
    }}>
      {/* Dynamic Background Blob */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '-10%',
        width: '600px',
        height: '600px',
        background: config.bgGradient,
        borderRadius: '50%',
        filter: 'blur(80px)',
        opacity: isVisible ? 0.6 : 0,
        transition: 'all 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
        transform: isVisible ? 'scale(1)' : 'scale(0.8)'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '800px',
        height: '800px',
        background: 'linear-gradient(135deg, rgba(255,140,0,0.1) 0%, rgba(255,111,0,0.2) 100%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: isVisible ? 0.7 : 0,
        transition: 'all 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
        transform: isVisible ? 'scale(1)' : 'scale(0.8)'
      }} />

      {/* Main Glassmorphic Login Card */}
      <div style={{
        width: '100%',
        maxWidth: '480px',
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        borderRadius: '24px',
        padding: '48px 40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.02)',
        position: 'relative',
        zIndex: 10,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>

        {/* Dynamic Icon Header */}
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '20px',
          background: config.bgGradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.06)',
          border: '2px solid #FFFFFF'
        }}>
          <IconComponent size={32} color={config.color} />
        </div>

        <h1 style={{
          fontSize: '26px',
          fontWeight: '700',
          color: '#0F172A',
          marginBottom: '10px',
          textAlign: 'center',
          fontFamily: 'var(--font-heading)'
        }}>
          {config.title}
        </h1>

        <p style={{
          fontSize: '14.5px',
          color: '#64748B',
          textAlign: 'center',
          marginBottom: '36px',
          lineHeight: '1.5',
          fontFamily: 'var(--font-body)'
        }}>
          {config.subtitle}
        </p>

        {/* Form Fields */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '8px' }}>
              Work Email
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                placeholder="name@company.com"
                style={{
                  width: '100%',
                  padding: '14px 14px 14px 42px',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  background: '#FFFFFF',
                  fontSize: '14.5px',
                  color: '#0F172A',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = config.color;
                  e.target.style.boxShadow = `0 0 0 3px ${config.color}20`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#E2E8F0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '8px' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="password"
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '14px 14px 14px 42px',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  background: '#FFFFFF',
                  fontSize: '14.5px',
                  color: '#0F172A',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = config.color;
                  e.target.style.boxShadow = `0 0 0 3px ${config.color}20`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#E2E8F0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', marginBottom: '32px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ accentColor: config.color, width: '16px', height: '16px', cursor: 'pointer' }} />
            <span style={{ fontSize: '13.5px', color: '#475569', fontWeight: '500' }}>Remember me</span>
          </label>
          <a href="#" style={{ fontSize: '13.5px', color: config.color, fontWeight: '600', textDecoration: 'none' }}>
            Forgot password?
          </a>
        </div>

        {/* Dynamic Submit Button */}
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            width: '100%',
            padding: '16px',
            background: config.color,
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '12px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
            boxShadow: isHovered ? `0 10px 20px ${config.color}40` : `0 4px 10px ${config.color}20`
          }}
        >
          Secure Login
          <ArrowRight size={18} style={{
            transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.3s ease'
          }} />
        </button>

        <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '6px', color: '#94A3B8' }}>
          <ShieldCheck size={14} />
          <span style={{ fontSize: '12.5px', fontWeight: '500' }}>256-bit AES Enterprise Encryption</span>
        </div>
      </div>
    </div>
  );
};
