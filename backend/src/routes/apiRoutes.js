const express = require('express');
const router = express.Router();
const {
  getHealthStatus,
  getDashboardMetrics,
  getShipmentsList,
  createShipment,
} = require('../controllers/apiController');

router.get('/health', getHealthStatus);
router.get('/metrics', getDashboardMetrics);
router.get('/shipments', getShipmentsList);
router.post('/shipments', createShipment);

module.exports = router;
