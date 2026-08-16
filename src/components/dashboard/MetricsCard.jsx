import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const MetricsCard = ({ title, value, icon: Icon, change, isPositive, trendText }) => {
  return (
    <div className="metric-card">
      <div className="metric-header">
        <span className="metric-title">{title}</span>
        <div className="metric-icon">
          <Icon size={20} />
        </div>
      </div>
      <div className="metric-value">{value}</div>
      <div className="metric-footer">
        {change && (
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.15rem',
            color: isPositive ? 'var(--accent-emerald)' : 'var(--accent-rose)',
            fontWeight: '600'
          }}>
            {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
            {change}
          </span>
        )}
        <span>{trendText || 'vs previous month'}</span>
      </div>
    </div>
  );
};
