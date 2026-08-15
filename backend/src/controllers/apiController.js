const config = require('../config');
const { sendSuccess, sendError } = require('../utils/response');
const { getSystemMetrics, getShipments, addShipment } = require('../services/dataService');

const getHealthStatus = (req, res) => {
  return sendSuccess(res, 'System is healthy and operational', {
    status: 'online',
    appName: config.appName,
    version: config.apiVersion,
    environment: config.nodeEnv,
    timestamp: new Date().toISOString(),
  });
};

const getDashboardMetrics = (req, res) => {
  try {
    const metrics = getSystemMetrics();
    return sendSuccess(res, 'Dashboard metrics retrieved successfully', metrics);
  } catch (error) {
    return sendError(res, 'Failed to fetch dashboard metrics', error);
  }
};

const getShipmentsList = (req, res) => {
  try {
    const shipments = getShipments();
    return sendSuccess(res, 'Shipments data retrieved successfully', shipments);
  } catch (error) {
    return sendError(res, 'Failed to fetch shipments list', error);
  }
};

const createShipment = (req, res) => {
  try {
    const { title, type, destination, status, value } = req.body;
    if (!title) {
      return sendError(res, 'Title is required to create a shipment record', null, 400);
    }
    const created = addShipment({ title, type, destination, status, value });
    return sendSuccess(res, 'New shipment created successfully', created, 201);
  } catch (error) {
    return sendError(res, 'Failed to create shipment record', error);
  }
};

module.exports = {
  getHealthStatus,
  getDashboardMetrics,
  getShipmentsList,
  createShipment,
};
