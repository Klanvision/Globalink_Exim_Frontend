const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const config = require('./config');
const requestLogger = require('./middleware/logger');
const { notFoundHandler, globalErrorHandler } = require('./middleware/errorHandler');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

// Security & utility middlewares
app.use(helmet());
app.use(cors({
  origin: config.clientOrigin,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// API Routes
app.use('/api', apiRoutes);

// Base Root Route
app.get('/', (req, res) => {
  res.json({
    name: config.appName,
    version: config.apiVersion,
    environment: config.nodeEnv,
    documentation: '/api/health',
  });
});

// Error handling middleware
app.use(notFoundHandler);
app.use(globalErrorHandler);

// Start Express Server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(` 🚀 Server is running in [${config.nodeEnv}] mode`);
  console.log(` 📡 Listening on port: http://localhost:${PORT}`);
  console.log(` 🔗 API Health check: http://localhost:${PORT}/api/health`);
  console.log(`==================================================`);
});

module.exports = app;
