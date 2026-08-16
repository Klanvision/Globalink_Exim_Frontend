import React from 'react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Server, Database, Key, Save } from 'lucide-react';

export const Settings = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800' }}>System & API Settings</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Configure Node.js server connections, endpoints, and portal preferences
        </p>
      </div>

      <Card header={<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}><Server size={18} /> Express API Configuration</div>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>
              Backend Base Endpoint URL
            </label>
            <input
              type="text"
              readOnly
              value="http://localhost:5000/api"
              style={{
                width: '100%',
                padding: '0.65rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontFamily: 'monospace'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>
              Environment Mode
            </label>
            <input
              type="text"
              readOnly
              value="development"
              style={{
                width: '100%',
                padding: '0.65rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)'
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
            <Button variant="primary" icon={Save}>
              Save Preferences
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
