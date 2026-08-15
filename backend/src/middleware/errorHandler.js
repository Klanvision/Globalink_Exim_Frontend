const { sendError } = require('../utils/response');

const notFoundHandler = (req, res, next) => {
  return sendError(res, `Route not found: ${req.originalUrl}`, null, 404);
};

const globalErrorHandler = (err, req, res, next) => {
  console.error('Unhandled Error:', err);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return sendError(res, message, process.env.NODE_ENV === 'development' ? err.stack : null, statusCode);
};

module.exports = {
  notFoundHandler,
  globalErrorHandler,
};
