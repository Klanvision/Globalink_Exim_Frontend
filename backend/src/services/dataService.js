/**
 * Mock Data Service representing database records for import & export operations
 */

const mockMetrics = {
  totalShipments: 1428,
  activeImports: 612,
  activeExports: 816,
  totalRevenue: 2489000,
  growthRate: 14.8,
  serverStatus: 'Operational',
  uptimeSeconds: process.uptime(),
};

const mockItems = [
  { id: 'EXP-1092', type: 'Export', title: 'High-grade Semiconductor Components', destination: 'Tokyo, JP', status: 'In Transit', value: '$450,000', date: '2026-08-14' },
  { id: 'IMP-8821', type: 'Import', title: 'Organic Arabica Coffee Beans', destination: 'Rotterdam, NL', status: 'Delivered', value: '$120,000', date: '2026-08-13' },
  { id: 'EXP-1093', type: 'Export', title: 'Precision Medical Imaging Units', destination: 'Munich, DE', status: 'Customs Clearance', value: '$890,000', date: '2026-08-12' },
  { id: 'IMP-8822', type: 'Import', title: 'Industrial Lithium-Ion Battery Packs', destination: 'Seoul, KR', status: 'In Transit', value: '$340,000', date: '2026-08-11' },
  { id: 'EXP-1094', type: 'Export', title: 'Automotive Precision Engine Modules', destination: 'Detroit, US', status: 'Pending Approval', value: '$680,000', date: '2026-08-10' },
  { id: 'IMP-8823', type: 'Import', title: 'Raw Optical Fiber Cables', destination: 'London, UK', status: 'Delivered', value: '$210,000', date: '2026-08-09' }
];

const getSystemMetrics = () => {
  return {
    ...mockMetrics,
    uptimeSeconds: Math.floor(process.uptime()),
    lastPing: new Date().toISOString(),
  };
};

const getShipments = () => {
  return mockItems;
};

const addShipment = (newItem) => {
  const item = {
    id: `${newItem.type === 'Export' ? 'EXP' : 'IMP'}-${Math.floor(1000 + Math.random() * 9000)}`,
    title: newItem.title || 'Standard Freight Item',
    type: newItem.type || 'Import',
    destination: newItem.destination || 'Global Port',
    status: newItem.status || 'Pending Approval',
    value: newItem.value || '$100,000',
    date: new Date().toISOString().split('T')[0],
  };
  mockItems.unshift(item);
  return item;
};

module.exports = {
  getSystemMetrics,
  getShipments,
  addShipment,
};
