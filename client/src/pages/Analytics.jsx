import React from 'react';
import { Card } from '../components/common/Card';
import { BarChart3, TrendingUp, Globe2, ShieldAlert } from 'lucide-react';

export const Analytics = () => {
  const tradeRoutes = [
    { route: 'East Asia → North America', volume: '45,200 TEU', share: '38%', growth: '+14%' },
    { route: 'Europe → East Asia', volume: '28,900 TEU', share: '24%', growth: '+9%' },
    { route: 'North America → Europe', volume: '22,400 TEU', share: '19%', growth: '+6%' },
    { route: 'Southeast Asia → Middle East', volume: '18,500 TEU', share: '15%', growth: '+21%' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '800' }}>Trade Analytics & Global Logistics</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Real-time trade flow insights and shipping volume metrics
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        <Card header={<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}><Globe2 size={18} color="var(--accent-blue)" /> Top Global Trade Routes</div>}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {tradeRoutes.map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: i < tradeRoutes.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{r.route}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Volume: {r.volume}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: '700', color: 'var(--accent-blue)' }}>{r.share}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: '600' }}>{r.growth}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card header={<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}><ShieldAlert size={18} color="var(--accent-amber)" /> Customs & Risk Compliance</div>}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.25rem' }}>Automated Duty Calculation</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>99.8% precision score across EU and US customs portals.</div>
            </div>
            <div style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.25rem' }}>Inspection Flag Risk Score</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: '600' }}>Low Risk Index (1.2%)</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
