/**
 * REST API client module connecting React frontend to Node.js Express backend
 */

const API_BASE_URL = '/api';

export const fetchHealthStatus = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) throw new Error('API server unreachable');
    return await response.json();
  } catch (error) {
    console.error('fetchHealthStatus Error:', error);
    return { success: false, message: error.message };
  }
};

export const fetchDashboardMetrics = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/metrics`);
    if (!response.ok) throw new Error('Failed to fetch metrics');
    return await response.json();
  } catch (error) {
    console.error('fetchDashboardMetrics Error:', error);
    return { success: false, message: error.message };
  }
};

export const fetchShipments = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/shipments`);
    if (!response.ok) throw new Error('Failed to fetch shipments list');
    return await response.json();
  } catch (error) {
    console.error('fetchShipments Error:', error);
    return { success: false, message: error.message };
  }
};

export const createShipmentRecord = async (shipmentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/shipments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(shipmentData),
    });
    if (!response.ok) throw new Error('Failed to create shipment record');
    return await response.json();
  } catch (error) {
    console.error('createShipmentRecord Error:', error);
    return { success: false, message: error.message };
  }
};
