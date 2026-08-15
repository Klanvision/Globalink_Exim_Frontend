import React, { useState, useEffect } from 'react';
import { Menu, Activity, Bell, Search } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { Button } from '../common/Button';
import { fetchHealthStatus } from '../../services/api';

export const Navbar = ({ onToggleMobileSidebar, activeTab }) => {
  const [apiStatus, setApiStatus] = useState('checking');

  useEffect(() => {
    const checkBackend = async () => {
      const res = await fetchHealthStatus();
      setApiStatus(res && res.success ? 'online' : 'offline');
    };
    checkBackend();
    const interval = setInterval(checkBackend, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Button variant="icon" onClick={onToggleMobileSidebar} className="mobile-only" aria-label="Toggle Navigation">
          <Menu size={20} />
        </Button>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '700', textTransform: 'capitalize' }}>
            {activeTab} Overview
          </h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Real-time Import & Export Operations
          </p>
        </div>
      </div>

      <div className="navbar-right">
        {/* Backend API Connection Indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.4rem 0.85rem',
          borderRadius: 'var(--radius-full)',
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border-color)',
          fontSize: '0.8rem',
          fontWeight: '600'
        }}>
          <Activity size={14} color={apiStatus === 'online' ? '#10b981' : '#f43f5e'} />
          <span style={{ color: apiStatus === 'online' ? 'var(--accent-emerald)' : 'var(--accent-rose)' }}>
            API: {apiStatus === 'online' ? 'Connected' : 'Offline'}
          </span>
        </div>

        <ThemeToggle />
        <Button variant="icon" aria-label="Notifications">
          <Bell size={20} />
        </Button>
      </div>
    </header>
  );
};
