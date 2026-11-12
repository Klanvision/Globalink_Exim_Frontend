import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useMotionValue, useTransform, useSpring, useAnimation } from 'framer-motion';
import kplLogo from '../../../Images/KPL_Logo.png';
import { footerData } from '../../data/footerData';
import { Phone, Mail, ExternalLink, MapPin, Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import DotField from './DotField';

/* ══════════════════════════════════════════════════════
   SHARED SPRING CONFIG
══════════════════════════════════════════════════════ */
const SPRING = { type: 'spring', stiffness: 460, damping: 24 };
const SOFT = { type: 'spring', stiffness: 280, damping: 22 };

/* ══════════════════════════════════════════════════════
   FOOTER NAV LINK — zoom-slide + sweeping gold underline
══════════════════════════════════════════════════════ */
const FooterNavLink = ({ children, onClick }) => (
  <motion.button
    onClick={onClick}
    initial={false}
    whileHover="hov"
    style={{
      background: 'none',
      border: 'none',
      padding: '3px 8px 3px 0',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      gap: '7px',
      borderRadius: '4px',
    }}
  >
    {/* Warm glow pill background */}
    <motion.span
      variants={{ hov: { opacity: 1, scaleX: 1 } }}
      initial={{ opacity: 0, scaleX: 0.6 }}
      transition={{ type: 'spring', stiffness: 480, damping: 32 }}
      style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(255,224,130,0.14) 0%, rgba(255,195,50,0.07) 100%)',
        borderRadius: '4px',
        transformOrigin: 'left',
        pointerEvents: 'none',
      }}
    />
    {/* Left gold accent bar */}
    <motion.span
      variants={{ hov: { scaleY: 1, opacity: 1 } }}
      initial={{ scaleY: 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 520, damping: 30 }}
      style={{
        display: 'block', width: '2.5px', height: '14px',
        background: 'linear-gradient(180deg, #FFE082 0%, #FFA000 100%)',
        borderRadius: '2px', transformOrigin: 'center',
        flexShrink: 0, boxShadow: '0 0 6px rgba(255,224,130,0.5)',
      }}
    />
    {/* Text */}
    <motion.span
      variants={{ hov: { x: 4, scale: 1.13, color: '#FFE082', opacity: 1, fontWeight: '600' } }}
      transition={SPRING}
      style={{
        color: '#FFFFFF', opacity: 0.86, fontSize: '11px',
        fontWeight: '500', fontFamily: 'var(--font-body)',
        letterSpacing: '0.01em', display: 'inline-block',
        transformOrigin: 'left center',
      }}
    >
      {children}
    </motion.span>
  </motion.button>
);

/* ══════════════════════════════════════════════════════
   LEGAL LINK — same pattern, compact
══════════════════════════════════════════════════════ */
const FooterLegalLink = ({ children, onClick }) => (
  <motion.button
    onClick={onClick}
    initial={false}
    whileHover="hov"
    style={{
      background: 'none', border: 'none',
      padding: '4px 8px', cursor: 'pointer',
      display: 'inline-flex', alignItems: 'center',
      borderRadius: '4px', position: 'relative',
    }}
  >
    {/* Glow pill on hover */}
    <motion.span
      variants={{ hov: { opacity: 1, scale: 1 } }}
      initial={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.2 }}
      style={{
        position: 'absolute', inset: 0,
        background: 'rgba(255, 224, 130, 0.15)',
        borderRadius: '4px', pointerEvents: 'none',
        border: '1px solid rgba(255, 224, 130, 0.22)',
      }}
    />
    <motion.span
      variants={{ hov: { color: '#FFE082', scale: 1.06, letterSpacing: '0.05em' } }}
      transition={{ type: 'spring', stiffness: 440, damping: 24 }}
      style={{
        color: '#FFFFFF',
        opacity: 1,
        fontSize: '11px',
        fontWeight: '600',
        fontFamily: 'var(--font-body)',
        letterSpacing: '0.02em',
        display: 'inline-block',
        transformOrigin: 'center',
      }}
    >
      {children}
    </motion.span>
  </motion.button>
);

