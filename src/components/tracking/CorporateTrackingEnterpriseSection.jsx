import React, { useState } from 'react';
import {
  Layers,
  Upload,
  BellRing,
  Code2,
  ShieldCheck,
  Clock,
  ArrowRight,
  ChevronRight,
  Plus,
  Minus,
  Headphones,
  Search,
  X,
  HelpCircle,
  FileText,
  CheckCircle2,
} from 'lucide-react';

// Exact User Provided Shipment Service Images from Images/
import oceanFreightImg from '../../../Images/Ocean Freight.png';
import airFreightImg from '../../../Images/Air freight.png';
import inlandImg from '../../../Images/Inland.png';
import customsClearanceImg from '../../../Images/Customs Clearance.png';
import customerSupportImg from '../../../Images/customer support.png';

export const CorporateTrackingEnterpriseSection = ({ onContactSupport }) => {
  const [hoveredService, setHoveredService] = useState(null);
  const [openFaqId, setOpenFaqId] = useState(null);
  const [showFaqModal, setShowFaqModal] = useState(false);
  const [faqModalSearch, setFaqModalSearch] = useState('');
  const [faqModalCategory, setFaqModalCategory] = useState('all');
  const [modalOpenFaqId, setModalOpenFaqId] = useState(null);

  // 1. Enterprise Visibility 6 Capability Cards
  const features = [
    {
      id: 'multimodal',
      icon: Layers,
      title: 'Multimodal tracking',
      description:
        'Ocean, air and road shipments in a single search, with consistent milestone naming.',
    },
    {
      id: 'bulk',
      icon: Upload,
      title: 'Bulk and saved lists',
      description:
        'Upload CSV or Excel, save watchlists and export status reports on demand.',
    },
    {
      id: 'alerts',
      icon: BellRing,
      title: 'Exception alerts',
      description:
        'Delay, rollover, customs hold and demurrage warnings before they cost you.',
    },
    {
      id: 'api',
      icon: Code2,
      title: 'API and EDI integration',
      description:
        'Push status events into your ERP, TMS or control tower securely.',
    },
    {
      id: 'vault',
      icon: ShieldCheck,
      title: 'Secure document vault',
      description:
        'Role-based access to BL, invoices, customs entries and proof of delivery.',
    },
    {
      id: 'support',
      icon: Clock,
      title: '24/7 expert support',
      description:
        'Dedicated account managers and a live desk for urgent cargo queries.',
    },
  ];

  // 2. Our Shipment Services 4 Cards (Matching Reference Image with Exact Assets)
  const services = [
    {
      id: 'ocean',
      title: 'Ocean Freight',
      subtitle: 'Cost-effective global shipping',
      image: oceanFreightImg,
      fallbackImage: '/services/ocean-freight.png',
    },
    {
      id: 'air',
      title: 'Air Freight',
      subtitle: 'Fast & reliable delivery',
      image: airFreightImg,
      fallbackImage: '/services/air-freight.png',
    },
    {
      id: 'inland',
      title: 'Inland',
      subtitle: 'Flexible & efficient solutions',
      image: inlandImg,
      fallbackImage: '/services/inland.png',
    },
    {
      id: 'customs',
      title: 'Customs Clearance',
      subtitle: 'Hassle-free clearance support',
      image: customsClearanceImg,
      fallbackImage: '/services/customs-clearance.png',
    },
  ];

  // 3. Complete Suite of 13 Corporate Shipment FAQs (Matching Reference Design)
  const allFaqs = [
    {
      id: 1,
      category: 'tracking',
      question: 'How can I track my shipment across ocean, air, and inland freight?',
      answer:
        'Enter your Container Number (e.g. KPLU 482019-6), Bill of Lading (B/L), Booking Reference, Air Waybill (AWB), or Inland Truck LR Number in the search field above. Our multimodal tracking engine unifies satellite AIS, airline telemetry, and terminal gate data into a single consolidated milestone view.',
    },
    {
      id: 2,
      category: 'tracking',
      question: 'What is the difference between Estimated Time of Departure (ETD) and Actual Time of Departure (ATD)?',
      answer:
        'ETD represents the scheduled vessel or flight departure published by the carrier, whereas ATD confirms the exact timestamp when the vessel unmoored from the berth or the cargo aircraft took off.',
    },
    {
      id: 3,
      category: 'tracking',
      question: 'How often is live vessel AIS and container milestone data refreshed?',
      answer:
        'Real-time satellite and terrestrial AIS coordinates update every 15–30 minutes while in coastal or open-water corridors. Terminal gate-in, customs hold, and vessel loading milestones refresh immediately upon carrier EDI/API transmission.',
    },
    {
      id: 4,
      category: 'tracking',
      question: 'Why is my tracking ID or container number not showing immediate status?',
      answer:
        'Fresh container bookings usually reflect in the carrier EDI manifest within 2 to 4 hours after initial depot gate-in or booking confirmation. If your reference was issued recently, please check back shortly or verify the prefix format.',
    },
    {
      id: 5,
      category: 'operations',
      question: 'Can I modify consignee details, destination port, or delivery address mid-transit?',
      answer:
        'Yes. Destination rerouting (COD - Change of Destination) and consignee amendments are feasible before the vessel reaches its final transshipment hub or port of discharge. Submit an urgent service request via our 24/7 support desk.',
    },
    {
      id: 6,
      category: 'customs',
      question: 'What should I do if my container is placed on a Customs Hold or Examination Notice?',
      answer:
        'Our dedicated customs brokerage desk handles examination orders, bill of entry assessments, and EDI manifest queries directly with ICEGATE and destination port authorities. You can track hold status and upload pending compliance documents in the Document Vault.',
    },
    {
      id: 7,
      category: 'docs',
      question: 'How do I access and download my Bill of Lading (B/L), Commercial Invoice, and Packing List?',
      answer:
        'Verified trade documents are permanently stored in the Shipment Documents Vault. Released original sea waybills, attested invoices, and packing manifests can be downloaded individually or compiled into an archive ZIP after authenticated sign-in.',
    },
    {
      id: 8,
      category: 'operations',
      question: 'What is demurrage and detention, and how does KPL help prevent extra charges?',
      answer:
        'Demurrage applies when full containers remain inside the port terminal beyond free days; detention applies when equipment is kept outside the port past the agreed turnaround window. Our automated Exception Alerts notify your logistics team 48 hours prior to free-time expiration.',
    },
    {
      id: 9,
      category: 'operations',
      question: 'What happens during transshipment at an intermediate hub?',
      answer:
        'During transshipment (e.g., Colombo, Singapore, Rotterdam), your container is offloaded from the feeder vessel and transferred to the mother vessel. The milestone timeline updates automatically to reflect "Discharged at Transshipment Hub" and "Connected to Onward Vessel".',
    },
    {
      id: 10,
      category: 'operations',
      question: 'How does temperature and humidity monitoring work for Reefer (Refrigerated) containers?',
      answer:
        'Cold-chain reefer shipments feature continuous IoT sensor logging for set-point temperature, return air temperature, and power supply continuity, triggering instant alerts if thresholds fluctuate beyond ±0.5°C.',
    },
    {
      id: 11,
      category: 'docs',
      question: 'Can I export tracking status reports or integrate telemetry directly into my ERP/TMS?',
      answer:
        'Yes. Enterprise accounts can export bulk tracking reports in CSV/Excel format on-demand, or connect directly to our REST API / EDI 214 status webhooks for automated synchronization into SAP, Oracle, or custom logistics control towers.',
    },
    {
      id: 12,
      category: 'customs',
      question: 'What cargo insurance coverage is included, and how do I file a damage or shortage claim?',
      answer:
        'Shipments booked with KPL Marine Insurance are covered under Institute Cargo Clauses (A) against all risks. In the rare event of transit damage or seal discrepancy, report the issue within 72 hours of discharge with port outturn and survey reports.',
    },
    {
      id: 13,
      category: 'docs',
      question: 'Which EDI protocols and API webhooks are supported for automated ERP integration?',
      answer:
        'We support standard EDIFACT (IFTMIN, IFTSTA) and ANSI X12 (EDI 214, EDI 315, EDI 310) transaction sets alongside RESTful JSON Webhooks. Real-time carrier milestone events, container discharge notices, and customs gate passes push automatically to SAP, Oracle TMS, and enterprise control towers.',
    },
  ];

  // Dynamic count verification for tabs
  const categoryCounts = {
    all: allFaqs.length,
    tracking: allFaqs.filter((f) => f.category === 'tracking').length,
    operations: allFaqs.filter((f) => f.category === 'operations').length,
    customs: allFaqs.filter((f) => f.category === 'customs').length,
    docs: allFaqs.filter((f) => f.category === 'docs').length,
  };

  const categoryTabs = [
    { key: 'all', label: `All Questions (${categoryCounts.all})` },
    { key: 'tracking', label: `Tracking & AIS (${categoryCounts.tracking})` },
    { key: 'operations', label: `Operations & Reefer (${categoryCounts.operations})` },
    { key: 'customs', label: `Customs & Insurance (${categoryCounts.customs})` },
    { key: 'docs', label: `Documents & API (${categoryCounts.docs})` },
  ];

  // Core 4 FAQs displayed on the main page card
  const primaryFaqs = allFaqs.slice(0, 4);

  const togglePrimaryFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const toggleModalFaq = (id) => {
    setModalOpenFaqId(modalOpenFaqId === id ? null : id);
  };

  // Filtered FAQs for the 13-FAQ Modal Popup (Robust for All and Categories)
  const filteredModalFaqs = allFaqs.filter((faq) => {
    const query = (faqModalSearch || '').trim().toLowerCase();
    const matchesSearch =
      !query ||
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query);
    if (!faqModalCategory || faqModalCategory === 'all') return matchesSearch;
    return matchesSearch && faq.category === faqModalCategory;
  });

  return (
    <section
      className="corporate-enterprise-visibility-section"
      style={{
        marginTop: '36px',
        marginBottom: '28px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Scoped Corporate Keyframe Animations, Custom Scrollbar & Responsive Rules */}
      <style>{`
        .enterprise-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }
        .shipment-services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 36px;
        }
        .bottom-faq-assistance-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.2fr);
          gap: 24px;
          align-items: stretch;
        }
        @media (max-width: 1100px) {
          .enterprise-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .shipment-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bottom-faq-assistance-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .enterprise-features-grid {
            grid-template-columns: 1fr;
          }
          .shipment-services-grid {
            grid-template-columns: 1fr;
          }
        }
        @keyframes kpl-support-emblem-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(234, 88, 12, 0.35);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(234, 88, 12, 0);
          }
        }
        @keyframes kpl-headset-corporate {
          0%, 100% {
            box-shadow: 0 2px 10px rgba(234, 88, 12, 0.14);
            border-color: #FED7AA;
          }
          50% {
            box-shadow: 0 4px 18px rgba(234, 88, 12, 0.28);
            border-color: #FDBA74;
          }
        }
        @keyframes kpl-live-dot-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.45);
          }
          50% {
            box-shadow: 0 0 0 5px rgba(16, 185, 129, 0);
          }
        }
        .kpl-assistance-btn-animated:hover .kpl-btn-arrow-slide {
          transform: translateX(4px);
        }
        .kpl-btn-arrow-slide {
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Impressive Custom Corporate Scrollbar for Modal FAQ */
        .kpl-impressive-scrollbar::-webkit-scrollbar {
          width: 7px;
          height: 7px;
        }
        .kpl-impressive-scrollbar::-webkit-scrollbar-track {
          background: #F1F5F9;
          border-radius: 8px;
          margin: 4px 0;
        }
        .kpl-impressive-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #EA580C 0%, #FF7A00 100%);
          border-radius: 8px;
          box-shadow: 0 0 6px rgba(234, 88, 12, 0.4);
        }
        .kpl-impressive-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #C2410C 0%, #EA580C 100%);
          box-shadow: 0 0 10px rgba(234, 88, 12, 0.7);
        }
        .kpl-impressive-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #EA580C #F1F5F9;
        }

        @keyframes kpl-faq-modal-appear {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

      {/* =========================================================================
          TIER 1: ENTERPRISE VISIBILITY (Header + 6 Feature Cards)
          ========================================================================= */}
      <div
        style={{
          textAlign: 'center',
          maxWidth: '820px',
          margin: '0 auto 32px auto',
          padding: '0 16px',
        }}
      >
        <span
          style={{
            fontSize: '12px',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: '#EA580C',
            display: 'inline-block',
            marginBottom: '10px',
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          Enterprise Visibility
        </span>
        <h2
          style={{
            fontSize: '34px',
            fontWeight: '800',
            color: '#0A1E3F',
            lineHeight: '1.2',
            letterSpacing: '-0.025em',
            margin: '0 0 12px 0',
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          Tracking built for global trade teams
        </h2>
        <p
          style={{
            fontSize: '15px',
            color: '#64748B',
            lineHeight: '1.5',
            margin: '0 auto',
            maxWidth: '680px',
            fontWeight: '400',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          From a single container to thousands of daily references, KPL gives shippers,
          buyers and finance teams one trusted view.
        </p>
      </div>

      {/* 6 Capability Cards Grid */}
      <div className="enterprise-features-grid">
        {features.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                padding: '22px 20px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 2px 10px rgba(15, 23, 42, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow =
                  '0 12px 24px -4px rgba(15, 23, 42, 0.08)';
                e.currentTarget.style.borderColor = '#CBD5E1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(15, 23, 42, 0.03)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: '#FFF5EA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EA580C',
                }}
              >
                <IconComponent size={20} strokeWidth={2.2} />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#0F172A',
                    margin: '0 0 5px 0',
                    letterSpacing: '-0.01em',
                    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#64748B',
                    lineHeight: '1.45',
                    margin: 0,
                    fontWeight: '400',
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          TIER 2: OUR SHIPMENT SERVICES (4 Photo Cards with Orange Buttons)
          ========================================================================= */}
      <div style={{ marginBottom: '28px' }}>
        {/* Header with Orange Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '18px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '18px',
              backgroundColor: '#EA580C',
              borderRadius: '2px',
            }}
          />
          <h2
            style={{
              fontSize: '19px',
              fontWeight: '800',
              color: '#0A1E3F',
              margin: 0,
              letterSpacing: '-0.02em',
              fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            Our Shipment Services
          </h2>
        </div>

        {/* 4 Photo Cards Grid */}
        <div className="shipment-services-grid">
          {services.map((service) => {
            const isHovered = hoveredService === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: isHovered ? '1px solid #CBD5E1' : '1px solid #E2E8F0',
                  boxShadow: isHovered
                    ? '0 12px 28px -4px rgba(15, 23, 42, 0.08), 0 4px 10px -2px rgba(15, 23, 42, 0.04)'
                    : '0 4px 18px rgba(15, 23, 42, 0.04)',
                  transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                }}
              >
                {/* Image Container with Exact Fit & Smooth Corporate Zoom */}
                <div
                  style={{
                    height: '130px',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: '#F8FAFC',
                    borderTopLeftRadius: '13px',
                    borderTopRightRadius: '13px',
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = service.fallbackImage;
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                      transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                  {/* Subtle Professional Bottom Vignette */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(15,23,42,0.18) 100%)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>

                {/* Card Body */}
                <div
                  style={{
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '15px',
                        fontWeight: '700',
                        color: '#0F172A',
                        margin: '0 0 3px 0',
                        letterSpacing: '-0.01em',
                        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '12.5px',
                        color: '#64748B',
                        margin: 0,
                        fontWeight: '400',
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      }}
                    >
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Circular Orange Arrow Action */}
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#EA580C',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      flexShrink: 0,
                      boxShadow: '0 2px 6px rgba(234, 88, 12, 0.35)',
                      transform: isHovered ? 'translateX(2px) scale(1.04)' : 'none',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <ArrowRight size={15} strokeWidth={2.4} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          TIER 3: FREQUENTLY ASKED QUESTIONS & NEED ASSISTANCE BANNER
          ========================================================================= */}
      <div className="bottom-faq-assistance-grid">
        {/* Left Column: Frequently Asked Questions (Core 4 questions, NO bottom button) */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '24px 26px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            {/* FAQ Header with Orange Bar + View All FAQs link (triggers 13 FAQ Modal) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '18px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '4px',
                    height: '18px',
                    backgroundColor: '#EA580C',
                    borderRadius: '2px',
                  }}
                />
                <h2
                  style={{
                    fontSize: '18.5px',
                    fontWeight: '800',
                    color: '#0A1E3F',
                    margin: 0,
                    letterSpacing: '-0.02em',
                    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  }}
                >
                  Frequently Asked Questions
                </h2>
              </div>

              {/* View All FAQs option beside header opening the 13 FAQ Modal */}
              <button
                type="button"
                onClick={() => {
                  setFaqModalSearch('');
                  setFaqModalCategory('all');
                  setModalOpenFaqId(null);
                  setShowFaqModal(true);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#1C5EA8',
                  fontWeight: '700',
                  fontSize: '13px',
                  fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 6px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = 'underline';
                  e.currentTarget.style.color = '#EA580C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = 'none';
                  e.currentTarget.style.color = '#1C5EA8';
                }}
              >
                <span>View All FAQs</span>
                <ArrowRight size={13} strokeWidth={2.4} />
              </button>
            </div>

            {/* Core 4 Accordion List on Main Page */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {primaryFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;

                return (
                  <div
                    key={faq.id}
                    style={{
                      borderRadius: '10px',
                      border: '1px solid #E2E8F0',
                      backgroundColor: isOpen ? '#F8FAFC' : '#FFFFFF',
                      overflow: 'hidden',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => togglePrimaryFaq(faq.id)}
                      style={{
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        padding: '13px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: '700',
                          color: isOpen ? '#EA580C' : '#0F172A',
                          fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                          letterSpacing: '-0.01em',
                          transition: 'color 0.15s ease',
                        }}
                      >
                        {faq.question}
                      </span>

                      <span
                        style={{
                          color: isOpen ? '#EA580C' : '#0F172A',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'transform 0.2s ease',
                          transform: isOpen ? 'rotate(90deg)' : 'none',
                        }}
                      >
                        {isOpen ? (
                          <Minus size={16} strokeWidth={2.5} />
                        ) : (
                          <Plus size={16} strokeWidth={2.5} />
                        )}
                      </span>
                    </button>

                    {/* Expandable Answer */}
                    {isOpen && (
                      <div
                        style={{
                          padding: '0 16px 14px 16px',
                          fontSize: '13px',
                          color: '#64748B',
                          lineHeight: '1.5',
                          fontWeight: '400',
                          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                          borderTop: '1px solid #F1F5F9',
                          paddingTop: '10px',
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Need Assistance? (Seamless Corporate Hero Banner with customer support.png) */}
        <div
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
            padding: '22px 24px 22px 16px',
            minHeight: '230px',
            boxSizing: 'border-box',
          }}
        >
          {/* Right-side Support Specialist Image with Smooth Gradient Alpha Mask (ZERO hard vertical line) */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '75%',
              backgroundImage: `url(${customerSupportImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              maskImage:
                'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 100%)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* Left-side Soft Feather Gradient Overlay: Seamlessly dissolves image into pure white */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 30%, rgba(255, 255, 255, 0.85) 44%, rgba(255, 255, 255, 0.3) 60%, rgba(255, 255, 255, 0) 74%)',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          />

          {/* Left Content Area: Clean Headset Icon, Orange Line, Dual-tone Title & Pill Button */}
          <div
            style={{
              position: 'relative',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              maxWidth: '470px',
              marginLeft: '-4px',
            }}
          >
            {/* Clean Headset + Chat Bubble Icon (Enlarged & Prominent) */}
            <div
              style={{
                width: '78px',
                height: '78px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                position: 'relative',
              }}
            >
              <svg
                width="78"
                height="78"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Headset Arc */}
                <path
                  d="M 17 44 A 23 23 0 0 1 63 44"
                  stroke="#FF5500"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Left Earpiece Cushion */}
                <rect x="10" y="35" width="11" height="24" rx="5.5" fill="#FF5500" />
                {/* Right Earpiece Cushion */}
                <rect x="59" y="35" width="11" height="24" rx="5.5" fill="#FF5500" />
                {/* Microphone Boom */}
                <path
                  d="M 63 53 C 63 67 50 71 38 71"
                  stroke="#FF5500"
                  strokeWidth="4.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="37" cy="71" r="3.6" fill="#FF5500" />
                {/* Chat speech bubble */}
                <path
                  d="M 29 31 C 29 25 34 20.5 40 20.5 C 46 20.5 51 25 51 31 C 51 36.5 46 41 40 41 C 38 41 36.1 40.4 34.6 39.4 L 30 42.5 L 31 37.8 C 29.8 35.8 29 33.5 29 31 Z"
                  fill="#FF5500"
                />
                {/* 3 white dots */}
                <circle cx="35" cy="30.5" r="1.5" fill="#FFFFFF" />
                <circle cx="40" cy="30.5" r="1.5" fill="#FFFFFF" />
                <circle cx="45" cy="30.5" r="1.5" fill="#FFFFFF" />
              </svg>
            </div>

            {/* Vertical Orange Line from Reference */}
            <div
              style={{
                width: '2px',
                height: '56px',
                backgroundColor: '#FF5500',
                borderRadius: '1px',
                flexShrink: 0,
                opacity: 0.9,
              }}
            />

            {/* Text & Action Button */}
            <div>
              {/* Dual-Tone Heading matching Reference */}
              <h3
                style={{
                  fontSize: '26px',
                  fontWeight: '800',
                  margin: '0 0 3px 0',
                  letterSpacing: '-0.025em',
                  lineHeight: '1.15',
                  fontFamily:
                    "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                <span style={{ color: '#0F172A' }}>Need </span>
                <span style={{ color: '#FF5500' }}>Assistance?</span>
              </h3>

              {/* Subtitle matching Reference */}
              <p
                style={{
                  fontSize: '14.5px',
                  color: '#1E293B',
                  margin: '0 0 25px 0',
                  fontWeight: '700',
                  lineHeight: '1.35',
                  letterSpacing: '-0.01em',
                  fontFamily:
                    "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                Our support team is here to help you 24/7.
              </p>

              {/* Pill-Shaped Contact Support Button matching Reference without inset line highlight */}
              <button
                type="button"
                onClick={onContactSupport}
                className="kpl-assistance-btn-animated"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'linear-gradient(135deg, #FF5500 0%, #FF6E00 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '10px 24px',
                  fontSize: '14px',
                  fontWeight: '800',
                  fontFamily:
                    "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(255, 85, 0, 0.38)',
                  transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 85, 0, 0.48)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 85, 0, 0.38)';
                }}
              >
                <span>Contact Support</span>
                <span className="kpl-btn-arrow-slide" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <ArrowRight size={15} strokeWidth={2.8} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TOTAL BOX: 13 SHIPMENT FAQ KNOWLEDGE HUB POPUP (REFERENCE: DOCUMENT VAULT)
          ========================================================================= */}
      {showFaqModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(7, 29, 58, 0.72)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '24px 16px',
            boxSizing: 'border-box',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowFaqModal(false);
          }}
        >
          {/* Total Box: Height and width calculated so TOTAL BOX is 100% visible including top search */}
          <div
            className="corporate-faq-total-box"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '880px',
              maxHeight: 'min(92vh, 680px)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 60px -10px rgba(10, 30, 63, 0.4), 0 0 0 1px rgba(226, 232, 240, 0.8)',
              overflow: 'hidden',
              position: 'relative',
              animation: 'kpl-faq-modal-appear 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
              boxSizing: 'border-box',
            }}
          >
            {/* 1. Box Header: Fixed at top, ALWAYS visible */}
            <div
              style={{
                flexShrink: 0,
                padding: '18px 26px',
                borderBottom: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#F8FAFC',
                boxSizing: 'border-box',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <HelpCircle size={22} color="#EA580C" strokeWidth={2.4} />
                  <h3
                    style={{
                      fontSize: '19px',
                      fontWeight: '800',
                      color: '#0A1E3F',
                      margin: 0,
                      fontFamily:
                        "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    }}
                  >
                    Shipment Tracking & Operations FAQ
                  </h3>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '800',
                      backgroundColor: '#FFF7ED',
                      border: '1px solid #FED7AA',
                      color: '#EA580C',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    13 Questions
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#64748B',
                    marginTop: '3px',
                    fontFamily:
                      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  }}
                >
                  Official knowledge base for shippers, buyers, and enterprise logistics teams.
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowFaqModal(false)}
                title="Close FAQ Hub"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#64748B',
                  flexShrink: 0,
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F1F5F9';
                  e.currentTarget.style.color = '#0F172A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#64748B';
                }}
              >
                <X size={18} strokeWidth={2.4} />
              </button>
            </div>

            {/* 2. Top Controls Bar: Search + Category Filters (Fixed at top, ALWAYS visible) */}
            <div
              style={{
                flexShrink: 0,
                padding: '14px 26px',
                borderBottom: '1px solid #F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                flexWrap: 'wrap',
                backgroundColor: '#FFFFFF',
                boxSizing: 'border-box',
              }}
            >
              {/* Search input with search icon & clear option */}
              <div
                style={{
                  position: 'relative',
                  flex: '1 1 240px',
                }}
              >
                <Search
                  size={16}
                  color="#94A3B8"
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                  }}
                />
                <input
                  type="text"
                  placeholder="Search FAQ by topic, container, customs, demurrage..."
                  value={faqModalSearch}
                  onChange={(e) => setFaqModalSearch(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 34px 8px 36px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13.5px',
                    fontFamily:
                      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.15s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#EA580C';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#CBD5E1';
                  }}
                />
                {faqModalSearch && (
                  <button
                    type="button"
                    onClick={() => setFaqModalSearch('')}
                    title="Clear search"
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      color: '#94A3B8',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {/* Category Filter Pills (Exact count verified per category button) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                {categoryTabs.map((cat) => (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => {
                      setFaqModalCategory(cat.key);
                      setFaqModalSearch('');
                      setModalOpenFaqId(null);
                    }}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border:
                        faqModalCategory === cat.key
                          ? '1px solid #EA580C'
                          : '1px solid #E2E8F0',
                      backgroundColor:
                        faqModalCategory === cat.key ? '#FFF7ED' : '#FFFFFF',
                      color: faqModalCategory === cat.key ? '#EA580C' : '#64748B',
                      fontSize: '12px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      fontFamily:
                        "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (faqModalCategory !== cat.key) {
                        e.currentTarget.style.borderColor = '#CBD5E1';
                        e.currentTarget.style.color = '#0F172A';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (faqModalCategory !== cat.key) {
                        e.currentTarget.style.borderColor = '#E2E8F0';
                        e.currentTarget.style.color = '#64748B';
                      }
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. FAQs Accordion List: Exactly 5 questions visible initially, then scrollbar scrolls to remaining */}
            <div
              className="kpl-impressive-scrollbar"
              style={{
                height: '350px',
                maxHeight: '350px',
                overflowY: 'auto',
                overflowX: 'hidden',
                padding: '16px 26px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                backgroundColor: '#FFFFFF',
                boxSizing: 'border-box',
              }}
            >
              {filteredModalFaqs.length === 0 ? (
                <div
                  style={{
                    padding: '40px 20px',
                    textAlign: 'center',
                    color: '#64748B',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <p style={{ margin: '0 0 10px 0', fontWeight: '600' }}>No matching questions found.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setFaqModalSearch('');
                      setFaqModalCategory('all');
                      setModalOpenFaqId(null);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#EA580C',
                      fontWeight: '700',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      fontSize: '13px',
                    }}
                  >
                    Reset filters & view all 13 questions
                  </button>
                </div>
              ) : (
                filteredModalFaqs.map((faq, index) => {
                  const isOpen = modalOpenFaqId === faq.id;

                  return (
                    <div
                      key={faq.id}
                      style={{
                        flexShrink: 0,
                        borderRadius: '10px',
                        border: isOpen ? '1px solid #FED7AA' : '1px solid #E2E8F0',
                        backgroundColor: isOpen ? '#FFFBF7' : '#F8FAFC',
                        overflow: 'hidden',
                        transition: 'all 0.18s ease',
                        boxSizing: 'border-box',
                      }}
                    >
                      {/* Accordion Trigger Row: Clean top alignment, flexible text, zero overlap */}
                      <button
                        type="button"
                        onClick={() => toggleModalFaq(faq.id)}
                        style={{
                          width: '100%',
                          background: 'none',
                          border: 'none',
                          padding: '14px 18px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          gap: '14px',
                          cursor: 'pointer',
                          textAlign: 'left',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            flex: 1,
                            minWidth: 0,
                          }}
                        >
                          <span
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              backgroundColor: isOpen ? '#EA580C' : '#E2E8F0',
                              color: isOpen ? '#FFFFFF' : '#64748B',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '11px',
                              fontWeight: '800',
                              flexShrink: 0,
                              marginTop: '1px',
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              transition: 'all 0.15s ease',
                            }}
                          >
                            {index + 1}
                          </span>
                          <span
                            style={{
                              flex: 1,
                              minWidth: 0,
                              fontSize: '14.5px',
                              fontWeight: '700',
                              color: isOpen ? '#EA580C' : '#0F172A',
                              fontFamily:
                                "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                              letterSpacing: '-0.01em',
                              lineHeight: '1.45',
                              wordBreak: 'break-word',
                              transition: 'color 0.15s ease',
                            }}
                          >
                            {faq.question}
                          </span>
                        </div>

                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '6px',
                            backgroundColor: isOpen ? '#FFF0E5' : 'transparent',
                            color: isOpen ? '#EA580C' : '#64748B',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            transition: 'transform 0.2s ease, background-color 0.15s ease',
                            transform: isOpen ? 'rotate(90deg)' : 'none',
                          }}
                        >
                          {isOpen ? (
                            <Minus size={16} strokeWidth={2.6} />
                          ) : (
                            <Plus size={16} strokeWidth={2.6} />
                          )}
                        </div>
                      </button>

                      {/* Expandable Answer Card: Clean inset callout, zero collision */}
                      {isOpen && (
                        <div
                          style={{
                            padding: '0 18px 16px 18px',
                            boxSizing: 'border-box',
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: '#FFFFFF',
                              borderRadius: '8px',
                              border: '1px solid #FED7AA',
                              borderLeft: '4px solid #EA580C',
                              padding: '12px 16px',
                              fontSize: '13.5px',
                              color: '#334155',
                              lineHeight: '1.6',
                              fontWeight: '400',
                              fontFamily:
                                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                              wordBreak: 'break-word',
                            }}
                          >
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* 4. Box Footer: Fixed at bottom, ALWAYS visible */}
            <div
              style={{
                flexShrink: 0,
                padding: '16px 28px',
                borderTop: '1px solid #E2E8F0',
                backgroundColor: '#F8FAFC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  color: '#64748B',
                  fontFamily:
                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                Still have questions? Our 24/7 Operations Desk is standing by.
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => {
                    setShowFaqModal(false);
                    if (onContactSupport) onContactSupport();
                  }}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#EA580C',
                    border: 'none',
                    borderRadius: '6px',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '700',
                    fontFamily:
                      "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(234, 88, 12, 0.3)',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#C2410C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#EA580C';
                  }}
                >
                  Contact Support
                </button>

                <button
                  type="button"
                  onClick={() => setShowFaqModal(false)}
                  style={{
                    padding: '8px 18px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #CBD5E1',
                    borderRadius: '6px',
                    color: '#0F172A',
                    fontSize: '13px',
                    fontWeight: '700',
                    fontFamily:
                      "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F1F5F9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                  }}
                >
                  Close FAQ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
