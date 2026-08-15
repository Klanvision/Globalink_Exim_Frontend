import React from 'react';
import { LayoutDashboard, BarChart3, Settings, Globe, ArrowUpRight, ArrowDownLeft, X } from 'lucide-react';
import { Button } from '../common/Button';

export const Sidebar = ({ activeTab, setActiveTab, isOpen, onCloseMobile }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analytics', label: 'Trade Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {isOpen && (
        <div
          onClick={onCloseMobile}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 45
          }}
          className="mobile-only"
        />
      )}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Globe size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '800', lineHeight: 1.2 }}>PORTAL</h3>
            <span style={{ fontSize: '0.725rem', color: 'var(--text-secondary)' }}>Node + React Stack</span>
          </div>
          <Button
            variant="icon"
            onClick={onCloseMobile}
            className="mobile-only"
            style={{ marginLeft: 'auto' }}
          >
            <X size={18} />
          </Button>
        </div>

        <nav className="sidebar-nav">
          <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', paddingLeft: '0.5rem' }}>
            Main Menu
          </div>
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  onCloseMobile();
                }}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div style={{ padding: '1.25rem', marginTop: 'auto', borderTop: '1px solid var(--border-color)' }}>
          <div style={{
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-color)',
            fontSize: '0.8rem'
          }}>
            <p style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              Import & Export System
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
              Express REST API + React Vite
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