/* ══════════════════════════════════════════════════════
   SOCIAL ICON — shimmer sweep + floating particles + depth glow
══════════════════════════════════════════════════════ */
const SocialIcon = ({ href, label, bg, children }) => {
  const [hovered, setHovered] = useState(false);
  const shimmer = useAnimation();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-18, 18], [14, -14]), { stiffness: 340, damping: 22 });
  const rotY = useSpring(useTransform(mx, [-18, 18], [-14, 14]), { stiffness: 340, damping: 22 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };

  const onEnter = () => {
    setHovered(true);
    shimmer.start({
      x: ['-110%', '160%'],
      transition: { duration: 0.52, ease: [0.4, 0, 0.2, 1] },
    });
  };

  const onLeave = () => {
    setHovered(false);
    mx.set(0); my.set(0);
    shimmer.set({ x: '-110%' });
  };

  /* 4 particles at staggered positions */
  const particles = [
    { left: '22%', delay: 0, dx: -3 },
    { left: '40%', delay: 0.10, dx: 0 },
    { left: '60%', delay: 0.07, dx: 2 },
    { left: '75%', delay: 0.16, dx: -1 },
  ];

  return (
    <motion.a
      href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      onMouseMove={onMove} onMouseLeave={onLeave} onMouseEnter={onEnter}
      whileHover={{
        y: -8,
        scale: 1.18,
        boxShadow: '0 12px 32px rgba(0,0,0,0.42), 0 0 0 2px rgba(255,224,130,0.6)',
      }}
      whileTap={{ scale: 0.93, y: -2 }}
      transition={SPRING}
      style={{
        rotateX: rotX, rotateY: rotY,
        width: '36px', height: '36px', borderRadius: '50%', background: bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#FFFFFF', textDecoration: 'none',
        border: '1.5px solid rgba(255,255,255,0.5)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.28)',
        position: 'relative', perspective: 600, overflow: 'hidden',
        transformStyle: 'preserve-3d', cursor: 'pointer', flexShrink: 0,
      }}
    >
      {/* ─ Diagonal shimmer sweep ─ */}
      <motion.span
        animate={shimmer}
        initial={{ x: '-110%' }}
        style={{
          position: 'absolute', top: 0, bottom: 0,
          width: '55%', skewX: '-15deg',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.52) 50%, transparent 100%)',
          pointerEvents: 'none', zIndex: 2,
        }}
      />
      {/* ─ Soft ambient glow ─ */}
      <motion.span
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.28 }}
        style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,224,130,0.38) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      {/* ─ Floating gold micro-particles ─ */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          animate={hovered
            ? { y: [-2, -18, -28], opacity: [0, 0.9, 0], x: p.dx }
            : { y: 0, opacity: 0 }
          }
          transition={{ duration: 0.7, delay: p.delay, ease: 'easeOut' }}
          style={{
            position: 'absolute', bottom: '18%', left: p.left,
            width: '3px', height: '3px', borderRadius: '50%',
            background: '#FFE082',
            boxShadow: '0 0 4px rgba(255,224,130,0.8)',
            pointerEvents: 'none', zIndex: 3,
          }}
        />
      ))}
      {/* ─ Icon ─ */}
      <motion.div
        whileHover={{ scale: 1.12, y: -1 }}
        transition={{ type: 'spring', stiffness: 440, damping: 22 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}
      >
        {children}
      </motion.div>
    </motion.a>
  );
};

/* ══════════════════════════════════════════════════════
   COLUMN TITLE — scale + golden glow text shadow
══════════════════════════════════════════════════════ */
const ColTitle = ({ children }) => (
  <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginBottom: '14px' }}>
    <motion.h4
      initial={false}
      whileHover={{ scale: 1.06, color: '#FFE082', textShadow: '0 0 20px rgba(255,224,130,0.6)' }}
      transition={SOFT}
      style={{
        fontFamily: 'var(--font-body)', fontSize: '13.5px', fontWeight: '700',
        color: '#FFFFFF', cursor: 'default',
        margin: '0 0 6px 0', transformOrigin: 'center center',
      }}
    >
      {children}
    </motion.h4>
    <GoldBar />
  </div>
);

