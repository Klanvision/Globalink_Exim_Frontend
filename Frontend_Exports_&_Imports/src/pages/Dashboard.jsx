import React, { useState, useEffect, useCallback } from 'react';
import { Package, ArrowUpRight, ArrowDownLeft, DollarSign, RefreshCw, Plus } from 'lucide-react';
import { StatusBanner } from '../components/dashboard/StatusBanner';
import { MetricsCard } from '../components/dashboard/MetricsCard';
import { DataGrid } from '../components/dashboard/DataGrid';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { fetchDashboardMetrics, fetchShipments, createShipmentRecord } from '../services/api';
import { formatCurrency } from '../utils/formatters';

export const Dashboard = () => {
  const [metrics, setMetrics] = useState(null);
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    type: 'Export',
    destination: '',
    status: 'In Transit',
    value: '$250,000',
  });

  const loadData = useCallback(async () => {
    setLoading(true);
    const [metricsRes, shipmentsRes] = await Promise.all([
      fetchDashboardMetrics(),
      fetchShipments(),
    ]);

    if (metricsRes && metricsRes.success) setMetrics(metricsRes.data);
    if (shipmentsRes && shipmentsRes.success) setShipments(shipmentsRes.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title) return;
    const res = await createShipmentRecord(formData);
    if (res && res.success) {
      setIsCreateModalOpen(false);
      setFormData({ title: '', type: 'Export', destination: '', status: 'In Transit', value: '$250,000' });
      loadData();
    }
  };

  return (
    <div>
      {/* Top Banner */}
      <StatusBanner onNewShipmentClick={() => setIsCreateModalOpen(true)} />

      {/* Metrics Row */}
      <div className="grid-metrics">
        <MetricsCard
          title="Total Shipments"
          value={metrics ? metrics.totalShipments.toLocaleString() : '1,428'}
          icon={Package}
          change="+12.4%"
          isPositive={true}
        />
        <MetricsCard
          title="Active Exports"
          value={metrics ? metrics.activeExports.toLocaleString() : '816'}
          icon={ArrowUpRight}
          change="+18.2%"
          isPositive={true}
        />
        <MetricsCard
          title="Active Imports"
          value={metrics ? metrics.activeImports.toLocaleString() : '612'}
          icon={ArrowDownLeft}
          change="-4.1%"
          isPositive={false}
        />
        <MetricsCard
          title="Total Trade Revenue"
          value={metrics ? formatCurrency(metrics.totalRevenue) : '$2,489,000'}
          icon={DollarSign}
          change="+14.8%"
          isPositive={true}
        />
      </div>

      {/* Refresh Bar */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <Button variant="secondary" icon={RefreshCw} onClick={loadData} disabled={loading}>
          {loading ? 'Refreshing API...' : 'Refresh Data'}
        </Button>
      </div>

      {/* Shipments Data Grid */}
      <DataGrid items={shipments} onSelectShipment={(item) => setSelectedShipment(item)} />

      {/* Shipment Details Modal */}
      <Modal
        isOpen={Boolean(selectedShipment)}
        onClose={() => setSelectedShipment(null)}
        title={`Shipment ${selectedShipment?.id}`}
      >
        {selectedShipment && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Cargo Description</span>
              <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>{selectedShipment.title}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Type</span>
                <p style={{ fontWeight: '600' }}>{selectedShipment.type}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Destination</span>
                <p style={{ fontWeight: '600' }}>{selectedShipment.destination}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Declared Value</span>
                <p style={{ fontWeight: '600' }}>{selectedShipment.value}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Date Logged</span>
                <p style={{ fontWeight: '600' }}>{selectedShipment.date}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Create New Shipment Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create New Freight Manifest"
      >
        <form onSubmit={handleCreateSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>
              Cargo Title / Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Solar Energy Inverters"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              style={{
                width: '100%',
                padding: '0.65rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>
                Trade Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.65rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
              >
                <option value="Export">Export</option>
                <option value="Import">Import</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>
                Destination / Origin
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Singapore, SG"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.65rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.35rem' }}>
              Value
            </label>
            <input
              type="text"
              required
              placeholder="$500,000"
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              style={{
                width: '100%',
                padding: '0.65rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
            <Button variant="secondary" onClick={() => setIsCreateModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" icon={Plus}>
              Submit Manifest
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
