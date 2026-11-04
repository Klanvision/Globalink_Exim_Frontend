import { useLoading } from '../context/LoadingContext';
import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { BusinessGlobalCTA } from '../components/businessglobal/BusinessGlobalCTA';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';

export const BusinessGlobal = ({ onNavigate }) => {
  const { isLoading } = useLoading();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div
      className="business-global-page-root"
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '100vh',
        background: '#02132F',
        position: 'relative',
        boxShadow: '0 0 40px rgba(0,0,0,0.35)',
        overflowX: 'clip',
      }}
    >
      {/* 1. Shared Global Link Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="business-global"
        onNavigate={onNavigate}
      />

      <main style={{ padding: '20px 0 40px 0' }}>
        <BusinessGlobalCTA
          loading={isLoading}
          onQuoteClick={() => openModal('quote')}
          onTradeClick={() => openModal('quote')}
          onPartnerClick={() => openModal('quote')}
        />
      </main>

      {/* 3. Shared Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Interactive Modal */}
      <TrackModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultType={modalType}
      />
    </div>
  );
};
