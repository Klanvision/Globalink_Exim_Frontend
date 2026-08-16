import React, { useState } from 'react';
import { Search, Filter, ArrowUpRight, ArrowDownLeft, Eye } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const DataGrid = ({ items = [], onSelectShipment }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || item.type === filterType;
    return matchesSearch && matchesType;
  });

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Delivered':
        return 'success';
      case 'In Transit':
        return 'info';
      case 'Customs Clearance':
        return 'warning';
      default:
        return 'info';
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem'
      }}>
        <div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: '700' }}>Recent Shipments</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Real-time track and manage import/export freight items
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {/* Search Input */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Search size={16} style={{ position: 'absolute', left: '0.75rem', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search shipment ID, title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '0.55rem 0.75rem 0.55rem 2.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                outline: 'none',
                fontSize: '0.85rem',
                width: '220px'
              }}
            />
          </div>

          {/* Filter Options */}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            style={{
              padding: '0.55rem 0.75rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              outline: 'none',
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            <option value="All">All Freight Types</option>
            <option value="Import">Imports</option>
            <option value="Export">Exports</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Title / Cargo</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Value</th>
              <th>Date</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <tr key={item.id}>
                  <td style={{ fontWeight: '700', fontFamily: 'monospace' }}>{item.id}</td>
                  <td>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontWeight: '600',
                      color: item.type === 'Export' ? 'var(--accent-blue)' : 'var(--accent-purple)'
                    }}>
                      {item.type === 'Export' ? <ArrowUpRight size={14} /> : <ArrowDownLeft size={14} />}
                      {item.type}
                    </span>
                  </td>
                  <td style={{ fontWeight: '600' }}>{item.title}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{item.destination}</td>
                  <td>
                    <Badge variant={getStatusVariant(item.status)}>
                      {item.status}
                    </Badge>
                  </td>
                  <td style={{ fontWeight: '700' }}>{item.value}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{item.date}</td>
                  <td style={{ textAlign: 'right' }}>
                    <Button variant="icon" onClick={() => onSelectShipment(item)} title="View Details">
                      <Eye size={16} />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-secondary)' }}>
                  No shipments matching your criteria found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
