const logger = (req, res, next) => {
  console.log(`METHOD:${req.method} URL:${req.url}`);
  next();
};

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Error interno del servidor";

  console.error({ statusCode, message, stack: err.stack });

  res.status(statusCode).json({ error: message });
};

module.exports = { unknownEndpoint, logger, errorHandler };
