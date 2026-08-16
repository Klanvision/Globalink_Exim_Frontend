import React, { useState } from 'react';
import { Logo } from './Logo';
import { footerData } from '../../data/footerData';
import { Phone, Mail, Globe2, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

export const Footer = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null); // 'success' | 'error' | null

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setNewsletterStatus('error');
      return;
    }
    setNewsletterStatus('success');
    setEmail('');
  };

  const handleLinkClick = (route) => {
    if (onNavigate) {
      onNavigate(route);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="global-link-footer"
      style={{
        position: 'relative',
        marginTop: '36px',
        background: 'linear-gradient(135deg, #03142F 0%, #021B3D 55%, #03132D 100%)',
        color: '#FFFFFF',
        overflow: 'hidden',
        borderTop: '1px solid rgba(100, 150, 210, 0.25)',
      }}
    >
      {/* Background World Network Matrix Decoration */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse at 85% 40%, rgba(10, 76, 145, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse at 15% 70%, rgba(242, 181, 47, 0.04) 0%, transparent 50%),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 32px 32px, 32px 32px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Main Footer Content Container */}
      <div
        className="footer-content-container"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '36px 24px 22px 24px',
        }}
      >
        {/* 8-Column Grid Layout */}
        <div
          className="footer-columns-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.35fr 0.85fr 0.95fr 1.05fr 0.95fr 0.85fr 1.15fr 1.1fr',
            gap: '18px',
            alignItems: 'flex-start',
          }}
        >
          {/* COLUMN 1: Brand & Description & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '8px' }}>
            <div style={{ cursor: 'pointer', marginBottom: '10px' }} onClick={() => handleLinkClick('home')}>
              <Logo />
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11.5px',
                fontWeight: '600',
                color: '#F2B52F',
                marginBottom: '3px',
                lineHeight: '1.35',
              }}
            >
              Connecting Markets. Delivering Value.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '10.5px',
                lineHeight: '1.45',
                color: 'rgba(255, 255, 255, 0.78)',
                marginBottom: '14px',
              }}
            >
              Your trusted partner in exports, imports and global supply chain solutions.
            </p>

            {/* 5 Social Media Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social-icon"
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: '#1877F2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease',
                }}
              >
                f
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-icon"
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: '#0A66C2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease',
                }}
              >
                in
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-icon"
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '10px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease',
                }}
              >
                IG
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="footer-social-icon"
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: '#FF0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '10px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease',
                }}
              >
                ▶
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter X"
                className="footer-social-icon"
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: '#1DA1F2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease',
                }}
              >
                𝕏
              </a>
            </div>
          </div>

          {/* COLUMN 2: Company */}
          <div>
            <h4 className="footer-col-title" style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', fontWeight: '600', color: '#F2B52F', marginBottom: '4px' }}>
              Company
            </h4>
            <div style={{ width: '26px', height: '1.5px', backgroundColor: '#F2B52F', marginBottom: '10px' }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {footerData.company.links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.route)}
                    className="footer-nav-link"
                    style={{ background: 'none', border: 'none', padding: 0, color: 'rgba(255, 255, 255, 0.82)', fontSize: '11px', textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'color 0.18s ease' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Services */}
          <div>
            <h4 className="footer-col-title" style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', fontWeight: '600', color: '#F2B52F', marginBottom: '4px' }}>
              Services
            </h4>
            <div style={{ width: '26px', height: '1.5px', backgroundColor: '#F2B52F', marginBottom: '10px' }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {footerData.services.links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.route)}
                    className="footer-nav-link"
                    style={{ background: 'none', border: 'none', padding: 0, color: 'rgba(255, 255, 255, 0.82)', fontSize: '11px', textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'color 0.18s ease' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Products */}
          <div>
            <h4 className="footer-col-title" style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', fontWeight: '600', color: '#F2B52F', marginBottom: '4px' }}>
              Products
            </h4>
            <div style={{ width: '26px', height: '1.5px', backgroundColor: '#F2B52F', marginBottom: '10px' }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {footerData.products.links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.route)}
                    className="footer-nav-link"
                    style={{ background: 'none', border: 'none', padding: 0, color: 'rgba(255, 255, 255, 0.82)', fontSize: '11px', textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'color 0.18s ease' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: Trade Network */}
          <div>
            <h4 className="footer-col-title" style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', fontWeight: '600', color: '#F2B52F', marginBottom: '4px' }}>
              Trade Network
            </h4>
            <div style={{ width: '26px', height: '1.5px', backgroundColor: '#F2B52F', marginBottom: '10px' }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {footerData.tradeNetwork.links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.route)}
                    className="footer-nav-link"
                    style={{ background: 'none', border: 'none', padding: 0, color: 'rgba(255, 255, 255, 0.82)', fontSize: '11px', textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'color 0.18s ease' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 6: Resources */}
          <div>
            <h4 className="footer-col-title" style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', fontWeight: '600', color: '#F2B52F', marginBottom: '4px' }}>
              Resources
            </h4>
            <div style={{ width: '26px', height: '1.5px', backgroundColor: '#F2B52F', marginBottom: '10px' }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {footerData.resources.links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.route)}
                    className="footer-nav-link"
                    style={{ background: 'none', border: 'none', padding: 0, color: 'rgba(255, 255, 255, 0.82)', fontSize: '11px', textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'color 0.18s ease' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 7: Contact Us */}
          <div>
            <h4 className="footer-col-title" style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', fontWeight: '600', color: '#F2B52F', marginBottom: '4px' }}>
              Contact Us
            </h4>
            <div style={{ width: '26px', height: '1.5px', backgroundColor: '#F2B52F', marginBottom: '10px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                <Phone size={13} color="#F2B52F" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.85)', fontFamily: 'var(--font-body)' }}>
                  {footerData.contact.phone}
                </span>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                <Mail size={13} color="#F2B52F" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '10.5px', color: 'rgba(255, 255, 255, 0.85)', fontFamily: 'var(--font-body)', wordBreak: 'break-all' }}>
                  {footerData.contact.email}
                </span>
              </div>

              {/* Website */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                <Globe2 size={13} color="#F2B52F" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '10.5px', color: 'rgba(255, 255, 255, 0.85)', fontFamily: 'var(--font-body)', wordBreak: 'break-all' }}>
                  {footerData.contact.website}
                </span>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                <MapPin size={13} color="#F2B52F" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.85)', fontFamily: 'var(--font-body)' }}>
                  {footerData.contact.location}
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 8: Newsletter */}
          <div>
            <h4 className="footer-col-title" style={{ fontFamily: 'Georgia, serif', fontSize: '13.5px', fontWeight: '600', color: '#F2B52F', marginBottom: '4px' }}>
              Newsletter
            </h4>
            <div style={{ width: '26px', height: '1.5px', backgroundColor: '#F2B52F', marginBottom: '10px' }} />
            <p style={{ fontSize: '10.5px', lineHeight: '1.35', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '8px', fontFamily: 'var(--font-body)' }}>
              Stay ahead with global trade opportunities
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (newsletterStatus) setNewsletterStatus(null);
                }}
                placeholder="Enter your business email"
                style={{
                  height: '32px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '4px',
                  padding: '0 8px',
                  color: '#FFFFFF',
                  fontSize: '10.5px',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  width: '100%',
                }}
              />

              <button
                type="submit"
                className="footer-subscribe-btn"
                style={{
                  height: '32px',
                  backgroundColor: '#F2B52F',
                  color: '#03132D',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  transition: 'all 0.18s ease',
                  width: '100%',
                }}
              >
                Subscribe
              </button>

              {/* Inline Success / Error Message */}
              {newsletterStatus === 'success' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#4ADE80', fontSize: '10px', marginTop: '1px' }}>
                  <CheckCircle2 size={12} />
                  <span>Thanks for subscribing!</span>
                </div>
              )}
              {newsletterStatus === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#F87171', fontSize: '10px', marginTop: '1px' }}>
                  <AlertCircle size={12} />
                  <span>Please enter a valid business email.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Full-Width Divider */}
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.14)',
            margin: '26px 0 12px 0',
          }}
        />

        {/* Bottom Bar: Copyright on Left, Legal Links on Right */}
        <div
          className="footer-bottom-bar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            fontSize: '10.5px',
            color: 'rgba(255, 255, 255, 0.75)',
            fontFamily: 'var(--font-body)',
          }}
        >
          {/* Copyright */}
          <div>
            © 2026 Global Link Trade Solutions. All Rights Reserved.
          </div>

          {/* Legal Links */}
          <div
            className="footer-legal-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            {footerData.legalLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <button
                  onClick={() => handleLinkClick(link.route)}
                  className="footer-legal-link"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '10.5px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    transition: 'color 0.18s ease',
                  }}
                >
                  {link.label}
                </button>
                {idx < footerData.legalLinks.length - 1 && (
                  <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '10px' }}>|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