/* ══════════════════════════════════════════════════════
   CONTACT ROW — shimmer icon pill + particles + text slide
══════════════════════════════════════════════════════ */
const ContactRow = ({ icon: Icon, children }) => {
  const [hovered, setHovered] = useState(false);
  const shimmer = useAnimation();

  const onEnter = () => {
    setHovered(true);
    shimmer.start({
      x: ['-120%', '160%'],
      transition: { duration: 0.48, ease: [0.4, 0, 0.2, 1] },
    });
  };
  const onLeave = () => {
    setHovered(false);
    shimmer.set({ x: '-120%' });
  };

  const particles = [
    { left: '20%', delay: 0, dx: -2 },
    { left: '50%', delay: 0.09, dx: 0 },
    { left: '78%', delay: 0.17, dx: 2 },
  ];

  return (
    <motion.div
      initial={false}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      whileHover="hov"
      style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', cursor: 'default' }}
    >
      {/* ─ Icon pill with shimmer + particles ─ */}
      <motion.div
        variants={{ hov: { y: -5, scale: 1.18, boxShadow: '0 8px 22px rgba(0,0,0,0.35), 0 0 0 1.5px rgba(255,224,130,0.55)' } }}
        transition={SPRING}
        style={{
          flexShrink: 0, marginTop: '1px',
          width: '24px', height: '24px', borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 224, 130, 0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
          backdropFilter: 'blur(2px)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
        }}
      >
        {/* Shimmer sweep */}
        <motion.span
          animate={shimmer}
          initial={{ x: '-120%' }}
          style={{
            position: 'absolute', top: 0, bottom: 0,
            width: '60%', skewX: '-10deg',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)',
            pointerEvents: 'none', zIndex: 2,
          }}
        />
        {/* Floating particles */}
        {particles.map((p, i) => (
          <motion.span
            key={i}
            animate={hovered
              ? { y: [-1, -12, -20], opacity: [0, 1, 0], x: p.dx }
              : { y: 0, opacity: 0 }
            }
            transition={{ duration: 0.6, delay: p.delay, ease: 'easeOut' }}
            style={{
              position: 'absolute', bottom: '10%', left: p.left,
              width: '2.5px', height: '2.5px', borderRadius: '50%',
              background: '#FFE082',
              boxShadow: '0 0 3px rgba(255,224,130,0.9)',
              pointerEvents: 'none', zIndex: 3,
            }}
          />
        ))}
        {/* Ambient glow */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,224,130,0.4) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        {/* Icon */}
        <motion.div
          variants={{ hov: { scale: 1.15, rotate: [0, -10, 7, 0] } }}
          transition={{ duration: 0.38, ease: 'easeOut' }}
          style={{ zIndex: 1, display: 'flex' }}
        >
          <Icon size={12} color="#FFE082" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.3))' }} />
        </motion.div>
      </motion.div>

      {/* ─ Text slides right + scales + turns gold ─ */}
      <motion.span
        variants={{ hov: { x: 4, scale: 1.04, color: '#FFE082', opacity: 1 } }}
        transition={SPRING}
        style={{
          fontSize: '10.5px', color: '#FFFFFF', fontWeight: '500',
          opacity: 0.92, fontFamily: 'var(--font-body)', wordBreak: 'break-all',
          lineHeight: 1.55, display: 'inline-block', transformOrigin: 'left center',
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
};

/* ══════════════════════════════════════════════════════
   GOLD ACCENT BAR — Global Sync Pulse
══════════════════════════════════════════════════════ */
const GoldBar = () => (
  <div style={{ position: 'relative', width: '46px', height: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {/* Base tracking line */}
    <div style={{ position: 'absolute', width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '1px' }} />
    
    {/* Central Core (Hub/HQ) */}
    <motion.div
      animate={{ scale: [1, 1.4, 1], boxShadow: ['0 0 4px #FFE082', '0 0 16px 3px #FF8C00', '0 0 4px #FFE082'] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', width: '5px', height: '5px', background: '#FFFFFF', borderRadius: '50%', zIndex: 2 }}
    />

    {/* Outward Data / Connection Waves */}
    <motion.div
      animate={{ scaleX: [0, 1, 0], opacity: [1, 0.4, 1] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute', width: '100%', height: '2px',
        background: 'radial-gradient(circle, #FFFFFF 0%, #FFE082 40%, transparent 90%)',
        borderRadius: '2px', transformOrigin: 'center'
      }}
    />
    
    {/* Endpoint Flash Left (Global Node) */}
    <motion.div
      animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', times: [0, 0.5, 1] }}
      style={{ position: 'absolute', left: '-2px', width: '4px', height: '4px', background: '#FFE082', borderRadius: '50%', boxShadow: '0 0 8px #FF8C00' }}
    />

    {/* Endpoint Flash Right (Global Node) */}
    <motion.div
      animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', times: [0, 0.5, 1] }}
      style={{ position: 'absolute', right: '-2px', width: '4px', height: '4px', background: '#FFE082', borderRadius: '50%', boxShadow: '0 0 8px #FF8C00' }}
    />
  </div>
);

/* ══════════════════════════════════════════════════════
   MAIN FOOTER
══════════════════════════════════════════════════════ */
export const Footer = ({ onNavigate }) => {
  const handleLinkClick = (route) => {
    if (onNavigate) onNavigate(route);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* Stagger container for columns */
  const colContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
  };
  const colItem = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 340, damping: 28 } },
  };

  const footerContent = (
    <footer
      className="global-link-footer"
      style={{
        position: 'relative',
        width: '100%',
        margin: '0',
        background: 'linear-gradient(135deg, #FF6F00 0%, #FF8C00 45%, #E65100 100%)',
        color: '#FFFFFF',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.35)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 -4px 24px rgba(230,81,0,0.22)',
      }}
    >
      {/* ── DotField animated background ── */}
      <DotField
        dotRadius={1.5}
        dotSpacing={14}
        bulgeStrength={67}
        glowRadius={100}
        sparkle={true}
        waveAmplitude={0}
        cursorRadius={500}
        cursorForce={0.1}
        bulgeOnly
        gradientFrom="rgba(255, 255, 255, 0.65)"
        gradientTo="rgba(255, 220, 100, 0.45)"
        glowColor="rgba(255, 210, 60, 0.28)"
      />

      {/* ── Main Content ── */}
      <div
        style={{
          position: 'relative', zIndex: 1, width: '100%',
          padding: '36px var(--section-horizontal-padding, 132px) 22px var(--section-horizontal-padding, 132px)', boxSizing: 'border-box',
        }}
      >
        {/* 7-Column Grid */}
        <motion.div
          variants={colContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.35fr 0.85fr 0.95fr 1.05fr 0.95fr 0.85fr 1.15fr',
            gap: '18px',
            alignItems: 'flex-start',
          }}
        >

          {/* ── COL 1: Brand ── */}
          <motion.div variants={colItem} style={{ display: 'flex', flexDirection: 'column', paddingRight: '8px' }}>
            {/* Floating Logo */}
            <motion.div
              onClick={() => handleLinkClick('home')}
              whileHover={{ y: -5, filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))' }}
              whileTap={{ scale: 0.95 }}
              transition={SPRING}
              style={{ cursor: 'pointer', marginBottom: '14px', display: 'inline-flex', filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.25))' }}
            >
              <img
                src={kplLogo}
                alt="KPL Brand Logo"
                style={{ height: '56px', width: 'auto', objectFit: 'contain' }}
              />
            </motion.div>

            <motion.p
              whileHover={{ x: 3, color: '#FFE082' }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '700',
                color: '#FFE082', marginBottom: '6px', lineHeight: '1.45',
                letterSpacing: '0.02em', cursor: 'default',
              }}
            >
              Simplifying Global Trade.<br />Delivering Excellence Worldwide.
            </motion.p>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '10.5px', lineHeight: '1.55',
              color: '#FFFFFF', opacity: 0.92, marginBottom: '18px',
            }}>
              A globally recognized, highly trusted partner seamlessly connecting you to the world's most reliable export, import, and end-to-end supply chain networks.
            </p>

            {/* Magnetic Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SocialIcon href="https://facebook.com" label="Facebook" bg="linear-gradient(135deg,#1877F2,#0c59c0)">
                <Facebook size={17} fill="currentColor" strokeWidth={0} />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" label="LinkedIn" bg="linear-gradient(135deg,#0A66C2,#064585)">
                <Linkedin size={17} fill="currentColor" strokeWidth={0} />
              </SocialIcon>
              <SocialIcon href="https://instagram.com" label="Instagram" bg="linear-gradient(45deg,#F58529,#DD2A7B,#8134AF)">
                <Instagram size={15} strokeWidth={2} />
              </SocialIcon>
              <SocialIcon href="https://youtube.com" label="YouTube" bg="linear-gradient(135deg,#FF0000,#b30000)">
                <Youtube size={15} strokeWidth={2} />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" label="Twitter X" bg="linear-gradient(135deg,#1DA1F2,#0d72b0)">
                <Twitter size={15} strokeWidth={2} />
              </SocialIcon>
            </div>
          </motion.div>

          {/* ── COL 2: Company ── */}
          <motion.div variants={colItem}>
            <ColTitle>Company</ColTitle>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {footerData.company.links.map((l) => (
                <li key={l.label}><FooterNavLink onClick={() => handleLinkClick(l.route)}>{l.label}</FooterNavLink></li>
              ))}
            </ul>
          </motion.div>

          {/* ── COL 3: Services ── */}
          <motion.div variants={colItem}>
            <ColTitle>Services</ColTitle>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {footerData.services.links.map((l) => (
                <li key={l.label}><FooterNavLink onClick={() => handleLinkClick(l.route)}>{l.label}</FooterNavLink></li>
              ))}
            </ul>
          </motion.div>

          {/* ── COL 4: Products ── */}
          <motion.div variants={colItem}>
            <ColTitle>Products</ColTitle>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {footerData.products.links.map((l) => (
                <li key={l.label}><FooterNavLink onClick={() => handleLinkClick(l.route)}>{l.label}</FooterNavLink></li>
              ))}
            </ul>
          </motion.div>

          {/* ── COL 5: Trade Network ── */}
          <motion.div variants={colItem}>
            <ColTitle>Trade Network</ColTitle>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {footerData.tradeNetwork.links.map((l) => (
                <li key={l.label}><FooterNavLink onClick={() => handleLinkClick(l.route)}>{l.label}</FooterNavLink></li>
              ))}
            </ul>
          </motion.div>

          {/* ── COL 6: Resources ── */}
          <motion.div variants={colItem}>
            <ColTitle>Resources</ColTitle>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {footerData.resources.links.map((l) => (
                <li key={l.label}><FooterNavLink onClick={() => handleLinkClick(l.route)}>{l.label}</FooterNavLink></li>
              ))}
            </ul>
          </motion.div>

          {/* ── COL 7: Contact Us ── */}
          <motion.div variants={colItem}>
            <ColTitle>Contact Us</ColTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <ContactRow icon={Phone}>{footerData.contact.phone}</ContactRow>
              <ContactRow icon={Mail}>{footerData.contact.email}</ContactRow>
              <ContactRow icon={ExternalLink}>{footerData.contact.website}</ContactRow>
              <ContactRow icon={MapPin}>{footerData.contact.location}</ContactRow>
            </div>
          </motion.div>

        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            width: '100%', height: '1px',
            backgroundColor: 'rgba(255,255,255,0.25)',
            margin: '26px 0 12px 0',
            transformOrigin: 'left',
          }}
        />

        {/* Bottom Bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px', paddingBottom: '4px',
        }}>
          <motion.div
            whileHover={{ color: '#FFE082', x: 3 }}
            transition={{ duration: 0.2 }}
            style={{
              color: '#FFFFFF', opacity: 1, fontWeight: '600',
              fontSize: '11px', fontFamily: 'var(--font-body)', cursor: 'default',
              letterSpacing: '0.01em',
            }}
          >
            © 2026 KPL Exim Solutions. All Rights Reserved.
          </motion.div>

          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '2px' }}>
            {footerData.legalLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <FooterLegalLink onClick={() => handleLinkClick(link.route)}>{link.label}</FooterLegalLink>
                {idx < footerData.legalLinks.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '11px', fontWeight: '300', padding: '0 1px' }}>|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );

  return createPortal(footerContent, document.body);
};
